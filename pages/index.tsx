import { ReactNode } from 'react'
import Layout from '../components/layout'

export default function Page() {
  return (
    <>
     <div className='bg-red-200'>HOME, HELLO WORLD !!!</div> 
    </>
  )
}

Page.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}