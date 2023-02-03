import { Chip, ChipProps } from '@mui/material';

export interface IBrothChipProps {
  label: string;
  onClick?: () => void;
}

export default function BrothChip(props: ChipProps) {
  return <Chip label={props.label ?? 'label'} onClick={props.onClick} />;
}
