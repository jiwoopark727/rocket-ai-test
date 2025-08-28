import Image from 'next/image';
import cloud1 from '../../../public/assets/table_cloud1.png';
import cloud2 from '../../../public/assets/table_cloud2.png';

type Cell = { cn: string | string[]; kr: string | string[] };
type Row = [Cell, Cell, Cell, Cell, Cell];

export default function SajuTable() {
  const data: Row[] = [
    [
      { cn: '十星', kr: '십성' },
      { cn: '傷官', kr: '상관' },
      { cn: '比肩', kr: '비견' },
      { cn: '傷官', kr: '상관' },
      { cn: '傷官', kr: '상관' },
    ],
    [
      { cn: '天干', kr: '천간' },
      { cn: '壬', kr: '임' },
      { cn: '丁', kr: '정' },
      { cn: '癸', kr: '계' },
      { cn: '癸', kr: '계' },
    ],
    [
      { cn: '地支', kr: '지지' },
      { cn: '寅', kr: '인' },
      { cn: '巳', kr: '사' },
      { cn: '亥', kr: '해' },
      { cn: '酉', kr: '유' },
    ],
    [
      { cn: '十星', kr: '십성' },
      { cn: '比肩', kr: '비견' },
      { cn: '劫財', kr: '겁재' },
      { cn: '食神', kr: '식신' },
      { cn: '偏財', kr: '편재' },
    ],
    [
      { cn: '十二運星', kr: '십이운성' },
      { cn: '死', kr: '사' },
      { cn: '帝旺', kr: '제왕' },
      { cn: '胎', kr: '태' },
      { cn: '長生', kr: '장생' },
    ],
    [
      { cn: '十二神殺', kr: '십이신살' },
      { cn: '劫殺', kr: '겁살' },
      { cn: '地殺', kr: '지살' },
      { cn: '驛馬殺', kr: '역마살' },
      { cn: '將星殺', kr: '장성살' },
    ],
    [
      { cn: '貴人', kr: '귀인' },
      { cn: '', kr: '없음' },
      { cn: '', kr: '없음' },
      { cn: '天乙', kr: '천을귀인' },
      {
        cn: ['天乙', '太極', '文昌'],
        kr: ['천을귀인', '태극귀인', '문창귀인'],
      },
    ],
  ];
  return (
    <div className='w-[95%] border-[7px] border-double p-4 relative'>
      <Image
        src={cloud1}
        alt='cloud1'
        style={{ width: '56px', height: '38px' }}
        className='absolute left-[0%] top-[7%]'
      ></Image>
      <Image
        src={cloud2}
        alt='cloud2'
        style={{ width: '56px', height: '38px' }}
        className='absolute right-[0%] top-[5%]'
      ></Image>
      <span className='flex justify-center mb-1 mt-4'>박지우님의 사주</span>
      <span className='flex justify-center font-semibold mb-5 text-xl'>
        1999년 7월27일 12:00
      </span>
      <table className='w-full border-collapse text-[12px] sm:text-[16px] md:text-[18px] lg:text-[21px] text-center font-semibold'>
        <thead>
          <tr>
            <th className='border-[2px] border-t-0 border-l-0 p-2'> </th>
            <th className='border-[2px] border-r border-t-0 border-l-0 p-2'>
              時
            </th>
            <th className='border-[2px] border-r border-t-0 border-l-0 p-2'>
              日
            </th>
            <th className='border-[2px] border-r border-t-0 border-l-0 p-2'>
              月
            </th>
            <th className='border-[2px] border-b-[2px] border-r-[2px] border-t-0 border-l-0 p-2'>
              年
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(([col1, col2, col3, col4, col5], i) => (
            <tr key={col1.cn + '-' + i} className='text-[8px]'>
              <td
                className={`border-[2px] border-l-0 p-2 w-[18%] ${
                  i === 1 ? 'border-b border-b-[#8a8a8a]' : ''
                } ${i === 2 ? 'border-t border-t-[#8a8a8a]' : ''}`}
              >
                {col1.cn} <p className='break-words'>({col1.kr})</p>
              </td>

              <td
                className={`border-[2px] border-r border-r-[#8a8a8a] p-2 w-[20.5%] bg-white ${
                  i === 1 ? 'border-b border-b-[#8a8a8a]' : ''
                } ${i === 2 ? 'border-t border-t-[#8a8a8a]' : ''}`}
              >
                {i === 1 ? (
                  <div className='h-[50px] sm:h-[65px]  p-1 rounded-[15px] bg-[#2f2f2f] text-white flex flex-col justify-center'>
                    <div>{col2.kr}</div>
                    <div className='text-2xl'>{col2.cn}</div>
                    <div>陽水</div>
                  </div>
                ) : i === 2 ? (
                  <div className='h-[50px] sm:h-[65px]  p-1 rounded-[15px] bg-[#18868C] text-white flex flex-col justify-center'>
                    <div>{col2.kr}</div>
                    <div className='text-2xl'>{col2.cn}</div>
                    <div>陽木</div>
                  </div>
                ) : (
                  <>
                    {col2.cn} <p className='break-words'>({col2.kr})</p>
                  </>
                )}
              </td>

              <td
                className={`border-[2px] border-l border-r border-r-[#8a8a8a] p-2 w-[20.5%] bg-white ${
                  i === 1 ? 'border-b border-b-[#8a8a8a]' : ''
                } ${i === 2 ? 'border-t border-t-[#8a8a8a]' : ''}`}
              >
                {i === 1 ? (
                  <div className='h-[50px] sm:h-[65px] p-1 rounded-[15px] bg-[#c23030] text-white flex flex-col justify-center'>
                    <div>{col3.kr}</div>
                    <div className='text-2xl'>{col3.cn}</div>
                    <div>陰火</div>
                  </div>
                ) : i === 2 ? (
                  <div className='h-[50px] sm:h-[65px]  p-1 rounded-[15px] bg-[#c23030] text-white flex flex-col justify-center'>
                    <div>{col3.kr}</div>
                    <div className='text-2xl'>{col3.cn}</div>
                    <div>陰火</div>
                  </div>
                ) : (
                  <>
                    {col3.cn} <p className='break-words'>({col3.kr})</p>
                  </>
                )}
              </td>

              <td
                className={`border-[2px] border-l border-r border-r-[#8a8a8a] p-2 w-[20.5%] bg-white ${
                  i === 1 ? 'border-b border-b-[#8a8a8a]' : ''
                } ${i === 2 ? 'border-t border-t-[#8a8a8a]' : ''}`}
              >
                {i === 1 ? (
                  <div className='h-[50px] sm:h-[65px] p-1 rounded-[15px] bg-[#2f2f2f] text-white flex flex-col justify-center'>
                    <div>{col4.kr}</div>
                    <div className='text-2xl'>{col4.cn}</div>
                    <div>陰水</div>
                  </div>
                ) : i === 2 ? (
                  <div className='h-[50px] sm:h-[65px] p-1 rounded-[15px] bg-[#2f2f2f] text-white flex flex-col justify-center'>
                    <div>{col4.kr}</div>
                    <div className='text-2xl'>{col4.cn}</div>
                    <div>陰水</div>
                  </div>
                ) : (
                  <>
                    {col4.cn} <p className='break-words'>({col4.kr})</p>
                  </>
                )}
              </td>

              <td
                className={`border-[2px] border-l p-2 w-[20.5%] bg-white ${
                  i === 1 ? 'border-b border-b-[#8a8a8a]' : ''
                } ${i === 2 ? 'border-t border-t-[#8a8a8a]' : ''}`}
              >
                {Array.isArray(col5.cn) ? (
                  col5.cn.map((item, j) => (
                    <div key={item + '-' + j}>
                      {item} <p className='break-words'>({col5.kr[j]})</p>
                    </div>
                  ))
                ) : i === 1 ? (
                  <div className='h-[50px] sm:h-[65px] p-1 rounded-[15px] bg-[#2f2f2f] text-white flex flex-col justify-center'>
                    <div>{col5.kr}</div>
                    <div className='text-2xl'>{col5.cn}</div>
                    <div>陰水</div>
                  </div>
                ) : i === 2 ? (
                  <div className='h-[50px] sm:h-[65px] p-1 border-2 rounded-[15px] flex flex-col justify-center'>
                    <div>{col5.kr}</div>
                    <div className='text-2xl'>{col5.cn}</div>
                    <div>陰金</div>
                  </div>
                ) : (
                  <>
                    {col5.cn} <p className='break-words'>({col5.kr})</p>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
