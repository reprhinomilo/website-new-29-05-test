import Image from 'next/image';
import NewsMan from '@/public/news-man.png';
import { Items } from './items';
import { BigItem } from './big-item';
import { Item } from './item';

const name = 'James Rutherford';
const text = `In the fast-paced world of business, clear and well-structured legal agreements are essential for protecting both parties involved. A well-drafted contract outlines rights, responsibilities, and expectations, minimizing risks and preventing disputes. In the fast-paced world of business, clear and well-structured legal agreements are essential for protecting both parties involved. A well-drafted contract outlines rights, responsibilities, and expectations, minimizing risks and preventing disputes.`;

export default function News() {
  const handlePageChange = (page) => {
    console.log(page);
  };

  return (
    <section className="flex flex-col md:gap-[40px] gap-[48px] px-[72px] py-[40px]">
      <h2
        className="text-[#031228] text-center md:text-start font-open-sans font-semibold text-[32px] leading-[120%] tracking-[0px] uppercase">
        In the News
      </h2>
      <div className="flex items-center relative min-h-[500px] h-full my-[40px]">
        <div className="absolute -top-12 -left-11 w-[736px] h-[256px] bg-[#B0DAF1]"></div>
        <div className="absolute -bottom-12 -right-11 w-[736px] h-[256px] bg-[#B0DAF1]"></div>

        {/* <Image src={NewsMan} alt="James Rutherford" fill objectFit="cover" objectPosition="center" /> */}
        <Image src={NewsMan} alt="James Rutherford" fill objectFit="cover" objectPosition="center" />
        <h2
          className="absolute top-0 left-[48px] text-[#636363] ont-open-sans font-bold text-[120px] leading-[130%] tracking-[3px] uppercase">
          {name.split(' ')[0]}
        </h2>
        <h2
          className="absolute bottom-0 -translate-x-1/2 left-1/2 text-[#636363] ont-open-sans font-bold text-[120px] leading-[130%] tracking-[3px] uppercase">
          {name.split(' ')[1]}
        </h2>

        <div
          className="absolute z-50 lg:top-[100px] lg:right-[32px] top-[20px] right-[12px] flex items-end justify-center">
          <p
            className="text-[#031228] lg:text-[20px] text-[8px] font-normal leading-[130%] lg:max-w-[410px] max-w-[110px] font-open-sans tracking-[0px] text-center">
            Leadership in healthcare demands a delicate balance between compassion, excellence, and innovation. <br />
            Over the years, I&apos;ve learned that the most effective leaders are those who serve their teams with
            humility and
            grace.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:gap-[32px] gap-[24px]">
        <h3 className="text-[#101010] md:text-start text-center font-open-sans font-semibold text-[24px] leading-[130%] tracking-[0px] uppercase">
          Latest News
        </h3>
        <div className="hidden md:flex">
          <BigItem text={text} />
        </div>
        <div className="md:hidden mb-[80px]">
          <Item text={text} />
        </div>
        <Items />
      </div>
    </section>
  );
}
