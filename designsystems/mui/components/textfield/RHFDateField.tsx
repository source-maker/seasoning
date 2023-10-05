import {
  Controller,
  ControllerProps,
  FieldValues,
  Path,
} from 'react-hook-form';
import {
  Box,
  FormHelperText,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import { PatternFormat, PatternFormatProps } from 'react-number-format';
import React from 'react';

export interface TextFieldProps<T> extends Omit<MuiTextFieldProps, 'name'> {
  validation?: ControllerProps['rules'];
  name: Path<T> | string;
  control?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  defaultValue?: any; //eslint-disable-line @typescript-eslint/no-explicit-any
  type?: string;
  InputProps?: MuiTextFieldProps['InputProps'];
  minDate?: any; //eslint-disable-line @typescript-eslint/no-explicit-any
  maxDate?: any; //eslint-disable-line @typescript-eslint/no-explicit-any
  disableFuture?: boolean;
}

const dateFormatSet = {
  year: { format: '#### 年' },
  month: { format: '## 月' },
  date: { format: '## 日' },
};

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const PatternFormatDate = React.forwardRef<PatternFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, name, ...other } = props;
    const type = name.split('-')[name.split('-').length - 1];
    const { format } = dateFormatSet[type];

    return (
      <PatternFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        valueIsNumericString
        format={format}
        mask="_"
        allowEmptyFormatting={true}
      />
    );
  }
);

export function RHFDateField<T extends FieldValues = never>({
  validation = {},
  type,
  required,
  name,
  defaultValue,
  control,
  InputProps,
  ...rest
}: TextFieldProps<T>) {
  let year = '';
  let month = '';
  let date = '';

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{
        required: required ? '必須項目です。' : false,
        pattern: {
          value: /^\d{4}\-(0[1-9]|1[1,2])\-(0[1-9]|[12][0-9]|3[01])$|null/,
          message: '不正なフォーマットです。',
        },
        ...validation,
      }}
      render={({ field, fieldState: { invalid, error } }) => {
        return (
          <>
            <Box sx={{ display: 'flex', gap: '4px' }}>
              <Box width="85px">
                <MuiTextField
                  {...field}
                  id={`${name}-year`}
                  name={`${name}-year`}
                  value={year}
                  required={required}
                  type={type}
                  onChange={(event) => {
                    year = event.target?.value;
                    if (!event.target?.value && !month && !date) {
                      field.onChange(null);
                      return;
                    }
                    field.onChange(`${event.target?.value}-${month}-${date}`);
                  }}
                  error={invalid}
                  InputProps={{
                    ...InputProps,
                    inputComponent: PatternFormatDate as never,
                  }}
                  {...rest} //sxとか
                />
              </Box>
              <Box width="70px">
                <MuiTextField
                  {...field}
                  id={`${name}-month`}
                  name={`${name}-month`}
                  value={month}
                  required={required}
                  type={type}
                  onChange={(event) => {
                    month = event.target?.value;
                    if (!event.target?.value && !year && !date) {
                      field.onChange(null);
                      return;
                    }
                    field.onChange(`${year}-${event.target?.value}-${date}`);
                  }}
                  error={invalid}
                  InputProps={{
                    ...InputProps,
                    inputComponent: PatternFormatDate as never,
                  }}
                  {...rest} //sxとか
                />
              </Box>
              <Box width="70px">
                <MuiTextField
                  {...field}
                  id={`${name}-date`}
                  name={`${name}-date`}
                  value={date}
                  required={required}
                  type={type}
                  onChange={(event) => {
                    date = event.target?.value;
                    if (!event.target?.value && !year && !month) {
                      field.onChange(null);
                      return;
                    }
                    field.onChange(`${year}-${month}-${event.target?.value}`);
                  }}
                  error={invalid}
                  InputProps={{
                    ...InputProps,
                    inputComponent: PatternFormatDate as never,
                  }}
                  {...rest} //sxとか
                />
              </Box>
            </Box>
            <FormHelperText error sx={{ paddingLeft: '4px' }}>
              {error ? error?.message : ''}
            </FormHelperText>
          </>
        );
      }}
    />
  );
}
