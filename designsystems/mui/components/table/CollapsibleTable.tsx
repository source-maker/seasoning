import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import { Box, TableProps } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export interface IHeader {
  title: string | React.ReactNode;
  field: string;
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
}

interface ICollapsibleTableProps<TRow> extends TableProps {
  headers: string[] | IHeader[];
  rows: TRow[];
  CollapseInnerComponent?: React.FC<{ rowData: TRow }>;
}

function Row<TRow>(props: {
  row: TRow;
  headers: string[] | IHeader[];
  rowIndex: number;
  tableId: string;
  CollapseInnerComponent?: React.FC<{ rowData: TRow }>;
}) {
  const { row, headers, rowIndex, tableId, CollapseInnerComponent } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > .MuiTableCell-root': { borderBottom: 'unset' } }}>
        <TableCell>
          {CollapseInnerComponent && (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          )}
        </TableCell>
        {headers.map((h, index) => {
          const cellItem = row[h.field];
          return (
            <TableCell
              key={`table-${tableId}-row-${rowIndex}-cell-${index}`}
              align={h.align}
            >
              {cellItem}
            </TableCell>
          );
        })}
      </TableRow>
      <Box
        display="table-row"
        className={open ? 'collapse-inner-open' : 'collapse-inner'}
      >
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={headers.length + 1}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            {CollapseInnerComponent && <CollapseInnerComponent rowData={row} />}
          </Collapse>
        </TableCell>
      </Box>
    </React.Fragment>
  );
}

export function CollapsibleTable<TRow>({
  headers,
  rows,
  CollapseInnerComponent,
  size,
}: ICollapsibleTableProps<TRow>) {
  const tableId = crypto.randomUUID();
  return (
    <Table aria-label="collapsible table" stickyHeader={true} size={size}>
      <TableHead>
        <TableRow>
          <TableCell />
          {headers.map((h, index) => (
            <TableCell key={`table-${tableId}-header-${index}`} align={h.align}>
              {h.title}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <Row<TRow>
            key={`table-${tableId}-row-${index}`}
            row={row}
            headers={headers}
            rowIndex={index}
            tableId={tableId}
            CollapseInnerComponent={CollapseInnerComponent}
          />
        ))}
      </TableBody>
    </Table>
  );
}
