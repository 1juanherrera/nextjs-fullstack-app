import Image from 'next/image';
import mexicanFlag from '../assets/emojione-v1_flag-for-mexico.png'
// import Profile1 from '../assets/image 1.png'
// import Profile2 from '../assets/image 2.png'
// import Profile3 from '../assets/image 4.png'
// import Profile4 from '../assets/image 6.png'

import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from 'next/link'
import Testimonials from '@/components/testimonial';

export default function SignUp(){
  return <div className='flex flex-row justify-between'>
    <div className='absolute w-40 h-10 left-24 top-9 flex justify-center items-center gap-2.5' >
      <h2 className='font-nunito font-bold text-3xl' >
        resimex
      </h2>
      <Image src={mexicanFlag} alt= 'Mexican flag'/>
    </div>
    {/* form */}
    <div className='relative flex left-60 items-center mt-28 h-screen'>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" className="text-dark-blue font-nunito w-40 text-sm leading-7">
          Create an account
        </Typography>
        <Typography color="gray" className="font-mulish font-light text-xs leading-5 text-black ">
          And start your trip safely with us.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <div className='grid grid-col-2'>
              <h2 className='font-mulish font-semibold text-xs text-dark-gray flex'>Your email<p className='text-dark-pink'>*</p></h2>
              <Input type='email' label="Please enter your email" className='font-mulish font-normal text-xs leading-5 text-gray bg-light-gray border-none rounded'/>
            </div>
            <div className='grid grid-col-2'>
              <h2 className='font-mulish font-semibold text-xs text-dark-gray flex'>Create username<p className='text-dark-pink'>*</p></h2>
              <Input size="lg" label="Enter your username" className='font-mulish font-normal text-xs leading-5 text-gray bg-light-gray border-none rounded'/>
            </div>
            <div className='grid grid-col-2'>
              <h2 className='font-mulish font-semibold text-xs text-dark-gray flex'>Password<p className='text-dark-pink'>*</p></h2>
              <Input type="password" size="lg" label="Enter password" className='font-mulish font-normal text-xs leading-5 text-gray bg-light-gray border-none rounded' />
            </div>
          </div>
          <section className='flex justify-center  mb-10'>
            <h3 className='font-mulish font-normal text-xs leading-4 text-gray w-80 '>
              By creating an account you are agreeing to our Terms and Conditions and Privily Policy
            </h3>
          </section>
          <Button className="bg-cyan-600 font-mulish font-bold w-full text-sm leading-5 text-white " >
            SIGN UP
          </Button>
          <section className='flex justify-center  mb-10 '>
              <h3 className='font-mulish font-normal text-xs leading-4 text-gray underline'>Already have a member? <Link href="/auth/login" className='text-[#0099E1] underline ml-1.5'>Login in</Link></h3>
          </section>
        </form>
      </Card>
    </div>
  {/* carrousel */}
  {/* <div className="relative grid w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
  <div className="">
  <Image
      alt="candice wu"
      src={Profile1}
      className="absolute inset-0 m-0 h-full w-full overflow-hidden  text-gray-700 shadow-none"
    />
    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative p-6 py-14 px-6 md:px-12">
    <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
      How we design and code open-source projects?
    </h2>
    <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
      Candice Wu
    </h5>
  </div>
</div> */}
 <Testimonials/>
</div>


}