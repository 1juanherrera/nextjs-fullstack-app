import Head from 'next/head'

interface Ilayout {
  children: React.ReactNode,
  title?: string
}
  
function Layout({ children, title }: Ilayout) {
    return (
      <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <main>
          {children}
        </main>
      </>
    )
}

Layout.defaultProps ={
  title: "Resimex"
}

export default Layout;
