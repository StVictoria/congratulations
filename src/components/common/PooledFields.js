import { Field } from "react-final-form";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const fieldsValues = [
  { id: 1, name: "firstName", label: "Имя" },
  { id: 2, name: "lastName", label: "Фамилия" },
];

export default function PooledFields({ userValues, handleChange }) {
  return (
    <>
      {fieldsValues.map((field) => {
        const isFirstName = field.name === "firstName";
        return (
          <Grid item xs={12} sm={6}>
            <Field
              name={field.name}
              initialValue={
                isFirstName ? userValues.firstName : userValues.lastName
              }
              render={({ input, meta }) => (
                <TextField
                  {...input}
                  required
                  fullWidth
                  error={(meta.error || meta.submitError) && meta.touched}
                  label={field.label}
                  variant="filled"
                  value={
                    isFirstName ? userValues.firstName : userValues.lastName
                  }
                  onChange={handleChange(`${field.name}`)}
                />
              )}
            />
          </Grid>
        );
      })}
    </>
  );
}
