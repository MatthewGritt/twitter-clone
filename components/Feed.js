import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import FeedHead from "./FeedHead";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

    return onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs);
    });
  }, [db]);

  return (
    <div className="w-full max-w-[600px] md:border-r ">
      <FeedHead />
      {/* posts */}
      <div className=" border-t ">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            timestamp={post.data().timestamp}
            message={post.data().text}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
