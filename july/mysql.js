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
  
  <!-- CREATE TABLE product_categories ( 
    product_id INT, 
    category_id INT, 
    PRIMARY KEY (product_id, category_id), 
    FOREIGN KEY (product_id) REFERENCES products(product_id), 
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
  );  -->
  
  <!-- CREATE TABLE orders ( 
    order_id INT PRIMARY KEY AUTO_INCREMENT, 
    user_id INT,
    order_date DATE, 
    total_amount DECIMAL(10, 2) NOT NULL, 
    FOREIGN KEY (user_id) REFERENCES users(user_id) 
  );  -->
  
  <!-- CREATE TABLE order_items ( 
    order_id INT, 
    product_id INT, 
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL, 
    PRIMARY KEY (order_id, product_id), 
    FOREIGN KEY (order_id) REFERENCES orders(order_id), 
    FOREIGN KEY (product_id) REFERENCES products(product_id) 
  );  -->
  
  <!-- CREATE TABLE reviews ( 
    review_id INT PRIMARY KEY AUTO_INCREMENT, 
    user_id INT,
    product_id INT, 
    rating INT NOT NULL,  
    comment TEXT, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    FOREIGN KEY (user_id) REFERENCES users(user_id), 
    FOREIGN KEY (product_id) REFERENCES products(product_id) 
  );  -->
  