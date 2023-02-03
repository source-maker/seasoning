import { PublicHeader } from './PublicHeader';
import { PublicFooter } from './PublicFooter';
import { Box } from '@mui/system';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

export default function Layout({
  children,
}: {
  children: ReactNode & { props: { title: string } };
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <PublicHeader title={children.props.title} />
      <AnimatePresence>
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          key={children?.props?.title}
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            pageExit: {
              backgroundColor: 'white',
              filter: `invert()`,
              opacity: 0,
            },
          }}
        >
          <main style={{ display: 'contents' }}>{children}</main>
        </motion.div>
      </AnimatePresence>
      <PublicFooter />
    </Box>
  );
}
