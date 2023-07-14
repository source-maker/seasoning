import { Chip, Typography } from '@mui/material';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';

interface iRadioChip {
  name: string;
  label?: string;
  options: {
    label: string;
    value: string | number | boolean | undefined | any[]; //eslint-disable-line
  }[];
  multiple?: boolean;
}

export function RadioChipGroup({
  name,
  label,
  options,
  multiple = true, // default
}: iRadioChip) {
  const { control, getValues } = useFormContext();
  const { append, remove, replace } = useFieldArray({
    control,
    name: name,
  });

  function handleUpdateStatus(i: number) {
    console.log('selected status:', i);
    const indexFound = findExistingIndex(i);
    if (multiple) {
      indexFound > -1 ? remove(indexFound) : append(options[i]);
    } else {
      indexFound > -1 ? remove(indexFound) : replace(options[i]);
    }
  }

  function findExistingIndex(i: number) {
    const arr = getValues(name);
    if (arr?.constructor === Array) {
      return arr.findIndex(
        (
          option: any // eslint-disable-line @typescript-eslint/no-explicit-any
        ) => option?.value === options[i]?.value
      );
    } else {
      return -1;
    }
  }

  return (
    <>
      <Typography variant="h5" sx={{ display: 'block', mb: '0.625em' }}>
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        render={() => {
          return (
            <>
              {options.map((status, i) => (
                <Chip
                  key={`radio-chip-${
                    status.label
                  }-${status.value?.toString()}-${i}`}
                  label={status.label}
                  onClick={() => handleUpdateStatus(i)}
                  variant={findExistingIndex(i) > -1 ? 'filled' : 'outlined'}
                  sx={{
                    fontSize: '0.8rem',
                    mr: '0.5rem',
                    mb: '0.5rem',
                    height: '2.125rem',
                    borderRadius: '1.063rem',
                    border: '1px solid',
                    borderColor: 'border.dark',
                    '&.MuiChip-filledDefault': {
                      color: 'primary.main',
                      borderColor: 'primary.main',
                      backgroundColor: 'primary.lightest',
                    },
                  }}
                />
              ))}
            </>
          );
        }}
      />
    </>
  );
}
