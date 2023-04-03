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


/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/


/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/


