import ArrowContainer from "../components/arrow-container";

export default function DataSection() {
  return (
    <section className="px-5 lg:px-0">
      <ArrowContainer title="데이터">
        <button className="bg-purple600 rounded-2xl flex flex-col items-center gap-8 w-full">
          <img
            src="/icons/mail.icon.svg"
            alt="mail.icon.svg"
            className="w-[118px] mt-[54px]"
          />
          <p className="overflow-wrap text-white text-center mb-[47px]">
            야놀자 리서치가 활용한 데이터를
            <br /> 편하게 사용해보세요!
          </p>
        </button>
      </ArrowContainer>
    </section>
  );
}
