
const Title = ({ subTitle, title }) => {
  return (
    <div className="my-[70px] mb-[30px] text-center text-[15px] font-semibold uppercase text-[#219aa0]">
      <p>{subTitle}</p>

      <h2 className="mt-[5px] text-[32px] font-semibold text-[#000F38] normal-case">
        {title}
      </h2>
    </div>
  );
};

export default Title;
