import { Grid, Paper, Typography } from "@mui/material";
import { GridContainer, StyledTextField, StyledButton } from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../../../service/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const onSubmitLogin = async () => {
    try {
      const body = {
        username: inputUsername,
        password: inputPassword,
      };

      const login = await api.post("auth", body);

      if (login.status === 200) {
        localStorage.setItem("token", login.data.token);
        localStorage.setItem("username", login.data.user.username);
        localStorage.setItem("accountId", login.data.user.accountId);
        navigate("/Home");
      }
    } catch (error) {}
  };

  return (
    <GridContainer container>
      <Paper elevation={3} sx={{ width: "30%" }}>
        <Grid sx={Content}>
          <Typography variant="h4" style={{ fontFamily: "monospace" }}>
            NG.PAYments
          </Typography>
          <Grid item sx={InputContainer}>
            <StyledTextField
              type="text"
              label="Your Username"
              variant="outlined"
              color="secondary"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputUsername(e.target.value)
              }
            />
            <StyledTextField
              type="password"
              label="Your Password"
              variant="outlined"
              color="secondary"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputPassword(e.target.value)
              }
            />
          </Grid>
          <StyledButton
            className="AppButton"
            onClick={() => onSubmitLogin()}
            type="button"
          >
            Login
          </StyledButton>
          <Typography variant="h6">Não tem uma conta?</Typography>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/Register"
          >
            Criar uma conta
          </Link>
        </Grid>
      </Paper>
    </GridContainer>
  );
}

const InputContainer = {
  display: "flex",
  flexDirection: "column",
};

const Content = {
  textAlign: "center",
  padding: "15px",
};
