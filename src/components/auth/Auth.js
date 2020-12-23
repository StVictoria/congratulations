import { useState } from "preact/hooks";
import { Form, Field } from "react-final-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import SubmitButton from "../common/Button";
import PasswordField from "../common/PasswordField";
import CustomField from "../common/CustomField";

export default function Auth({ handleSubmit }) {
  const [userValues, setUserValues] = useState({
    login: "",
    password: "",
    showPassword: false,
  });

  const handleUserValuesChange = (prop) => (event) => {
    setUserValues({ ...userValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setUserValues({
      ...userValues,
      showPassword: !userValues.showPassword,
    });
  };

  const renderForm = ({ handleSubmit }) => (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <CustomField
        name="login"
        label="Логин"
        type="email"
        userValues={userValues}
        handleChange={handleUserValuesChange}
      />
      <PasswordField
        userValues={userValues}
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
    </>
  );
}
