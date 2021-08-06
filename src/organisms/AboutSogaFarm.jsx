export const AboutSogaFarm = () => {
  return (
    <div className="bg-white 3xl:flex 3xl:justify-center">
      <div className="flex pt-20 xs:flex-col md:flex-row md:justify-between items-center max-w-screen-xl 3xl:space-x-96 3xl:max-w-screen-xl">
        <img src="img/home_about_01.jpg" width="300" />
        <div className="flex xs:flex-col xs:items-center md:items-start">
          <p className="font-serif text-sm xs:mt-10 md:mt-0">ABOUT SOGA FARM</p>
          <p className="mt-4 font-serif xs:text-lg md:text-3xl leading-loose xs:text-center md:text-left">
            SOGA FARMは、雪国・新潟の
            <br />
            トマト産地で得意なトマト作りを極
            <br />
            めた、フルーツトマト専門の農家です。
          </p>
        </div>
      </div>
    </div>
  );
};
