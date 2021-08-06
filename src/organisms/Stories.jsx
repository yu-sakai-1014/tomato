export const Stories = () => {
  const stories = [
    {
      img: "img/4_2048x2048.jpg",
      date: "2021/03/25",
      title: "曽我農園オリジナル「越冬トマト」、その圧倒的な旨味と甘みのわけ",
    },
    {
      img: "img/2_2048x2048.jpg",
      date: "2021/03/25",
      title:
        "調味料の域を超えた主役級のケチャップ「越冬トマトケチャップソース」",
    },
    {
      img: "img/Rectangle_31_2048x2048.jpg",
      date: "2021/03/25",
      title:
        "1年にたった2週間のインターネット販売。日本一を獲得した「越冬トマト」のご紹介",
    },
  ];
  return (
    <div className="flex w-screen flex-col items-center py-32 bg-white">
      <div className="w-2/3 border-b border-gray-400">
        <div className="text-3xl tracking-widest font-serif mb-10">
          FEATURED STORIES
        </div>
        <div>
          {stories.map((storie) => {
            return (
              <div className="flex xs:flex-col md:flex-row items-center border-t border-gray-400 xs:py-4 md:py-0">
                <img src={storie.img} className="w-60" />
                <div className="ml-10 w-full">
                  <div className="xs:mt-4 md:mt-0 text-sm text-gray-500">
                    {storie.date}
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="">{storie.title}</div>
                    <div className="ml-4">→</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
