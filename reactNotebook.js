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

/*********************************************************************************************************************/
/*********************************************************************************************************************/
/*********************************************************************************************************************/
// Define action types
const ADD_ITEM = "ADD_ITEM";
const UPDATE_ITEM = "UPDATE_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

// Define action creators
export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item,
  };
}

export function updateItem(item) {
  return {
    type: UPDATE_ITEM,
    payload: item,
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
}

// Define reducer
const initialState = {
  items: [],
};

export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem, deleteItem } from "./itemReducer";

function ItemList() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  function handleAddItem() {
    const newItem = { id: Math.random(), name: "New Item" };
    dispatch(addItem(newItem));
  }

  function handleUpdateItem(item) {
    const updatedItem = { ...item, name: "Updated Item" };
    dispatch(updateItem(updatedItem));
  }

  function handleDeleteItem(id) {
    dispatch(deleteItem(id));
  }

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => handleUpdateItem(item)}>Update</button>
          <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
/*********************************************************************************************************************/
/*********************************************************************************************************************/
/*********************************************************************************************************************/
// // src/interfaces/Item.ts
// export default interface Item {
//     id: number;
//     name: string;
//     description: string;
//   }
// // src/components/ItemList.tsx
// import React, { useState, useEffect } from "react";
// import Item from "../interfaces/Item";

// const ItemList: React.FC = () => {
//   const [items, setItems] = useState<Item[]>([]);

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     const response = await fetch("/api/items");
//     const data = await response.json();
//     setItems(data);
//   };

//   return (
//     <div>
//       <h1>Items</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <h3>{item.name}</h3>
//             <p>{item.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ItemList;

// // src/components/AddItem.tsx
// import React, { useState } from "react";
// import Item from "../interfaces/Item";

