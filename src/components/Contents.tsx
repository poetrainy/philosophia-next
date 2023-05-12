import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import Navigation from '@/components/Navigation';
import OriginalSpacer from '@/components/OriginalSpacer';
import Footer from '@/components/Footer';

type Props = {
  path: string | number | undefined;
  component: JSX.Element;
};

const Contents: FC<Props> = ({ path, component }) => {
  return (
    <Box as={'main'}>
      {/* calc((100vw - 3px) / 2) */}
      <OriginalSpacer size={'160px'} />
      <Navigation path={path} />
      <>{component}</>
      <Footer />
    </Box>
  );
};

export default Contents;