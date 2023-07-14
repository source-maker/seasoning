import React from 'react';
import { FormControl, InputLabel, SelectProps } from '@mui/material';
import { FormHelperText, Select } from '@mui/material';
import { Controller } from 'react-hook-form';

interface iRHFSelect {
  name: string;
  control: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  children?: React.ReactNode;
  renderValue?: (value: any) => React.ReactNode; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export function RHFSelect({
  name,
  control,
  children,
  renderValue,
  label,
  ...reset
}: SelectProps & iRHFSelect) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <FormControl fullWidth error={error ? true : false}>
            <InputLabel>{label}</InputLabel>
            <Select
              {...field}
              label={label}
              value={field.value == null ? '' : field.value}
              renderValue={renderValue}
              {...reset}
            >
              {/* menu items go here */}
              {children}
            </Select>
            <FormHelperText error={true}>
              {error ? error?.message : ''}
            </FormHelperText>
          </FormControl>
        );
      }}
    />
  );
}
