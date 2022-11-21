import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from "../../context/AppContext";
import {Box, Button, Typography, Modal, TextField } from '@mui/material'
import api from '../../service/api';

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

export default function BasicModal2({ open, setOpen, handleClose }: any) {

    const { user, setUser } = useContext(AppContext);

    const [inputCreditedUser, setInputCreditedUser] = useState("");
    const [inputCreditedValue, setInputCreditedValue] = useState("");

    const makeNewTransaction = async () => {
        const findCreditedUser = await api.get(`users/${inputCreditedUser}`)

        if (findCreditedUser.data) {
            const body = {
                debitedAccountId: user.accountId,
                creditedAccountId: findCreditedUser.data.accountId,
                value: Number(inputCreditedValue)
            }

            if (inputCreditedUser.length > 3 && inputCreditedValue.length > 0 && Number(inputCreditedValue) > 0 ) {
                const makeTransaction = await api.post('transactions', body);

                console.log(makeTransaction);
                
                
                if (makeTransaction.status === 201) {
                    setUser({ accountId: user.accountId, username: user.username, balance: user.balance - Number(inputCreditedValue)})
                }
            };
        }
        
        setInputCreditedUser("");
        setInputCreditedValue("");
    }

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition={false}
      >
        <Box sx={style}>
        
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <p>Realizar uma nova transaçao:</p>
            <TextField value={inputCreditedUser} label="Informe o usuario que ira receber a transferencia" variant="outlined" color="secondary" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputCreditedUser(e.target.value)  } />
            <TextField value={inputCreditedValue} label="Informe o valor da transferencia" variant="outlined" color="secondary" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputCreditedValue(e.target.value)  } />
            <Button type="button" onClick={() => makeNewTransaction() } >Transferir</Button>
        </div>

        </Box>
      </Modal>
  );
}
