import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    friends: [],
    location: "San Fran, CA",
    occupation: "Software Engineer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Rahul",
    lastName: "Yadav",
    email: "rahul@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpeg",
    friends: [],
    location: "Mumbai",
    occupation: "Ethical Hacker",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "John",
    lastName: "Verma",
    email: "john@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p4.jpeg",
    friends: [],
    location: "Prayagraj",
    occupation: "Data Scientist",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Nimita",
    lastName: "Bisht",
    email: "nimita@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p6.jpeg",
    friends: [],
    location: "Chennai",
    occupation: "Educator",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Priti",
    lastName: "Srivastava",
    email: "priti@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p5.jpeg",
    friends: [],
    location: "Patna",
    occupation: "Web Developer",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Mahesh",
    lastName: "Kumar",
    email: "mahesh@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p7.jpeg",
    friends: [],
    location: "Kanpur",
    occupation: "Journalist",
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Chitra",
    lastName: "Dixit",
    email: "chitra@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p8.jpeg",
    friends: [],
    location: "Noida",
    occupation: "Nurse",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Vishakha",
    lastName: "Gupta",
    email: "vishakha@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p9.jpeg",
    friends: [],
    location: "Bangalore",
    occupation: "A Student",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
  {
    _id: userIds[8],
    firstName: "Admin",
    lastName: "Panel",
    email: "admin@gmail.com",
    //password: "$2b$10$KOOHnKxsNYSymllieTOZJepvJ0R/R3kSW4ORKd4G8GNEOHtOTzPbm",
    password: "$2b$10$3H4GMsZ4r454K8Jm4ejA2ugvbdOav5a06u9U6nr0B8xfXI55dHdTa",
    picturePath: "p11.jpeg",
    friends: [],
    location: "Nagpur",
    occupation: "Admin",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];
export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Rahul",
    lastName: "Yadav",
    location: "Mumbai",
    description: "Bringing a taste of heaven to your table. 👼🍽",
    picturePath: "post1.jpeg",
    userPicturePath: "p3.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [],
    report: new Map([]),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Nimita",
    lastName: "Bisht",
    location: "Chennai",
    description: "Savoring every bite of this delicious masterpiece. 🍽😋",
    picturePath: "post2.jpeg",
    userPicturePath: "p6.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [],
    report: new Map([]),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Priti",
    lastName: "Srivastava",
    location: "Patna",
    description:
      "Lost in rhythms, music embraces my soul. Dancing through the night, concert euphoria. A symphony of moments, unforgettable memories made🌆🎤",
    picturePath: "post3.jpeg",
    userPicturePath: "p5.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [],
    report: new Map([]),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Mahesh",
    lastName: "Kumar",
    location: "Kanpur",
    description:
      "Gathered under the night sky, we celebrated with awe-inspiring fire dances and breathtaking performances, igniting unforgettable memories in the flames' embrace🎉🔊",
    picturePath: "post4.jpeg",
    userPicturePath: "p7.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [],
    report: new Map([]),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Chitra",
    lastName: "Dixit",
    location: "Noida",
    description:
      "Dressed to the nines, walked the red carpet, and shared the spotlight at the prestigious awards show, where talents and dreams collided💃🕺🎼",
    picturePath: "post5.jpeg",
    userPicturePath: "p8.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [],
    report: new Map([]),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Vishakha",
    lastName: "Gupta",
    location: "Bangalore",
    description:
      "Lost in the hues of goodbye, she found solace in the setting sun, a canvas of serenity painted before her.",
    picturePath: "post6.jpeg",
    userPicturePath: "p9.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),
    report: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [],
  },
];








































































































































































































































































// import mongoose from "mongoose";

// const userIds = [
//   new mongoose.Types.ObjectId(),
//   new mongoose.Types.ObjectId(),
//   new mongoose.Types.ObjectId(),
//   new mongoose.Types.ObjectId(),
//   new mongoose.Types.ObjectId(),
//   new mongoose.Types.ObjectId(),
//   new mongoose.Types.ObjectId(),
//   new mongoose.Types.ObjectId(),
// ];