// const AddItem: React.FC = () => {
//   const [item, setItem] = useState<Item>({ id: 0, name: "", description: "" });

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     await fetch("/api/items", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(item),
//     });
//     setItem({ id: 0, name: "", description: "" });
//   };

//   return (
//     <div>
//       <h1>Add Item</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={item.name}
//           onChange={(event) =>
//             setItem({ ...item, name: event.target.value })
//           }
//         />
//         <textarea
//           value={item.description}
//           onChange={(event) =>
//             setItem({ ...item, description: event.target.value })
//           }
//         />
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// };

// export default AddItem;

// // src/components/EditItem.tsx
// import React, { useState, useEffect } from "react";
// import { RouteComponentProps } from "react-router-dom";
// import Item from "../interfaces/Item";

// interface RouteParams {
//   id: string;
// }

// const EditItem: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
//   const [item, setItem] = useState<Item>({ id: 0, name: "", description: "" });

//   useEffect(() => {
//     fetchItem();
//   }, []);

//   const fetchItem = async () => {
//     const response = await fetch(`/api/items/${match.params.id}`);
//     const data = await response.json();
//     setItem(data);
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     await fetch(`/api/items/${match.params.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(item),
//     });
//   };

//   return (
//     <div>
//       <h1>Edit Item</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={item.name}
//           onChange={(event) =>
//             setItem({ ...item, name: event.target.value })
//           }
//         />
//         <textarea
//           value={item.description}
//           onChange={(event) =>
//             setItem({ ...item, description: event.target.value })
//           }
//         />
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// };

// export default EditItem;

// // src/components/ItemList.tsx
// import React, { useEffect, useState } from "react";
// import Item from "../interfaces/Item";

// const ItemList: React.FC = () => {
//   const [items, setItems] = useState<Item[]>([]);

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     const response = await fetch("/api/items");
//     const data = await response.json();
//     setItems(data);
//   };

//   const handleDelete = async (id: number) => {
//     await fetch(`/api/items/${id}`, {
//       method: "DELETE",
//     });
//     setItems(items.filter((item) => item.id !== id));
//   };

//   return (
//     <div>
//       <h1>Item List</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.name} ({item.description})
//             <button onClick={() => handleDelete(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ItemList;

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

// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_APP_ID"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     const weatherData = JSON.parse(data);
//     console.log(weatherData);
//   });

/*********************************************************************************************************************/
/*********************************************************************************************************************/
/*********************************************************************************************************************/

// // Store user preferences in localStorage
// function saveUserPreferences() {
//     const preferences = {
//       theme: 'dark',
//       fontSize: '16px',
//       showNotifications: true
//     };

//     // Convert preferences to a JSON string
//     const preferencesJSON = JSON.stringify(preferences);

//     // Store preferences in localStorage
//     localStorage.setItem('userPreferences', preferencesJSON);
//   }

//   // Retrieve user preferences from localStorage
//   function getUserPreferences() {
//     // Retrieve preferences from localStorage
//     const preferencesJSON = localStorage.getItem('userPreferences');

//     if (preferencesJSON) {
//       // Convert JSON string back to an object
//       const preferences = JSON.parse(preferencesJSON);

//       // Use the preferences object
//       console.log('Theme:', preferences.theme);
//       console.log('Font Size:', preferences.fontSize);
//       console.log('Show Notifications:', preferences.showNotifications);
//     } else {
//       console.log('No user preferences found.');
//     }
//   }

//   // Call the functions
//   saveUserPreferences();
//   getUserPreferences();

/*********************************************************************************************************************/
/*********************************************************************************************************************/
/*********************************************************************************************************************/

// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const LoginSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string().required("Required"),
// });

// const LoginForm = () => (
//   <div>
//     <h1>Login</h1>
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       validationSchema={LoginSchema}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <div>
//             <label htmlFor="email">Email</label>
//             <Field type="email" name="email" />
//             <ErrorMessage name="email" />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <Field type="password" name="password" />
//             <ErrorMessage name="password" />
//           </div>
//           <button type="submit" disabled={isSubmitting}>
//             Login
//           </button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );

// export default LoginForm;

/*********************************************************************************************************************/
/*********************************************************************************************************************/
/*********************************************************************************************************************/

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_URL = "http://localhost:3000/api";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   useEffect(() => {
//     getTodos();
//   }, []);

//   const getTodos = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/todos`);
//       setTodos(response.data);
//     } catch (error) {
//       console.error("Error fetching todos:", error);
//     }
//   };

//   const addTodo = async () => {
//     try {
//       const response = await axios.post(`${API_URL}/todos`, {
//         title,
//         description,
//       });
//       setTodos([...todos, response.data]);
//       setTitle("");
//       setDescription("");
//     } catch (error) {
//       console.error("Error adding todo:", error);
//     }
//   };

//   const updateTodo = async (id) => {
//     try {
//       const response = await axios.put(`${API_URL}/todos/${id}`, {
//         title,
//         description,
//       });
//       const updatedTodos = todos.map((todo) => {
//         if (todo._id === id) {
//           return response.data;
//         }
//         return todo;
//       });
//       setTodos(updatedTodos);
//       setTitle("");
//       setDescription("");
//     } catch (error) {
//       console.error("Error updating todo:", error);
//     }
//   };

//   const deleteTodo = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/todos/${id}`);
//       const filteredTodos = todos.filter((todo) => todo._id !== id);
//       setTodos(filteredTodos);
//     } catch (error) {
//       console.error("Error deleting todo:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Todos</h1>
//       <form onSubmit={(event) => event.preventDefault()}>
//         <input
//           type="text"
//           value={title}
//           onChange={(event) => setTitle(event.target.value)}
//           placeholder="Title"
//         />
//         <input
//           type="text"
//           value={description}
//           onChange={(event) => setDescription(event.target.value)}
//           placeholder="Description"
//         />
//         <button onClick={addTodo}>Add Todo</button>
//       </form>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo._id}>
//             <h2>{todo.title}</h2>
//             <p>{todo.description}</p>
//             <button onClick={() => updateTodo(todo._id)}>Update</button>
//             <button onClick={() => deleteTodo(todo._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

/*********************************************************************************************************************/
/*********************************************************************************************************************/
/*********************************************************************************************************************/

// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .max(15, "Must be 15 characters or less")
//     .required("Required"),
//   lastName: Yup.string()
//     .max(20, "Must be 20 characters or less")
//     .required("Required"),
//   email: Yup.string().email("Invalid email address").required("Required"),
//   password: Yup.string()
//     .min(6, "Must be at least 6 characters")
//     .required("Required"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .required("Required"),
// });

// function SignupForm() {
//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <Formik
//         initialValues={{
//           firstName: "",
//           lastName: "",
//           email: "",
//           password: "",
//           confirmPassword: "",
//         }}
//         validationSchema={validationSchema}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <label htmlFor="firstName">First Name</label>
//             <Field type="text" name="firstName" />
//             <ErrorMessage name="firstName" />

//             <label htmlFor="lastName">Last Name</label>
//             <Field type="text" name="lastName" />
//             <ErrorMessage name="lastName" />

//             <label htmlFor="email">Email Address</label>
//             <Field type="email" name="email" />
//             <ErrorMessage name="email" />

//             <label htmlFor="password">Password</label>
//             <Field type="password" name="password" />
//             <ErrorMessage name="password" />

//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <Field type="password" name="confirmPassword" />
//             <ErrorMessage name="confirmPassword" />

//             <button type="submit" disabled={isSubmitting}>
//               Sign Up
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }
// export default SignupForm;

/*********************************************************************************************************************/
/*********************************************************************************************************************/
/*********************************************************************************************************************/

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h2>Signup</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit">Sign up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
