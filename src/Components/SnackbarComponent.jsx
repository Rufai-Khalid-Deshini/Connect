import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const SnackbarComponent = ({ open, message, severity, handleClose }) => {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }} variant='filled'>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default SnackbarComponent