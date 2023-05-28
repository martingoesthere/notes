import { getStaticPaths, getStaticProps } from "next";

export async function getStaticPaths() {
  const res = await fetch("https://myapi.com/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://myapi.com/posts/${params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
import { getStaticPaths, getStaticProps } from 'next';
import { getAllPosts } from '../lib/posts';

export default function BlogPost({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
  };
}
/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
import React from 'react';

function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://myapi.com/users/${context.params.id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}

export default UserProfile;
/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
import React from 'react';

function Product({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { productId } = context.params;
  const res = await fetch(`https://myapi.com/products/${productId}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default Product;
/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
const path = require('path');

console.log(__dirname);
console.log(path.join(__dirname, 'myFile.txt'));
/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
const path = require('path');

const fullPath = path.join(__dirname, 'myFolder', 'myFile.txt');
console.log(fullPath); // C:\Users\myUser\myProject\myFolder\myFile.txt

const resolvedPath = path.resolve('myFolder', 'myFile.txt');
console.log(resolvedPath); // C:\Users\myUser\myFolder\myFile.txt

const fileName = path.basename(fullPath);
console.log(fileName); // myFile.txt

const dirName = path.dirname(fullPath);
console.log(dirName); // C:\Users\myUser\myProject\myFolder

const extName = path.extname(fullPath);
console.log(extName); // .txt
/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
const path = require('path');

// Resolving a relative path
const relativePath = path.resolve('folder1', 'folder2', 'file.js');
console.log(relativePath); // /Users/username/working_directory/folder1/folder2/file.js

// Resolving an absolute path
const absolutePath = path.resolve('/var', 'log', 'system.log');
console.log(absolutePath); // /var/log/system.log
/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
// Define action types
const ADD_ITEM = 'ADD_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

// Define action creators
export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}

export function updateItem(item) {
  return {
    type: UPDATE_ITEM,
    payload: item
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    payload: id
  };
}

// Define reducer
const initialState = {
  items: []
};

export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload.id ? action.payload : item)
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem, deleteItem } from './itemReducer';

function ItemList() {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  function handleAddItem() {
    const newItem = { id: Math.random(), name: 'New Item' };
    dispatch(addItem(newItem));
  }

  function handleUpdateItem(item) {
    const updatedItem = { ...item, name: 'Updated Item' };
    dispatch(updateItem(updatedItem));
  }

  function handleDeleteItem(id) {
    dispatch(deleteItem(id));
  }

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      {items.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => handleUpdateItem(item)}>Update</button>
          <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}


/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
// src/interfaces/Item.ts
export default interface Item {
    id: number;
    name: string;
    description: string;
  }
// src/components/ItemList.tsx
import React, { useState, useEffect } from "react";
import Item from "../interfaces/Item";

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch("/api/items");
    const data = await response.json();
    setItems(data);
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;


// src/components/AddItem.tsx
import React, { useState } from "react";
import Item from "../interfaces/Item";

const AddItem: React.FC = () => {
  const [item, setItem] = useState<Item>({ id: 0, name: "", description: "" });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    setItem({ id: 0, name: "", description: "" });
  };

  return (
    <div>
      <h1>Add Item</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item.name}
          onChange={(event) =>
            setItem({ ...item, name: event.target.value })
          }
        />
        <textarea
          value={item.description}
          onChange={(event) =>
            setItem({ ...item, description: event.target.value })
          }
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddItem;


// src/components/EditItem.tsx
import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import Item from "../interfaces/Item";

interface RouteParams {
  id: string;
}

const EditItem: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const [item, setItem] = useState<Item>({ id: 0, name: "", description: "" });

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const response = await fetch(`/api/items/${match.params.id}`);
    const data = await response.json();
    setItem(data);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetch(`/api/items/${match.params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
  };

  return (
    <div>
      <h1>Edit Item</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item.name}
          onChange={(event) =>
            setItem({ ...item, name: event.target.value })
          }
        />
        <textarea
          value={item.description}
          onChange={(event) =>
            setItem({ ...item, description: event.target.value })
          }
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditItem;


// src/components/ItemList.tsx
import React, { useEffect, useState } from "react";
import Item from "../interfaces/Item";

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch("/api/items");
    const data = await response.json();
    setItems(data);
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/items/${id}`, {
      method: "DELETE",
    });
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} ({item.description})
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
fetch('/api/items')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  fetch('/api/items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'New Item', description: 'Description of the new item' })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// PUT request
fetch('/api/items/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Updated Item', description: 'Description of the updated item' })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
  // DELETE request
  fetch('/api/items/1', {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
  

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
const myObj = { name: 'John', age: 30 };
const myJSONString = JSON.stringify(myObj);
console.log(myJSONString); // Outputs '{"name":"John","age":30}'

const myJSONString = '{"name":"John","age":30}';
const myObj = JSON.parse(myJSONString);
console.log(myObj); // Outputs { name: 'John', age: 30 }

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_APP_ID')
  .then(response => response.json())
  .then(data => {
    const weatherData = JSON.parse(data);
    console.log(weatherData);
  });

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/mydb', function(err, db) {
  if (err) throw err;
  db.collection('customers').findOne({}, function(err, result) {
    if (err) throw err;
    const customerData = JSON.parse(result);
    console.log(customerData);
    db.close();
  });
});

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
const fs = require('fs');

fs.readFile('data.json', 'utf8', function(err, data) {
  if (err) throw err;
  const jsonData = JSON.parse(data);
  console.log(jsonData);
});
/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
const data = { name: 'John', age: 30 };
fetch('https://example.com/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
const user = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(user));
/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
app.get('/api/users', function(req, res) {
  const users = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
  res.send(JSON.stringify(users));
});

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
import React, { useState } from 'react';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setName('');
        setEmail('');
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Create User</button>
    </form>
  );
}

export default CreateUser;

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

import { createSlice, configureStore } from '@reduxjs/toolkit'

// Define the initial state for our user slice
const initialState = {
  users: []
}

// Define our user slice
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload)
    },
    updateUser(state, action) {
      const { id, name } = action.payload
      const user = state.users.find(user => user.id === id)
      if (user) {
        user.name = name
      }
    },
    deleteUser(state, action) {
      const id = action.payload
      state.users = state.users.filter(user => user.id !== id)
    }
  }
})

// Create our Redux store
const store = configureStore({
  reducer: {
    users: userSlice.reducer
  }
})

// Define our UserList component
function UserList() {
  const users = useSelector(state => state.users.users)
  const dispatch = useDispatch()

  function handleAddUser() {
    const name = prompt('Enter a name')
    if (name) {
      dispatch(userSlice.actions.addUser({ id: Date.now(), name }))
    }
  }

  function handleDeleteUser(id) {
    dispatch(userSlice.actions.deleteUser(id))
  }

  return (
    <div>
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

// Require Mongoose
const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/mydatabase');

// Define a schema with the timestamps option
const userSchema = new mongoose.Schema({
  name: String,
  email: String
}, { timestamps: true });

// Define a model based on the schema
const User = mongoose.model('User', userSchema);

// Create a new user document
const user = new User({ name: 'John Doe', email: 'johndoe@example.com' });

// Save the user document
user.save((err, user) => {
  if (err) {
    console.error(err);
  } else {
    console.log('User saved:', user);
  }
});

// Update the user document
user.email = 'johndoe2@example.com';
user.save((err, user) => {
  if (err) {
    console.error(err);
  } else {
    console.log('User updated:', user);
  }
});

User saved: { _id: 60a2c667f04774243c41e1f3, name: 'John Doe', email: 'johndoe@example.com', createdAt: 2023-04-06T01:26:31.188Z, updatedAt: 2023-04-06T01:26:31.188Z, __v: 0 }
User updated: { _id: 60a2c667f04774243c41e1f3, name: 'John Doe', email: 'johndoe2@example.com', createdAt: 2023-04-06T01:26:31.188Z, updatedAt: 2023-04-06T01:27:00.230Z, __v: 0 }


/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE products (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE categories (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE products_categories (
  product_id INT(11) NOT NULL,
  category_id INT(11) NOT NULL,
  PRIMARY KEY (product_id, category_id),
  FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE
);

CREATE TABLE customers (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  address VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE orders (
  id INT(11) NOT NULL AUTO_INCREMENT,
  customer_id INT(11) NOT NULL,
  order_date DATETIME NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  status ENUM('pending', 'shipped', 'delivered') NOT NULL DEFAULT 'pending',
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES customers (id) ON DELETE CASCADE
);

CREATE TABLE order_items (
  id INT(11) NOT NULL AUTO_INCREMENT,
  order_id INT(11) NOT NULL,
  product_id INT(11) NOT NULL,
  quantity INT(11) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
);



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/


/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved!');
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved!');
  }, 4000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 3 resolved!');
  }, 3000);
});

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.error(error);
  });

  ['Promise 1 resolved!', 'Promise 2 resolved!', 'Promise 3 resolved!']


/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  // code to fetch user with the given userId and send the response
});




// First, you need to enable body-parser middleware to parse the request body
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Now, suppose you have a route that handles the form submission:
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  // code to handle the form data and send a response
});


/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

function MyComponent() {
  const theme = useTheme();

  return (
    <div>
      <Button variant="contained" color={theme.palette.primary.main}>
        My Button
      </Button>
    </div>
  );
}

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

import React from 'react';
import { useMediaQuery } from '@material-ui/core';

function MyComponent() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <div>
      {isSmallScreen ? (
        <h1>Small Screen</h1>
      ) : (
        <h1>Large Screen</h1>
      )}
    </div>
  );
}

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

import React from 'react';
import { Formik, Form, Field } from 'formik';

function MyForm() {
  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />

        <label htmlFor="email">Email</label>
        <Field type="email" name="email" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}


/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

function MyForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
}

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});



function SignupForm() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" />

            <label htmlFor="email">Email Address</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" />

            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" />

            <button type="submit" disabled={isSubmitting}>
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
// Select the element you want to append to
const container = document.querySelector('#container');

// Create a new element to append
const newElement = document.createElement('div');
newElement.textContent = 'New content';

// Append the new element to the container
container.append(newElement);

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || 'mongodb://localhost/mydatabase';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('MongoDB connected successfully!');
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const response = await axios.get(`${API_URL}/todos`);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async () => {
    try {
      const response = await axios.post(`${API_URL}/todos`, { title, description });
      setTodos([...todos, response.data]);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const updateTodo = async (id) => {
    try {
      const response = await axios.put(`${API_URL}/todos/${id}`, { title, description });
      const updatedTodos = todos.map((todo) => {
        if (todo._id === id) {
          return response.data;
        }
        return todo;
      });
      setTodos(updatedTodos);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/todos/${id}`);
      const filteredTodos = todos.filter((todo) => todo._id !== id);
      setTodos(filteredTodos);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="App">
      <h1>Todos</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title" />
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Description" />
        <button onClick={addTodo}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button onClick={() => updateTodo(todo._id)}>Update</button>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <title>Task Manager</title>
//   <link rel="stylesheet" href="style.css">
// </head>
// <body>
//   <h1>Task Manager</h1>

  {/* <form id="task-form">
    <label for="title">Title:</label>
    <input type="text" id="title" name="title">

    <label for="description">Description:</label>
    <textarea id="description" name="description"></textarea>

    <label for="due-date">Due Date:</label>
    <input type="date" id="due-date" name="due-date">

    <button type="submit">Create</button>
  </form>

  <table id="task-list">
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Due Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <script src="app.js"></script>
</body>
</html> */}


// body {
//   font-family: sans-serif;
// }

// h1 {
//   text-align: center;
// }

// form {
//   margin-bottom: 1rem;
//   display: flex;
//   flex-direction: column;
// }

// label {
//   margin-bottom: 0.5rem;
// }

// textarea {
//   height: 6rem;
//   margin-bottom: 1rem;
// }

// table {
//   border-collapse: collapse;
//   width: 100%;
// }

// th,
// td {
//   padding: 0.5rem;
//   text-align: left;
//   border: 1px solid #ddd;
// }

// th {
//   background-color: #f2f2f2;
// }

// button {
//   margin-top: 1rem;
// }


// const taskForm = document.getElementById('task-form');
// const taskList = document.getElementById('task-list');
// const taskRows = taskList.getElementsByTagName('tr');

// let tasks = [];

// // add event listener to form submit
// taskForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   // get input values from form
//   const titleInput = document.getElementById('title');
//   const descriptionInput = document.getElementById('description');
//   const dueDateInput = document.getElementById('due-date');

//   // create new task object
//   const task = {
//     title: titleInput.value,
//     description: descriptionInput.value,
//     dueDate: dueDateInput.value
//   };

//   // add new task to tasks array
//   tasks.push(task);

//   // render tasks in UI
//   renderTasks();

//   // reset form




// const row = document.createElement('tr');
// const titleCell = document.createElement('td');
// const descriptionCell = document.createElement('td');
// const dueDateCell = document.createElement('td');
// const actionsCell = document.createElement('td');
// const deleteButton = document.createElement('button');

// titleCell.innerText = task.title;
// descriptionCell.innerText = task.description;
// dueDateCell.innerText = task.dueDate;

// deleteButton.innerText = 'Delete';
// deleteButton.addEventListener('click', () => {
//   tasks.splice(i, 1);
//   renderTasks();
// });

// actionsCell.appendChild(deleteButton);

// row.appendChild(titleCell);
// row.appendChild(descriptionCell);
// row.appendChild(dueDateCell);
// row.appendChild(actionsCell);

// taskList.appendChild(row);

 


/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/


// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8">
//   <title>JavaScript CRUD Example</title>
// </head>
// <body>

//   <h1>JavaScript CRUD Example</h1>

//   <form id="form">
//     <label for="name">Name:</label>
//     <input type="text" id="name" name="name"><br>

//     <label for="email">Email:</label>
//     <input type="email" id="email" name="email"><br>

//     <label for="phone">Phone:</label>
//     <input type="tel" id="phone" name="phone"><br>

//     <button type="submit">Save</button>
//   </form>

//   <table id="table">
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Email</th>
//         <th>Phone</th>
//         <th>Action</th>
//       </tr>
//     </thead>
//     <tbody>
//     </tbody>
//   </table>

//   <script>
//     const form = document.getElementById('form');
//     const table = document.getElementById('table').getElementsByTagName('tbody')[0];
//     let data = [];

//     function createRow(item) {
//       const row = table.insertRow();
//       const nameCell = row.insertCell();
//       const emailCell = row.insertCell();
//       const phoneCell = row.insertCell();
//       const actionCell = row.insertCell();

//       nameCell.innerHTML = item.name;
//       emailCell.innerHTML = item.email;
//       phoneCell.innerHTML = item.phone;
//       actionCell.innerHTML = '<button onclick="editRow(this)">Edit</button><button onclick="deleteRow(this)">Delete</button>';

//       row.dataset.id = item.id;
//     }

//     function addData(item) {
//       data.push(item);
//       createRow(item);
//     }

//     function editRow(button) {
//       const row = button.parentNode.parentNode;
//       const id = row.dataset.id;
//       const item = data.find(item => item.id == id);

//       document.getElementById('name').value = item.name;
//       document.getElementById('email').value = item.email;
//       document.getElementById('phone').value = item.phone;

//       form.onsubmit = function(event) {
//         event.preventDefault();

//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const phone = document.getElementById('phone').value;

//         const index = data.findIndex(item => item.id == id);

//         data[index].name = name;
//         data[index].email = email;
//         data[index].phone = phone;

//         row.cells[0].innerHTML = name;
//         row.cells[1].innerHTML = email;
//         row.cells[2].innerHTML = phone;

//         form.onsubmit = function(event) {
//           event.preventDefault();
//           addData({ id: Date.now(), name, email, phone });
//           form.reset();
//         }
//       }
//     }

//     function deleteRow(button) {
//       const row = button.parentNode.parentNode;
//       const id = row.dataset.id;
//       const index = data.findIndex(item => item.id == id);
//       data.splice(index, 1);
//       row.remove();
//     }

//     form.onsubmit = function(event) {
//       event.preventDefault();
//       const name = document.getElementById('name').value;
//       const email = document.getElementById('email').value;
//       const phone = document.getElementById('phone').value;
//       addData({ id: Date.now(), name, email, phone });
//       form.reset();
//     }
//   </script>

// </body>
// </html>

// body {
//   font-family: Arial, sans-serif;
// }

// h1 {
//   text-align: center;
// }

// form {
//   display: flex;
//   flex-direction: column;
//   max-width: 500px;
//   margin: 0 auto;
//   padding: 20px;
//   border: 1px solid #ccc;
// }

// label {
//   font-weight: bold;
//   margin-bottom: 10px;
// }

// input[type="text"],
// input[type="email"],
// input[type="tel"] {
//   padding: 10px;
//   margin-bottom: 20px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// }

// button[type="submit"] {
//   padding: 10px;
//   background-color: #4CAF50;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// }

// table {
//   max-width: 500px;
//   margin: 20px auto;
//   border-collapse: collapse;
// }

// thead th {
//   text-align: left;
//   padding: 10px;
//   background-color: #4CAF50;
//   color: white;
// }

// tbody td {
//   padding: 10px;
//   border-bottom: 1px solid #ccc;
// }

// tbody td:last-child {
//   text-align: center;
// }

// tbody button {
//   padding: 5px;
//   background-color: #4CAF50;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// }

// tbody button + button {
//   margin-left: 10px;
//   background-color: #f44336;
// }

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Example</title>
// </head>
// <body>
//   <div>
//     <p>Hello world!</p>
//   </div>

//   <script>
//     const paragraph = document.querySelector('p');
//     const parentDiv = paragraph.parentNode;
//     console.log(parentDiv); // logs the <div> element that contains the <p> element
//   </script>
// </body>
// </html>

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

npm install express mysql body-parser


CREATE DATABASE mydb;

USE mydb;

CREATE TABLE customers (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL
);


const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});



// Get all customers
app.get('/customers', (req, res) => {
  const sql = 'SELECT * FROM customers';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

// Get a single customer
app.get('/customers/:id', (req, res) => {
  const sql = `SELECT * FROM customers WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

// Create a customer
app.post('/customers', (req, res) => {
  const { name, email, address } = req.body;
  const sql = `INSERT INTO customers (name, email, address) VALUES ('${name}', '${email}', '${address}')`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Customer added');
  });
});

// Update a customer
app.put('/customers/:id', (req, res) => {
  const { name, email, address } = req.body;
  const sql = `UPDATE customers SET name = '${name}', email = '${email}', address = '${address}' WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Customer updated');
  });
});

// Delete a customer
app.delete('/customers/:id', (req, res) => {
  const sql = `DELETE FROM customers WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Customer deleted');
  });
});

authentication, validation, error handling,

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

npm install bcryptjs jsonwebtoken

// user.js

const db = require('./db');

class User {
  static async findByUsername(username) {
    const sql = `SELECT * FROM users WHERE username = ?`;
    const rows = await db.query(sql, [username]);
    return rows.length ? new User(rows[0]) : null;
  }

  constructor(row) {
    this.id = row.id;
    this.username = row.username;
    this.password = row.password;
  }

  async verifyPassword(password) {
    return await bcrypt.compare(password, this.password);
  }

  generateToken() {
    const payload = { id: this.id, username: this.username };
    return jwt.sign(payload, process.env.JWT_SECRET);
  }
}

module.exports = User;



// db.js

const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb',
});

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (err, rows) => {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
};

module.exports = { query };



// create a user in the MySQL database

const bcrypt = require('bcryptjs');
const db = require('./db');

const username = 'admin';
const password = 'password';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, async (err, hash) => {
    const sql = `INSERT INTO users (username, password) VALUES (?, ?)`;
    const values = [username, hash];
    await db.query(sql, values);
  });
});



const User = require('./user');

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header is missing' });
  }
  const [type, token] = authHeader.split(' ');
  if (type !== 'Bearer') {
    return res.status(401).json({ message: 'Unsupported authorization type' });
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByUsername(payload.username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authenticate;



// Get all customers
app.get('/customers', authenticate, (req, res) => {
  const sql = `SELECT * FROM customers WHERE user_id = ${req.user.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

// Get a single customer
app.get('/customers/:id', authenticate, (req, res) => {
  const sql = `SELECT * FROM customers WHERE id = ${req.params.id} AND user_id = ${req.user.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    if (!result.length) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.json(result[0]);
  });
});

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginForm = () => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginForm;

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

// Store user preferences in localStorage
function saveUserPreferences() {
  const preferences = {
    theme: 'dark',
    fontSize: '16px',
    showNotifications: true
  };

  // Convert preferences to a JSON string
  const preferencesJSON = JSON.stringify(preferences);

  // Store preferences in localStorage
  localStorage.setItem('userPreferences', preferencesJSON);
}

// Retrieve user preferences from localStorage
function getUserPreferences() {
  // Retrieve preferences from localStorage
  const preferencesJSON = localStorage.getItem('userPreferences');

  if (preferencesJSON) {
    // Convert JSON string back to an object
    const preferences = JSON.parse(preferencesJSON);

    // Use the preferences object
    console.log('Theme:', preferences.theme);
    console.log('Font Size:', preferences.fontSize);
    console.log('Show Notifications:', preferences.showNotifications);
  } else {
    console.log('No user preferences found.');
  }
}

// Call the functions
saveUserPreferences();
getUserPreferences();



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/


/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/


/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/


/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/


/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/




/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/




/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/




/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/




/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/




/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/



/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/




/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/




/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/