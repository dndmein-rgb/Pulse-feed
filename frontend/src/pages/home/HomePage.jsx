import React,{ useState } from "react";

import Posts from "../../components/common/Posts";
import CreatePost from "./CreatePost";

const HomePage = () => {
	const [feedType, setFeedType] = useState("forYou");

	return (
		<>
			<div className='flex-[4_4_0] mr-auto border-r border-gray-700 min-h-screen'>
				{/* Header */}
		<div className="flex w-full border-b border-gray-700">
  <div
    className={`flex justify-center flex-1 p-3 cursor-pointer relative transition duration-300
    ${feedType === "forYou" ? "text-primary font-semibold" : "text-gray-400 hover:bg-gray-800"}`}
    onClick={() => setFeedType("forYou")}
  >
    For you
    {feedType === "forYou" && (
      <div className="absolute bottom-0 h-1 w-10 bg-primary rounded-full"></div>
    )}
  </div>

  <div
    className={`flex justify-center flex-1 p-3 cursor-pointer relative transition duration-300
    ${feedType === "following" ? "text-primary font-semibold" : "text-gray-400 hover:bg-gray-800"}`}
    onClick={() => setFeedType("following")}
  >
    Following
    {feedType === "following" && (
      <div className="absolute bottom-0 h-1 w-10 bg-primary rounded-full"></div>
    )}
  </div>
</div>


				{/*  CREATE POST INPUT */}
				<CreatePost />

				{/* POSTS */}
				<Posts  feedType={feedType}/>
			</div>
		</>
	);
};
export default HomePage;