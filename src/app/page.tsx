import Image from 'next/image';
import mainImg from '../../public/mainImg.png';
import vectorP from '../../public/vectorP.png';
import dialogBox from '../../public/dialogBox.png';
import writingImg from '../../public/writingImg.png';
import writingLetters from '../../public/writingLetters.png';
import readingImg from '../../public/readingImg.png';
import SajuPaljaTable from '@/components/SajuPaljaTable';

export default function Home() {
  const backgroundText =
    '甲乙丙丁戊己 庚辛壬癸子丑 寅卯辰巳午未 申酉戌亥甲乙'.repeat(10);
  return (
    <>
      <div className="relative flex flex-col justify-center h-full max-w-[448px] min-w-[375px isolate">
        <div className="absolute inset-0 z-0 text-[85px] leading-none text-white opacity-20 blur-sm select-none break-all tracking-wider text-justify">
          {backgroundText}
        </div>
        {/* CONTAINER A */}
        <div className="relative h-full z-20 bg-gradient-to-b from-[#3f372e] to-[#bfac94] overflow-hidden mix-blend-multiply">
          <div className="flex flex-col mt-[84px] items-center text-center text-white gap-3">
            <h1 className="text-2xl">제 1장</h1>
            <Image src={vectorP} height={20} width={157} alt="Vector image" />
            <p className="text-4xl font-semibold">나의 사주 팔자</p>
          </div>
          <div className="w-full flex flex-row justify-end pt-[42px] relative z-10">
            <div className="w-full h-full pl-[195px]">
              <Image
                src={mainImg}
                alt="Woman in traditional Korean clothing"
                width={298}
                height={521}
                className="transform scale-x-[-1] object-cover"
              />
            </div>
          </div>
          {/* Bottom blur */}
          {/* <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-20">
            <div
              className="w-full h-full backdrop-blur-sm"
              style={{
                background: `
        linear-gradient(to bottom, 
          transparent 0%,
          transparent 60%,
          rgba(243,242,239,0.01) 70%,
          rgba(243,242,239,0.02) 75%,
          rgba(243,242,239,0.04) 80%,
          rgba(243,242,239,0.08) 85%,
          rgba(243,242,239,0.15) 90%,
          rgba(243,242,239,0.30) 95%,
          rgba(243,242,239,0.60) 98%,
          #f3f2ef 100%
        )`,
              }}
            ></div>
          </div> */}
        </div>

        {/* CONTAINER B */}
        <div className="flex justify-end px-[24px] pt-20 pb-[40px] bg-[#f3f2ef] relative z-10 mix-blend-multiply">
          <div className="flex flex-row">
            <div className="relative z-20">
              <Image
                src={writingLetters}
                width={70}
                height={50}
                alt="Comments 슥슥"
              />
            </div>
            <div className="-ml-8 z-10">
              <Image
                src={writingImg}
                width={120}
                height={285}
                alt="Arm with brush"
              />
            </div>
          </div>
        </div>

        <div
          className="absolute z-30
  left-4 sm:left-6 
  top-[300px] sm:top-[384px] md:top-[420px]
  w-[calc(100%-2rem)] max-w-[215px] sm:w-[215px]
  h-auto
  mt-[120px] sm:mt-[180px]"
        >
          <div className="relative">
            <Image
              src={dialogBox}
              width={215}
              height={319}
              alt="Dialog box"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
              <p className="text-black text-xs sm:text-sm leading-relaxed font-medium text-center">
                이제 본격적으로
                <br />
                OO님의 사주팔자를
                <br />
                분석해볼 차례네요.
              </p>
            </div>
          </div>
        </div>
        {/* CONTAINER C */}
        <div className="flex flex-col">
          <div className="w-full max-w-[448px] h-[306px] relative bg-[#f3f2ef] -z-10">
            <Image
              className="object-cover"
              src={readingImg}
              fill
              alt="Woman reading the book"
            />
          </div>
          <div className="w-full bg-[#f5f3ec]">
            {/* SAJU COMPONENT */}
            <SajuPaljaTable />
          </div>
        </div>
      </div>
    </>
  );
}
