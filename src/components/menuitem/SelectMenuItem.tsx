import { Box, MenuItem, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

function setColor(selected: boolean | null, setGreen = false, setBold = false) {
  if (selected === null) {
    if (setGreen) return 'main.dark';
    if (setBold) return 'font.light';
    return 'font.light';
  }

  if (selected) {
    if (setGreen) return 'secondary.dark';
    else {
      return 'font.light';
    }
  } else {
    return 'font.lightest';
  }
}

interface ISelectMenuItem {
  value?: string | number;
  selected?: boolean | null;
  textLabel?: string;
  moneyLabel?: string;
  onClick?: () => void;
  disabled?: boolean;
}
export function SelectMenuItem({
  value,
  selected = null,
  textLabel,
  moneyLabel,
  onClick,
  disabled = false,
}: ISelectMenuItem) {
  return (
    <MenuItem value={value} onClick={!disabled ? onClick : undefined}>
      <Box display={'flex'} alignItems="center">
        {/* checkmark on selected item */}
        <Box m={1}>
          <CheckIcon
            sx={
              selected ? { color: 'secondary.dark' } : { color: 'border.dark' }
            }
          />
        </Box>
        <div>
          {textLabel && (
            <Typography
              variant="body1"
              color={setColor(selected)}
              sx={selected ? { fontWeight: 700 } : {}}
            >
              {textLabel}
            </Typography>
          )}

          {moneyLabel && (
            <Typography
              variant="h5"
              color={setColor(selected, true, true)}
              sx={{ fontWeight: 700 }}
            >
              {moneyLabel}
            </Typography>
          )}
        </div>
      </Box>
    </MenuItem>
  );
}
