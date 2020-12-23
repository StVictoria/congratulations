import { Field } from "react-final-form";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";

export default function PasswordField({
  userValues,
  handleChange,
  handleShowPassword,
}) {
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Field
      name="password"
      render={({ input }) => (
        <FormControl fullWidth variant="filled" margin="normal">
          <InputLabel htmlFor="password">Пароль</InputLabel>
          <FilledInput
            {...input}
            required
            id="password"
            type={userValues.showPassword ? "text" : "password"}
            value={userValues.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={handleShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {userValues.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      )}
    />
  );
}
