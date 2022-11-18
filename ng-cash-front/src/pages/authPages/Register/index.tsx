import { Grid, Paper, Typography } from "@mui/material";
import { GridContainer, StyledTextField, StyledButton } from "./styles";
import { useNavigate } from "react-router";
import { useState } from "react";
import * as yup from 'yup';
import api from "../../../service/api";


export default function Register() {

  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().min(3).required(),
    password: yup.string().required().matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Deve conter pelo menos: uma letra maiúscula, uma letra minúscula, um número e pelo menos um destes símbolos: #?!@$ %^&*-"
    )
  });

  const onSubmit = async () => {
    try {
      const body = {
        username: inputUsername,
        password: inputPassword,
        balance: 100
      }

      const isValid = await schema.isValid(body)
      .then((valid) => valid)
      .catch(err => err)
      
      if (isValid) {
        await api.post('users', body).then((it) => console.log(it))
      }
      

    } catch (error) {
      
    }
  };
  
  const navigate = useNavigate();
  return (
    <GridContainer container>
      <Paper elevation={3} sx={{ width: '30%' }} >
        <Grid style={{ textAlign: "center", padding: "15px"}}>
          <Typography variant="h4" style={{ fontFamily: 'monospace' }} >NG.PAYments</Typography>
          <Typography variant="h4">Criar uma nova Conta</Typography>
          <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
            <StyledTextField type="text" label="Your Username" variant="outlined" color="secondary" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputUsername(e.target.value)  }  />
            <StyledTextField type="text"label="Your Password" variant="outlined" color="secondary" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputPassword(e.target.value)  } />
          </Grid>
          <Grid style={{ display: 'flex' }}>
          <StyledButton onClick={() => navigate("/") }>Cancelar</StyledButton>
          <StyledButton  onClick={() => onSubmit()} type="button">Criar</StyledButton>
          </Grid>
        </Grid>
      </Paper>
    </GridContainer>
  );
}
