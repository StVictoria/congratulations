import { useState } from "preact/hooks";
import { Form } from "react-final-form";
import Grid from "@material-ui/core/Grid";

import SubmitButton from "../common/Button";
import PasswordField from "../common/PasswordField";
import PooledFields from "../common/PooledFields";
import CustomField from "../common/CustomField";

export default function Registration({ handleSubmit }) {
  const [userValues, setUserValues] = useState({
    firstName: "",
    lastName: "",
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
      <Grid container spacing={2}>
        <PooledFields
          userValues={userValues}
          handleChange={handleUserValuesChange}
        />
        <CustomField
          name="login"
          label="Логин"
          type="email"
          userValues={userValues}
          handleChange={handleUserValuesChange}
        />
        <Grid item xs={12}>
          <PasswordField
            userValues={userValues}
            handleChange={handleUserValuesChange}
            handleShowPassword={handleClickShowPassword}
          />
        </Grid>
      </Grid>
      <SubmitButton name="Зарегистрироваться" />
    </form>
  );

  return (
    <>
      <h1>Регистрация</h1>
      <Form onSubmit={handleSubmit} render={renderForm} />
    </>
  );
}
