import React from 'react';
import { useController } from 'react-hook-form';

export const useAutoCompleteTextFieldWithHint = (fieldName, control) => {
  const hint = React.useRef<string | { label: string; value: string | number }>(
    ''
  );
  const { field } = useController({ name: fieldName, control });
  const setValueToThisField = (value) => field.onChange(value);

  const onKeyDown = (event) => {
    if (event.key === 'Tab') {
      if (hint.current) {
        setValueToThisField(hint.current);
        hint.current = '';
        event.preventDefault();
      }
    }
    if (event.key === 'Enter') {
      if (event.nativeEvent.isComposing) {
        event.preventDefault();
        return;
      }
      if (hint.current) {
        hint.current = '';
        // Unfocus and refocus to re-render event.target.
        event.target.blur();
        event.target.focus();
        event.preventDefault();
      }
    }
  };

  const onBlur = () => (hint.current = '');

  return {
    freeSolo: true,
    autoSelect: false,
    hint,
    onKeyDown,
    onBlur,
  };
};
