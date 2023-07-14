import { Box, Button as MuiButton } from '@mui/material';
import { useRef } from 'react';
import { useFieldArray } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';

export interface IBrothImageArrayProps {
  name: string;
  control: any; //eslint-disable-line @typescript-eslint/no-explicit-any
  accept?: 'image/*';
}

export function BrothImageArrayButton({
  name,
  control,
}: IBrothImageArrayProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { fields, append, update, remove } = useFieldArray({
    control: control, // control props comes from useForm (optional: if you are using FormContext)
    name: name, // unique name for your Field Array
  });

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    Array.from(e.target.files).forEach((file, i) => {
      const reader = new FileReader();
      const fileIndex = fields.length + i;

      reader.onloadstart = () => {
        append({
          src: null,
          loading: true,
        });
      };

      reader.onloadend = () => {
        update(fileIndex, {
          src: reader.result,
          loading: false,
        });
      };

      reader.onerror = () => {
        remove(i);
      };

      // Read the file as a data URL for previewing in img tag
      reader.readAsDataURL(file);
    });
  }

  return (
    <Box
      onClick={() => {
        fileInputRef?.current?.click();
      }}
    >
      <MuiButton
        variant="outlined"
        sx={{ width: '100%', height: '100%', aspectRatio: '1/1' }}
      >
        <AddIcon fontSize="large" />
      </MuiButton>

      <input
        type="file"
        accept="image/*"
        hidden
        ref={fileInputRef}
        multiple
        onChange={handleFileUpload}
      />
    </Box>
  );
}
