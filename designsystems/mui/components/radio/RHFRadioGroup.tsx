import { RadioGroup, SxProps } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

interface iRHFRadioGroup {
  name: string;
  control: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  children: React.ReactNode;
  sx?: SxProps;
}

export function RHFRadioGroup({ name, control, children, sx }: iRHFRadioGroup) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <RadioGroup
            aria-labelledby={`radiogroup-${name}`}
            name={name}
            sx={sx}
            onChange={(e) => {
              const value = e.target.value;
              if (value) {
                field.onChange(value);
              }
            }}
            value={field.value == null ? '' : field.value}
          >
            {children}
          </RadioGroup>
        );
      }}
    />
  );
}
