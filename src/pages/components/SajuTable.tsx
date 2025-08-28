// components/SajuTable.tsx

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
    <div className='border-[7px] border-double p-4'>
      <span className='flex justify-center mb-1'>김로켓님의 사주</span>
      <span className='flex justify-center font-semibold mb-5 text-xl'>
        1980년 8월27일 08:10
      </span>
      <table className='w-full border-collapse text-[21px] text-center font-semibold'>
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
            <tr key={col1.cn + '-' + i} className='text-[12px]'>
              <td
                className={`border-[2px] border-l-0 p-2 w-[18%] ${
                  i === 1 ? 'border-b border-b-[#8a8a8a]' : ''
                } ${i === 2 ? 'border-t border-t-[#8a8a8a]' : ''}`}
              >
                {col1.cn} <p>({col1.kr})</p>
              </td>

              <td
                className={`border-[2px] border-r border-r-[#8a8a8a] p-2 w-[20.5%] bg-white ${
                  i === 1 ? 'border-b border-b-[#8a8a8a]' : ''
                } ${i === 2 ? 'border-t border-t-[#8a8a8a]' : ''}`}
              >
                {i === 1 ? (
                  <div className='h-[65px]  p-1 rounded-[15px] bg-[#2f2f2f] text-white flex flex-col justify-center'>
                    <div>{col2.kr}</div>
                    <div className='text-2xl'>{col2.cn}</div>
                  </div>
                ) : i === 2 ? (
                  <div className='h-[65px]  p-1 rounded-[15px] bg-[#18868C] text-white flex flex-col justify-center'>
                    <div>{col2.kr}</div>
                    <div className='text-2xl'>{col2.cn}</div>
                  </div>
                ) : (
                  <>
                    {col2.cn} <p>({col2.kr})</p>
                  </>
                )}
              </td>

              <td
                className={`border-[2px] border-l border-r border-r-[#8a8a8a] p-2 w-[20.5%] bg-white ${
                  i === 1 ? 'border-b border-b-[#8a8a8a]' : ''
                } ${i === 2 ? 'border-t border-t-[#8a8a8a]' : ''}`}
              >
                {i === 1 ? (
                  <div className='h-[65px] p-1 rounded-[15px] bg-[#c23030] text-white flex flex-col justify-center'>
                    <div>{col3.kr}</div>
                    <div className='text-2xl'>{col3.cn}</div>
                  </div>
                ) : i === 2 ? (
                  <div className='h-[65px]  p-1 rounded-[15px] bg-[#c23030] text-white flex flex-col justify-center'>
                    <div>{col3.kr}</div>
                    <div className='text-2xl'>{col3.cn}</div>
                  </div>
                ) : (
                  <>
                    {col3.cn} <p>({col3.kr})</p>
                  </>
                )}
              </td>

              <td
                className={`border-[2px] border-l border-r border-r-[#8a8a8a] p-2 w-[20.5%] bg-white ${
                  i === 1 ? 'border-b border-b-[#8a8a8a]' : ''
                } ${i === 2 ? 'border-t border-t-[#8a8a8a]' : ''}`}
              >
                {i === 1 ? (
                  <div className='h-[65px]  p-1 rounded-[15px] bg-[#2f2f2f] text-white flex flex-col justify-center'>
                    <div>{col4.kr}</div>
                    <div className='text-2xl'>{col4.cn}</div>
                  </div>
                ) : i === 2 ? (
                  <div className='h-[65px]  p-1 rounded-[15px] bg-[#2f2f2f] text-white flex flex-col justify-center'>
                    <div>{col4.kr}</div>
                    <div className='text-4xl'>{col4.cn}</div>
                  </div>
                ) : (
                  <>
                    {col4.cn} <p>({col4.kr})</p>
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
                      {item} <p>({col5.kr[j]})</p>
                    </div>
                  ))
                ) : i === 1 ? (
                  <div className='h-[65px]  p-1 rounded-[15px] bg-[#2f2f2f] text-white flex flex-col justify-center'>
                    <div>{col4.kr}</div>
                    <div className='text-2xl'>{col4.cn}</div>
                  </div>
                ) : i === 2 ? (
                  <div className='h-[65px] border-2 p-1 rounded-[15px] flex flex-col justify-center'>
                    <div>{col5.kr}</div>
                    <div className='text-2xl'>{col5.cn}</div>
                  </div>
                ) : (
                  <>
                    {col5.cn} <p>({col5.kr})</p>
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
