import Image from 'next/image';
import SajuTable from './components/SajuTable';
import bg1 from '../../public/assets/bg1.png';
import bg2 from '../../public/assets/bg2.png';
import bg3 from '../../public/assets/bg3.png';
import { useState } from 'react';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className='w-full min-h-screen bg-white flex justify-center items-start overflow-y-auto'>
      <div className='max-w-md w-full bg-[#F5F3EC] pb-15'>
        {/* bg1 */}
        <div className='relative'>
          <Image
            src={bg1}
            alt='bg1'
            className='w-full h-auto object-contain'
            placeholder='blur'
            priority
            onLoadingComplete={() => setLoaded(true)}
          />

          {/* 말풍선 텍스트 */}
          {loaded && (
            <div className='absolute bottom-[7%] md:bottom-[6.5%] lg:bottom-[6%] w-[70%] text-sm md:text-base lg:text-lg'>
              <p className='text-center'>이제 본격적으로</p>
              <p className='text-center'>지우님의 사주팔자를</p>
              <p className='text-center'>분석해볼 차례네요.</p>
            </div>
          )}
        </div>

        {/* bg2 */}
        <div>
          <Image
            src={bg2}
            alt='bg2'
            className='w-full h-auto object-contain'
            placeholder='blur'
            priority
            onLoadingComplete={() => setLoaded(true)}
          />
        </div>

        {/* bg3  */}
        <div className='-mt-25 relative z-10'>
          <Image
            src={bg3}
            alt='bg3'
            className='w-full h-auto object-contain'
            placeholder='blur'
            priority
            onLoadingComplete={() => setLoaded(true)}
          />

          {/* 말풍성 텍스트 */}
          {loaded && (
            <div className='absolute top-[14.5%] md:top-[13.5%] lg:top-[12.5%] w-[78%] text-sm md:text-base lg:text-lg'>
              <p className='text-center'>제가 지우님의 사주를</p>
              <p className='text-center'>보기 쉽게 표로 정리했어요</p>
            </div>
          )}
        </div>

        {/* SajuTable */}
        <div className='-mt-5 relative z-20 flex justify-center'>
          <SajuTable />
        </div>
      </div>
    </div>
  );
}
