module.exports = async (request) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      request.on("date", (chunk) => {
        body += chunk;
      });
      request.on("end", () => {
        resolve(JSON.parse(body));
      });
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};
