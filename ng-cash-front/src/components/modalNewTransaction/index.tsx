import React, { useState, useContext } from 'react';
import { AppContext } from "../../context/AppContext";
import {Box, Button, Typography, Modal, TextField } from '@mui/material'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, setOpen, handleClose }: any) {

    const { user } = useContext(AppContext);

    const [inputCreditedUser, setInputCreditedUser] = useState("");
    const [inputCreditedValue, setInputCreditedValue] = useState("");

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <p>Realizar uma nova transaçao:</p>
            <TextField label="Informe o usuario que ira receber a transferencia" variant="outlined" color="secondary" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputCreditedUser(e.target.value)  } />
            <TextField label="Informe o valor da transferencia" variant="outlined" color="secondary" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputCreditedValue(e.target.value)  } />
            <Button type="button">Transferir</Button>
        </div>

        </Box>
      </Modal>
  );
}
