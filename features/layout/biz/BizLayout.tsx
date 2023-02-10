import { BizHeader } from './BizHeader';
import { Box } from '@mui/system';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactElement } from 'react';
import { BizFooter } from './BizFooter';
import { NextPageWithLayout, PageOptions } from 'types/types';

// eslint-disable-next-line import/no-default-export
function Layout({
  children,
  pageOptions,
}: {
  children: React.ReactNode;
  pageOptions?: PageOptions;
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <BizHeader title={pageOptions?.title} />
      <AnimatePresence>
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          key={pageOptions?.title}
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

const bizLayout = (target: NextPageWithLayout, pageOptions?: PageOptions) => {
  target.getLayout = (page: ReactElement) => {
    return <Layout pageOptions={pageOptions}>{page}</Layout>;
  };

  // TIPS: セットしたMetaを_app.tsx上 で Component.options で呼び出して利用できる。
  target.pageOptions = pageOptions;
  return target;
};

// eslint-disable-next-line import/no-default-export
export default bizLayout;
