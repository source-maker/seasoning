import React, { forwardRef, Ref } from 'react';
import Link, { LinkProps as NextLinkProps } from 'next/link';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

type LinkRef = HTMLAnchorElement;
type NextLinkPropsExtended = Omit<MuiLinkProps, 'href' | 'classes'> &
  Pick<NextLinkProps, 'href' | 'as' | 'prefetch'>;

const BrothLink = (
  { href, as, prefetch, ...props }: NextLinkProps,
  ref: Ref<LinkRef>
) => (
  <Link href={href} as={as} prefetch={prefetch} passHref>
    <MuiLink ref={ref} {...props} />
  </Link>
);

export default forwardRef<LinkRef, NextLinkPropsExtended>(BrothLink);
