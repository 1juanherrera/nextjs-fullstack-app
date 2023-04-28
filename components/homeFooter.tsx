import Image from "next/image"
import message from '../assets/message.svg'
import handle from '../assets/handle.svg'
import send from '../assets//send.svg'

const HomeFooter = () => {
    return (
        <>
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

export default HomeFooter