import { Field } from "react-final-form";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default function CustomField({
  name,
  label,
  type,
  login,
  handleChange,
}) {
  return (
    <Grid item xs={12}>
      <Field
        name={name}
        initialValue={login}
        render={({ input }) => (
          <TextField
            {...input}
            required
            fullWidth
            label={label}
            type={type}
            variant="filled"
            value={login}
            onChange={handleChange(`${name}`)}
          />
        )}
      />
    </Grid>
  );
}
