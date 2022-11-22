import { useState } from "react";
import { Alert, Grid, Paper, Snackbar, Stack, Typography } from "@mui/material";
import { GridContainer, StyledTextField, StyledButton } from "./styles";
import { useNavigate } from "react-router";
import api from "../../../service/api";
import SnakeBarComponent from "../../../components/SnackBar";

export default function Register() {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [openSnackBarSuccess, setOpenSnackBarSuccess] = useState(false);
  const [openSnackBarError, setOpenSnackBarError] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBarSuccess(false);
    setOpenSnackBarError(false);
  };

  const onSubmit = async () => {
    try {
      const body = {
        username: inputUsername,
        password: inputPassword,
        balance: 100,
      };

      const response = await api.post("users", body);

      if (response.status === 200 || response.status === 201) {
        setOpenSnackBarSuccess(true);
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (error) {
      console.log(error);

      setOpenSnackBarError(true);
    }
  };

  const navigate = useNavigate();
  return (
    <GridContainer container>
      <Paper elevation={3} sx={{ width: "30%" }}>
        <Grid sx={Content}>
          <Typography variant="h4" style={{ fontFamily: "monospace" }}>
            NG.PAYments
          </Typography>
          <Typography variant="h4">Criar uma nova Conta</Typography>
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
              type="text"
              label="Your Password"
              variant="outlined"
              color="secondary"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputPassword(e.target.value)
              }
            />
          </Grid>
          <Grid style={{ display: "flex" }}>
            <StyledButton className="AppButton" onClick={() => navigate("/")}>
              Cancelar
            </StyledButton>
            <StyledButton
              className="AppButton"
              onClick={() => onSubmit()}
              type="button"
            >
              Criar
            </StyledButton>
          </Grid>
        </Grid>
      </Paper>
      <SnakeBarComponent
        openSnackBarSuccess={openSnackBarSuccess}
        openSnackBarError={openSnackBarError}
        handleClose={handleClose}
        successMessage={"Usuario criado com sucesso"}
        errorMessage={` Erro ao criar usuario, por favor revise seus dados:
           Username: Deve ser maior que 2 caracteres
           Password: Deve conter pelo menos: uma letra maiúscula, uma letra minúscula, um número e pelo menos um destes símbolos: #?!@$ %^&*-
        `}
      />
    </GridContainer>
  );
}

const Content = {
  textAlign: "center",
  padding: "15px",
};

const InputContainer = {
  display: "flex",
  flexDirection: "column",
};
