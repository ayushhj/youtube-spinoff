import React from 'react'


const commentsData = [
    {
      name: "Ayush Joshi",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Aman verma",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Harshit",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Amit",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Ayush",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Ayush",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Ayush",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Ayush",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Ayush",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Ayush",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Ayush",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Ayush",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Ayush",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];




  const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img
          className="w-12 h-12"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };
  
  const CommentsList = ({ comments }) => {
    // Disclaimer: Don't use indexes as keys
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ));
  };
  
  const CommentContainer = () => {
    return (
      <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments: </h1>
        <CommentsList comments={commentsData} />
      </div>
    );
  };
  

export default CommentContainer


// import React, { useEffect } from "react";
// import { YOUTUBE_COMMENTS_API } from "../utils/constant";
// import { useDispatch, useSelector } from "react-redux";
// import { setComments } from "../utils/commentsSlice";

// const Comment = ({ data }) => {
//   return (
//     <div className="flex p-2">
//       <img className="w-16 h-16 p-2 rounded-full" alt="user" src={data?.authorProfileImageUrl} />
//       <div>
//         <div className="py-1 font-bold">{data?.authorDisplayName}</div>
//         <div className="font-light text-sm">{data?.textOriginal}</div>
//       </div>
//     </div>
//   );
// };

// const CommentsList = ({ list, isComment }) => {
//   isComment && console.log("Comments: ",list);
//   return (
//     list?.length > 0 &&
//     list.map((comment) => {
//       // comment.replies && console.log("Comment: ",comment?.replies?.comments?.length)
//       return (
//         <div className="hidden md:block" key={comment?.id}>
//           <Comment data={isComment ? comment?.snippet : comment?.snippet?.topLevelComment?.snippet} />
//           {comment?.replies?.comments?.length > 0 && (
//             <div className="pl-16">
//               <CommentsList list={comment?.replies?.comments} isComment={true}/>
//             </div>
//           )}
//         </div>
//       );
//     })
//   );
// };

// const CommentContainer = ({ videoID }) => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     getComments(videoID);
//   }, []);
//   const commentsList = useSelector((store) => store.comments.list);

//   async function getComments(videoID) {
//     const data = await fetch(YOUTUBE_COMMENTS_API.replace("[VIDEO_ID]", videoID));
//     const response = await data.json();
//     dispatch(setComments(response));
//   }
//   return (
//     <div className="p-2 md:m-2">
//       <h1 className="font-bold text-lg md:text-2xl">Comments</h1>
//       <CommentsList list={commentsList?.items} />
//     </div>
//   );
// };

// export default CommentContainer;