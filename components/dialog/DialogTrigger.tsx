import { Box, Dialog, DialogContent, DialogTitle } from '@mui/material';
import {
  useState,
  MouseEvent,
  Dispatch,
  SetStateAction,
  ComponentType,
} from 'react';
import CloseIcon from '@mui/icons-material/Close';

export interface CustomDialogContentProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  [x: string]: any; //eslint-disable-line
}

interface DialogTriggerProps {
  title?: string;
  children: React.ReactNode;
  CustomDialogContent: ComponentType<CustomDialogContentProps>;
  customDialogContentProps?: any; //eslint-disable-line
  headerTitle?: string;
}

export function DialogTrigger({
  title,
  children,
  CustomDialogContent,
  customDialogContentProps,
  headerTitle,
}: DialogTriggerProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = (event: MouseEvent) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
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
        <Box m="1rem" display="flex" justifyContent="space-evenly">
          <Box flex={1} />
          <Box flex={4} textAlign="center">
            {headerTitle}
          </Box>
          <Box flex={1} textAlign="right">
            <CloseIcon onClick={handleClose} sx={{ color: 'font.lightest' }} />
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
