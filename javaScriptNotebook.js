// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Book CRUD App</title>
//     <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
//   </head>
//   <body>
//     <h1>Book CRUD App</h1>

//     <form id="bookForm">
//       <input type="text" id="title" placeholder="Title" required />
//       <input type="text" id="author" placeholder="Author" required />
//       <button type="submit">Add Book</button>
//     </form>

//     <table id="bookTable">
//       <thead>
//         <tr>
//           <th>Title</th>
//           <th>Author</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody></tbody>
//     </table>

//     <script>
//       // Base URL for the API
//       const apiUrl = "http://localhost:3000/books";

//       // Function to fetch all books from the API
//       function fetchBooks() {
//         axios
//           .get(apiUrl)
//           .then((response) => {
//             const books = response.data;
//             const bookTable = document.getElementById("bookTable");
//             const tbody = bookTable.getElementsByTagName("tbody")[0];

//             // Clear the table body
//             tbody.innerHTML = "";

//             // Populate the table with books
//             books.forEach((book) => {
//               const row = tbody.insertRow();
//               row.innerHTML = `
//               <td>${book.title}</td>
//               <td>${book.author}</td>
//               <td>
//                 <button onclick="editBook(${book.id})">Edit</button>
//                 <button onclick="deleteBook(${book.id})">Delete</button>
//               </td>
//             `;
//             });
//           })
//           .catch((error) => {
//             console.error("Error fetching books:", error);
//           });
//       }

//       // Function to add a new book
//       function addBook(title, author) {
//         axios
//           .post(apiUrl, { title, author })
//           .then(() => {
//             // Clear the form fields
//             document.getElementById("title").value = "";
//             document.getElementById("author").value = "";

//             // Fetch the updated book list
//             fetchBooks();
//           })
//           .catch((error) => {
//             console.error("Error adding book:", error);
//           });
//       }

//       // Function to edit a book
//       function editBook(id) {
//         const newTitle = prompt("Enter the new title:");
//         const newAuthor = prompt("Enter the new author:");

//         axios
//           .put(`${apiUrl}/${id}`, { title: newTitle, author: newAuthor })
//           .then(() => {
//             // Fetch the updated book list
//             fetchBooks();
//           })
//           .catch((error) => {
//             console.error("Error updating book:", error);
//           });
//       }

//       // Function to delete a book
//       function deleteBook(id) {
//         axios
//           .delete(`${apiUrl}/${id}`)
//           .then(() => {
//             // Fetch the updated book list
//             fetchBooks();
//           })
//           .catch((error) => {
//             console.error("Error deleting book:", error);
//           });
//       }

//       // Event listener for form submission
//       const bookForm = document.getElementById("bookForm");
//       bookForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const title = document.getElementById("title").value;
//         const author = document.getElementById("author").value;
//         addBook(title, author);
//       });

//       // Fetch books on page load
//       fetchBooks();
//     </script>
//   </body>
// </html>

/**********************************************************************************************************************************/
/**********************************************************************************************************************************/
/**********************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Insert Row Example</title>
//   </head>
//   <body>
//     <h1>Insert Row Example</h1>

//     <table id="myTable">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>John</td>
//           <td>25</td>
//         </tr>
//         <tr>
//           <td>Jane</td>
//           <td>30</td>
//         </tr>
//       </tbody>
//     </table>

//     <button onclick="insertRow()">Insert Row</button>

//     <script>
//       function insertRow() {
//         const table = document.getElementById("myTable");
//         const tbody = table.getElementsByTagName("tbody")[0];
//         const newRow = tbody.insertRow();

//         const nameCell = newRow.insertCell();
//         nameCell.textContent = "Alex";

//         const ageCell = newRow.insertCell();
//         ageCell.textContent = "35";
//       }
//     </script>
//   </body>
// </html>

/**********************************************************************************************************************************/
/**********************************************************************************************************************************/
/**********************************************************************************************************************************/

// fetch('/api/items')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

//   fetch('/api/items', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name: 'New Item', description: 'Description of the new item' })
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// // PUT request
// fetch('/api/items/1', {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name: 'Updated Item', description: 'Description of the updated item' })
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

//   // DELETE request
//   fetch('/api/items/1', {
//     method: 'DELETE'
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

/*********************************************************************************************************************/
/*********************************************************************************************************************/
/*********************************************************************************************************************/

// const myObj = { name: 'John', age: 30 };
// const myJSONString = JSON.stringify(myObj);
// console.log(myJSONString); // Outputs '{"name":"John","age":30}'

// const myJSONString = '{"name":"John","age":30}';
// const myObj = JSON.parse(myJSONString);
// console.log(myObj); // Outputs { name: 'John', age: 30 }

/*********************************************************************************************************************/
/*********************************************************************************************************************/
/*********************************************************************************************************************/

// // Store user preferences in localStorage
// function saveUserPreferences() {
//   const preferences = {
//     theme: "dark",
//     fontSize: "16px",
//     showNotifications: true,
//   };

//   // Convert preferences to a JSON string
//   const preferencesJSON = JSON.stringify(preferences);

//   // Store preferences in localStorage
//   localStorage.setItem("userPreferences", preferencesJSON);
// }

// // Retrieve user preferences from localStorage
// function getUserPreferences() {
//   // Retrieve preferences from localStorage
//   const preferencesJSON = localStorage.getItem("userPreferences");

//   if (preferencesJSON) {
//     // Convert JSON string back to an object
//     const preferences = JSON.parse(preferencesJSON);

//     // Use the preferences object
//     console.log("Theme:", preferences.theme);
//     console.log("Font Size:", preferences.fontSize);
//     console.log("Show Notifications:", preferences.showNotifications);
//   } else {
//     console.log("No user preferences found.");
//   }
// }

// // Call the functions
// saveUserPreferences();
// getUserPreferences();

/*********************************************************************************************************************/
/*********************************************************************************************************************/
/*********************************************************************************************************************/
