import { useState } from "preact/hooks";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Snowfall from "react-snowfall";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import styles from "./App.module.scss";
import ChristmasIcon from "../assets/icons/santa-claus.svg";
import Auth from "./auth/Auth";
import Registration from "./registration/Registration";
import Profile from "./profile/Profile";
import { THEME } from "../styles/theme";

const session = { login: "login@login", firstName: "Иван", lastName: "Иванов" };

export default function App() {
  const [isAuth, setAuth] = useState(
    JSON.parse(window.localStorage.getItem("session"))
  );

  const handleAuthSubmit = (values) => {
    setAuth(session);
    window.localStorage.setItem("session", JSON.stringify(session));
    values.checkbox &&
      window.localStorage.setItem("isRemember", JSON.stringify(true));
  };

  const handleRegSubmit = (values) =>
    console.log("Зарегистрирован пользователь", values);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={THEME}>
        <BrowserRouter>
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
                <Routes>
                  <Route
                    path="/registration"
                    element={<Registration handleSubmit={handleRegSubmit} />}
                  />
                  <Route
                    path="/auth"
                    element={
                      <Auth handleSubmit={handleAuthSubmit} session={isAuth} />
                    }
                  />
                  <Route
                    path="/profile"
                    element={<Profile session={isAuth} />}
                  />
                  <Route
                    path="*"
                    element={
                      isAuth ? (
                        <Navigate to="/profile" />
                      ) : (
                        <Navigate to="/auth" />
                      )
                    }
                  />
                </Routes>
              </div>
            </Container>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
}
