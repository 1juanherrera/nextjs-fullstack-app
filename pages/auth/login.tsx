import Image from 'next/image';
import mexicanFlag from '../assets/emojione-v1_flag-for-mexico.png'
import Profile1 from '../assets/image 1.png'
import Profile2 from '../assets/image 2.png'
import Profile3 from '../assets/image 4.png'
import Profile4 from '../assets/image 6.png'
import React, {  useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import "./styles.css";
import 'swiper/swiper-bundle.css';

// import required modules
import { Autoplay, Pagination } from "swiper";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from 'next/link'
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function Login(){
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return <div className='flex flex-row justify-between '>
    <div className='absolute w-40 h-10 left-24 top-9 flex justify-center items-center gap-2.5' >
      <h2 className='font-nunito font-bold text-3xl' >
        resimex
      </h2>
      <Image src={mexicanFlag} alt= 'Mexican flag'/>
    </div>
    {/* form */}
    <div className='relative flex left-60 items-center mt-28 h-screen mr-20'>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" className="text-dark-gray  font-nunito w-72 font-bold text-2xl mb-3 h-8 leading-7">
        Welcome to you Resimex
        </Typography>
        <Typography color="gray" className="font-mulish  font-normal text-base leading-5 text-gray ">
          Log in to your account.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <div className='grid grid-col-2'>
              <h2 className='font-mulish font-semibold text-xs text-dark-gray flex' >Enter your username<p className='text-dark-pink'>*</p></h2>
              <Input size="lg" label="Enter your username" className='font-mulish font-normal text-xs leading-5 text-gray bg-light-gray border-none rounded ' icon={<FontAwesomeIcon  className='text-[#11AF22]' icon={faCheck} />}/>
            </div>
           <div className="relative">
      <div className="grid grid-col-2">
        <h2 className="font-mulish font-semibold text-xs text-dark-gray flex">
          Enter password<p className="text-dark-pink">*</p>
        </h2>
        <Input
          type={showPassword ? "text" : "password"}
          size="lg"
          label="Enter password"
          className="font-mulish font-normal text-xs leading-5 text-gray bg-light-gray border-none rounded pl-10"
        />
      </div>
      <button
        type="button"
        onClick={handleShowPassword}
        className="absolute right-0 top-0 mt-4 mr-4"
      >
        {showPassword ? <HiEyeOff /> : <HiEye />}
      </button>
    </div>
          </div>
          <section className='flex justify-start  mb-10'>
          <Link href="/auth/recover-password" className='text-[#0099E1] underline ml-1.5 text-xs'>Forgot you password?</Link>
          </section>
          <Button className="bg-cyan-600 font-mulish font-bold w-full text-sm leading-5 text-white " >
            LOG IN
          </Button>
          <section className='flex justify-center  mb-10 '>
              <h3 className='font-mulish font-normal text-xs leading-4 text-gray underline mt-5'>Or Don’t have an account? <Link href="/auth/sign-up" className='text-[#0099E1] underline ml-1.5'>Sign up</Link></h3>
          </section>
        </form>
      </Card>
    </div>
       <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="customSwiper w-[450px] !mr-[0px] h-vh"
      >
        <SwiperSlide  >
          <Image src={Profile1} alt='profile 1' className='w-full h-full'
          />
          <h3 className='text-light-blue text-base absolute z-10 left-14 bottom-40 w-80 font-mulish italic font-normal leading-5'>“This product allows you to collaborate, experiment, and test much more effectively and efficiently.”</h3>
          <h2 className='text-light-blue font-mulish text-base font-bold  absolute z-10 left-14 bottom-28'>John</h2>
          <h3 className='text-light-blue font-mulish text-xs leading-3 font-bold  absolute z-10 left-14 bottom-[88px]'>DINAMARCA</h3>
        </SwiperSlide>
        <SwiperSlide >
        <Image src={Profile2} alt='profile 1' className='w-full h-full'/>
        <h3 className='text-light-blue text-base absolute z-10 left-14 bottom-40 w-80 font-mulish italic font-normal leading-5'>“We are designing for a global user base... we can get feedback not just from drivers we see in San Francisco but from all around the world.”</h3>
        <h2 className='text-light-blue font-mulish text-base font-bold  absolute z-10 left-14 bottom-28'>Kathrine Joy</h2>
        <h3 className='text-light-blue  font-mulish text-xs leading-3 font-bold absolute z-10 left-14 bottom-[88px]'>CHINA</h3>
        </SwiperSlide>
        <SwiperSlide >
        <Image src={Profile3} alt='profile 1' className='w-full h-full'/>
        <h3 className='text-light-blue text-base absolute z-10 left-14 bottom-40 w-80 font-mulish italic font-normal leading-5'>“This product is a critical tool for us to understand our users and identify any pain points where they might be getting stuck.”</h3>
        <h2 className='text-light-blue font-mulish text-base font-bold  absolute z-10 left-14  bottom-28'>Mike Abla</h2>
        <h3 className='text-light-blue font-mulish text-xs leading-3 font-bold  absolute z-10 left-14 bottom-[88px]' >VENEZUELA</h3>
        </SwiperSlide>
        <SwiperSlide >
        <Image src={Profile4} alt='profile 1' className='w-full h-full'/>
        <h3 className='text-light-blue text-base absolute z-10 left-14 bottom-40 w-80 font-mulish italic font-normal leading-5'>“I used to have a bunch of different tools I had to pay for, with this tool you get everything in one bundle.”</h3>
        <h2 className='text-light-blue font-mulish text-base font-bold  absolute z-10 left-14 bottom-28'>Philis Jan</h2>
        <h3 className='text-light-blue font-mulish text-xs leading-3 font-bold  absolute z-10 left-14 bottom-[88px]'>ESPAÑA</h3>
        </SwiperSlide>
      </Swiper>
</div>
}