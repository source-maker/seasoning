import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

// STEP 1: Create Context to be consumed by individual components
const ExampleContext = createContext(
  {} as {
    numberState: [number, Dispatch<SetStateAction<number>>];
    colorState: [
      'primary' | 'secondary',
      Dispatch<SetStateAction<'primary' | 'secondary'>>
    ];
  }
);

// STEP 2: Create Provider to wrap all components that need to share the state
function ExampleProvider({ children }: { children: ReactNode }) {
  // Example 1) state with number type
  const numberState = useState(0);
  // Example 2) state with string union type
  const colorState = useState<'primary' | 'secondary'>('primary');

  return (
    <ExampleContext.Provider
      value={{
        numberState: numberState,
        colorState: colorState,
      }}
    >
      {children}
    </ExampleContext.Provider>
  );
}

// STEP 3: Export the context and provider to be used in other files
export { ExampleContext, ExampleProvider };
