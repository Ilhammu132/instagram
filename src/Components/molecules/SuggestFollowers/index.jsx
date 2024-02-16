export const SuggestFollower = () => {
  return (
    <div>
      <div className=" me-20  flex flex-row justify-between items-center">
        <div className="flex flex-row gap-3 leading-normal items-center">
          <div className="w-fit cursor-pointer">
            <div className="w-[42px] h-[42px] mx-auto  ">
              <div className="p-[2%] rounded-full  ">
                <img
                  src={
                    "https://xsgames.co/randomusers/assets/avatars/female/5.jpg"
                  }
                  alt="photo"
                  className="rounded-full w-[42px] h-[42px] object-cover border-[2px] border-black"
                />
              </div>
            </div>
          </div>
          <div className="text-sm">
            <p className="font-bold text-[12px]">arailiftingjourney</p>
            <p className="text-[#A8A8A8] text-[12px] font-semibold">
              Disarankan untuk Anda
            </p>
          </div>
        </div>
        <div>
          <button className="text-blue-500 font-semibold text-[12px] mt-0">
            Ikuti
          </button>
        </div>
      </div>
    </div>
  );
};
