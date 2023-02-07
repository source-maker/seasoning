import { BizHeader } from './BizHeader';
import { Box } from '@mui/system';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactElement } from 'react';
import { BizFooter } from './BizFooter';
import { NextPageWithLayout, PageMeta } from 'types/types';

// eslint-disable-next-line import/no-default-export
function Layout({
  children,
  pageMeta,
}: {
  children: React.ReactNode;
  pageMeta?: PageMeta;
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <BizHeader title={pageMeta?.title} />
      <AnimatePresence>
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          key={pageMeta?.title}
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
      <BizFooter />
    </Box>
  );
}

const bizLayout = (target: NextPageWithLayout, pageMeta?: PageMeta) => {
  target.getLayout = (page: ReactElement) => {
    return <Layout pageMeta={pageMeta}>{page}</Layout>;
  };

  // TIPS: セットしたMetaを_app.tsx上 で Component.options で呼び出して利用できる。
  target.pageMeta = pageMeta;
  return target;
};

// eslint-disable-next-line import/no-default-export
export default bizLayout;
