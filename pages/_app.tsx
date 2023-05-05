import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@material-tailwind/react";
import "/styles/globals.css";
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(fas);
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}







