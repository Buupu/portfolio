import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import '@fontsource/quicksand';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: '#ffffff',
        bg: '#181818'
      }
    }
  },
  fonts: {
    heading: 'Quicksand',
    body: 'Quicksand'
  },
  colors: {
    bg: '#181818',
    primary: '#FE6220'
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
