import React, { useEffect, useContext } from 'react';
import moment from 'moment'

import { AppContext } from "../../context/AppContext"
import api from '../../service/api';


import {Box, Button, Typography, Modal } from '@mui/material'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper   } from '@mui/material'

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

export default function BasicModal({ open, setOpen, handleClose, transactions }: any) {

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {
          transactiosnTable(transactions)
        }
        </Box>
      </Modal>
  );
}

const transactiosnTable = (transactions: any) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">De: </TableCell>
            <TableCell align="center">Para: </TableCell>
            <TableCell align="center">Valor: </TableCell>
            <TableCell align="center">Data da Transação: </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction: any) => (
            <TableRow key={transaction.id}>
              <TableCell component="th" scope="row" align='center'>
                {transaction.debitedAccountId}
              </TableCell>
              <TableCell align="center">{transaction.creditedAccountId}</TableCell>
              <TableCell align="center">{transaction.value}</TableCell>
              <TableCell align="center">{moment(transaction.createdAt).format('YYYY/MM/DD')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
