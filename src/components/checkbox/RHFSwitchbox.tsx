import {
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Switch,
  SxProps,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { TaggableInputLabel } from '../inputlabel/TaggableInputLabel';

interface ICheckBoxFieldProps {
  name: string;
  control: any; //eslint-disable-line @typescript-eslint/no-explicit-any
  label: string | React.ReactNode;
  defaultChecked?: boolean;
  sx?: SxProps;
  formGroupSx?: SxProps;
  disabled?: boolean;
  inputLabel?: string;
  // customize incoming value to render
  renderValue?: (value: any) => any; //eslint-disable-line @typescript-eslint/no-explicit-any
  // customize value before submission
  customizeValue?: (value: any) => any; //eslint-disable-line @typescript-eslint/no-explicit-any
}

export function RHFSwitchbox({
  name,
  control,
  label,
  formGroupSx,
  disabled = false,
  inputLabel,
  renderValue,
  customizeValue,
  ...rest
}: ICheckBoxFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormGroup sx={formGroupSx}>
            {inputLabel && <TaggableInputLabel label={inputLabel} />}
            <FormControlLabel
              label={label}
              control={
                <Switch
                  checked={
                    (renderValue ? renderValue(field.value) : field.value) ||
                    false
                  }
                  onChange={(e) => {
                    // customize value before submission if provided
                    if (customizeValue) {
                      return field.onChange(customizeValue(e.target.checked));
                    } else {
                      return field.onChange(e.target.checked);
                    }
                  }}
                  color="secondary"
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
