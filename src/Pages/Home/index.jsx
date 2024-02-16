import { SidebarItem } from "../../Components/atoms/SidebarItem";
import { GoHome } from "react-icons/go";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BiMessageRoundedAdd } from "react-icons/bi";
import { CiSquareMore } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { ProfileStory } from "../../Components/atoms/ProfileStory";
import { DATA_USER_IG } from "../../utils/constant";
import { FeedComponent } from "../../Components/molecules/FeedComponent";
import { SuggestProfile } from "../../Components/molecules/SuggestProfile";
import { SuggestFollower } from "../../Components/molecules/SuggestFollowers";

export const Home = () => {
  const dataSidebar = [
    {
      icons: <GoHome size={30} />,
      label: "Beranda",
      isActive: true,
    },
    {
      icons: <AiOutlineSearch size={30} />,
      label: "Cari",
      isActive: false,
    },
    {
      icons: <MdOutlineExplore size={30} />,
      label: "Jelajahi",
      isActive: false,
    },
    {
      icons: <HiOutlineVideoCamera size={30} />,
      label: "Reels",
      isActive: false,
    },
    {
      icons: <BiMessageRoundedAdd size={30} />,
      label: "Pesan",
      isActive: false,
    },
    {
      icons: <AiOutlineHeart size={30} />,
      label: "Notification",
      isActive: false,
    },
    {
      icons: <AiOutlinePlusSquare size={30} />,
      label: "Create",
      isActive: false,
    },
    {
      icons: <CgProfile size={30} />,
      label: "Profile",
      isActive: false,
    },
  ];
  return (
    <>
      <div className=" hidden sm:grid grid-cols-5 h-full">
        <div className="py-10 px-5 relative border-r-[0.05px] border-gray-50/30">
          <div className="w-full mb-10">
            <img
              src="https://www.pngkey.com/png/full/28-287308_instagram-logo-text-white.png"
              alt="logo-instagram"
              className="w-[40%]"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <div>
              {dataSidebar.map((item, index) => {
                return (
                  <SidebarItem
                    key={index}
                    isActive={item.isActive}
                    label={item.label}
                    icons={item.icons}
                  />
                );
              })}
            </div>
            <div className="absolute bottom-5 w-[80%]">
              <SidebarItem icons={<CiSquareMore size={30} />} label={"More"} />
            </div>
          </div>
        </div>
        <div className="col-span-4 overflow-y-scroll">
          <div className="grid grid-cols-3 h-[200vh]">
            <div className="col-span-2 text-2xl py-10 px-16 ">
              <div className="w-full overflow-x-scroll">
                <div className="flex flex-row gap-3">
                  {DATA_USER_IG.map((item, index) => {
                    return (
                      <ProfileStory
                        key={index}
                        text={item.username}
                        imgLink={item.imgLink}
                      />
                    );
                  })}
                </div>
              </div>
              <div>
                <FeedComponent />
                <FeedComponent />
                <FeedComponent />
                <FeedComponent />
                <FeedComponent />
                <FeedComponent />
              </div>
            </div>
            <div>
              <SuggestProfile />
              <div className="flex flex-row justify-between items-center me-20 mb-4">
                <p className="text-[#A8A8A8] text-sm font-bold">
                  Disarankan untuk Anda
                </p>
                <p className="text-xs font-bold">Lihat Semua</p>
              </div>
              <div className="flex flex-col gap-3 mb-5">
                <SuggestFollower />
                <SuggestFollower />
                <SuggestFollower />
                <SuggestFollower />
              </div>
              <div className="flex text-[#605f5f] text-sm font-normal text-[11.8px] gap-1 list-disc w-80 flex-wrap mt-14">
                <a href="#" class="text-gray-600 hover:text-gray-800">
                  Tentang
                </a>
                <span class="text-gray-300 text-xs pt-0.5">&#183;</span>
                <a href="#" class="text-gray-600 hover:text-gray-800">
                  Bantuan
                </a>
                <span class="text-gray-300 text-xs pt-0.5">&#183;</span>
                <a href="#" class="text-gray-600 hover:text-gray-800">
                  Pers
                </a>
                <span class="text-gray-300 text-xs pt-0.5">&#183;</span>
                <a href="#" class="text-gray-600 hover:text-gray-800">
                  API
                </a>
                <span class="text-gray-300 text-xs pt-0.5">&#183;</span>
                <a href="#" class="text-gray-600 hover:text-gray-800">
                  Pekerjaan
                </a>
                <span class="text-gray-300 text-xs pt-0.5">&#183;</span>
                <a href="#" class="text-gray-600 hover:text-gray-800">
                  Privasi
                </a>
                <span class="text-gray-300 text-xs pt-0.5">&#183;</span>
                <a href="#" class="text-gray-600 hover:text-gray-800 block">
                  Ketentuan
                </a>
                <span class="text-gray-300 text-xs pt-0.5">&#183;</span>
                <a href="#" class="text-gray-600 hover:text-gray-800 block">
                  Lokasi
                </a>
                <span class="text-gray-300 text-xs pt-0.5">&#183;</span>
                <a href="#" class="text-gray-600 hover:text-gray-800 block">
                  Bahasa
                </a>
                <span class="text-gray-300 text-xs pt-0.5">&#183;</span>
                <a href="#" class="text-gray-600 hover:text-gray-800 block">
                  Verifikasi Meta
                </a>
                <p className="pt-4">&copy; 2024 INSTAGRAM FROM META</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen  h-screen flex sm:hidden p-10 text-center text-2xl items-center justify-center">
        Silahkan akses di desktop kalian, sementara tidak support mobile
      </div>
    </>
  );
};
