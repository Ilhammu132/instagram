import { AiOutlineHeart } from "react-icons/ai";
import { FiMoreHorizontal, FiSend } from "react-icons/fi";
import { TbMessageCircle } from "react-icons/tb";
import { RxBookmark } from "react-icons/rx";
import { useState } from "react";
import { GrEmoji } from "react-icons/gr";

export const FeedComponent = () => {
  const [isExpand, setIsExpand] = useState(false);
  const handleToggleExpand = () => {
    setIsExpand(!isExpand);
  };
  const [data, setData] = useState({
    comment: "",
  });
  const handleChange = (e) => {
    setData({ comment: e.target.value });
  };
  return (
    <div className="mt-5 mx-20">
      <div className="flex flex-row justify-between items-center py-3">
        <div className="flex flex-row gap-3 items-center">
          <img
            src="https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/12/3/20eb3ddc-be4a-4d77-adcd-9430f5f2521e.jpg"
            alt="img-ig"
            className="w-[32px] h-[32px] rounded-full object-cover"
          />
          <p className="text-sm">
            cocacola_id · <span className="text-sm text-[#A7A7A7]">16 m</span>
          </p>
        </div>
        <div>
          <FiMoreHorizontal />
        </div>
      </div>
      <div>
        <img
          src="https://scontent.fcgk43-1.fna.fbcdn.net/v/t39.30808-6/400976244_735882355240174_7022437570525434036_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=9ev1y7pT4wYAX8PhPCX&_nc_ht=scontent.fcgk43-1.fna&oh=00_AfBwl7XWNofyT-6cHyRMHm0Qm5ouicNUmkqGwMdAqxJUSQ&oe=65D5C5A2"
          alt="img"
          className="w-full h-[585px] rounded object-cover"
        />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-3 my-4">
          <a href="#">
            <AiOutlineHeart size={24} />
          </a>
          <a href="#">
            <TbMessageCircle size={24} className="-rotate-90" />
          </a>
          <a href="#">
            <FiSend size={24} className="rotate-12" />
          </a>
        </div>
        <div className="my-4">
          <a href="#">
            <RxBookmark />
          </a>
        </div>
      </div>
      <div className="text-[12px] leading-normal">
        <p className="leading-normal font-bold mb-1">21,000 likes</p>
        <p className={`p-0 leading-normal ${isExpand ? null : "line-clamp-3"}`}>
          <span className="font-semibold cursor-pointer">gcocacola_id</span>{" "}
          Cuma mau ngingetin kamu! COCA-COLA punya program keren namanya Recycle
          Me! Kamu bisa dapetin OVO GRATIS. Gimana caranya? Kumpulin minimal 8
          botol produk COCA-COLA Klik link di bio dan pilih RecycleMe Ikuti
          langkah untuk pengiriman botol kosongmu dengan Grab. Yuk ikutan jadi
          bagian dari #BeraniMengubah dan #BijakKelolahSampah ♻️🌿 Jangan sampai
          kelewatan karena ada subsidi ongkir hingga 30 ribu rupiah!
        </p>
        <div>
          {!isExpand && (
            <button
              onClick={handleToggleExpand}
              className="text-[#A8A8A8] leading-normal"
            >
              Selengkapnya
            </button>
          )}
        </div>
        <a href="#" className="block my-1">
          See Translation
        </a>
        <a href="#" className="text-[#A8A8A8] text-[13px]">
          View all 478 comments
        </a>
        <div className="flex flex-row items-center">
          <input
            placeholder="Add a comment...."
            type="text"
            onChange={handleChange}
            className="w-full text-white bg-transparent outline-none border-none py-2 text-sm"
          />
          <div className="flex gap-3 items-center">
            <button
              className={`text-blue-500 font-bold ${
                data.comment.length > 0 ? null : "hidden"
              }`}
            >
              Post
            </button>
            <GrEmoji />
          </div>
        </div>
      </div>
    </div>
  );
};
