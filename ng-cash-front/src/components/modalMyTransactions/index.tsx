import React, { useEffect, useState, useCallback, useContext, useMemo } from 'react';
import { AppContext } from "../../context/AppContext";

import moment from 'moment'

import {Box, Modal, Typography } from '@mui/material'

import TableTransactions from '../Table';
import FilterRadio from '../FilterRadio';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '3px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransactionsModal({ open, handleClose, transactions }: any) {

  const { user } = useContext(AppContext);

  const [selectedFilter, setSelectedFilter] = useState('');

  const [filteredTransaction, setFilteredTransaction] = useState([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFilter((event.target as HTMLInputElement).value);
  };

  console.log(filteredTransaction)

  useEffect(() => {
  if (selectedFilter === 'debitedAccountId') {
    const firstInTable = transactions.filter((transaction: any) => transaction.debitedAccountId === user.accountId);
    const secondInTable = transactions.filter((transaction: any) => transaction.debitedAccountId !== user.accountId);
    const response = firstInTable.concat(secondInTable);
    setFilteredTransaction(response);
  };

  if (selectedFilter === 'creditedAccountId') {
    const firstInTable = transactions.filter((transaction: any) => transaction.debitedAccountId !== user.accountId);
    const secondInTable = transactions.filter((transaction: any) => transaction.debitedAccountId === user.accountId);
    const response = firstInTable.concat(secondInTable);
    setFilteredTransaction(response);
  };
  }, [selectedFilter])

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
        <Typography variant="h6">Suas Transações:</Typography>

          <FilterRadio selectedFilter={selectedFilter} handleChange={handleChange} />
          {/* <div>

          </div> */}
          <TableTransactions transactions={filteredTransaction.length ? filteredTransaction : transactions} />
        </Box>
      </Modal>
  );
};
