import { Control, Controller, ControllerProps } from 'react-hook-form';
import {
  IconButton,
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'name'> {
  validation?: ControllerProps['rules'];
  name: string;
  control: Control<any, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  defaultValue?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export function PasswordInput({
  validation = {},
  required,
  name,
  control,
  defaultValue,
  ...rest
}: TextFieldProps) {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      defaultValue={defaultValue}
      render={({
        field: { value, onChange, onBlur, name },
        fieldState: { invalid, error },
      }) => {
        return (
          <MuiTextField
            id={name}
            name={name}
            value={value}
            required={required}
            type={values.showPassword ? 'text' : 'password'}
            onChange={onChange}
            onBlur={onBlur}
            error={invalid}
            autoComplete="current-password"
            helperText={error ? error?.message : ''}
            {...rest}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        );
      }}
    />
  );
}
