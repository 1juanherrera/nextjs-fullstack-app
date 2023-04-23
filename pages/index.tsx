import type { ReactElement } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return (
    <>
      <div className="bg-red-300">Hello world</div>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
        {page}
    </Layout>
  )
}

export default Page