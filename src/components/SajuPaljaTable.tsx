import { columnHeaders, rowHeaders, sajuData } from '../data/mockData';
import pattern1 from '../../public/레이어.png';
import pattern2 from '../../public/레이어2.png';
import Image from 'next/image';

const SajuPaljaTable = () => {
  const formatRowHeader = (text: string) => {
    const match = text.match(/^([^(]+)\s*(\(.+\))$/);
    if (match) {
      return (
        <div>
          <div>{match[1].trim()}</div>
          <div className="text-xs text-gray-600">{match[2]}</div>
        </div>
      );
    }
    return text;
  };

  return (
    <div className="flex flex-col items-center justify-between mx-4 -mt-1 pb-[40px] border-4 border-black bg-[#f3f2ef]">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="pt-12">
          <Image
            src={pattern1}
            alt="Traditional pattern"
            width={56}
            height={38}
          />
        </div>

        <div className="flex flex-col items-center pt-[40px]">
          <h2>김로켓님의 사주</h2>
          <h1 className="font-bold">1980년 8월27일 08:10</h1>
        </div>
        <div>
          <Image
            src={pattern2}
            alt="Traditional pattern"
            width={56}
            height={38}
          />
        </div>
      </div>

      <div className="pt-[20px]">
        {/* Header Row */}
        <div className="grid grid-cols-5 gap-0">
          {/* Empty top-left cell */}
          <div className="border-r border-b p-2 bg-gray-100 font-semibold"></div>
          {/* Column Headers */}
          {columnHeaders.map((header, i) => (
            <div
              key={i}
              className="border-r border-b p-2 bg-gray-100 text-center font-semibold text-sm"
            >
              {header}
            </div>
          ))}
        </div>

        {/* Data Rows */}
        {rowHeaders.map((rowHeader, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-5 gap-0">
            {/* Row Header */}
            <div className="border-r border-b p-2 bg-gray-100 font-semibold text-center text-sm">
              {formatRowHeader(rowHeader)}
            </div>

            {/* Data Cells */}
            {sajuData[rowIndex]?.map((cellData, colIndex) => {
              let cellClass = 'border-r border-b p-2 text-center text-sm';
              let cellContent;

              // --- CASE 1: Row 1 (천간) - Render array as colored squares ---
              if (rowIndex === 1 && Array.isArray(cellData)) {
                const boxColor =
                  colIndex === 1 ? 'bg-[#c23030]' : 'bg-[#2f2f2f]'; // red for index[1], black for others

                cellContent = (
                  <div
                    className={`inline-flex flex-col items-center justify-center rounded-xl min-w-13 min-h-13 text-white text-xs font-medium ${boxColor}`}
                  >
                    {cellData.map((item, i) => (
                      <div key={i}>{item}</div>
                    ))}
                  </div>
                );
              }

              // --- CASE 2: Row 2 (지지) - Single text in colorful square ---
              else if (rowIndex === 2 && Array.isArray(cellData)) {
                // Define colors for each column
                const boxColors = [
                  'bg-[#18868b]',
                  'bg-[#c23030]',
                  'bg-[#2f2f2f]',
                  'bg-[#2f2f2f]',
                ];

                cellContent = (
                  <div
                    className={`inline-flex flex-col items-center justify-center rounded-xl w-13 h-13 text-white text-xs font-medium ${
                      boxColors[colIndex] || 'bg-gray-100'
                    }`}
                  >
                    {cellData.map((item, i) => (
                      <div key={i}>{item}</div>
                    ))}
                  </div>
                );
              }

              // --- CASE 3: Row 6 - Array handling (from before) ---
              else if (Array.isArray(cellData)) {
                cellContent = (
                  <div className="flex flex-col gap-1">
                    {cellData.map((item, i) => {
                      const match = item?.match(/^([^(]+)\s*(\(.+\))$/);
                      return (
                        <div key={i}>
                          {match ? (
                            <>
                              <div>{match[1].trim()}</div>
                              <div className="text-xs text-gray-600">
                                {match[2]}
                              </div>
                            </>
                          ) : (
                            item
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              }

              // --- Default case for other rows ---
              else {
                const match = cellData?.match(/^([^(]+)\s*(\(.+\))$/);
                if (match) {
                  cellContent = (
                    <div>
                      <div>{match[1].trim()}</div>
                      <div className="text-xs text-gray-600">{match[2]}</div>
                    </div>
                  );
                } else {
                  cellContent = cellData;
                }
              }

              return (
                <div key={colIndex} className={cellClass}>
                  {cellContent}
                </div>
              );
            }) ||
              // Fallback: empty cells
              Array.from({ length: columnHeaders.length }, (_, colIndex) => (
                <div
                  key={colIndex}
                  className="border-r border-b p-2 text-center text-sm"
                >
                  -
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SajuPaljaTable;
