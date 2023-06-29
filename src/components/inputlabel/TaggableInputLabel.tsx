import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export interface ITaggableInputLabelProps {
  label: string;
  required?: boolean;
}

export function TaggableInputLabel({
  label,
  required,
}: ITaggableInputLabelProps) {
  return (
    <Box display="flex" alignItems="center">
      <Typography variant="h5">{label}</Typography>
      {required && (
        <Typography
          sx={{
            ml: '0.5rem',
            backgroundColor: 'red',
            color: '#D72F3C',
            p: '0.125rem 0.5rem',
            borderRadius: '0.125rem',
            textAlign: 'center',
            fontSize: '0.75em',
            background:
              'linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), #D72F3C;',
            fontWeight: '700',
          }}
        >
          必須
        </Typography>
      )}
    </Box>
  );
}