// export const users = [
//   {
//     _id: userIds[0],
//     firstName: "test",
//     lastName: "me",
//     email: "aaaaaaa@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p11.jpeg",
//     friends: [],
//     location: "San Fran, CA",
//     occupation: "Software Engineer",
//     viewedProfile: 14561,
//     impressions: 888822,
//     createdAt: 1115211422,
//     updatedAt: 1115211422,
//     __v: 0,
//   },
//   {
//     _id: userIds[1],
//     firstName: "Steve",
//     lastName: "Ralph",
//     email: "thataaa@gmail.com",
//     password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p3.jpeg",
//     friends: [],
//     location: "New York, CA",
//     occupation: "Degenerate",
//     viewedProfile: 12351,
//     impressions: 55555,
//     createdAt: 1595589072,
//     updatedAt: 1595589072,
//     __v: 0,
//   },
//   {
//     _id: userIds[2],
//     firstName: "Some",
//     lastName: "Guy",
//     email: "someguy@gmail.com",
//     password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
//     picturePath: "p4.jpeg",
//     friends: [],
//     location: "Canada, CA",
//     occupation: "Data Scientist Hacker",
//     viewedProfile: 45468,
//     impressions: 19986,
//     createdAt: 1288090662,
//     updatedAt: 1288090662,
//     __v: 0,
//   },
//   {
//     _id: userIds[3],
//     firstName: "Whatcha",
//     lastName: "Doing",
//     email: "whatchadoing@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p6.jpeg",
//     friends: [],
//     location: "Korea, CA",
//     occupation: "Educator",
//     viewedProfile: 41024,
//     impressions: 55316,
//     createdAt: 1219214568,
//     updatedAt: 1219214568,
//     __v: 0,
//   },
//   {
//     _id: userIds[4],
//     firstName: "Jane",
//     lastName: "Doe",
//     email: "janedoe@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p5.jpeg",
//     friends: [],
//     location: "Utah, CA",
//     occupation: "Hacker",
//     viewedProfile: 40212,
//     impressions: 7758,
//     createdAt: 1493463661,
//     updatedAt: 1493463661,
//     __v: 0,
//   },
//   {
//     _id: userIds[5],
//     firstName: "Harvey",
//     lastName: "Dunn",
//     email: "harveydunn@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p7.jpeg",
//     friends: [],
//     location: "Los Angeles, CA",
//     occupation: "Journalist",
//     viewedProfile: 976,
//     impressions: 4658,
//     createdAt: 1381326073,
//     updatedAt: 1381326073,
//     __v: 0,
//   },
//   {
//     _id: userIds[6],
//     firstName: "Carly",
//     lastName: "Vowel",
//     email: "carlyvowel@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p8.jpeg",
//     friends: [],
//     location: "Chicago, IL",
//     occupation: "Nurse",
//     viewedProfile: 1510,
//     impressions: 77579,
//     createdAt: 1714704324,
//     updatedAt: 1642716557,
//     __v: 0,
//   },
//   {
//     _id: userIds[7],
//     firstName: "Jessica",
//     lastName: "Dunn",
//     email: "jessicadunn@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p9.jpeg",
//     friends: [],
//     location: "Washington, DC",
//     occupation: "A Student",
//     viewedProfile: 19420,
//     impressions: 82970,
//     createdAt: 1369908044,
//     updatedAt: 1359322268,
//     __v: 0,
//   },
//   {
//     _id: userIds[8],
//     firstName: "Admin",
//     lastName: "Panel",
//     email: "admin@gmail.com",
//     password: "$2b$10$KOOHnKxsNYSymllieTOZJepvJ0R/R3kSW4ORKd4G8GNEOHtOTzPbm",
//     picturePath: "p11.jpeg",
//     friends: [],
//     location: "Kerala",
//     occupation: "Admin",
//     viewedProfile: 19420,
//     impressions: 82970,
//     createdAt: 1369908044,
//     updatedAt: 1359322268,
//     __v: 0,
//   },
// ];

// export const posts = [
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[1],
//     firstName: "Steve",
//     lastName: "Ralph",
//     location: "New York, CA",
//     description: "Some really long random description",
//     picturePath: "post1.jpeg",
//     userPicturePath: "p3.jpeg",
//     likes: new Map([
//       [userIds[0], true],
//       [userIds[2], true],
//       [userIds[3], true],
//       [userIds[4], true],
//     ]),
//     comments: [ 

//     ],
//     report: new Map([

//     ]),
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[3],
//     firstName: "Whatcha",
//     lastName: "Doing",
//     location: "Korea, CA",
//     description:
//       "Another really long random description. This one is longer than the previous one.",
//     picturePath: "post2.jpeg",
//     userPicturePath: "p6.jpeg",
//     likes: new Map([
//       [userIds[7], true],
//       [userIds[4], true],
//       [userIds[1], true],
//       [userIds[2], true],
//     ]),
//     comments: [ 

//     ],
//     report: new Map([

//     ]),
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[4],
//     firstName: "Jane",
//     lastName: "Doe",
//     location: "Utah, CA",
//     description:
//       "This is the last really long random description. This one is longer than the previous one.",
//     picturePath: "post3.jpeg",
//     userPicturePath: "p5.jpeg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[6], true],
//       [userIds[3], true],
//       [userIds[5], true],
//     ]),
//     comments: [ 

//     ],
//     report: new Map([

//     ]),
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[5],
//     firstName: "Harvey",
//     lastName: "Dunn",
//     location: "Los Angeles, CA",
//     description:
//       "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
//     picturePath: "post4.jpeg",
//     userPicturePath: "p7.jpeg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[6], true],
//       [userIds[3], true],
//     ]),
//     comments: [ 

//     ],
//     report: new Map([

//     ]),
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[6],
//     firstName: "Carly",
//     lastName: "Vowel",
//     location: "Chicago, IL",
//     description:
//       "Just a short description. I'm tired of typing. I'm going to play video games now.",
//     picturePath: "post5.jpeg",
//     userPicturePath: "p8.jpeg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[3], true],
//       [userIds[5], true],
//       [userIds[7], true],
//     ]),
//     comments: [ 

//     ],
//     report: new Map([

//     ]),
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[7],
//     firstName: "Jessica",
//     lastName: "Dunn",
//     location: "Washington, DC",
//     description:
//       "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
//     picturePath: "post6.jpeg",
//     userPicturePath: "p9.jpeg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[2], true],
//     ]),
//     report: new Map([
//       [userIds[1], true],
//       [userIds[2], true],
//     ]),

//     comments: [ 

//     ],
//   },
// ];
