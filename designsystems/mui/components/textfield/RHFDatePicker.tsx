import {
  Controller,
  ControllerProps,
  FieldValues,
  Path,
} from 'react-hook-form';
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

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

export function RHFDatePicker<T extends FieldValues = never>({
  validation = {},
  type,
  required,
  name,
  defaultValue,
  control,
  InputProps,
  minDate,
  maxDate,
  disableFuture = false,
  ...rest
}: TextFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={validation}
      render={({
        field: { value, onChange, onBlur, name, ref },
        fieldState: { invalid, error },
      }) => {
        return (
          <>
            <DatePicker
              value={value}
              label={' '}
              onChange={(e) => {
                console.log('updating date:', dayjs(e).format('YYYY-MM-DD'));
                onChange(dayjs(e).format('YYYY-MM-DD'));
              }}
              disableFuture={disableFuture}
              minDate={minDate}
              inputFormat="yyyy年MM月dd日"
              mask="____年__月__日"
              toolbarTitle="誕生日"
              toolbarFormat="yyyy年MM月dd日"
              maxDate={maxDate}
              renderInput={(params) => (
                <MuiTextField
                  {...params}
                  id={name}
                  name={name}
                  required={required}
                  inputRef={ref}
                  type={type}
                  onBlur={onBlur}
                  error={invalid}
                  autoComplete="username"
                  helperText={error ? error?.message : ''}
                  InputProps={InputProps}
                  {...rest} //sxとか
                />
              )}
            />
          </>
        );
      }}
    />
  );
}
