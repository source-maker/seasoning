import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { MuiButton } from './MuiButton';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
// export interface IBrothUploadDropzoneProps {
//   name: string;
// }

export default function BrothUploadDropzone() {
  return (
    <Box
      border="1px dashed"
      p={4}
      my={2}
      borderColor="primary.light"
      textAlign="center"
      borderRadius={4}
    >
      <FileUploadOutlinedIcon sx={{ fontSize: 60 }} color="disabled" />
      <Typography variant="h5">Drag and drop files here</Typography>
      <Typography variant="body1" py={2} color="disabled">
        or
      </Typography>
      <MuiButton>Browse Files</MuiButton>
    </Box>
  );
}
