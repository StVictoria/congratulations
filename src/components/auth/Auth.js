import { Navigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import SubmitButton from "../common/Button";
import PasswordField from "../common/PasswordField";
import CustomField from "../common/CustomField";
import ChangePageButton from "../common/ChangePageButton";

export default function Auth({
  session,
  handleSubmit,
  authValues,
  onSetAuthValues,
}) {
  if (session) {
    return <Navigate to="/profile" />;
  }

  const handleUserValuesChange = (prop) => (event) => {
    onSetAuthValues({ ...authValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    onSetAuthValues({
      ...authValues,
      showPassword: !authValues.showPassword,
    });
  };

  const renderForm = ({ handleSubmit }) => (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <CustomField
        name="login"
        label="Логин"
        type="email"
        userValues={authValues}
        handleChange={handleUserValuesChange}
      />
      <PasswordField
        userValues={authValues}
        handleChange={handleUserValuesChange}
        handleShowPassword={handleClickShowPassword}
      />
      <Field
        name="checkbox"
        type="checkbox"
        render={({ input }) => (
          <FormControlLabel
            {...input}
            label="Запомнить меня"
            control={<Checkbox value="remember" color="primary" />}
          />
        )}
      />

      <SubmitButton name="Войти" />
    </form>
  );

  return (
    <>
      <h1>Вход</h1>
      <Form onSubmit={handleSubmit} render={renderForm} />
      <ChangePageButton preText="Нет аккаунта?" text="Зарегистрироваться" />
    </>
  );
}
