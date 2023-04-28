import Image from "next/image"
import mexicanFlag from '../assets/mexicanFLag.svg'
import mexicanDance from '../assets/mexicanDance.jpg'
import message from '../assets/message.svg'
import handle from '../assets/handle.svg'
import send from '../assets/send.svg'

export default function Application(){


  return (
    <div className="bg-light-blue w-full h-full">
      <div className="flex"> 
        <h2 className="mt-[38px] ml-[96px] font-['nunito'] text-[30px] font-bold">resimex</h2>
        <Image src={mexicanFlag} alt="mexican flag" className="mt-[38px] ml-[15px] w-[35px]" />
      </div>
        <div className="flex-col text-center w-[585px] m-auto mt-[72px]">
          <h2 className="font-['nunito'] font-bold text-[32px] text-dark-blue leading-9">Get your Mexican Residence!</h2>
        </div>
        <div className="bg-blue w-[28px] h-[7px] mt-[13px] m-auto"></div>
        <div className="mt-[21px] font-['mulish'] text-center text-[16px] h-[120px] w-[516px] leading-5 font-light m-auto">
        <p>Lifestyle choices vary, which is why we take the time to learn about your individual situation and requirements.</p>

        <p className="mt-5">We’ll assist you from start to finish, ensuring you have the insight and knowledge needed to succeed.</p>
        </div>
        <div className="z-30 relative flex shadow-[0_4px_4px_rgba(0,0,0,0.15)] rounded-[10px] w-[540px] bg-white h-[416px] m-auto">
            <div className="relative font-['nunito'] font-bold text-[32px] text-dark-blue flex-col h-[416px] w-[50px] text-center ml-[34px]">
              <div className="mt-[46px] w-[49px] flex items-center justify-center h-[49px] rounded-full bg-light-blue m-auto">1</div>
              <div className="absolute w-[2px] h-[200px] bg-light-blue left-[23px]"></div>
              <div className="relative mt-[59px] w-[49px] flex items-center justify-center h-[49px] rounded-full bg-light-blue m-auto">2</div>
              <div className="relative mt-[81px] w-[49px] flex items-center justify-center h-[49px] rounded-full bg-light-blue m-auto">3</div>
            </div>
            <div className="flex-col">
            <div className="w-[388px] h-[83px] mt-[53px] ml-[29px]">
              <div className="w-[267px] h-[30px] font-bold text-[22px] not-italic leading-[30px] font-['nunito']">
                <h3>Your personal information</h3>
              </div>
              <div className="mt-[13px] w-[388px] h-[40px] font-light text-[16px] leading-[20px] font-['mulish'] not-italic">
                <p>Your basic personal information help us to offert the better option to your case</p>
              </div>
            </div>
            <div className="w-[388px] h-[83px] ml-[29px] mt-[28px]">
                <div className="w-[191px] h-[30px] font-bold font-['nunito'] text-[22px] not-italic leading-[30px]">
                  <h3>Up documentation</h3>
                </div>
                <div className="w-[388px] h-[40px] mt-[13px] font-['mulish'] text-[16px] leading-[20px] not-italic font-light">
                  <p>Your basic personal information help us to offert the better option to your case</p>
                </div>
            </div>
            <div className="w-[388px] h-[83px] mt-[44px] ml-[29px]">
              <div className="font-bold not-italic text-[22px] font-['nunito'] leading-[30px] w-[230px] h-[30px]">
                <h3>Date with our lawyers</h3>
              </div>
              <div className="w-[388px] h-[40px] mt-[13px] leading-5 font-['mulish'] font-light">
                <p>Your basic personal information help us to offert the better option to your case</p>
              </div>
            </div>
        </div>
      </div>
        <div className="bg-light-blue flex w-full z-1 h-[250px]">
            <Image src={mexicanDance} alt='mexican dance' className="z-0 absolute bottom-[-320px] w-full"/>
            <button className="active:bg-dark-blue z-10 w-[344px] h-[55.92px] bg-blue m-auto mt-[67px] rounded-[10px] text-[14px] text-white font-['mulish'] font-bold leading-[18px] not-italic">GET STARTED</button>
        </div>
        <div className="relative flex h-[198px] w-full bg-dark-blue">
            <div className="flex absolute top-20 left-40">
              <div className="w-[55px] h-[55px] bg-white rounded-full flex items-center justify-center">
                <Image src={message} alt='message'/>
              </div>
              <div className="w-[218px] h-[55px] flex justify-center items-center">
                <h3 className="font-['mulish'] text-white text-[16px]">contact.forwork@gmail.com</h3>
              </div>
            </div>
            <div className="absolute right-20 h-[237px] w-[237px] bg-white rounded-full bottom-[80px] flex justify-end items-center">
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
  )
}