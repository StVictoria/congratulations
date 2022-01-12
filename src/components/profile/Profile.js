import { useState } from "preact/hooks";
import { Form, Field } from "react-final-form";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { ButtonBase } from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

import styles from "./Profile.module.scss";
import CustomDialog from "../dialog/Dialog";
import SubmitButton from "../common/Button";
import PooledFields from "../common/PooledFields";
import CustomField from "../common/CustomField";

export default function Profile({ session }) {
  const [userValues, setUserValues] = useState({
    firstName: session.firstName,
    lastName: session.lastName,
    login: session.login,
    file: "",
    congrats: " ",
  });
  const [remChars, setRemChars] = useState(250);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleUserValuesChange = (prop) => (e) => {
    setUserValues({ ...userValues, [prop]: e.target.value });

    const charsAmount = 250 - e.target.value.length;
    prop === "congrats" && setRemChars(charsAmount);


    console.log('handleUserValuesChange')
  };

  const onFileChange = (e) =>
    setUserValues({
      ...userValues,
      file: URL.createObjectURL(e.target.files[0]),
    });

  const handleSubmit = (values) => {
    values.file = userValues.file;
    const payload = new FormData();
    payload.append("file", values.file);

    setDialogOpen(true);
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
          {userValues.file ? (
            <div
              className={styles.FileContainer}
              style={{
                background: `url(${userValues.file}) center center / contain no-repeat`,
              }}
            />
          ) : (
            <Grid item xs={12}>
              <Field
                name="video"
                render={({ input }) => (
                  <input
                    {...input}
                    accept="image/*"
                    type="file"
                    id="button-file"
                    className={styles.Input}
                    onChange={onFileChange}
                  />
                )}
              />
              <label htmlFor="button-file">
                <ButtonBase
                  variant="outlined"
                  color="default"
                  component="span"
                  className={styles.FileButton}
                >
                  <PhotoCameraIcon className={styles.CameraIcon} />
                  <p>Загрузить видео / изображение</p>
                  <p className={styles.LimitInfo}>Не более 10 Мбайт</p>
                </ButtonBase>
              </label>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Field
          name="congrats"
          initialValue={userValues.userCongrats}
          render={({ input }) => (
            <TextField
              {...input}
              required
              fullWidth
              label={`Поздравление ${remChars}`}
              type="text"
              variant="filled"
              margin="normal"
              multiline={true}
              rows={6}
              value={userValues.userCongrats}
              inputProps={{ maxLength: 250 }}
              onChange={handleUserValuesChange("congrats")}
            />
          )}
        />
      </Grid>
      <SubmitButton name="Сохранить" />
    </form>
  );

  return (
    session && (
      <>
        <h1>Профиль</h1>
        <Form onSubmit={handleSubmit} render={renderForm} />

        <CustomDialog isOpen={isDialogOpen} handleDialogOpen={setDialogOpen} />
      </>
    )
  );
}
