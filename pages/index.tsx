import type { ReactElement } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'
import Image from "next/image"
import ourTeam from '../assets/ourTeam.svg'
import you from '../assets/You.svg'
import map from '../assets/map.svg'
import handle from '../assets/handle.svg'
import persons from '../assets/persons.png'
import mexicanFlag from '../assets/mexicanFLag.svg'

const Page: NextPageWithLayout = () => {
  return (
    <>
    {/* <div className="flex border justify-between mb-0 bg-light-blue"> 
            <div className="flex mr-6">
                <h2 className="mt-[38px] ml-[96px] font-['nunito'] text-[30px] font-bold">resimex</h2>
                <Image src={mexicanFlag} alt="mexican flag" className="mt-[38px] ml-[15px] w-[35px]" />
            </div>
                <ul className="font-medium font-['nunito'] text-base flex justify-center items-end w-max leading-6">
                    <li className='mr-[34px]'>Home</li>
                    <li className='mr-[41px]'>Testimonies</li>
                    <li>Contacts</li>
                </ul>
            <div className="w-max mr-24 flex justify-center items-end">
                <button className="bg-blue active:bg-dark-blue py-2.5 px-5 w-[167px] h-11 rounded-xl">Get started</button>
            </div> 
    </div> */}
      <div className='w-full h-screen bg-light-blue'>
        <div className='h-80 flex font-["nunito"] text-7xl justify-center items-center'>
              <p className='ml-24 mr-5 mt-10 origin-center rotate-[30deg]'>We</p>
              <p className='mr-4 mt-10 origin-bottom -rotate-[14deg]'>love to</p>
              <p className='mr-3 origin-center mt-10 rotate-[20deg]'>help you!</p>
        </div>
        <div className='flex justify-between'>
            <Image src={ourTeam} alt='our team' className='ml-[34rem]'/>
            <Image src={you} alt='you' className='mr-[32rem]'/>
        </div>
        <div className='mt-5 flex bg-light-blue relative'>
        <Image src={map} alt='map' className='w-[690px]'/>
          <div className="absolute left-[280px] top-0 h-[237px] w-[237px] bg-white rounded-full bottom-[200px] flex justify-end items-center">
                <div className="flex justify-center items-start h-[150px] w-[160px] flex-col">
                  <Image src={handle} alt='handle' className="w-4 h-4"/>
                  <h3 className="font-['mulish'] font-medium text-[30px] leading-9 not-italic text-blue">Say,<br />
                  Hello!</h3>
                </div>
          </div>
          <div className='relative flex justify-center items-center flex-col h-[300px] w-[600px] mt-[50px] ml-[100px]'>
            <h4 className='absolute top-[20px] left-[-190px] font-["mulish"] text-xl'><b>Global citizenship and residency at your fingertips</b><br/>
            Everyone has the opportunity to thrive, no matter<br/> where home is</h4>
            <Image  src={persons} alt='persons' className='absolute bottom-[40px] left-[-190px] w-[400px]'/>
          </div>
      </div>
      </div>
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