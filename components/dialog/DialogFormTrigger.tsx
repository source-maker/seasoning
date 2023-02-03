import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import {
  useState,
  MouseEvent,
  Dispatch,
  SetStateAction,
  ComponentType,
  ReactNode,
} from 'react';
import CloseIcon from '@mui/icons-material/Close';

export interface CustomDialogContentProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  [x: string]: any; //eslint-disable-line
}

interface DialogFormTriggerProps {
  title?: string;
  headerTitle?: string;
  headerAction?: ReactNode;
  children: React.ReactNode;
  CustomDialogContent: ComponentType<CustomDialogContentProps>;
  customDialogContentProps?: any; //eslint-disable-line
}

/*
 * DialogFormTrigger is a wrapper component for dialog content that contain forms.
 * It provides a form context for the dialog content component as well as a reset button.
 */
export function DialogFormTrigger({
  title = '',
  headerTitle = '',
  children,
  CustomDialogContent,
  customDialogContentProps,
}: DialogFormTriggerProps) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = (event: MouseEvent) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = (e: MouseEvent) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <>
      <div onClick={handleClickOpen}>{children}</div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* Dialog Header */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          m="1rem"
        >
          <Box flex={1}>
            <CloseIcon onClick={handleClose} sx={{ color: 'font.lightest' }} />
          </Box>
          <Box flex={1} textAlign="center">
            <Typography>{headerTitle}</Typography>
          </Box>
          <Box flex={1} textAlign="right">
            <a>
              <Typography>Reset</Typography>
            </a>
          </Box>
        </Box>
        {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
        <DialogContent>
          <CustomDialogContent
            setOpen={setOpen}
            props={customDialogContentProps}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
