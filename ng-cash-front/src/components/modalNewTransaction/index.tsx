import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Box, Button, Modal, TextField, Grid, Typography } from "@mui/material";
import api from "../../service/api";
import SnakeBarComponent from "../SnackBar";

export default function BasicModal2({ open, handleClose }: any) {
  const { user, setUser } = useContext(AppContext);

  const [inputCreditedUser, setInputCreditedUser] = useState("");
  const [inputCreditedValue, setInputCreditedValue] = useState("");

  const [openSnackBarSuccess, setOpenSnackBarSuccess] = useState(false);
  const [openSnackBarError, setOpenSnackBarError] = useState(false);

  const handleCloseSnackBar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBarSuccess(false);
    setOpenSnackBarError(false);
  };

  const makeNewTransaction = async () => {
    try {
      const findCreditedUser = await api.get(`users/${inputCreditedUser}`);

      const body = {
        debitedAccountId: user.accountId,
        creditedAccountId: findCreditedUser.data.accountId,
        value: Number(inputCreditedValue),
      };

      if (
        inputCreditedUser.length > 3 &&
        inputCreditedValue.length > 0 &&
        Number(inputCreditedValue) > 0
      ) {
        const makeTransaction = await api.post("transactions", body);

        if (makeTransaction.status === 201 || makeTransaction.status === 200) {
          setOpenSnackBarSuccess(true);
          setUser({
            accountId: user.accountId,
            username: user.username,
            balance: user.balance - Number(inputCreditedValue),
          });
        }
      }

      setInputCreditedUser("");
      setInputCreditedValue("");
    } catch (error) {
      setOpenSnackBarError(true);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition={false}
    >
      <Box sx={BoxStyle}>
        <Grid item sx={Content}>
          <Typography variant="h5">Realizar uma nova transaçao:</Typography>
          <TextField
            sx={Input}
            type="text"
            value={inputCreditedUser}
            label="Informe o usuario que ira receber a transferencia"
            variant="outlined"
            color="secondary"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputCreditedUser(e.target.value)
            }
          />
          <TextField
            sx={Input}
            type="number"
            value={inputCreditedValue}
            label="Informe o valor da transferencia"
            variant="outlined"
            color="secondary"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputCreditedValue(e.target.value)
            }
          />
          <Button
            fullWidth
            sx={ButtonModal}
            className="AppButton ButtonModal"
            type="button"
            onClick={() => makeNewTransaction()}
          >
            Transferir
          </Button>
        </Grid>
        <SnakeBarComponent
          errorMessage="Erro ao realizar Transferencia, revise os dados e tente novamente"
          handleClose={handleCloseSnackBar}
          openSnackBarError={openSnackBarError}
          openSnackBarSuccess={openSnackBarSuccess}
          successMessage="Transferencia bem sucedida"
        />
      </Box>
    </Modal>
  );
}

const Content = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
};

const Input = {
  margin: "5px",
};

const BoxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "55%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ButtonModal = {
  margin: "5px",
  width: "99%",
  backgroundColor: "black",
  color: "white",
};
