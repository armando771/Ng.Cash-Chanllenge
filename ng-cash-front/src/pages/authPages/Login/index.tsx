import { Grid, Paper, Typography } from "@mui/material";
import { GridContainer, StyledTextField, StyledButton } from "./styles";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <GridContainer container>
      <Paper elevation={3} sx={{ width: '30%' }} >
        <Grid style={{ textAlign: "center", padding: "15px"}}>
          <Typography variant="h4" style={{ fontFamily: 'monospace' }} >NG.PAYments</Typography>
          <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
            <StyledTextField label="Your Username" variant="outlined" color="secondary" />
            <StyledTextField label="Your Password" variant="outlined" color="secondary" />
          </Grid>
            <StyledButton type="button">Login</StyledButton>
            <Typography variant="h6">Não tem uma conta?</Typography>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/Register">Criar uma conta</Link>
        </Grid>
      </Paper>
    </GridContainer>
  );
}
