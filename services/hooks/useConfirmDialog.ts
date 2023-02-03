import { useState } from 'react';

export const useConfirmDialog = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };
  return {
    openConfirmDialog: open,
    setOpenConfirmDialog: setOpen,
    handleOpenConfirmDialog: openDialog,
    handleCloseConfirmDialog: closeDialog,
  };
};
