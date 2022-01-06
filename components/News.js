import { SearchIcon } from "@heroicons/react/outline";

function News() {
  return (
    <div className="hidden lg:block flex-1 ml-5 xl:ml-[30px] mr-[10px] xl:mr-0 sticky top-0 h-fit">
      <div className="bg-[#EFF3F4] rounded-[999px] mt-1 flex items-center relative ">
        <SearchIcon className=" absolute h-5 text-gray-500 left-5 mt-[2px]" />
        <input
          className="bg-transparent placeholder:text-gray-500 h-full w-full pl-14 pr-6 py-[12px] rounded-[999px] outline-[#1DA1F2]  focus:bg-white "
          placeholder="Search Twitter"
          type="text"
        />
      </div>

      <div className="h-fit flex-1 bg-[#f9f9f9] mt-4 rounded-xl py-2 px-4 pb-8">
        <h2 className="font-bold  text-[21px] ">What's happening</h2>
        {/* 1 */}
        <div className="mt-5 hover:">
          <span className="text-gray-500 text-xs">Football . LIVE</span>
          <h3 className="font-bold text-sm hover:underline cursor-pointer">
            Everton face Brighton & Hove Albion at Goodison Park{" "}
            <span className="font-normal">⚽</span>
          </h3>
          <p className="text-gray-500 text-xs mt-1">
            Trending with{" "}
            <span className="text-[#1DA1F2] ">Holgate #EVEBHA</span>
          </p>
          <span></span>
        </div>
        {/* 2 */}
        <div className="mt-5">
          <h3 className="font-bold text-sm hover:underline cursor-pointer">
            #the tourist
          </h3>
          <p className="text-gray-500 text-sm">
            Can he escape a past he can’t remember?
          </p>
          <span className="text-gray-500 text-xs">Promoted by BBC iPlayer</span>
        </div>
        {/* 3 */}
        <div className="mt-5">
          <span className="text-gray-500 text-xs">Politics . Trending</span>
          <h3 className="font-bold text-sm hover:underline cursor-pointer">
            #MassPsychosis
          </h3>
          <span className="text-gray-500 text-xs">32.5k Tweets</span>
        </div>
        {/* 4 */}
        <div className="mt-5">
          <span className="text-gray-500 text-xs">Football . Trending</span>
          <h3 className="font-bold text-sm hover:underline cursor-pointer">
            Mowatt
          </h3>
        </div>
        {/* 5 */}
        <div className="mt-5">
          <span className="text-gray-500 text-xs">Football . LIVE</span>
          <h3 className="font-bold text-sm hover:underline cursor-pointer">
            Leeds United take on Burnlet at Elland Road{" "}
            <span className="font-normal">⚽</span>
          </h3>
          <p className="text-gray-500 text-xs mt-1">
            Trending with <span className="text-[#1DA1F2]">#LEEBUR, #lufc</span>
          </p>
        </div>
        <div className="mt-8 text-[#1DA1F2] hover:underline cursor-pointer">
          <span>Show more</span>
        </div>
      </div>
    </div>
  );
}

export default News;
