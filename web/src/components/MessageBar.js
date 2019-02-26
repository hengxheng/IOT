import { IconButton, Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import { SharedMessageBarConsumer } from '../context/SharedMessageBarContext';

const MessageBar = () => (
    <SharedMessageBarConsumer>
      {({ snackbarIsOpen, message, closeSnackbar }) => (
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={snackbarIsOpen}
          autoHideDuration={6000}
          onClose={closeSnackbar}
          message={message}
          action={[
            <IconButton key="close" color="inherit" onClick={closeSnackbar}>
              <Close />
            </IconButton>,
          ]}
        />
      )}
    </SharedMessageBarConsumer>
  );
  
  export default MessageBar;