import { Paper, SxProps } from '@mui/material';
import { BrothTypography } from '../typography/BrothTypography';

export interface IBrothDashboardPaperProps {
  title?: string;
  children?: React.ReactNode;
  padding?: number | string;
  sx?: SxProps;
}

export default function BrothDashboardPaper(props: IBrothDashboardPaperProps) {
  const { padding = 2 } = props;
  return (
    <Paper
      sx={{
        p: padding,
        height: '100%',
        ...props.sx,
      }}
    >
      {props?.title && (
        <BrothTypography variant="h6" baseline>
          {props?.title}
        </BrothTypography>
      )}

      {props.children}
    </Paper>
  );
}
