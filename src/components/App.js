import { useState } from "preact/hooks";
import Snowfall from "react-snowfall";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import styles from "./App.module.scss";
import ChristmasIcon from "../assets/icons/santa-claus.svg";
import Auth from "./auth/Auth";
import Registration from "./registration/Registration";
import Profile from "./profile/Profile";
import ChangePage from "./common/ChangePageButton";
import { THEME } from "../styles/theme";

const session = { login: "login@login", firstName: "Иван", lastName: "Иванов" };

export default function App() {
  const [isAuth, setAuth] = useState(
    JSON.parse(window.localStorage.getItem("session"))
  );
  const [isReg, setReg] = useState(true);

  const handleAuthSubmit = (values) => {
    setAuth(session);
    window.localStorage.setItem("session", JSON.stringify(session));
    values.checkbox &&
      window.localStorage.setItem("isRemember", JSON.stringify(true));
  };

  const handleRegSubmit = (values) =>
    console.log("Зарегистрирован пользователь", values);

  const handleChangeAuthPage = () => setReg(!isReg);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={THEME}>
        <div class={styles.root}>
          <Snowfall />
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={styles.Paper}>
              <img
                src={ChristmasIcon}
                alt="christmas"
                className={styles.Icon}
              />
              {!isAuth && !isReg ? (
                <>
                  <Registration handleSubmit={handleRegSubmit} />
                  <ChangePage
                    preText="Уже есть аккаунт?"
                    text="Войти"
                    handleChangePage={handleChangeAuthPage}
                  />
                </>
              ) : !isAuth && isReg ? (
                <>
                  <Auth handleSubmit={handleAuthSubmit} session={isAuth} />
                  <ChangePage
                    preText="Нет аккаунта?"
                    text="Зарегистрироваться"
                    handleChangePage={handleChangeAuthPage}
                  />
                </>
              ) : (
                <Profile session={isAuth} />
              )}
            </div>
          </Container>
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
}
