import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import { MoreHoriz } from '@mui/icons-material';
import { Box, Container, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SocialCard from '../../components/card/SocialCard';
import { MuiTypography } from '../../components/typography/MuiTypography';
import BrothImage from '../../components/image/BrothImage';
import RefreshIcon from '@mui/icons-material/Refresh';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { MuiButton } from '../../components/button/MuiButton';

function srcset(image: string, size: number, rows, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=auto&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=auto&fit=crop&auto=format&dpr=2 2x`,
  };
}

export function QuiltedImageList() {
  return (
    <ImageList variant="quilted" cols={4} rowHeight={121}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://fakeimg.pl/350x200/f9fafc/e5e7eb/?text=test&font=noto',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://fakeimg.pl/350x200/f9fafc/e5e7eb/?text=test&font=noto',
    title: 'Basketball',
  },
  {
    img: 'https://fakeimg.pl/350x200/f9fafc/e5e7eb/?text=test&font=noto',
    title: 'Fern',
  },

  {
    img: 'https://fakeimg.pl/350x200/f9fafc/e5e7eb/?text=test&font=noto',
    title: 'Tomato basil',
  },
  {
    img: 'https://fakeimg.pl/350x200/f9fafc/e5e7eb/?text=test&font=noto',
    title: 'Sea star',
  },
];
export default function CardListExample() {
  return (
    <Container maxWidth="md">
      <Box py={2}>
        <Stack spacing={2} direction="column">
          <SocialCard
            username="Kohei Shirakawa"
            subheader="2 hours ago"
            content={
              <>
                <MuiTypography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
                  &apos;Content here, content here&apos;, making it look like
                  readable English.
                </MuiTypography>
                <BrothImage
                  alt="test"
                  layout="responsive"
                  objectFit={'cover'}
                  width="500"
                  height="100"
                  placeholder="blur"
                />
              </>
            }
            topAction={
              <IconButton aria-label="options">
                <MoreHoriz />
              </IconButton>
            }
            bottomAction={
              <Stack direction="row-reverse" sx={{ width: '100%' }}>
                <IconButton aria-label="favorite">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="refresh">
                  <RefreshIcon />
                </IconButton>
                <IconButton aria-label="comment">
                  <ModeCommentIcon />
                </IconButton>
              </Stack>
            }
          />
          <SocialCard
            username="Daisuke Miyazaki"
            subheader="4 hours ago"
            content={
              <>
                <MuiTypography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
                  &apos;Content here, content here&apos;, making it look like
                  readable English.
                </MuiTypography>
                <QuiltedImageList />
              </>
            }
            topAction={
              <IconButton aria-label="options">
                <MoreHoriz />
              </IconButton>
            }
            bottomAction={
              <Stack direction="row-reverse" sx={{ width: '100%' }}>
                <IconButton aria-label="favorite">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="refresh">
                  <RefreshIcon />
                </IconButton>
                <IconButton aria-label="comment">
                  <ModeCommentIcon />
                </IconButton>
              </Stack>
            }
          />
        </Stack>
      </Box>
      <MuiButton fullWidth>Load More</MuiButton>
    </Container>
  );
}
