import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface IListAccordionProps {
  title: React.ReactNode;
  listOnOpen: React.ReactNode;
  listOnClosed: React.ReactNode;
  isDefaultOpen?: boolean;
}

export function ListAccordion({
  title,
  listOnOpen,
  listOnClosed,
  isDefaultOpen = false,
}: IListAccordionProps) {
  const [expanded, setExpanded] = useState<string | false>();

  useEffect(() => {
    setExpanded(isDefaultOpen ? 'panel1' : false);
  }, [isDefaultOpen]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{
          mb: 0,
          borderBottom: 'none',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          expandIcon={<ExpandMoreIcon />}
        >
          {title}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            borderBottom: '1px solid',
            borderColor: 'border.main',
            pl: 0,
            pr: 0,
          }}
        >
          <List>{listOnOpen}</List>
        </AccordionDetails>
      </Accordion>
      {!expanded && (
        <List
          sx={{
            borderLeft: '1px solid',
            borderRight: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'border.main',
            mb: 2,
          }}
        >
          {listOnClosed}
        </List>
      )}
    </>
  );
}
