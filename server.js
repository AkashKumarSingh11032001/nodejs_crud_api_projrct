const http = require("http");
require("dotenv").config();

const getReq = require("./methods/get-request");
const postReq = require("./methods/post-request");
const putReq = require("./methods/put-request");
const deleteReq = require("./methods/delete-request");
let movies = require("./data/movies.json")


const PORT = process.env.PORT || 5001;

// simple server creation----
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");
//   res.write(
//     JSON.stringify({ message: "Hello I m your server, Up and Running!" })
//   );
//   res.end();
// });

// server.listen(PORT, () => {
//   console.log(`Server running on PORT: ${PORT}`);
// });

const server = http.createServer((req, res) => {
  req.movies = movies
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({ title:"Not Found", message: "Route not found!" })
      );
      res.end();
      break;
  }
});

server.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
