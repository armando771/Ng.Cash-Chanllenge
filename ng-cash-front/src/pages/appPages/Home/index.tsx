import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { Button, Grid, Paper, Typography } from "@mui/material";
import api from "../../../service/api";
import Header from "../../../components/Header";
import ModalNewTransaction from "../../../components/modalNewTransaction";
import ModalMyTransactions from "../../../components/modalMyTransactions";

export default function Home() {
  const { user, setUser } = useContext(AppContext);

  const [openModalNewTransaction, setOpenModalNewTransaction] = useState(false);
  const [openModalTransactions, setOpenModalTransactions] = useState(false);

  const [allTransactions, setAllTransactions] = useState([]);

  const handleCloseModalNewTransaction = () =>
    setOpenModalNewTransaction(false);
  const handleCloseModalTransactions = () => setOpenModalTransactions(false);

  useEffect(() => {
    const getAllTransactions = async () => {
      if (user.accountId) {
        const userTransactions = await api.get(
          `transactions/${user.accountId}`
        );
        setAllTransactions(userTransactions.data);
      }
    };
    getAllTransactions();
  }, [user]);

  useEffect(() => {
    const getLoggedUser = async () => {
      const userId = localStorage.getItem("accountId");
      const username = localStorage.getItem("username");

      const getUser = await api.get(`accounts/${userId}`);

      if (getUser.status === 200) {
        const { balance, id } = getUser.data;

        setUser({ username, accountId: id, balance });
      }
    };
    getLoggedUser();
  }, []);

  return (
    <Grid container sx={ContainerStyle}>
      <Header />
      <Grid item sx={ContentStyle}>
        <Paper elevation={3} sx={Paperstyle}>
          <Typography variant="h5">Menu Principal</Typography>
          <Button
            sx={ButtonModal}
            className="AppButton ButtonModal"
            type="button"
            onClick={() => setOpenModalTransactions(true)}
          >
            Minhas Transferencias
          </Button>
          <Button
            sx={ButtonModal}
            className="AppButton ButtonModal"
            type="button"
            onClick={() => setOpenModalNewTransaction(true)}
          >
            Realizar uma transferencia
          </Button>
        </Paper>
      </Grid>
      <ModalNewTransaction
        open={openModalNewTransaction}
        setOpen={setOpenModalNewTransaction}
        handleClose={handleCloseModalNewTransaction}
      />
      <ModalMyTransactions
        open={openModalTransactions}
        setOpen={setOpenModalTransactions}
        handleClose={handleCloseModalTransactions}
        transactions={allTransactions}
      />
    </Grid>
  );
}

const Paperstyle = {
  width: "30%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
};

const ContentStyle = {
  width: "100%",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const ContainerStyle = {
  backgroundImage:
    "url('https://ng.cash/_nuxt/img/banner-landing-page.0bd7f55.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100% !important",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const ButtonModal = {
  margin: "5px",
  width: "80%",
  backgroundColor: "black",
  color: "white",
};
