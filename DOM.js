// <!DOCTYPE html>
// <html>
//   <head>
//     <title>parentNode example</title>
//   </head>
//   <body>
//     <div>
//       <p>Some text</p>
//     </div>

//     <script>
//       const paragraph = document.querySelector("p");
//       const parentDiv = paragraph.parentNode;
//       console.log(parentDiv.tagName); // Output: "DIV"
//     </script>
//   </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>nextElementSibling example</title>
//   </head>
//   <body>
//     <div>
//       <p>First paragraph</p>
//       <p>Second paragraph</p>
//       <p>Third paragraph</p>
//     </div>

//     <script>
//       const firstParagraph = document.querySelector("p");
//       const nextParagraph = firstParagraph.nextElementSibling;
//       console.log(nextParagraph.textContent); // Output: "Second paragraph"
//     </script>
//   </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>previousElementSibling example</title>
//   </head>
//   <body>
//     <div>
//       <p>First paragraph</p>
//       <p>Second paragraph</p>
//       <p>Third paragraph</p>
//     </div>

//     <script>
//       const secondParagraph = document.querySelector("p:nth-of-type(2)");
//       const previousParagraph = secondParagraph.previousElementSibling;
//       console.log(previousParagraph.textContent); // Output: "First paragraph"
//     </script>
//   </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Get all siblings example</title>
//   </head>
//   <body>
//     <div>
//       <p>First paragraph</p>
//       <p>Second paragraph</p>
//       <p>Third paragraph</p>
//     </div>

//     <script>
//       const secondParagraph = document.querySelector("p:nth-of-type(2)");
//       const siblings = [];

//       let currentNode = secondParagraph.parentNode.firstChild;
//       while (currentNode) {
//         if (currentNode.nodeType === Node.ELEMENT_NODE && currentNode !== secondParagraph) {
//           siblings.push(currentNode);
//         }
//         currentNode = currentNode.nextSibling;
//       }

//       console.log(siblings); // Output: [<p>First paragraph</p>, <p>Third paragraph</p>]
//     </script>
//   </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>nodeName example</title>
//   </head>
//   <body>
//     <div>
//       <p>First paragraph</p>
//       <p>Second paragraph</p>
//       <p>Third paragraph</p>
//     </div>

//     <script>
//       const p = document.querySelector("p");
//       console.log(p.nodeName); // Output: "P"

//       const textNode = p.firstChild;
//       console.log(textNode.nodeName); // Output: "#text"

//       const commentNode = document.createComment("This is a comment");
//       console.log(commentNode.nodeName); // Output: "#comment"
//     </script>
//   </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>firstChild example</title>
//   </head>
//   <body>
//     <div>
//       <p>First paragraph</p>
//       <p>Second paragraph</p>
//       <p>Third paragraph</p>
//     </div>

//     <script>
//       const div = document.querySelector("div");
//       const firstChild = div.firstChild;
//       console.log(firstChild.nodeName); // Output: "#text"
//       console.log(firstChild.nextSibling.nodeName); // Output: "p"
//     </script>
//   </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>lastChild example</title>
//   </head>
//   <body>
//     <div>
//       <p>First paragraph</p>
//       <p>Second paragraph</p>
//       <p>Third paragraph</p>
//     </div>

//     <script>
//       const div = document.querySelector("div");
//       const lastChild = div.lastChild;
//       console.log(lastChild.nodeName); // Output: "#text"
//       console.log(lastChild.previousSibling.nodeName); // Output: "p"
//     </script>
//   </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>firstElementChild example</title>
//   </head>
//   <body>
//     <div>
//       <p>First paragraph</p>
//       <p>Second paragraph</p>
//       <p>Third paragraph</p>
//     </div>

//     <script>
//       const div = document.querySelector("div");
//       const firstElementChild = div.firstElementChild;
//       console.log(firstElementChild.nodeName); // Output: "P"
//     </script>
//   </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>lastElementChild example</title>
//   </head>
//   <body>
//     <div>
//       <p>First paragraph</p>
//       <p>Second paragraph</p>
//       <p>Third paragraph</p>
//     </div>

//     <script>
//       const div = document.querySelector("div");
//       const lastElementChild = div.lastElementChild;
//       console.log(lastElementChild.nodeName); // Output: "P"
//     </script>
//   </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>NodeList example</title>
//   </head>
//   <body>
//     <div>
//       <p>First paragraph</p>
//       <p>Second paragraph</p>
//       <p>Third paragraph</p>
//     </div>

//     <script>
//       const div = document.querySelector("div");
//       const paragraphs = div.querySelectorAll("p");
//       console.log(paragraphs.length); // Output: 3
//       console.log(paragraphs[0].textContent); // Output: "First paragraph"
//     </script>
//   </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
// <head>
//   <title>CreateElement Example</title>
// </head>
// <body>
//   <button id="addButton">Add Element</button>
//   <div id="container"></div>

//   <script>
//     // Get the button and container elements
//     const addButton = document.getElementById('addButton');
//     const container = document.getElementById('container');

//     // Event listener for the button click
//     addButton.addEventListener('click', () => {
//       // Create a new <p> element
//       const paragraph = document.createElement('p');

//       // Set some content for the paragraph
//       paragraph.textContent = 'This is a dynamically created paragraph.';

