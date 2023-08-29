import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ReportOff,
  ReportOffOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import { TextField } from "@mui/material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
  createdAt,
  report,
  onDelete,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const loggedInfirstName = useSelector((state) => state.user.firstName);
  const loggedInpicturePath = useSelector((state) => state.user.picturePath);

  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const isReport = Boolean(report?.[loggedInUserId]);
  const reportCount = Object.keys(report ?? {}).length;

  const [comment, setComment] = useState("");

  // const Time = new Date(createdAt);
  // const date = Time.toLocaleDateString();
  // const time = Time.toLocaleTimeString();

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  const patchReport = async () => {
    const response = await fetch(
      `http://localhost:3001/posts/${postId}/report`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId }),
      }
    );
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  const handleComment = async () => {
    if (comment.trim() === "") {
      return; // Do nothing if comment is empty or only contains white space
    }

    const response = await fetch(
      `http://localhost:3001/posts/${postId}/comments`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: comment,
          userId: loggedInUserId,
          firstName: loggedInfirstName,
          picturePath: loggedInpicturePath,
          time: time,
        }),
      }
    );
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
    setComment(""); // Clear the comment input field
  };

  const handleDeleteClick = () => {
    onDelete(postId);
    setTimeout(() => {
      window.location.reload();
    }, 1000); // reload after 1 second (adjust as needed)
  };
  const Time = new Date(createdAt);
  const day = Time.getDate();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[Time.getMonth()].substring(0, 3); // Get the first 3 characters of the month name
  const year = Time.getFullYear();
  const time = Time.toLocaleTimeString();
  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      {/* <p style={{ position: "flex", textAlign: "right" }}>
        {`${day} ${month} ${year} ${time}`}
      </p> */}
      <p style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{`${day} ${month} ${year}`}</span>
        <span>{time}</span>
      </p>

      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`http://localhost:3001/assets/${picturePath}`}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBetween>
        </FlexBetween>

        <FlexBetween gap="0.3rem">
          {loggedInUserId === postUserId && (
            <FlexBetween gap="0.3rem">
              <IconButton onClick={handleDeleteClick}>
                <DeleteOutlined />
              </IconButton>
            </FlexBetween>
          )}

          <IconButton onClick={patchReport}>
            {isReport ? (
              <ReportOff sx={{ color: primary }} />
            ) : (
              <ReportOffOutlined />
            )}
          </IconButton>
          <Typography>{reportCount}</Typography>
        </FlexBetween>
      </FlexBetween>

      {isComments && (
        <Box mt="0.5rem" mb="1rem" display="flex" flexDirection="column">
          {comments.map((comment, i) => (
            <Box
              key={`${name}-${i}`}
              display="flex"
              alignItems="center"
              mb="1rem"
            >
              <a href={`/profile/${comment.userId}`}>
                <img
                  src={`http://localhost:3001/assets/${comment.picturePath}`}
                  alt=""
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    marginRight: "0.5rem",
                  }}
                  width={"40px"}
                  height={"40px"}
                />
              </a>
              <Typography sx={{ color: main, m: "0.5rem 0", fontSize: "16px" }}>
                {comment.firstName}: {comment.comment} <br />{" "}
                <Typography sx={{ fontSize: "12  px" }}>
                  {" "}
                  {comment.time}
                </Typography>
              </Typography>
              <Divider />
            </Box>
          ))}
          <Box mt="1rem">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={(event) => {
                if (event.keyCode === 13) {
                  // 13 is the keyCode for the Enter key
                  handleComment();
                }
              }}
            />
          </Box>
        </Box>
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;









































































































// import {
//   ChatBubbleOutlineOutlined,
//   FavoriteBorderOutlined,
//   FavoriteOutlined,
//   ReportOff,
//   ReportOffOutlined,
//   DeleteOutlined
// } from "@mui/icons-material";
// import {  TextField } from "@mui/material";
// import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
// import FlexBetween from "components/FlexBetween";
// import Friend from "components/Friend";
// import WidgetWrapper from "components/WidgetWrapper";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setPost } from "state";

// const PostWidget = ({
//   postId,
//   postUserId,
//   name,
//   description,
//   location,
//   picturePath,
//   userPicturePath,
//   likes,
//   comments, 
//   createdAt,
//   report, 
//   onDelete

// }) => {
//   const [isComments, setIsComments] = useState(false);
//   const dispatch = useDispatch();
//   const token = useSelector((state) => state.token);
//   const loggedInUserId = useSelector((state) => state.user._id);
//   const loggedInfirstName = useSelector((state) => state.user.firstName);
//   const loggedInpicturePath = useSelector((state) => state.user.picturePath);

//   const isLiked = Boolean(likes[loggedInUserId]);
//   const likeCount = Object.keys(likes).length;

//   const isReport = Boolean(report?.[loggedInUserId]);
//   const reportCount = Object.keys(report ?? {}).length;

