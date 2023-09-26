// INNER JOIN
+------+--------+-------------+
| id   | name   | department  |
+------+--------+-------------+
| 1    | John   | 1           |
| 2    | Alice  | 2           |
| 3    | Bob    | 1           |
| 4    | Sarah  | 3           |
+------+--------+-------------+
+----+------------+
| id | name       |
+----+------------+
| 1  | Sales      |
| 2  | Marketing  |
| 3  | Finance    |
+----+------------+
+--------+------------+
| name   | name       |
+--------+------------+
| John   | Sales      |
| Alice  | Marketing  |
| Bob    | Sales      |
| Sarah  | Finance    |
+--------+------------+

SELECT employees.name, departments.name
FROM employees
INNER JOIN departments
ON employees.department = departments.id;

/*****************************************************************************************************************************/
// LEFT JOIN
+----+---------------------+---------+
| id | order_date          | cust_id |
+----+---------------------+---------+
| 1  | 2022-01-01 00:00:00 | 101     |
| 2  | 2022-01-02 00:00:00 | 102     |
| 3  | 2022-01-03 00:00:00 | 103     |
| 4  | 2022-01-04 00:00:00 | NULL    |
+----+---------------------+---------+
+---------+-------+
| cust_id | name  |
+---------+-------+
| 101     | John  |
| 102     | Alice |
| 103     | Bob   |
+---------+-------+
+----+---------------------+-------+
| id | order_date          | name  |
+----+---------------------+-------+
| 1  | 2022-01-01 00:00:00 | John  |
| 2  | 2022-01-02 00:00:00 | Alice |
| 3  | 2022-01-03 00:00:00 | Bob   |
| 4  | 2022-01-04 00:00:00 | NULL  |
+----+---------------------+-------+
SELECT orders.id, orders.order_date, customers.name
FROM orders
LEFT JOIN customers
ON orders.cust_id = customers.cust_id;

/*****************************************************************************************************************************/
// RIGHT JOIN
+----+---------------------+---------+
| id | order_date          | cust_id |
+----+---------------------+---------+
| 1  | 2022-01-01 00:00:00 | 101     |
| 2  | 2022-01-02 00:00:00 | 102     |
| 3  | 2022-01-03 00:00:00 | 103     |
| 4  | 2022-01-04 00:00:00 | NULL    |
+----+---------------------+---------+
+---------+-------+
| cust_id | name  |
+---------+-------+
| 101     | John  |
| 102     | Alice |
| 103     | Bob   |
| 104     | Tom   |
+---------+-------+
+------+---------------------+-------+
| id   | order_date          | name  |
+------+---------------------+-------+
| 1    | 2022-01-01 00:00:00 | John  |
| 2    | 2022-01-02 00:00:00 | Alice |
| 3    | 2022-01-03 00:00:00 | Bob   |
| NULL | NULL                | Tom   |
+------+---------------------+-------+
SELECT orders.id, orders.order_date, customers.name
FROM orders
RIGHT JOIN customers
ON orders.cust_id = customers.cust_id;


/*****************************************************************************************************************************/
/*****************************************************************************************************************************/
/*****************************************************************************************************************************/
SELECT * FROM Customers;
SELECT CustomerName, City, Country FROM Customers;
SELECT * FROM Customers;
SELECT Country FROM Customers;
SELECT DISTINCT Country FROM Customers;
SELECT COUNT(DISTINCT Country) FROM Customers;
/*****************************************************************************************************************************/
SELECT * FROM Customers WHERE Country = 'Mexico';
SELECT * FROM Customers WHERE CustomerID = 1;
SELECT * FROM Products WHERE Price = 18;
SELECT * FROM Products WHERE Price > 30;
SELECT * FROM Products WHERE Price < 30;
SELECT * FROM Products WHERE Price >= 30;
SELECT * FROM Products WHERE Price <= 30;
SELECT * FROM Products WHERE Price <> 18;
SELECT * FROM Products WHERE Price BETWEEN 50 AND 60;
SELECT * FROM Customers WHERE City LIKE 's%';
SELECT * FROM Customers WHERE City IN ('Paris','London');
/*****************************************************************************************************************************/
SELECT * FROM Customers WHERE Country = 'Germany' AND City = 'Berlin';
SELECT * FROM Customers WHERE City = 'Berlin' OR City = 'Stuttgart';
SELECT * FROM Customers WHERE NOT Country = 'Germany';
SELECT * FROM Customers WHERE Country = 'Germany' AND (City = 'Berlin' OR City = 'Stuttgart');
SELECT * FROM Customers WHERE NOT Country = 'Germany' AND NOT Country = 'USA';
/*****************************************************************************************************************************/

const express = require('express'); 
const mysql = require('mysql'); 
const app = express(); 
app.use(express.json()); 
// MySQL connection configuration 
const db = mysql.createConnection({ host: 'localhost', user: 'your_username', password: 'your_password', database: 'your_database' }); 
// Connect to MySQL
db.connect((err) => { 
    if (err) { 
        console.error('Failed to connect to MySQL:',err); 
        throw err; 
    } 
    console.log('Connected to MySQL database'); 
}); 
// Get all products 
app.get('/products', (req, res) => { 
    db.query('SELECT * FROM products', (err, results) => { 
        if (err) { 
            console.error('Error getting products:', err);
            res.status(500).json({ error: 'Failed to retrieve products from database' }); 
        }
        else { 
            res.json(results); 
        } 
    }); 
}); 

