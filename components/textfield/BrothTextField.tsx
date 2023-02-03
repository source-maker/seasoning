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

export interface TextFieldProps<T> extends Omit<MuiTextFieldProps, 'name'> {
  validation?: ControllerProps['rules'];
  name?: Path<T> | string;
  control?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  defaultValue?: any; //eslint-disable-line @typescript-eslint/no-explicit-any
  type?: string;
  InputProps?: MuiTextFieldProps['InputProps'];

  // customize incoming value from form
  renderValue?: (value: any) => any; //eslint-disable-line @typescript-eslint/no-explicit-any
  // customize value before submission
  customizeValue?: (value: any) => any; //eslint-disable-line @typescript-eslint/no-explicit-any
}

// https://zenn.dev/mistolteen/articles/81fc5236c21ba4#textinput
// Tにschemaを指定する事で、nameを制限する
export function BrothTextField<T extends FieldValues = never>({
  validation = {},
  type,
  required,
  name = '',
  defaultValue,
  control,
  InputProps,
  renderValue,
  customizeValue,
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
          <MuiTextField
            id={name}
            name={name}
            value={
              value == null ? '' : renderValue ? renderValue(value) : value
            }
            required={required}
            inputRef={ref}
            type={type}
            onChange={(e) => {
              if (customizeValue) onChange(customizeValue(e.target.value));
              else onChange(e.target.value);
            }}
            onBlur={onBlur}
            error={invalid}
            autoComplete="username"
            helperText={error ? error?.message : ''}
            InputProps={InputProps}
            onWheel={(event) =>
              // prevent scrollwheel from changing input value
              event.currentTarget.querySelector('input')?.blur()
            }
            {...rest} //sxとか
          />
        );
      }}
    />
  );
}
