import { BrothButton } from '@/components/button/BrothButton';
import { BrothTypography } from '@/components/typography/BrothTypography';
import {
  ExampleContext,
  ExampleProvider,
} from '@/services/context/ExampleProvider';
import { Box, Stack } from '@mui/material';
import { NextPage } from 'next';
import { useContext } from 'react';

export const LeftComponent = () => {
  const { numberState, colorState } = useContext(ExampleContext);
  const [number, setNumber] = numberState;
  const [color, setColor] = colorState;

  return (
    <Box>
      <BrothTypography variant="h4">Left Component</BrothTypography>
      <BrothTypography>Number: {number}</BrothTypography>
      <Stack spacing={2}>
        <BrothButton
          color={color}
          onClick={() => setNumber((prev) => prev + 1)}
        >
          Increment Number
        </BrothButton>
        <BrothButton
          color={color}
          onClick={() =>
            setColor((prev) => (prev === 'primary' ? 'secondary' : 'primary'))
          }
        >
          Toggle Color
        </BrothButton>
      </Stack>
    </Box>
  );
};
export const RightComponent = () => {
  const { numberState, colorState } = useContext(ExampleContext);
  const [number, setNumber] = numberState;

  const [color, setColor] = colorState;
  return (
    <Box>
      <BrothTypography variant="h4">Right Component</BrothTypography>
      <BrothTypography>Number: {number}</BrothTypography>
      <Stack spacing={2}>
        <BrothButton
          color={color}
          onClick={() => setNumber((prev) => prev + 1)}
        >
          Increment Number
        </BrothButton>
        <BrothButton
          color={color}
          onClick={() =>
            setColor((prev) => (prev === 'primary' ? 'secondary' : 'primary'))
          }
        >
          Toggle Color
        </BrothButton>
      </Stack>
    </Box>
  );
};

const ContextExample: NextPage = () => {
  return (
    <ExampleProvider>
      <Box sx={{ mx: 'auto' }}>
        <BrothTypography variant="h2" textAlign="center">
          ContextAPI Example
        </BrothTypography>
        <BrothTypography textAlign="center">
          This is an example on how you can share state between components by
          using the Context stored in the <code>/services/context</code>{' '}
          directory.
          <br />
          The <code>ExampleProvider</code> is used to wrap all the components
          that you would like to share data between.
          <br />
          Then within each component, import the <code>ExampleContext</code> to
          consume the state values.
        </BrothTypography>

        <Stack
          direction="row"
          spacing={4}
          sx={{ mx: 'auto' }}
          justifyContent="space-evenly"
        >
          <LeftComponent />
          <RightComponent />
        </Stack>
      </Box>
    </ExampleProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default ContextExample;
