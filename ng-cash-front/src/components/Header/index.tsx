import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

import { useNavigate } from "react-router-dom";

import { Button, Grid, Typography } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import "../../App.css";

const Header = () => {
  const navigate = useNavigate();
  const [isView, setIsView] = useState(true);

  const { user } = useContext(AppContext);

  const { balance, username } = user;

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Grid container sx={Container}>
      <Grid item sx={ContentName}>
        <Typography variant="h5" style={{ fontFamily: "monospace" }}>
          Olá {username}
        </Typography>
        <Typography variant="h4" style={{ fontFamily: "monospace" }}>
          NG.PAYments
        </Typography>
      </Grid>
      <Grid item sx={ContentActions}>
        <Button
          className="AppButton"
          variant="text"
          color="secondary"
          type="button"
          sx={ButtonView}
          onClick={() => setIsView(!isView)}
        >
          {isView === true ? (
            <VisibilityIcon color="action" />
          ) : (
            <VisibilityOffIcon color="action" />
          )}
        </Button>
        <Typography variant="h6" style={{ margin: "5px" }}>
          Seu Saldo - R$ {isView === true ? balance : "----"}
        </Typography>
        <Button
          className="AppButton"
          color="secondary"
          type="button"
          onClick={() => logOut()}
          style={{ margin: "5px" }}
        >
          Sair
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;

const Container = {
  width: "100%",
  display: "flex",
  margin: "0px 0px 5px 0px",
  background: "white",
  position: "fixed",
  top: "0%",
};

const ContentName = {
  display: "flex",
  width: "50%",
  justifyContent: "space-between",
  paddingLeft: "10px",
};

const ContentActions = {
  display: "flex",
  width: "45%",
  justifyContent: "flex-end",
  alignItems: "center",
};

const ButtonView = {
  margin: "5px",
  textDecoration: "none",
  border: "none",
  outline: "none",
};
