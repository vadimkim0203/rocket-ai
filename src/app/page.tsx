import Image from 'next/image';
import mainImg from '../../public/mainImg.png';
import vectorP from '../../public/vectorP.png';
import dialogBox from '../../public/dialogBox.png';
import writingImg from '../../public/writingImg.png';
import writingLetters from '../../public/writingLetters.png';

export default function Home() {
  const backgroundText =
    '甲乙丙丁戊己 庚辛壬癸子丑 寅卯辰巳午未 申酉戌亥甲乙'.repeat(10);
  return (
    <div className="relative flex flex-col justify-center max-w-[448px] min-w-[375px] bg-gradient-to-b from-[#28231D] to-[#A9987C] overflow-hidden">
      <div className="absolute inset-0 z-0 text-[85px] leading-none text-white opacity-20 blur-sm select-none break-all tracking-wider text-justify">
        {backgroundText}
      </div>
      <div className="relative z-10 ">
        <div className="flex flex-col mt-[84px] items-center text-center text-white gap-3">
          <h1 className="text-2xl">제 1장</h1>
          <Image src={vectorP} height={20} width={157} alt="Vector image" />
          <p className="text-4xl font-semibold">나의 사주 팔자</p>
        </div>
        <div className="w-full flex flex-row justify-end pt-[42px] relative border-2 border-green-500 z-10">
          <div className="w-full h-full">
            <Image
              src={mainImg}
              alt="Woman in traditional Korean clothing"
              width={298}
              height={370}
              className="transform scale-x-[-1] object-cover"
            />
          </div>
        </div>
        <div className="absolute left-6 top-[300px] w-[215px] h-[139px] border-2 border-red-500 z-30">
          <Image src={dialogBox} width={215} height={319} alt="Dialog box" />
          <div className="absolute top-8 left-6 right-6 text-center">
            <p className="text-black text-sm leading-relaxed font-medium">
              이제 본격적으로
              <br />
              OO님의 사주팔자를
              <br />
              분석해볼 차례네요.
            </p>
          </div>
        </div>
      </div>
      {/* WHITE PAGE WITH GRADIENT */}
      <div className="flex justify-end px-[24px] bg-[#f3f2ef] border-2 border-blue-500 -mt-20 relative z-10">
        <div className="flex flex-row ">
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
    </div>
  );
}
