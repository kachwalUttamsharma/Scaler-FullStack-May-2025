const errorHandler1 = (err, req, res, next) => {
  console.log("from error handler ", err);
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log("StatusCode ", statusCode);
  res.status(statusCode);
  switch (statusCode) {
    case 401:
      res.json({
        title: "Unauthorized",
        message: err.message || "You dont have access to do such operation",
      });
      break;
    case 404:
      res.json({
        title: "Not Found",
        message: err.message,
      });
      break;
    case 500:
      res.json({
        title: "Server Error",
        message: err.message,
      });
      break;
    default:
      break;
  }
};

const errorHandler = (err, req, res, next) => {
  console.log("from error handler ", err);
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log("StatusCode ", statusCode);
  res.status(statusCode);
  switch (statusCode) {
    case 401:
      res.json({
        title: "Unauthorized",
        message: err.message || "You dont have access to do such operation",
      });
      break;
    case 404:
      res.json({
        title: "Not Found",
        message: err.message,
      });
      break;
    case 500:
      res.json({
        title: "Server Error",
        message: err.message,
      });
      break;
    default:
      break;
  }
};

module.exports = {
  errorHandler,
  errorHandler1,
};

// database ?
// sql -> table using schema, tuple or rows
// no sql ->

// products Tables
// T-shirt
// {
//     name: "Tshirt",
//     price: "299",
//     availableSizes: ["S", "M", "L"]
// }
// Book
// {
//     name: "Book",
//     price: 499,
//     author: "xxxx"
// }

// key:value (redis)
// graph
// wide column
// document

// collections - Table
// documents - Rows

// password : 0d2heUtjy2kE1Owa
