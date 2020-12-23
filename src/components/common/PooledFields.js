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
      {fieldsValues.map((field) => (
        <Grid item xs={12} sm={6}>
          <Field
            name={field.name}
            initialValue={
              field.name === "firstName"
                ? userValues.firstName
                : userValues.lastName
            }
            render={({ input }) => (
              <TextField
                {...input}
                required
                fullWidth
                label={field.label}
                variant="filled"
                value={
                  field.name === "firstName"
                    ? userValues.firstName
                    : userValues.lastName
                }
                onChange={handleChange(`${field.name}`)}
              />
            )}
          />
        </Grid>
      ))}
    </>
  );
}
