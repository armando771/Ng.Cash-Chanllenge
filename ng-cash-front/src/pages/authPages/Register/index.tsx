import { Grid, Paper, Typography } from "@mui/material";
import { GridContainer, StyledTextField, StyledButton } from "./styles";
import { useNavigate } from "react-router";


export default function Register() {

  const navigate = useNavigate();
  return (
    <GridContainer container>
      <Paper elevation={3} sx={{ width: '30%' }} >
        <Grid style={{ textAlign: "center", padding: "15px"}}>
          <Typography variant="h4">NG.PAY</Typography>
          <Typography variant="h4">Criar uma nova Conta</Typography>
          <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
            <StyledTextField label="Your Username" variant="outlined" color="secondary" />
            <StyledTextField label="Your Password" variant="outlined" color="secondary" />
          </Grid>
          <Grid style={{ display: 'flex' }}>
          <StyledButton onClick={() => navigate("/") }>Cancelar</StyledButton>
          <StyledButton type="button">Criar</StyledButton>
          </Grid>

        </Grid>
      </Paper>
    </GridContainer>
  );
}
