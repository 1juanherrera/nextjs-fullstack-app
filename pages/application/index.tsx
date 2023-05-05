import Image from "next/image"
import message from '../../assets/message.svg'
import handle from '../../assets/handle.svg'
import send from '../../assets/send.svg'
import mexicanFlag from '../../assets/mexicanFLag.svg'

export default function Application(){


  return (
    <>
      <div className="bg-light-blue m-0 p-0 w-full h-full">
          <div className="flex mb-0"> 
            <h2 className="mt-6 ml-8 sm:mt-10 sm:ml-24 font-['nunito'] text-3xl font-bold">resimex</h2>
            <Image src={mexicanFlag} alt="mexican flag" className="mt-6 sm:mt-10 ml-3.5 w-9" />
          </div>
        <div className="flex-col text-center m-auto pt-20">
          <h2 className="font-['nunito'] font-bold text-3xl text-dark-blue leading-9">Get your Mexican Residence!</h2>
        </div>
        <div className="bg-blue w-7 h-2 mt-3 m-auto"></div>
        <div className="mt-5 font-['mulish'] sm:w-[516px] text-center text-base mb-6 leading-5 font-light m-auto">
        <p>Lifestyle choices vary, which is why we take the time to learn about your individual situation and requirements.</p>

        <p className="mt-5">We’ll assist you from start to finish, ensuring you have the insight and knowledge needed to succeed.</p>
        </div>
        <div className="z-30 relative flex shadow-[0_4px_4px_rgba(0,0,0,0.15)] rounded-xl w-[95%] bg-white sm:w-[540px] h-[416px] m-auto">
            <div className="relative font-['nunito'] font-bold text-[32px] text-dark-blue flex-col w-12 text-center ml-8">
              <div className="mt-12 w-12 flex items-center justify-center h-12 rounded-full bg-light-blue m-auto">1</div>
              <div className="absolute w-0.5 h-52 bg-light-blue left-6"></div>
              <div className="relative mt-14 w-12 flex items-center justify-center h-12 rounded-full bg-light-blue m-auto">2</div>
              <div className="relative mt-20 w-12 flex items-center justify-center h-12 rounded-full bg-light-blue m-auto">3</div>
            </div>
            <div className="flex-col">
            <div className="h-20 mt-14 ml-7">
              <div className="h-8 font-bold text-xl not-italic leading-8 font-['nunito']">
                <h3>Your personal information</h3>
              </div>
              <div className="sm:w-[388px] mt-1 sm:mt-3.5 h-[40px] font-light text-base leading-5 font-['mulish'] not-italic">
                <p>Your basic personal information help us to offert the better option to your case</p>
              </div>
            </div>
            <div className="h-20 ml-7 mt-7">
                <div className="h-7 font-bold font-['nunito'] text-xl not-italic leading-[30px]">
                  <h3>Up documentation</h3>
                </div>
                <div className="sm:w-[388px] h-10 mt-1 sm:mt-3.5 font-['mulish'] text-base leading-5 not-italic font-light">
                  <p>Your basic personal information help us to offert the better option to your case</p>
                </div>
            </div>
            <div className="h-20 mt-11 ml-7">
              <div className="font-bold not-italic text-xl font-['nunito'] leading-7">
                <h3>Date with our lawyers</h3>
              </div>
              <div className="sm:w-[388px] h-10 mt-1 sm:mt-3.5 leading-5 font-['mulish'] font-light">
                <p>Your basic personal information help us to offert the better option to your case</p>
              </div>
            </div>
        </div>
      </div>
        <div className="w-full relative hidden sm:flex z-1 h-80 items-center bg-center justify-center mb-0 background-container">
            <button className="active:bg-dark-blue z-10 w-80 h-14 bg-blue m-auto mt-16 rounded-xl text-sm text-white font-['mulish'] font-bold leading-5 not-italic">GET STARTED</button>
        </div>
        <div className="w-full flex relative mt-10 z-1 h-80 sm:hidden mb-0 background-container-responsive bg-no-repeat">
            <button className="active:bg-dark-blue z-10 w-80 h-14 bg-blue m-auto mt-16 rounded-xl text-sm text-white font-['mulish'] font-bold leading-5 not-italic">GET STARTED</button>
        </div>
        <div className="relative mb-0 flex h-48 w-full bg-dark-blue">
            <div className="hidden md:flex absolute top-20 left-40">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <Image src={message} alt='message'/>
              </div>
              <div className="w-56 h-14 flex justify-center items-center">
                <h3 className="font-['mulish'] text-white text-base">contact.forwork@gmail.com</h3>
              </div>
            </div>
            
        <div className="flex md:hidden justify-between items-center w-full">
        <div className="mb-0 ml-10 flex justify-start items-center h-48 w-full bg-dark-blue">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <Image src={message} alt='message'/>       
              </div>
            </div>
          <div className="mr-7 w-80 text-white font-['nunito']">
              <ul>
                  <li>Terms and condition</li>
                  <li>Privacy polity</li>
                  <li>all right reserved</li>
              </ul> 
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
  </div>
    </>
  )
}