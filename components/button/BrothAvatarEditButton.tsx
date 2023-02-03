import { Avatar, Badge, Box, FormHelperText } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { Controller, UseFormSetValue } from 'react-hook-form';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export interface IBrothUploadButtonProps {
  name: string;
  control: any; //eslint-disable-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>; //eslint-disable-line @typescript-eslint/no-explicit-any
  accept?: 'image/*';
}

export function BrothAvatarEditButton({
  name,
  control,
  setValue,
}: IBrothUploadButtonProps) {
  const [file, setFile] = useState<File | null>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string>(''); // base64

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    const currentFile = e.target.files[0];
    if (currentFile) {
      setFile(currentFile);
    } else {
      setFile(null);
    }
  }

  useEffect(() => {
    const fileReader: FileReader = new FileReader();
    let isCancel = false;

    if (file) {
      fileReader.onloadend = () => {
        const result = fileReader.result;
        if (result && !isCancel) {
          setPreview(result as string);
          setValue(name, result);
        }
      };
      fileReader.readAsDataURL(file);
    } else {
      setPreview('');
      setValue(name, '');
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]); //eslint-disable-line react-hooks/exhaustive-deps

  const errorStyles = {
    border: 2,
    borderColor: 'error.main',
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange }, fieldState: { error, isDirty } }) => (
        <Box
          onClick={() => {
            fileInputRef?.current?.click();
          }}
          sx={{ my: 2, mx: 'auto', width: 'fit-content' }}
        >
          <Badge
            overlap="circular"
            sx={{ mx: 'auto' }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <Avatar
                alt="Change profile image"
                sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}
              >
                <CameraAltIcon fontSize="small" />
              </Avatar>
            }
          >
            <Avatar
              alt="Profile image"
              src={isDirty ? preview : ''}
              sx={{
                width: 130,
                height: 130,
                ...(error && errorStyles),
              }}
            />
          </Badge>

          <input
            type="file"
            accept="image/*"
            hidden
            ref={fileInputRef}
            onChange={(e) => {
              handleFileUpload(e);
              onChange(e);
            }}
          />
          <FormHelperText error={!!error} sx={{ textAlign: 'center' }}>
            {error?.message}
          </FormHelperText>
        </Box>
      )}
    />
  );
}
