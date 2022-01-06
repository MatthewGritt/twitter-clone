import {
  BellIcon,
  BookmarkIcon,
  ClipboardListIcon,
  DotsCircleHorizontalIcon,
  InboxIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Nav() {
  return (
    <div className="sticky top-0 h-fit over hidden sm:inline-flex items-center  flex-col py-4 px-[8px] md:px-[17px]  border-r xl:w-[260px] xl:items-start xl:pl-0 ">
      <img
        className="h-6 mb-6 xl:ml-3 "
        src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/2534px-Twitter_bird_logo_2012.svg.png"
        alt=""
      />
      <div className="flex items-center mb-3  p-[10px] rounded-full hover:bg-gray-200 cursor-pointer xl:pl-3 xl:pr-8">
        <HomeIcon className="h-7" />
        <span className="hidden xl:inline text-[19px] font-bold ml-[19px]">
          Home
        </span>
      </div>
      <div className="flex items-center mb-2 p-[10px] rounded-full hover:bg-gray-200 cursor-pointer xl:pl-3 xl:pr-8">
        <SearchIcon className="h-7" />
        <span className="hidden xl:inline text-[19px] font-normal ml-[19px]">
          Explore
        </span>
      </div>
      <div className="flex items-center mb-3 p-[10px] rounded-full hover:bg-gray-200 cursor-pointer xl:pl-3 xl:pr-6">
        <BellIcon className="h-7" />
        <span className="hidden xl:inline text-[19px] font-normal ml-[19px]">
          Notifications
        </span>
      </div>
      <div className="flex items-center mb-3 p-[10px] rounded-full hover:bg-gray-200 cursor-pointer xl:pl-3 xl:pr-6">
        <InboxIcon className="h-7" />
        <span className="hidden xl:inline text-[19px] font-normal ml-[19px]">
          Messages
        </span>
      </div>
      <div className="flex items-center mb-2 p-[10px] rounded-full hover:bg-gray-200 cursor-pointer xl:pl-3 xl:pr-6">
        <BookmarkIcon className="h-7" />
        <span className="hidden xl:inline text-[19px] font-normal ml-[19px]">
          Bookmarks
        </span>
      </div>
      <div className="flex items-center mb-2 p-[10px] rounded-full hover:bg-gray-200 cursor-pointer xl:pl-3 xl:pr-6">
        <ClipboardListIcon className="h-7" />
        <span className="hidden xl:inline text-[19px] font-normal ml-[19px]">
          Lists
        </span>
      </div>

      <div className="flex items-center mb-2 p-[10px] rounded-full hover:bg-gray-200 cursor-pointer xl:pl-3 xl:pr-6">
        <UserIcon className="h-7" />
        <span className="hidden xl:inline text-[19px] font-normal ml-[19px]">
          Profile
        </span>
      </div>
      <div className="flex items-center mb-[16px] p-[10px] rounded-full hover:bg-gray-200 cursor-pointer xl:pl-3 xl:pr-6">
        <DotsCircleHorizontalIcon className="h-7" />
        <span className="hidden xl:inline text-[19px] font-normal ml-[19px]">
          More
        </span>
      </div>
      <img
        className="xl:hidden bg-white rounded-full w-[52px] max-w-[61px] mb-12 sm:mb-[120px]"
        src="https://is4-ssl.mzstatic.com/image/thumb/Purple115/v4/7a/16/3f/7a163fd4-f1fa-1a71-6f98-ea250eb7d565/source/256x256bb.jpg"
        alt=""
      />
      <button className="hidden xl:block  bg-[#1DA1F2] font-bold text-[17px] text-white rounded-[999px] w-[220px] py-[14px] mr-1 mb-[120px]">
        Tweet
      </button>
    </div>
  );
}

export default Nav;
