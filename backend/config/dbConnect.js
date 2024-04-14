import mongoose from "mongoose";

export const connectDatabase = () => {
  let DB_URI =
    "mongodb+srv://mrimkkhan:ZhzHDGjSKNHBP7B2@footprintsdata.8f9g34q.mongodb.net/?retryWrites=true&w=majority";

  if (process.env.NODE_ENV === "DEVELOPMENT") DB_URI = process.env.DB_LOCAL_URI;
  if (process.env.NODE_ENV === "PRODUCTION") DB_URI = process.env.DB_URI;

  mongoose.connect(DB_URI).then((con) => {
    console.log(
      `MongoDB Database connected with HOST: ${con?.connection?.host}`
    );
  });
};
