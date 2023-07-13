import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Pagination,
} from '@mui/material';

import { generateFakerData } from '../../helpers/fakerHelpers';
import BrothImage from '@/components/image/BrothImage';
import { MuiTypography } from '@/components/typography/MuiTypography';
import { limitLength } from '../../helpers/stringHelpers';
import { ChangeEvent, useMemo, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any[] = generateFakerData(
  {
    id: '{{datatype.number(1000000)}}',
    category: '{{commerce.department}}',
    title: '{{commerce.productName}}',
    description: '{{commerce.productDescription}}',
    date: '{{date.past}}',
  },
  10,
  15
);

export default function PaginationBasicExample() {
  const pageSize = 6; // define items per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPageCount = Math.ceil(data.length / pageSize);

  // determine which items to display
  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  // handle page change
  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2} my={2} alignItems="stretch">
        {currentData.map((item) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            key={item.id}
            sx={{ display: 'flex' }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <BrothImage
                alt={item.category}
                layout="intrinsic"
                objectFit={'cover'}
                width="900"
                height="400"
              />
              <CardContent>
                <MuiTypography gutterBottom variant="h6" baseline>
                  {item.title}
                </MuiTypography>

                <MuiTypography variant="body2" color="text.secondary">
                  {limitLength(item.description, 50)}
                </MuiTypography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Pagination count={totalPageCount} onChange={handlePageChange} />
    </Container>
  );
}
