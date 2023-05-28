// <!DOCTYPE html>
// <html>
// <head>
//   <style>
//     .my-element {
//       width: 200px;
//       height: 100px;
//       background-color: red;
//       font-family: Arial, sans-serif;
//       font-size: 16px;
//       color: #ffffff;
//     }
//   </style>
// </head>
// <body>
//   <div id="myDiv" class="my-element">Hello, World!</div>

//   <script>
//     const myDiv = document.getElementById('myDiv');
//     const computedStyle = getComputedStyle(myDiv);

//     console.log(computedStyle.width);             // Output: "200px"
//     console.log(computedStyle.height);            // Output: "100px"
//     console.log(computedStyle.backgroundColor);   // Output: "rgb(255, 0, 0)"
//     console.log(computedStyle.fontFamily);        // Output: "Arial, sans-serif"
//     console.log(computedStyle.fontSize);          // Output: "16px"
//     console.log(computedStyle.color);             // Output: "rgb(255, 255, 255)"
//   </script>
// </body>
// </html>

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

// <!DOCTYPE html>
// <html>
// <head>
//   <title>CRUD App</title>
//   <link rel="stylesheet" type="text/css" href="styles.css">
// </head>
// <body>
//   <h1>CRUD App</h1>

//   <form id="crud-form">
//     <input type="text" id="name-input" placeholder="Name">
//     <input type="text" id="email-input" placeholder="Email">
//     <button type="submit">Add</button>
//   </form>

//   <table id="crud-table">
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Email</th>
//         <th>Action</th>
//       </tr>
//     </thead>
//     <tbody id="table-body">
//     </tbody>
//   </table>

//   <script src="script.js"></script>
// </body>
// </html>

/***********************************************************************************************************/

// body {
//   font-family: Arial, sans-serif;
//   margin: 20px;
// }

// h1 {
//   text-align: center;
// }

// form {
//   margin-bottom: 10px;
// }

// table {
//   width: 100%;
//   border-collapse: collapse;
// }

// th, td {
//   padding: 8px;
//   text-align: left;
//   border-bottom: 1px solid #ddd;
// }

// button {
//   padding: 5px 10px;
// }

/***********************************************************************************************************/

// Data storage
let users = [];

// DOM elements
const form = document.getElementById("crud-form");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const tableBody = document.getElementById("table-body");

// Function to render the user table
function renderTable() {
  tableBody.innerHTML = "";

  users.forEach((user, index) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    const emailCell = document.createElement("td");
    emailCell.textContent = user.email;
    row.appendChild(emailCell);

    const actionCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editUser(index));
    actionCell.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteUser(index));
    actionCell.appendChild(deleteButton);

    row.appendChild(actionCell);

    tableBody.appendChild(row);
  });
}

// Function to add a new user
function addUser(event) {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;

  if (name && email) {
    const newUser = {
      name,
      email,
    };

    users.push(newUser);

    // Clear input fields
    nameInput.value = "";
    emailInput.value = "";

    renderTable();
  }
}

// Function to edit a user
function editUser(index) {
  const user = users[index];
  nameInput.value = user.name;
  emailInput.value = user.email;

  // Remove the user from the array
  users.splice(index, 1);

  renderTable();
}

// Function to delete a user
function deleteUser(index) {
  users.splice(index, 1);

  renderTable();
}

// Event listener to add a new user
form.addEventListener("submit", addUser);

// Render the initial table
renderTable();

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

// // Create a div element
// const div = document.createElement("div");

// // Add some text content to the div
// div.textContent = "Hello, World!";

// // Append the div to the body of the document
// document.body.appendChild(div);

// // Create an image element
// const img = document.createElement("img");

// // Set the source and alt attributes of the image
// img.src = "path/to/image.jpg";
// img.alt = "Description of the image";

// // Append the image to a specific element with an ID
// const container = document.getElementById("image-container");
// container.appendChild(img);

// // Create an unordered list element
// const ul = document.createElement("ul");

// // Create an array of items
// const items = ["Item 1", "Item 2", "Item 3"];

// // Iterate through the items and create list item elements
// items.forEach((item) => {
//   const li = document.createElement("li");
//   li.textContent = item;
//   ul.appendChild(li);
// });

// // Append the list to a specific element with an ID
// const container = document.getElementById("list-container");
// container.appendChild(ul);

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Calculator App</title>
//   <link rel="stylesheet" type="text/css" href="style.css">
// </head>
// <body>
//   <div class="calculator">
//     <input type="text" id="result" readonly>
//     <div class="buttons">
//       <button onclick="clearResult()">C</button>
//       <button onclick="appendNumber(7)">7</button>
//       <button onclick="appendNumber(8)">8</button>
//       <button onclick="appendNumber(9)">9</button>
//       <button onclick="appendOperator('+')">+</button>
//       <button onclick="appendNumber(4)">4</button>
//       <button onclick="appendNumber(5)">5</button>
//       <button onclick="appendNumber(6)">6</button>
//       <button onclick="appendOperator('-')">-</button>
//       <button onclick="appendNumber(1)">1</button>
//       <button onclick="appendNumber(2)">2</button>
//       <button onclick="appendNumber(3)">3</button>
//       <button onclick="appendOperator('*')">*</button>
//       <button onclick="appendNumber(0)">0</button>
//       <button onclick="appendOperator('.')">.</button>
//       <button onclick="calculateResult()">=</button>
//       <button onclick="appendOperator('/')">/</button>
//     </div>
//   </div>

//   <script src="script.js"></script>
// </body>
// </html>

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/
