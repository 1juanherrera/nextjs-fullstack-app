
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
export default function RecoverPassword() {

  return <div className="grid justify-center mt-[7%]">
    <div>
      <div className="border-[#0099E1] border-2 w-[502px] h-[351px] rounded-lg flex justify-center items-center">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray" className="font-nunito font-bold text-xl text-dark-gray leading-7 flex justify-center ">
          Reset your password
          </Typography>
          <Typography color="gray" className="relative justify-center flex text-center left-[62px] mt-1 font-normal w-[260px] h-[40px] leading-5 text-gray font-mulish text-base  ">
          We send a link to reset you password to your email
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <h3 className="font-mulish font-semibold text-xs text-dark-gray " >Your email<span className="text-dark-pink" >*</span></h3>
              <Input type="email" size="lg" label="Enter you email" className="font-mulish font-normal text-xs text-gray bg-[#F2F2F2] border-none"/>
            </div>
            <Button className="mt-6 bg-[#0099E1] font-mulish font-bold font-sm " fullWidth>
              SEND EMAIL
            </Button>
          </form>
        </Card>
      </div>
      <Typography color="gray" className="mt-4 font-mulish text-xs text-[#757575] text-center font-normal">
          Or Don’t have an account?{" "}
            <Link
              href="../auth/sign-up.tsx"
              className="font-mulish text-xs font-normal text-[#0099E1] underline"  
            >
              Sign up
            </Link>
          </Typography>
    </div>
    {/* form2 */}
    <div className="mt-[7%]">
    <div className="border-[#0099E1] border-2 w-[502px] h-[411px] rounded-lg flex justify-center items-center">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray" className="font-nunito font-bold text-xl text-dark-gray leading-7 flex justify-center ">
          Create new password
          </Typography>
          <Typography color="gray" className="relative justify-center flex text-center left-[62px] mt-1 font-normal w-[260px] h-[40px] leading-5 text-gray font-mulish text-base  ">
          We send a link to reset you password to your email
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <h3 className="font-mulish font-semibold text-xs text-dark-gray " >New Password</h3>
              <Input type="email" size="lg" label="Enter your username" className="font-mulish font-normal text-xs text-gray bg-[#F2F2F2] border-none"/>
              <h3 className="font-mulish font-semibold text-xs text-dark-gray " >Repeat Password<span className="text-dark-pink" >*</span></h3>
              <Input type="email" size="lg" label="Enter password" className="font-mulish font-normal text-xs text-gray bg-[#F2F2F2] border-none"/>
            </div>
            <Button className="mt-6 bg-[#0099E1] font-mulish font-bold font-sm " fullWidth>
              RESET MY PASSWORD
            </Button>
          </form>
        </Card>
      </div>
      <Typography color="gray" className="mt-4 font-mulish text-xs text-[#757575] text-center font-normal">
          Or Don’t have an account?{" "}
            <Link
              href="../auth/sign-up.tsx"
              className="font-mulish text-xs font-normal text-[#0099E1] underline"  
            >
              Sign up
            </Link>
          </Typography>
    </div>
    {/* modals */}
    <div className="border-[#0099E1] border-2 w-[502px] h-[273px] rounded-lg flex justify-center items-center mt-8">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray" className="font-nunito font-bold text-xl text-dark-gray leading-7 flex justify-center ">
          Successful password reset!
          </Typography>
          <Typography color="gray" className="relative justify-center flex text-center left-[45px] top-4 items-center mt-1 font-normal w-[255px] h-[40px] leading-5 text-gray font-mulish text-base  ">
          You can use you new password to login to your account 🙌
          </Typography>
          <Button className="mt-16 bg-[#0099E1] w-[350px] font-mulish font-bold font-sm " fullWidth>
              lOGIN
            </Button>
        </Card>
      </div>
  </div>
}