//read .env file
require("dotenv").config();
const PORT = 3000;

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const CategoriesRoute = require("./routes/Categories.routes");
const UserRoute = require("./routes/User.routes");
const PostsRoute = require('./routes/Posts.routes')
const CommentsRoute = require('./routes/Comments.routes')
//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/category", CategoriesRoute);
app.use("/user", UserRoute);
app.use("/posts", PostsRoute);
app.use('/comments', CommentsRoute)

app.get("/", (req, res) => {
  res.send("Welcome To Chasing Access API!");
});


//listener when server is running
app.listen(PORT, () => {
  console.log(`Port is listening, currently on ${PORT}`);
});
