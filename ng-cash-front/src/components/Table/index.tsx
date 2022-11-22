import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function TableTransactions({ transactions }: any) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">De: </TableCell>
            <TableCell align="center">Para: </TableCell>
            <TableCell align="center">Valor da Transação: </TableCell>
            <TableCell align="center">Data da Transação: </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction: any) => (
            <TableRow key={transaction.id}>
              <TableCell component="th" scope="row" align="center">
                {transaction.accountsDeb.users.username}
              </TableCell>
              <TableCell align="center">
                {transaction.accountsCred.users.username}
              </TableCell>
              <TableCell align="center">{transaction.value}</TableCell>
              <TableCell align="center">{transaction.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
