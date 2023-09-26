// const express = require('express'); const mysql = require('mysql'); const app =
// express(); app.use(express.json()); // MySQL connection configuration const db =
// mysql.createConnection({ host: 'localhost', user: 'your_username', password:
// 'your_password', database: 'your_database' }); // Connect to MySQL
// db.connect((err) => { if (err) { console.error('Failed to connect to MySQL:',
// err); throw err; } console.log('Connected to MySQL database'); }); // Get all
// products app.get('/products', (req, res) => { db.query('SELECT * FROM products',
// (err, results) => { if (err) { console.error('Error getting products:', err);
// res.status(500).json({ error: 'Failed to retrieve products from database' }); }
// else { res.json(results); } }); }); // Create a new product
// app.post('/products', (req, res) => { const { name, description, price,
// stock_quantity } = req.body; const newProduct = { name, description, price,
// stock_quantity }; db.query('INSERT INTO products SET ?', newProduct, (err,
// result) => { if (err) { console.error('Error creating product:', err);
// res.status(500).json({ error: 'Failed to create product in database' }); } else
// { res.json({ message: 'Product created successfully', productId: result.insertId
// }); } }); }); // Get a specific product app.get('/products/:productId', (req,
// res) => { const productId = req.params.productId; db.query('SELECT * FROM
// products WHERE product_id = ?', productId, (err, results) => { if (err) {
// console.error('Error getting product:', err); res.status(500).json({ error:
// 'Failed to retrieve product from database' }); } else if (results.length === 0)
// { res.status(404).json({ error: 'Product not found' }); } else {
// res.json(results[0]); } }); }); // Update a product
// app.put('/products/:productId', (req, res) => { const productId =
// req.params.productId; const { name, description, price, stock_quantity } =
// req.body; const updatedProduct = { name, description, price, stock_quantity };
// db.query('UPDATE products SET ? WHERE product_id = ?', [updatedProduct,
// productId], (err, result) => { if (err) { console.error('Error updating
// product:', err); res.status(500).json({ error: 'Failed to update product in
// database' }); } else if (result.affectedRows === 0) { res.status(404).json({
// error: 'Product not found' }); } else { res.json({ message: 'Product updated
// successfully' }); } }); }); // Delete a product
// app.delete('/products/:productId', (req, res) => { const productId =
// req.params.productId; db.query('DELETE FROM products WHERE product_id = ?',
// productId, (err, result) => { if (err) { console.error('Error deleting
// product:', err); res.status(500).json({ error: 'Failed to delete product from
// database' }); } else if (result.affectedRows === 0) { res.status(404).json({
// error: 'Product not found' }); } else { res.json ({ message: 'Product deleted
// successfully' }); } }); }); // Start the server app.listen(3000, () => {
// console.log('Server is running on port 3000'); }); const express =
// require('express'); const { Sequelize, DataTypes } = require('sequelize'); const
// app = express(); app.use(express.json()); // Sequelize connection configuration
// const sequelize = new Sequelize('your_database', 'your_username',
// 'your_password', { host: 'localhost', dialect: 'mysql' }); // Define models
// const Product = sequelize.define('Product', { name: { type: DataTypes.STRING,
// allowNull: false }, description: { type: DataTypes.TEXT }, price: { type:
// DataTypes.DECIMAL(10, 2), allowNull: false }, stock_quantity: { type:
// DataTypes.INTEGER, allowNull: false } }); // Connect to MySQL using Sequelize
// sequelize .authenticate() .then(() => { console.log('Connected to MySQL
// database'); }) .catch((err) => { console.error('Failed to connect to MySQL:',
// err); }); // Sync models with the database sequelize.sync() .then(() => {
// console.log('Models synchronized with the database'); }) .catch((err) => {
// console.error('Failed to synchronize models with the database:', err); }); //
// Get all products app.get('/products', (req, res) => { Product.findAll()
// .then((products) => { res.json(products); }) .catch((err) => {
// console.error('Error getting products:', err); res.status(500).json({ error:
// 'Failed to retrieve products from database' }); }); }); // Create a new product
// app.post('/products', (req, res) => { const { name, description, price,
// stock_quantity } = req.body; Product.create({ name, description, price,
// stock_quantity }) .then((product) => { res.json({ message: 'Product created
// successfully', productId: product.id }); }) .catch((err) => {
// console.error('Error creating product:', err); res.status(500).json({ error:
// 'Failed to create product in database' }); }); }); // Get a specific product
// app.get('/products/:productId', (req, res) => { const productId =
// req.params.productId; Product.findByPk(productId) .then((product) => { if
// (product) { res.json(product); } else { res.status(404).json({ error: 'Product
// not found' }); } }) .catch((err) => { console.error('Error getting product:',
// err); res.status(500).json({ error: 'Failed to retrieve product from database'
// }); }); }); // Update a product app.put('/products/:productId', (req, res) => {
// const productId = req.params.productId; const { name, description, price,
// stock_quantity } = req.body; Product.update({ name, description, price,
// stock_quantity }, { where: { id: productId } }) .then((result) => { if
// (result[0] === 0) { res.status(404).json({ error: 'Product not found' }); } else
// { res.json({ message: 'Product updated successfully' }); } }) .catch((err) => {
// console.error('Error updating product:', err); res.status(500).json({ error:
// 'Failed to update product in database' }); }); }); // Delete a product
// app.delete('/products/:productId', (req, res) => { const productId =
// req.params.productId; Product.destroy({ where: { id: productId } })
// .then((result) => { if (result === 0) { res.status(404).json({ error: 'Product
// not found' }); } else { res.json({ message: 'Product deleted successfully' }); }
// }) .catch((err) => { console.error('Error deleting product:', err);
// res.status(500).json({ error: 'Failed to delete product from database' }); });
// }); // Start the server app.listen(3000, () => { console.log('Server is running
// on port 3000'); });
/*********************************************************************************************************************/
/*********************************************************************************************************************/
/*********************************************************************************************************************/
const path = require("path");

console.log(__dirname);
console.log(path.join(__dirname, "myFile.txt"));

/*********************************************************************************************************************/
/*********************************************************************************************************************/
/*********************************************************************************************************************/
const path = require("path");

const fullPath = path.join(__dirname, "myFolder", "myFile.txt");
console.log(fullPath); // C:\Users\myUser\myProject\myFolder\myFile.txt

const resolvedPath = path.resolve("myFolder", "myFile.txt");
console.log(resolvedPath); // C:\Users\myUser\myFolder\myFile.txt

const fileName = path.basename(fullPath);
console.log(fileName); // myFile.txt

const dirName = path.dirname(fullPath);
console.log(dirName); // C:\Users\myUser\myProject\myFolder

const extName = path.extname(fullPath);
console.log(extName); // .txt

/*********************************************************************************************************************/
/*********************************************************************************************************************/
/*********************************************************************************************************************/

const path = require("path");

// Resolving a relative path
const relativePath = path.resolve("folder1", "folder2", "file.js");
console.log(relativePath); // /Users/username/working_directory/folder1/folder2/file.js

// Resolving an absolute path
const absolutePath = path.resolve("/var", "log", "system.log");
console.log(absolutePath); // /var/log/system.log

/*********************************************************************************************************************/
/*********************************************************************************************************************/
/*********************************************************************************************************************/
