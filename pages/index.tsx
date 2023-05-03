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
import rectangle from '../assets/rectangle.png'
import fatherAndSon from '../assets/fatherAndSon.png'
import send from '../assets/send.svg'
import arrow from '../assets/arrow.svg'
import bgImage from '../assets/bgImage.jpg'
import message from '../assets/message.svg'

const Page: NextPageWithLayout = () => {
  return (
    <>
    <div className="flex justify-between mb-0 bg-light-blue"> 
            <div className="flex mr-6">
                <h2 className="mt-[38px] ml-[96px] font-['nunito'] text-[30px] font-bold">resimex</h2>
                <Image src={mexicanFlag} alt="mexican flag" className="mt-[38px] ml-[15px] w-[35px]" />
            </div>
                <ul className="font-medium font-['nunito'] flex justify-center items-end w-max leading-6">
                    <li className='mr-[34px] text-lg'>Home</li>
                    <li className='mr-[41px] text-lg'>Testimonies</li>
                    <li className="text-lg">Contacts</li>
                </ul>
            <div className="w-max mr-24 flex justify-center items-end">
                <button className="bg-blue active:bg-dark-blue py-2.5 px-5 w-[167px] h-11 rounded-xl font-['nunito'] text-lg text-white">Get started</button>
            </div>
        </div>
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
        <div className='mt-5 flex bg-light-blue relative pb-[86px]'>
        <Image src={map} alt='map' className='w-[690px]'/>
          <div className="absolute left-[280px] top-0 h-[237px] w-[237px] bg-white rounded-full bottom-[200px] flex justify-end items-center">
                <div className="flex relative justify-center items-start h-[150px] w-[160px] flex-col">
                  <Image src={handle} alt='handle' className="w-4 h-4"/>
                  <h3 className="font-['mulish'] font-medium text-[30px] leading-9 not-italic text-blue">Say,<br />
                  Hello!</h3>
                  <button className="active:bg-dark-gray absolute w-[57px] h-[57px] bg-blue rounded-full flex items-center justify-center bottom-[-30px] left-[90px]">
                <Image src={send} alt='send' className="w-6 h-6 mt-1"/>
              </button>
                </div>
          </div>
          <div className='relative flex justify-center items-center flex-col h-[300px] w-[600px] mt-[50px] ml-[100px]'>
            <h4 className='absolute top-[20px] left-[-190px] font-["mulish"] text-xl'><b>Global citizenship and residency at your fingertips</b><br/>
            Everyone has the opportunity to thrive, no matter<br/> where home is</h4>
            <Image  src={persons} alt='persons' className='absolute bottom-[40px] left-[-190px] w-[400px]'/>
          </div>
      </div>
      </div>
      <div className='flex justify-start items-center h-[500px] w-full bg-white'>
        <Image src={rectangle} alt='rectangle' className='z-10 w-[50%]' />
      </div>
      <div className='mb-[150px] flex justify-center items-center'>
        <Image src={fatherAndSon} alt='father and son' className='mr-[40px]'/>
        <div className='w-[451px]'>
          <div className='w-[384px] h-[105px] font-["nunito"] font-bold text-[32px] leading-[110%] text-dark-blue'>
            <h3>The most valuable investment you may ever make</h3>
          </div>
          <div className='w-[28px] h-[7px] bg-blue mt-[21px] mb-[22px]'></div>
          <div className='font-["mulish"] leading-5 font-light text-base'>
            <p>Resimex is a multidisciplinary firm offering bespoke residence and citizenship solutions in Mexico.</p><br />
            <p>Whether it’s matching you to your ideal investment, Golden Visa program or tax benefit, we help investors successfully uproot their lives and lifestyles.</p>
          </div>
        </div>
      </div>
      <div className='bg-light-gray flex items-start justify-center h-[500px]'>
        <div className='w-[280px] mr-[69px]'>
            <div className='font-["nunito"] mt-[60px] text-[32px] text-dark-blue font-bold'>
              <h3>Seamless service targeting your unique needs</h3>
            </div>
            <div className='w-[28px] h-[7px] mt-[13px] mb-[14px] bg-blue'></div>
            <div className='font-["mulish"] leading-5 font-light text-base'>
              <p>Lifestyle choices vary, which is why we take the time to learn about your individual situation and requirements.</p><br />
              <p>We’ll assist you from start to ﬁnish, ensuring you have the insight and knowledge needed to succeed.</p>
            </div>
        </div>
        <div className='w-[497px] flex justify-center items-center mt-[60px] flex-col h-[396px] bg-white rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.15)]'>
            <div className='w-[68px] h-[65px] rounded-full mb-[14px] bg-[#D9D9D9]'></div>
            <h3 className='font-["nunito"] text-xl mb-[6px] text-dark-blue font-bold not-italic'>Residency programs</h3>
            <div className='w-[28px] h-[7px] mt-[13px] mb-[14px] bg-blue'></div>
            <div className='w-[442px] h-[176px]'>
              <div className='flex justify-center items-center flex-col'>
                <p className='mb-[40px] font-["mulish"] text-base font-light'>Mexican residency safeguards against future instability and opens up a world of opportunities for investors and their families. A Golden Visa permit provides visa-free access to many countries across the globe.
                </p>
                <button className="bg-blue active:bg-dark-blue py-2.5 px-5 w-[167px] h-11 rounded-xl font-['nunito'] text-base text-white">Get started</button>
              </div>
            </div>
        </div>
      </div>
      <div className='bg-light-gray flex justify-center items-center flex-col pb-[40px]'>
          <div className='mb-[13px]'>
            <h1 className='font-["nunito"] pt-[100px] font-bold text-[32px] text-dark-blue'>Why Choose Us</h1>
          </div>
          <div className='w-[28px] h-[7px] mt-[13px] mb-[46px] bg-blue'></div>
          <div className='flex items-center justify-between w-7/12'>
            <div className='flex bg-white justify-center items-center flex-col w-[241px] h-[219px] rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.15)]'>
              <h3 className='font-["nunito"] font-bold text-lg text-dark-blue leading-[110%]'>Speed and Simplicity</h3>
              <div className='w-[190px] h-[100px]'>
                <p className='font-["mulish"] text-center font-light text-base'>Easy, traveler-friendly application process. Simple and much less complicated than dealing with foreign governments.</p>
              </div>
            </div>
            <div className='w-[241px] bg-white flex justify-center flex-col items-center h-[219px] rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.15)]'>
              <h3 className='font-["nunito"] font-bold text-lg text-dark-blue leading-[110%]'>Secure and Safe</h3>
              <div className='w-[190px] h-[120px]'>
              <p className='font-["mulish"] text-center font-light text-base'>World-class data centers and state-of-the-art security. Your credit card information will never be exposed to any government websites!</p>
              </div>
            </div>
            <div className='w-[241px] bg-white flex justify-center flex-col items-center h-[219px] rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.15)]'>
              <h3 className='font-["nunito"] font-bold text-lg text-dark-blue leading-[110%]'>Secure and Safe</h3>
              <div className='w-[190px] h-[120px]'>
                <p className='font-["mulish"] text-center font-light text-base'>Our customer support is ready to help 24/7. We want you to enjoy your travels and avoid the stress of getting a residence!</p>
              </div>
            </div>
          </div>
      </div>
      <div className='flex justify-end items-center pb-[38px] p-5 bg-light-gray pr-20'>
          <button className='active:bg-gray bg-white rounded-full w-8 h-8 flex justify-center items-center mr-3'>
            <Image src={arrow} alt='back to top'/>
          </button>
          <p className='font-normal text-sm font-["mulish"]'>Back to top</p>
      </div>
      <div className='w-full relative'>
        <Image src={bgImage} alt='background relative z-0 image' className='w-full'/>
        <div className='w-[34.563rem] flex justify-center items-center flex-col bottom-40 left-[500px] absolute z-10 h-[25.625rem] rounded-[18.96px] bg-[#EEEEEE]'>
            <input type="text" placeholder='Your name' className='w-[29.625rem] bg-[#EEEEEE] border-b-2 mb-[50px] border-gray outline-0 text-gray'/>
            <input type="text" placeholder='Your email' className='w-[29.625rem] bg-[#EEEEEE] border-b-2 mb-[50px] border-gray outline-0 text-gray'/>
            <input type="text" placeholder='Your message' className='w-[29.625rem] bg-[#EEEEEE] border-b-2 mb-[50px] border-gray outline-0 text-gray'/>

            <div className='flex justify-start items-start w-[29.625rem]'>
            <button className="bg-blue active:bg-dark-blue py-2.5 px-5 flex justify-center items-center w-[250px] h-[61px] rounded-xl font-['nunito'] text-lg text-white">
              <Image src={send} alt='enviar'/>
              <h3 className='ml-3'>Get started</h3>
              </button>
            </div>
        </div>
      </div>

      <div className="relative mb-0 flex h-[198px] w-full bg-dark-blue">
            <div className="hidden md:flex absolute top-20 left-40">
              <div className="w-[55px] h-[55px] bg-white rounded-full flex items-center justify-center">
                <Image src={message} alt='message'/>
              </div>
              <div className="w-[218px] h-[55px] flex justify-center items-center">
                <h3 className="font-['mulish'] text-white text-[16px]">contact.forwork@gmail.com</h3>
              </div>
            </div>
            <div className="absolute right-20 h-[237px] w-[237px] bg-white rounded-full bottom-[80px] hidden md:flex justify-end items-center">
              <div className="flex justify-center items-start h-[150px] w-[160px] flex-col">
                <Image src={handle} alt='handle' className="w-4 h-4"/>
                <h3 className="font-['mulish'] font-medium text-[30px] leading-9 not-italic text-blue">Say,<br />
                Hello!</h3>
              </div>
              <button className="active:bg-dark-gray absolute w-[57px] h-[57px] bg-blue rounded-full flex items-center justify-center bottom-[20px]">
                <Image src={send} alt='send' className="w-6 h-6 mt-1"/>
              </button>
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