import * as React from 'react';
import {
  Autocomplete,
  AutocompleteInputChangeReason,
  Box,
  TextField,
  Typography,
} from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { VariableSizeList, ListChildComponentProps } from 'react-window';

const LISTBOX_PADDING = 8; // px

function renderRow(props: ListChildComponentProps) {
  const { data, index, style } = props;
  const dataSet = data[index];
  const inlineStyle = {
    ...style,
    top: (style.top as number) + LISTBOX_PADDING,
  };
  return (
    <Typography noWrap style={inlineStyle}>
      {dataSet}
    </Typography>
  );
}

const OuterElementContext = React.createContext({});

// eslint-disable-next-line react/display-name
const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

// Adapter for react-window
const ListboxComponent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLElement>
>(function ListboxComponent(props, ref) {
  const { children, ...other } = props;
  const itemData: React.ReactChild[] = [];
  (children as React.ReactChild[]).forEach(
    (item: React.ReactChild & { children?: React.ReactChild[] }) => {
      itemData.push(item);
    }
  );

  const itemCount = itemData.length;
  const itemSize = 32;

  const getChildSize = () => {
    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          outerElementType={OuterElementType}
          innerElementType="div"
          itemSize={() => getChildSize()}
          overscanCount={20}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

export interface IAutocompleteTextfieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  freeSolo: boolean;
  autoSelect: boolean;
  disabled?: boolean;
  control: Control<FieldValues, any>; //eslint-disable-line @typescript-eslint/no-explicit-any
  options: any[]; //eslint-disable-line @typescript-eslint/no-explicit-any
  hint: React.MutableRefObject<string>;
  startAdornment?: React.ReactElement;
  disableCloseOnSelect?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ListboxComponent?: (props: any, ref: any) => any;
  isOptionEqualToValue: (option: any, value: any) => boolean; //eslint-disable-line @typescript-eslint/no-explicit-any
  renderOption?: (props: any, option: any) => React.ReactNode; //eslint-disable-line @typescript-eslint/no-explicit-any
  getOptionLabel?: (option: any) => string; //eslint-disable-line @typescript-eslint/no-explicit-any
  onInputChange?: (
    event: React.SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => void;
  filterOptions?: (options: Array<unknown>, state: object) => Array<unknown>;
  onKeyDown: (event: React.SyntheticEvent<Element, Event>) => void;
  onBlur: (event: React.SyntheticEvent<Element, Event>) => void;
}

export function AutocompleteTextFieldWithHint({
  name,
  label,
  placeholder,
  freeSolo,
  autoSelect,
  disabled = false,
  control,
  options,
  hint,
  startAdornment,
  disableCloseOnSelect,
  isOptionEqualToValue,
  renderOption,
  getOptionLabel,
  onInputChange,
  filterOptions,
  onKeyDown,
  onBlur,
}: IAutocompleteTextfieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value, ref },
        fieldState: { invalid, error },
      }) => (
        <Autocomplete
          disabled={disabled}
          freeSolo={freeSolo}
          autoSelect={autoSelect}
          id={`${name}-autocomplete`}
          options={options}
          ListboxComponent={ListboxComponent}
          ref={ref}
          value={value || ''}
          getOptionLabel={getOptionLabel}
          isOptionEqualToValue={isOptionEqualToValue}
          renderOption={renderOption}
          ChipProps={{
            sx: {
              backgroundColor: 'white',
              padding: '1rem 0.5rem',
              fontWeight: 500,
              fontSize: '0.8125rem',
              lineHeight: '1rem',
              borderRadius: '3.75rem',
            },
          }}
          /**
           * Additionally, you will need to disable the built-in filtering of the Autocomplete component
           * by overriding the filterOptions prop: filterOptions={(x) => x}
           */
          filterOptions={filterOptions}
          disableCloseOnSelect={disableCloseOnSelect}
          onChange={(_, data) => {
            onChange(data);
          }}
          onInputChange={onInputChange}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          renderInput={(params) => (
            <Box sx={{ position: 'relative' }}>
              <Typography
                sx={{ position: 'absolute', opacity: 0.5, left: 14, top: 16 }}
              >
                {hint.current}
              </Typography>
              <TextField
                {...params}
                value={value || ''}
                label={label}
                disabled={disabled}
                placeholder={placeholder}
                error={invalid}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <>
                      {/* if autocomplete chips exist, hide custom startAdornment */}
                      {!params.InputProps.startAdornment && startAdornment}
                      {params.InputProps.startAdornment}
                    </>
                  ),
                }}
                helperText={error ? error?.message : ''}
                onChange={(e) => {
                  const newValue = e.target.value;
                  onChange(newValue);
                  const matchingOption = options.find((option) => {
                    const optionLabel = option.label ?? option;
                    return optionLabel.startsWith(newValue);
                  });

                  if (newValue && matchingOption) {
                    hint.current = matchingOption.label ?? matchingOption;
                  } else {
                    hint.current = '';
                  }
                }}
              />
            </Box>
          )}
        />
      )}
    />
  );
}
