import { FormControlLabel, Radio } from '@mui/material';
import React from 'react';

interface iRadioLabel {
  value: string;
  label: string;
}

export function RadioLabel({ value, label }: iRadioLabel) {
  return <FormControlLabel value={value} label={label} control={<Radio />} />;
}
