import * as React from 'react';
import {
  Autocomplete,
  AutocompleteInputChangeReason,
  TextField,
} from '@mui/material';
import { SyntheticEvent } from 'react';
import { Controller } from 'react-hook-form';
import { VariableSizeList, ListChildComponentProps } from 'react-window';

function renderRow(props: ListChildComponentProps) {
  const { data, index, style } = props;
  const dataSet = data[index];
  const inlineStyle = {
    ...style,
  };
  return <li style={inlineStyle}>{dataSet}</li>;
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
  const itemSize = 60;

  const getChildSize = () => {
    return itemSize;
  };

  const getHeight = () => {
    return 8 * itemSize;
  };

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight()}
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
  multiple?: boolean;
  freeSolo?: boolean;
  disabled?: boolean;
  control: any; //eslint-disable-line @typescript-eslint/no-explicit-any
  options: any[]; //eslint-disable-line @typescript-eslint/no-explicit-any
  startAdornment?: React.ReactElement;
  disableCloseOnSelect?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ListboxComponent?: (props: any, ref: any) => any;
  isOptionEqualToValue: (option: any, value: any) => boolean; //eslint-disable-line @typescript-eslint/no-explicit-any
  renderOption?: (props: any, option: any) => React.ReactNode; //eslint-disable-line @typescript-eslint/no-explicit-any
  getOptionLabel?: (option: any) => string; //eslint-disable-line @typescript-eslint/no-explicit-any
  onInputChange?: (
    event: SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => void;
}

export function AutocompleteTextfield({
  name,
  label,
  placeholder,
  multiple,
  disabled = false,
  control,
  options,
  startAdornment,
  freeSolo,
  disableCloseOnSelect,
  isOptionEqualToValue,
  renderOption,
  getOptionLabel,
  onInputChange,
}: IAutocompleteTextfieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Autocomplete
          multiple={multiple}
          disabled={disabled}
          freeSolo={freeSolo}
          autoSelect={freeSolo} // if freeSolo, autoSelect should also be true
          id={`${name}-autocomplete`}
          options={options}
          ListboxComponent={ListboxComponent}
          value={value}
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
          filterOptions={(x) => x}
          disableCloseOnSelect={disableCloseOnSelect}
          onChange={(e, data) => {
            onChange(data);
          }}
          onInputChange={onInputChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              disabled={disabled}
              placeholder={placeholder}
              error={error ? true : false}
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
            />
          )}
        />
      )}
    />
  );
}