// Create a new product
app.post('/products', (req, res) => { 
    const { name, description, price, stock_quantity } = req.body; 
    const newProduct = { name, description, price, stock_quantity }; 
    db.query('INSERT INTO products SET ?', newProduct, (err, result) => { 
        if (err) { 
            console.error('Error creating product:', err);
            res.status(500).json({ error: 'Failed to create product in database' }); 
        } else { 
            res.json({ 
                message: 'Product created successfully', 
                productId: result.insertId
                }); 
            } 
        }); 
    });

// Get a specific product 
app.get('/products/:productId', (req, res) => { const productId = req.params.productId; db.query('SELECT * FROM
products WHERE product_id = ?', productId, (err, results) => { if (err) {
console.error('Error getting product:', err); res.status(500).json({ error:
'Failed to retrieve product from database' }); } else if (results.length === 0)
{ res.status(404).json({ error: 'Product not found' }); } else {
res.json(results[0]); } }); }); // Update a product
app.put('/products/:productId', (req, res) => { const productId =
req.params.productId; const { name, description, price, stock_quantity } =
req.body; const updatedProduct = { name, description, price, stock_quantity };
db.query('UPDATE products SET ? WHERE product_id = ?', [updatedProduct,
productId], (err, result) => { if (err) { console.error('Error updating
product:', err); res.status(500).json({ error: 'Failed to update product in
database' }); } else if (result.affectedRows === 0) { res.status(404).json({
error: 'Product not found' }); } else { res.json({ message: 'Product updated
successfully' }); } }); }); // Delete a product
app.delete('/products/:productId', (req, res) => { const productId =
req.params.productId; db.query('DELETE FROM products WHERE product_id = ?',
productId, (err, result) => { if (err) { console.error('Error deleting
product:', err); res.status(500).json({ error: 'Failed to delete product from
database' }); } else if (result.affectedRows === 0) { res.status(404).json({
error: 'Product not found' }); } else { res.json ({ message: 'Product deleted
successfully' }); } }); }); // Start the server app.listen(3000, () => {
console.log('Server is running on port 3000'); }); const express =
require('express'); const { Sequelize, DataTypes } = require('sequelize'); const
app = express(); app.use(express.json()); // Sequelize connection configuration
const sequelize = new Sequelize('your_database', 'your_username',
'your_password', { host: 'localhost', dialect: 'mysql' }); // Define models
const Product = sequelize.define('Product', { name: { type: DataTypes.STRING,
allowNull: false }, description: { type: DataTypes.TEXT }, price: { type:
DataTypes.DECIMAL(10, 2), allowNull: false }, stock_quantity: { type:
DataTypes.INTEGER, allowNull: false } }); // Connect to MySQL using Sequelize
sequelize .authenticate() .then(() => { console.log('Connected to MySQL
database'); }) .catch((err) => { console.error('Failed to connect to MySQL:',
err); }); // Sync models with the database sequelize.sync() .then(() => {
console.log('Models synchronized with the database'); }) .catch((err) => {
console.error('Failed to synchronize models with the database:', err); }); //
Get all products app.get('/products', (req, res) => { Product.findAll()
.then((products) => { res.json(products); }) .catch((err) => {
console.error('Error getting products:', err); res.status(500).json({ error:
'Failed to retrieve products from database' }); }); }); // Create a new product
app.post('/products', (req, res) => { const { name, description, price,
stock_quantity } = req.body; Product.create({ name, description, price,
stock_quantity }) .then((product) => { res.json({ message: 'Product created
successfully', productId: product.id }); }) .catch((err) => {
console.error('Error creating product:', err); res.status(500).json({ error:
'Failed to create product in database' }); }); }); // Get a specific product
app.get('/products/:productId', (req, res) => { const productId =
req.params.productId; Product.findByPk(productId) .then((product) => { if
(product) { res.json(product); } else { res.status(404).json({ error: 'Product
not found' }); } }) .catch((err) => { console.error('Error getting product:',
err); res.status(500).json({ error: 'Failed to retrieve product from database'
}); }); }); // Update a product app.put('/products/:productId', (req, res) => {
const productId = req.params.productId; const { name, description, price,
stock_quantity } = req.body; Product.update({ name, description, price,
stock_quantity }, { where: { id: productId } }) .then((result) => { if
(result[0] === 0) { res.status(404).json({ error: 'Product not found' }); } else
{ res.json({ message: 'Product updated successfully' }); } }) .catch((err) => {
console.error('Error updating product:', err); res.status(500).json({ error:
'Failed to update product in database' }); }); }); // Delete a product
app.delete('/products/:productId', (req, res) => { const productId =
req.params.productId; Product.destroy({ where: { id: productId } })
.then((result) => { if (result === 0) { res.status(404).json({ error: 'Product
not found' }); } else { res.json({ message: 'Product deleted successfully' }); }
}) .catch((err) => { console.error('Error deleting product:', err);
res.status(500).json({ error: 'Failed to delete product from database' }); });
}); // Start the server app.listen(3000, () => { console.log('Server is running
on port 3000'); });
























mysql -u root -p
EXIT;
SHOW TABLES FROM mydatabase;



CREATE TABLE users ( 
    user_id INT PRIMARY KEY AUTO_INCREMENT, 
    username VARCHAR(50) NOT NULL, 
    password VARCHAR(50) NOT NULL, 
    email VARCHAR(100) NOT NULL, 
    first_name VARCHAR(50) NOT NULL, 
    last_name VARCHAR(50) NOT NULL, 
    address VARCHAR(200) NOT NULL, 
    phone_number VARCHAR(20) NOT NULL 
); 
  
CREATE TABLE products ( 
    product_id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(100) NOT NULL, 
    description TEXT, 
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
); 
  
CREATE TABLE categories ( 
    category_id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(50) NOT NULL 
);  
  
CREATE TABLE product_categories ( 
    product_id INT, 
    category_id INT, 
    PRIMARY KEY (product_id, category_id), 
    FOREIGN KEY (product_id) REFERENCES products(product_id), 
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);
  
CREATE TABLE orders ( 
    order_id INT PRIMARY KEY AUTO_INCREMENT, 
    user_id INT,
    order_date DATE, 
    total_amount DECIMAL(10, 2) NOT NULL, 
    FOREIGN KEY (user_id) REFERENCES users(user_id) 
);
  
CREATE TABLE order_items ( 
    order_id INT, 
    product_id INT, 
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL, 
    PRIMARY KEY (order_id, product_id), 
    FOREIGN KEY (order_id) REFERENCES orders(order_id), 
    FOREIGN KEY (product_id) REFERENCES products(product_id) 
);
  
CREATE TABLE reviews ( 
    review_id INT PRIMARY KEY AUTO_INCREMENT, 
    user_id INT,
    product_id INT, 
    rating INT NOT NULL,  
    comment TEXT, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    FOREIGN KEY (user_id) REFERENCES users(user_id), 
    FOREIGN KEY (product_id) REFERENCES products(product_id) 
);  
  








/****************************************************************************************************************/
/****************************************************************************************************************/
/****************************************************************************************************************/
/****************************************************************************************************************/
/****************************************************************************************************************/

// <!-- CREATE TABLE users ( 
//     user_id INT PRIMARY KEY AUTO_INCREMENT, 
//     username VARCHAR(50) NOT NULL, 
//     password VARCHAR(50) NOT NULL, 
//     email VARCHAR(100) NOT NULL, 
//     first_name VARCHAR(50) NOT NULL, 
//     last_name VARCHAR(50) NOT NULL, 
//     address VARCHAR(200) NOT NULL, 
//     phone_number VARCHAR(20) NOT NULL 
//   );  -->
  
//   <!-- CREATE TABLE products ( 
//     product_id INT PRIMARY KEY AUTO_INCREMENT, 
//     name VARCHAR(100) NOT NULL, 
//     description TEXT, 
//     price DECIMAL(10, 2) NOT NULL,
//     stock_quantity INT NOT NULL, 
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
//   ); -->
  
//   <!-- CREATE TABLE categories ( 
//     category_id INT PRIMARY KEY AUTO_INCREMENT, 
//     name VARCHAR(50) NOT NULL 
//   );  -->
  
//   <!-- CREATE TABLE product_categories ( 
//     product_id INT, 
//     category_id INT, 
//     PRIMARY KEY (product_id, category_id), 
//     FOREIGN KEY (product_id) REFERENCES products(product_id), 
//     FOREIGN KEY (category_id) REFERENCES categories(category_id)
//   );  -->
  
//   <!-- CREATE TABLE orders ( 
//     order_id INT PRIMARY KEY AUTO_INCREMENT, 
//     user_id INT,
//     order_date DATE, 
//     total_amount DECIMAL(10, 2) NOT NULL, 
//     FOREIGN KEY (user_id) REFERENCES users(user_id) 
//   );  -->
  
//   <!-- CREATE TABLE order_items ( 
//     order_id INT, 
//     product_id INT, 
//     quantity INT NOT NULL,
//     price DECIMAL(10, 2) NOT NULL, 
//     PRIMARY KEY (order_id, product_id), 
//     FOREIGN KEY (order_id) REFERENCES orders(order_id), 
//     FOREIGN KEY (product_id) REFERENCES products(product_id) 
//   );  -->
  
//   <!-- CREATE TABLE reviews ( 
//     review_id INT PRIMARY KEY AUTO_INCREMENT, 
//     user_id INT,
//     product_id INT, 
//     rating INT NOT NULL,  
//     comment TEXT, 
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
//     FOREIGN KEY (user_id) REFERENCES users(user_id), 
//     FOREIGN KEY (product_id) REFERENCES products(product_id) 
//   );  -->