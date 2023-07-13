import { MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';

export const SelectPagination = ({
  count,
  page,
  onChange,
}: {
  count: number;
  page: number;
  onChange: (page: number) => void;
}) => {
  const handleChange = (event: SelectChangeEvent<number>) => {
    if (typeof event.target.value !== 'number') return;
    onChange(event.target.value);
  };

  return (
    <Stack spacing={3} direction="row">
      <Button
        variant="outlined"
        disabled={page <= 1}
        onClick={() => {
          if (page > 1) onChange(page - 1);
        }}
        sx={{ height: '3rem', width: '5rem', borderRadius: '10px' }}
      >
        Previous
      </Button>

      <Select
        value={page}
        onChange={handleChange}
        sx={{ height: '3rem', flex: 1, textAlign: 'center' }}
      >
        {count > 0 &&
          [...Array(count)].map((_, i) => {
            i++;
            return (
              <MenuItem key={i} value={i}>
                {i}/{count}
              </MenuItem>
            );
          })}
      </Select>

      <Button
        variant="outlined"
        disabled={page >= count}
        onClick={() => {
          if (page < count) onChange(page + 1);
        }}
        sx={{ height: '3rem', width: '5rem', borderRadius: '10px' }}
      >
        Next
      </Button>
    </Stack>
  );
};
