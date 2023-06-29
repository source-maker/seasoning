/**
 * BrothImage - A wrapper around Next.js Image component providing placeholder and lazy loading out of the box
 */
// import { ImageProps } from 'next/future/image';
// import Image from 'next/future/image';

import { Box, SxProps } from '@mui/material';
import Image, { ImageProps } from 'next/image';

export interface IBrothImageProps {
  src?: string;
  placeholderBg?: string;
  placeholderFont?: string;
  sx?: SxProps;
}

export default function BrothImage(
  props: Omit<ImageProps, 'src'> & IBrothImageProps
) {
  // set placeholder if src not provided
  let source = props.src;

  if (!source) {
    source = `https://fakeimg.pl/${props.width ?? 500}x${props.height ?? 500}/${
      props.placeholderBg ?? 'f9fafc'
    }/${props.placeholderFont ?? 'e5e7eb'}${
      props.alt ? `/?text=${props.alt}&font=noto` : '' // noto font needed for japanese characters
    }`;
  }

  // set layout to responsive by default
  // https://dev.to/felixhaeberle/responsive-fix-for-the-next-js-image-component-1351

  return (
    <Box position="relative">
      <Image
        {...props}
        layout={props.layout ?? 'fill'}
        src={source}
        alt={props.alt}
      />
    </Box>
  );
}
