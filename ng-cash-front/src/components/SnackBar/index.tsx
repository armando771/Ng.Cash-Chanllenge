import { Alert, Snackbar, Stack } from '@mui/material'

interface IsnakeBar {
    openSnackBarSuccess: boolean;
    openSnackBarError: boolean;
    handleClose: any;
    errorMessage: string;
    successMessage: string;
}

export default function SnakeBarComponent({ openSnackBarSuccess, handleClose, openSnackBarError, errorMessage, successMessage }: IsnakeBar) {
  return (
    <div>
        <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={openSnackBarSuccess} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {
                successMessage
            }
        </Alert>
        </Snackbar>
      </Stack>

      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={openSnackBarError} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {
                errorMessage
            }
        </Alert>
        </Snackbar>
      </Stack>
    </div>
  )
}
