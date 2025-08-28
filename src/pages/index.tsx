import Image from 'next/image';
import SajuTable from './components/SajuTable';
import bg1 from '../../public/assets/bg1.png';
import bg2 from '../../public/assets/bg2.png';
import bg3 from '../../public/assets/bg3.png';

export default function Home() {
  return (
    <div className='w-full min-h-screen bg-white flex justify-center items-start overflow-y-auto'>
      <div className='max-w-md w-full bg-[#F5F3EC]'>
        {/* bg1 */}
        <div className='relative'>
          <Image src={bg1} alt='bg1' className='w-full h-auto object-contain' />
          <div className='absolute left-21 bottom-15'>
            <p className='flex justify-center'>이제 본격적으로</p>
            <p className='flex justify-center'>OO님의 사주팔자를</p>
            <p className='flex justify-center'>분석해볼 차례네요.</p>
          </div>
        </div>

        {/* bg2 */}
        <div>
          <Image src={bg2} alt='bg2' className='w-full h-auto object-contain' />
        </div>

        {/* bg3  */}
        <div className='-mt-25 relative z-10'>
          <Image src={bg3} alt='bg3' className='w-full h-auto object-contain' />
          <div className='absolute left-20 top-18'>
            <p className='flex justify-center'>제가 OO님의 사주를</p>
            <p className='flex justify-center'>보기 쉽게 표로 정리했어요</p>
          </div>
        </div>

        {/* SajuTable */}
        <div className='-mt-5 relative z-20 flex justify-center'>
          <SajuTable />
        </div>
      </div>
    </div>
  );
}
