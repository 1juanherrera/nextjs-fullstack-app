import Image from "next/image"
import mexicanFlag from '../assets/mexicanFLag.svg'

const HomeAppHeader = () => {
    return (
        <>
            <div className="flex bg-light-blue mb-0"> 
                <h2 className="mt-[38px] ml-[96px] font-['nunito'] text-[30px] font-bold">resimex</h2>
                <Image src={mexicanFlag} alt="mexican flag" className="mt-[38px] ml-[15px] w-[35px]" />
            </div>
        </>
    )
}

export default HomeAppHeader