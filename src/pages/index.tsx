import SajuTable from './components/SajuTable';

export default function Home() {
  return (
    <div className='w-full h-screen bg-white flex justify-center items-center'>
      <div className='max-w-md w-full'>
        <div>웹툰 디자인 들어갈 곳</div>

        <SajuTable />
      </div>
    </div>
  );
}
