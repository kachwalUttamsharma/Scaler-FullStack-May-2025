// // Given an array of student objects:

// const students = [
//   { name: "Alice", score: 92 },
//   { name: "Bob", score: 80 },
//   { name: "Charlie", score: 60 },
//   { name: "Alice-1", score: 72 },
//   { name: "Bob-1", score: 93 },
//   { name: "Charlie-1", score: 86 },
// ];

// // Write a function that groups them into categories:
// //     "A" (90-100)
// //     "B" (75-89)
// //     "C" (below 75)

// // Return an object like:
// // {
// //   A: ["Alice", "Bob-1"],
// //   B: ["Bob", "Charlie-1"],
// //   C: ["Charlie", "Alice-1"]
// // }

// function categorizeStudents(studentList) {
//   console.log(" studentList : ", studentList);
//   const categories = {
//     A: [],
//     B: [],
//     C: [],
//   };

//   for (let i = 0; i < studentList.length; i++) {
//     if (studentList[i].score >= 90) {
//       categories.A.push(studentList[i].name);
//     } else if (studentList[i].score >= 75 && studentList[i].score <= 89) {
//       categories.B.push(studentList[i].name);
//     } else {
//       categories.C.push(studentList[i].name);
//     }
//   }
//   return categories;
// }

// // console.log(categorizeStudents(students));

// // Create an array of book objects where each book has:

// // { title: "Book Name", author: "Author Name", isAvailable: true }

// // Write functions to:
// //     List all books.
// //     Mark a book as borrowed (isAvailable = false).
// //     Return a book (isAvailable = true).
// //     Find books by a specific author.

// const books = [
//   { title: "Book1", author: "Author1", isAvailable: true },
//   { title: "Book2", author: "Author2", isAvailable: true },
//   { title: "Book3", author: "Author3", isAvailable: true },
//   { title: "Book4", author: "Author4", isAvailable: true },
//   { title: "Book5", author: "Author5", isAvailable: true },
// ];

// function listBooks() {
//   return books;
// }

// // console.log(listBooks());

// function markAsBorrowed(title) {
//   // for-of
//   for (let book of books) {
//     if (book.title === title) {
//       book.isAvailable = false;
//       return book;
//     }
//   }
//   return "Book not found: ";
// }

// // console.log(markAsBorrowed("Book3"));
// // console.log(listBooks());

// function returnBook(title) {
//   for (let book of books) {
//     if (book.title === title) {
//       book.isAvailable = true;
//       return book;
//     }
//   }
//   return "Book not found: ";
// }

// // console.log(returnBook("Book3"));
// // console.log(listBooks());

// function findBookByAuthor(author) {
//   for (let book of books) {
//     if (book.author === author) {
//       return book;
//     }
//   }
//   return "Book with particular author not found: ";
// }

// // console.log(findBookByAuthor("Author5"));
// // console.log(findBookByAuthor("Author7"));

// // Implement secretMessage(secret) that:
// //     Returns a function.
// //     When called, returns the stored secret.
// function secretMessage(secretCode) {
//   const value = secretCode;
//   return function () {
//     return value;
//   };
// }
// const secret = secretMessage("Hidden Code");

// console.log(secret());

// Write a function createCounter(start) that returns an object with:
//     increment(): increases count.
//     decrement(): decreases count.
//     reset(): resets to initial value.

// Approach: Think about whenever your function
// needs to remember a previous value what approach do we follow ?

function createCounter(start) {
  let count = start;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    reset: function () {
      count = start;
      return count;
    },
  };
}

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
