import { IconButton, Stack, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const SimplePagination = ({
  count,
  page,
  onChange,
}: {
  count: number;
  page: number;
  onChange: (page: number) => void;
}) => {
  return (
    <Stack direction="row" gap={5} alignItems="center">
      <IconButton
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        color="inherit"
        size="small"
      >
        <ArrowBackIosNewIcon sx={{ fontSize: '10px' }} />
      </IconButton>
      <Stack direction="row">
        <Typography
          width="32px"
          textAlign="center"
          color="text.secondary"
          variant="body2"
        >
          {page}
        </Typography>
        <Typography
          width="32px"
          textAlign="center"
          color="text.secondary"
          variant="body2"
        >
          of
        </Typography>
        <Typography
          width="32px"
          textAlign="center"
          color="text.secondary"
          variant="body2"
        >
          {count}
        </Typography>
      </Stack>
      <IconButton
        onClick={() => onChange(page + 1)}
        disabled={page === count}
        color="inherit"
        size="small"
      >
        <ArrowForwardIosIcon sx={{ fontSize: '10px' }} />
      </IconButton>
    </Stack>
  );
};
