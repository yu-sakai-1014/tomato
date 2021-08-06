export const HeaderTemplate = () => {
  return (
    <div className="w-screen h-30 px-20 mt-20 flex justify-between items-center fixed top-0 z-10">
      <div className="flex">
        <img
          style={{ width: "3vw" }}
          className="mr-4"
          src="img/logo_mark_white.svg"
        />
        <img style={{ width: "4vw" }} src="img/logo_type_white.svg" />
      </div>
      <div className="flex items-center z-10 text-white">
        <div className="ml-3">カート</div>
        <div className="flex justify-center items-center ml-3 text-black bg-white w-10 h-10 rounded-full">
          0
        </div>
        {/* 3本線CSS */}
        <div className="ml-3 flex flex-col h-10"></div>
      </div>
    </div>
  );
};
