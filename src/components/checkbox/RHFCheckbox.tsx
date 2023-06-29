import {
  FormControlLabel,
  FormGroup,
  FormHelperText,
  SxProps,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { Controller } from 'react-hook-form';

interface ICheckBoxFieldProps {
  name: string;
  control: any; //eslint-disable-line @typescript-eslint/no-explicit-any
  label: string | React.ReactNode;
  defaultChecked?: boolean;
  sx?: SxProps; //eslint-disable-line @typescript-eslint/no-explicit-any
  formGroupSx?: SxProps; //eslint-disable-line @typescript-eslint/no-explicit-any
  alignItems?: 'left' | 'center';
  disabled?: boolean;
}

export function RHFCheckbox({
  name,
  control,
  label,
  formGroupSx,
  alignItems = 'center',
  disabled = false,
  ...rest
}: ICheckBoxFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormGroup
            sx={{
              backgroundColor: !disabled ? 'bg.lighter' : 'white',
              alignItems: alignItems,
              ...formGroupSx,
            }}
          >
            <FormControlLabel
              label={label}
              style={{
                marginLeft: '0rem',
              }}
              control={
                <Checkbox
                  checked={field.value || false}
                  onChange={field.onChange}
                  disabled={disabled}
                  {...rest}
                />
              }
            />
            <FormHelperText error={true}>
              {error ? error?.message : ''}
            </FormHelperText>
          </FormGroup>
        </>
      )}
    />
  );
}