//       // Append the paragraph to the container
//       container.appendChild(paragraph);
//     });
//   </script>
// </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
// <head>
//   <title>appendChild Example</title>
// </head>
// <body>
//   <div id="parent">
//     <p>This is the parent element.</p>
//   </div>

//   <script>
//     // Get the parent element
//     const parent = document.getElementById('parent');

//     // Create a new child element
//     const child = document.createElement('span');
//     child.textContent = 'This is the child element.';

//     // Append the child element to the parent
//     parent.appendChild(child);
//   </script>
// </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
// <head>
//   <title>createTextNode Example</title>
//   <script>
//     function addText() {
//       const element = document.getElementById("myElement");
//       const textNode = document.createTextNode("Hello, world!");
//       element.appendChild(textNode);
//     }
//   </script>
// </head>
// <body>
//   <h1 id="myElement">Initial Text</h1>
//   <button onclick="addText()">Add Text</button>
// </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Append Child Example</title>
// </head>
// <body>
//   <ul id="todoList">
//     <li>Buy groceries</li>
//     <li>Do laundry</li>
//   </ul>

//   <form id="todoForm">
//     <input type="text" id="taskInput" placeholder="Enter a new task">
//     <button type="submit">Add Task</button>
//   </form>

//   <script>
//     const todoForm = document.getElementById("todoForm");
//     const taskInput = document.getElementById("taskInput");
//     const todoList = document.getElementById("todoList");

//     todoForm.addEventListener("submit", function(event) {
//       event.preventDefault();

//       const task = taskInput.value;

//       if (task) {
//         const newTask = document.createElement("li");
//         const textNode = document.createTextNode(task);
//         newTask.appendChild(textNode);
//         todoList.appendChild(newTask);
//         taskInput.value = "";
//       }
//     });
//   </script>
// </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Append Child Example</title>
// </head>
// <body>
//   <ul id="todoList">
//     <li>Buy groceries</li>
//     <li>Do laundry</li>
//   </ul>

//   <form id="todoForm">
//     <input type="text" id="taskInput" placeholder="Enter a new task">
//     <button type="submit">Add Task</button>
//   </form>

//   <script>
//     const todoForm = document.getElementById("todoForm");
//     const taskInput = document.getElementById("taskInput");
//     const todoList = document.getElementById("todoList");

//     todoForm.addEventListener("submit", function(event) {
//       event.preventDefault();

//       const task = taskInput.value;

//       if (task) {
//         const newTask = document.createElement("li");
//         const textNode = document.createTextNode(task);
//         newTask.appendChild(textNode);
//         todoList.appendChild(newTask);
//         taskInput.value = "";
//       }
//     });
//   </script>
// </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
// <head>
//   <title>textContent Example</title>
// </head>
// <body>
//   <h1 id="greeting">Hello, World!</h1>

//   <button id="changeButton">Change Greeting</button>

//   <script>
//     const changeButton = document.getElementById("changeButton");
//     const greetingElement = document.getElementById("greeting");

//     changeButton.addEventListener("click", function() {
//       greetingElement.textContent = "Welcome to our website!";
//     });
//   </script>
// </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
// <head>
//   <title>innerText Example</title>
// </head>
// <body>
//   <div id="messageContainer">
//     <p>Welcome to our website!</p>
//     <button id="hideButton">Hide Message</button>
//     <button id="showButton">Show Message</button>
//   </div>

//   <script>
//     const hideButton = document.getElementById("hideButton");
//     const showButton = document.getElementById("showButton");
//     const messageContainer = document.getElementById("messageContainer");

//     hideButton.addEventListener("click", function() {
//       messageContainer.innerText = "";
//     });

//     showButton.addEventListener("click", function() {
//       messageContainer.innerText = "Welcome to our website!";
//     });
//   </script>
// </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
// <head>
//   <title>DocumentFragment Example</title>
// </head>
// <body>
//   <ul id="productList"></ul>

//   <script>
//     // Sample data representing a list of products
//     const products = [
//       { id: 1, name: "Product 1", price: 10 },
//       { id: 2, name: "Product 2", price: 20 },
//       { id: 3, name: "Product 3", price: 30 }
//     ];

//     // Get the product list element
//     const productList = document.getElementById("productList");

//     // Create a document fragment
//     const fragment = document.createDocumentFragment();

//     // Iterate through the products and create list items
//     products.forEach(function(product) {
//       const listItem = document.createElement("li");
//       listItem.textContent = product.name + " - $" + product.price;
//       fragment.appendChild(listItem);
//     });

//     // Append the document fragment to the product list element
//     productList.appendChild(fragment);
//   </script>
// </body>
// </html>

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>DocumentFragment Example</title>
//   </head>
//   <body>
//     <div id="container"></div>
//   </body>
// </html>

// // Create a DocumentFragment
// const fragment = document.createDocumentFragment();

// // Create multiple elements and append them to the fragment
// const element1 = document.createElement('p');
// element1.textContent = 'This is paragraph 1.';
// fragment.appendChild(element1);

// const element2 = document.createElement('p');
// element2.textContent = 'This is paragraph 2.';
// fragment.appendChild(element2);

// // Access the container element in the document
// const container = document.getElementById('container');

// // Append the fragment to the container, which will trigger a single reflow
// container.appendChild(fragment);

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/

/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/
