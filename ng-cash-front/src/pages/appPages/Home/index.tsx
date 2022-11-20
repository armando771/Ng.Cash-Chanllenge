import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { Button, Paper, Typography } from "@mui/material";
import api from "../../../service/api";
import Header from "../../../components/Header";
import ModalNewTransaction from "../../../components/modalNewTransaction";
import ModalMyTransactions from '../../../components/modalMyTransactions'

export default function Home() {
  const { user, setUser } = useContext(AppContext);

  const [openModalNewTransaction, setOpenModalNewTransaction] = useState(false);
  const [openModalTransactions, setOpenModalTransactions] = useState(false);

  const handleCloseModalNewTransaction = () => setOpenModalNewTransaction(false);
  const handleCloseModalTransactions = () => setOpenModalTransactions(false);

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
    <div
      style={{
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
      }}
    >
      <Header />
      <section
        style={{
          width: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button type="button" onClick={() => setOpenModalTransactions(true)}>
            Minhas Transferencias
          </Button>
          <Button type="button" onClick={() => setOpenModalNewTransaction(true)}>Realizar uma transferencia</Button>
        </Paper>
      </section>
      <ModalNewTransaction
        open={openModalNewTransaction}
        setOpen={setOpenModalNewTransaction}
        handleClose={handleCloseModalNewTransaction}
      />
      <ModalMyTransactions
        open={openModalTransactions}
        setOpen={setOpenModalTransactions}
        handleClose={handleCloseModalTransactions}
      />
    </div>
  );
}
