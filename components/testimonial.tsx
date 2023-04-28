import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import Profile1 from '../pages/assets/image 1.png'
import Profile2 from '../pages/assets/image 2.png'
import Profile3 from '../pages/assets/image 4.png'
import Profile4 from '../pages/assets/image 6.png'
import { useState, useEffect } from 'react';


type Client = {
  text: string;
  profile: StaticImageData;
};
const Clients: Client[] = [
  {
    text: 'this is a text in image',
    profile: Profile1
  },
  {
    text: 'this is a text in image 2',
    profile: Profile2
  },
  {
    text: 'this is a text in image 3',
    profile: Profile3
  },
  {
    text: 'this is a text in image 4',
    profile: Profile4
  },

]
const delay = 5000;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const moveToNext = () => {
    setCurrentIndex((currentIndex + 1) % Clients.length );
  };
  

  useEffect(() => {
    const interval = setInterval(moveToNext, delay);
    return () => clearInterval(interval);
  }, [currentIndex]);
   return (
    <>
      <div>
        {Clients.map((client, index) => {
          const isActive = index === currentIndex;
          return (
            <div key={index} className={isActive ? '' : 'hidden'}>
             <div className="relative flex items-end  justify-center">
              <h3 className="absolute bottom-0  left-0 text-white right-0 text-center z-10">{client.text}</h3>
              <Image src={client.profile} className="w-full h-full" alt="profiles" />
            </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Testimonials;