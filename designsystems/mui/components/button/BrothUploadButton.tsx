import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { Button, Link } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState, useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Controller, UseFormSetValue } from 'react-hook-form';

export interface IBrothUploadButtonProps {
  name: string;
  control: any; //eslint-disable-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>; //eslint-disable-line @typescript-eslint/no-explicit-any
  accept?: 'image/*';
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function BrothUploadButton({
  name,
  control,
  setValue,
  accept,
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

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <>
          <Button
            component="label"
            variant="outlined"
            sx={{
              marginRight: '1rem',
              borderRadius: '0.25rem',
              borderColor: 'border.light',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'start',
            }}
            onClick={() => {
              if (!file) {
                fileInputRef?.current?.click();
              }
            }}
            startIcon={
              <CloudUploadOutlinedIcon
                sx={{ marginLeft: '0.25em', marginRight: '0.75em' }}
              />
            }
            endIcon={
              file && (
                <CloseIcon
                  sx={{
                    marginLeft: 'auto',
                    color: '#000',
                  }}
                  onClick={() => {
                    if (!fileInputRef.current) return;
                    fileInputRef.current.value = '';
                    setFile(null);
                    setPreview('');
                    setValue(name, null);
                  }}
                />
              )
            }
          >
            <Box sx={{ flexGrow: '1' }}>
              {file ? (
                <Box
                  sx={{
                    marginBottom: '1em',
                    overflowWrap: 'anywhere',
                  }}
                >
                  {file.name}
                </Box>
              ) : (
                <Link pb="1em">画像をお選びください</Link>
              )}

              <div style={{ flexBasis: '100%', height: 0 }}></div>
              {file && preview && (
                <img
                  src={preview}
                  alt="preview"
                  style={{
                    width: '100%',
                  }}
                />
              )}
            </Box>
          </Button>
          <input
            type="file"
            accept={accept}
            hidden
            ref={fileInputRef}
            onChange={handleFileUpload}
          />
        </>
      )}
    />
  );
}