//   const [comment, setComment] = useState("");

  

//   const Time = new Date(createdAt);
//   const date = Time.toLocaleDateString();
//   const time = Time.toLocaleTimeString();

//   const { palette } = useTheme();
//   const main = palette.neutral.main;
//   const primary = palette.primary.main;

//   const patchLike = async () => {
//     const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
//       method: "PATCH",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ userId: loggedInUserId }),
//     });
//     const updatedPost = await response.json();
//     dispatch(setPost({ post: updatedPost }));
//   };

//   const patchReport = async () => {
//     const response = await fetch(`http://localhost:3001/posts/${postId}/report`, {
//       method: "PATCH",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ userId: loggedInUserId }),
//     });
//     const updatedPost = await response.json();
//     dispatch(setPost({ post: updatedPost }));
//   };

  
//   const handleComment = async () => {
//     if (comment.trim() === "") {
//       return; // Do nothing if comment is empty or only contains white space
//     }
    
//     const response = await fetch(`http://localhost:3001/posts/${postId}/comments`, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({  comment : comment , userId: loggedInUserId , firstName : loggedInfirstName , picturePath : loggedInpicturePath , time : time}),
//     });
//     const updatedPost = await response.json();
//     dispatch(setPost({ post: updatedPost }));
//     setComment(""); // Clear the comment input field
//   };

  

//   const handleDeleteClick = () => {
//     onDelete(postId);
//     setTimeout(() => {
//       window.location.reload();
//     }, 1000); // reload after 1 second (adjust as needed)
//   };

//   return (
//     <WidgetWrapper m="2rem 0">
//       <Friend
//         friendId={postUserId}
//         name={name}
//         subtitle={location}
//         userPicturePath={userPicturePath}
        
//       />
//        <p style={{position : "flex" , textAlign: 'right' }}>  {date} {time}</p>
//       <Typography color={main} sx={{ mt: "1rem" }}>
//         {description}
        
//       </Typography>
//       {picturePath && (
//         <img
//           width="100%"
//           height="auto"
//           alt="post"
//           style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
//           src={`http://localhost:3001/assets/${picturePath}`}
//         />
//       )}
//       <FlexBetween mt="0.25rem">
//         <FlexBetween gap="1rem">
//           <FlexBetween gap="0.3rem">
//             <IconButton onClick={patchLike}>
//               {isLiked ? (
//                 <FavoriteOutlined sx={{ color: primary }} />
//               ) : (
//                 <FavoriteBorderOutlined />
//               )}
//             </IconButton>
//             <Typography>{likeCount}</Typography>
//           </FlexBetween>

//           <FlexBetween gap="0.3rem">
//             <IconButton onClick={() => setIsComments(!isComments)}>
//               <ChatBubbleOutlineOutlined />
//             </IconButton>
//             <Typography>{comments.length}</Typography>
//           </FlexBetween>
//         </FlexBetween>

//           <FlexBetween gap="0.3rem">
//           {loggedInUserId === postUserId && (
//   <FlexBetween gap="0.3rem">
//     <IconButton onClick={handleDeleteClick}>
//       <DeleteOutlined />
//     </IconButton>
//   </FlexBetween>
// )}


//             <IconButton onClick={patchReport}>
//               {isReport ? (
//                 <ReportOff sx={{ color: primary }} />
//               ) : (
//                 <ReportOffOutlined />
//               )}
//             </IconButton>
//             <Typography>{reportCount}</Typography>
            
//           </FlexBetween>

          
          
        
//       </FlexBetween>

      

//       {isComments && (
//  <Box mt="0.5rem" mb="1rem" display="flex" flexDirection="column">
//  {comments.map((comment, i) => (
//    <Box key={`${name}-${i}`} display="flex" alignItems="center" mb="1rem">
//      <a href={`/profile/${comment.userId}`}>
//      <img
//        src={`http://localhost:3001/assets/${comment.picturePath}`}
//        alt=""
//        style={{ objectFit: "cover", borderRadius: "50%", marginRight: "0.5rem" }}
//        width={"40px"}
//        height={"40px"}
//      /></a>
//      <Typography sx={{ color: main, m: "0.5rem 0" , fontSize  : "16px" }}>
//        {comment.firstName}: {comment.comment}  <br  />  <Typography sx={{fontSize  : "12  px"}}> {comment.time}</Typography>
//      </Typography>
//         <Divider />
//       </Box>
//     ))}
//     <Box mt="1rem">
//       <TextField 
//         fullWidth 
//         variant="outlined" 
//         placeholder="Write a comment..." 
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//         onKeyDown={event => {
//           if (event.keyCode === 13) { // 13 is the keyCode for the Enter key
//             handleComment();
//           }
//         }}
//       />
//     </Box>
//   </Box>
// )}


//     </WidgetWrapper>
//   );
// };

// export default PostWidget;
