import * as React from 'react';

export default function VersionText() {
  return <span>{process.env.NEXT_PUBLIC_VERSION}</span>;
}
