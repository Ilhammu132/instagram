export const SuggestProfile = () => {
  return (
    <div className="mt-10 mb-6 me-20  flex flex-row justify-between items-center">
      <div className="flex flex-row gap-3 leading-normal items-center">
        <div className="w-fit cursor-pointer">
          <div className="w-[42px] h-[42px] mx-auto  ">
            <div className="p-[2%] rounded-full bg-gradient-to-r from-[#FFC801] via-[#E200A4] to-[#F00287] ">
              <img
                src={
                  "https://xsgames.co/randomusers/assets/avatars/male/55.jpg"
                }
                alt="photo"
                className="rounded-full w-[42px] h-[42px] object-cover border-[2px] border-black"
              />
            </div>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-bold">ilham_mhrrm</p>
        </div>
      </div>
      <div>
        <button className="text-blue-500 font-semibold text-[12px]">
          Alihkan
        </button>
      </div>
    </div>
  );
};
