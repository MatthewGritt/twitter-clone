import {
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ReplyIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { deleteDoc, doc } from "firebase/firestore";
import Moment from "react-moment";
import { db } from "../firebase";

function Post({ message, id, timestamp }) {
  const deletePost = async () => {
    const remove = confirm("remove tweet?");
    if (remove) {
      const docRef = doc(db, "posts", id);
      await deleteDoc(docRef);
    }
  };

  return (
    <div className="flex items-star  p-3 pr-6 hover:bg-gray-100 cursor-pointer  border-b  break-words ">
      <img className="h-[54px] " src="/images/user-pic.webp" alt="" />

      <div className="ml-3 sm:max-w-[390px] md:max-w-[470px] md2:max-w-none  flex-1 w-[75%] relative">
        <DotsHorizontalIcon
          onClick={deletePost}
          className=" absolute h-6 right-0 top-0 p-1 rounded-full cursor-pointer hover:bg-[#d1e6f3]"
        />
        <h3 className="font-bold ">
          Guest
          <Moment className="text-gray-400 text-xs ml-4" fromNow>
            {timestamp?.toDate()}
          </Moment>
        </h3>
        <p className="text-[15px] whitespace-pre-line ">{message}</p>
        <div className="flex items-center justify-between mt-3 max-w-[320px] md:max-w-[410px]  ">
          <ChatIcon className="h-5" />
          <ReplyIcon className="h-5 " />
          <HeartIcon className="h-5" />
          <ShareIcon className="h-5" />
        </div>
      </div>
    </div>
  );
}

export default Post;
