// public class Person {
//     private String name;
//     private int age;

//     // Constructor with parameters
//     public Person(String name, int age) {
//         this.name = name;
//         this.age = age;
//     }

//     // Default constructor
//     public Person() {
//         this.name = "Unknown";
//         this.age = 0;
//     }

//     // Getter methods
//     public String getName() {
//         return name;
//     }

//     public int getAge() {
//         return age;
//     }

//     // Setter methods
//     public void setName(String name) {
//         this.name = name;
//     }

//     public void setAge(int age) {
//         this.age = age;
//     }

//     public static void main(String[] args) {
//         // Creating objects using constructors
//         Person person1 = new Person("John Doe", 25);
//         Person person2 = new Person();

//         System.out.println(person1.getName() + " is " + person1.getAge() + " years old.");
//         System.out.println(person2.getName() + " is " + person2.getAge() + " years old.");
//     }
// }


/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/
// import java.util.Scanner;

// public class Calculator {
//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);
        
//         System.out.print("Enter the first number: ");
//         double num1 = scanner.nextDouble();
        
//         System.out.print("Enter the second number: ");
//         double num2 = scanner.nextDouble();
        
//         System.out.print("Enter the operator (+, -, *, /): ");
//         char operator = scanner.next().charAt(0);
        
//         double result;
        
//         switch (operator) {
//             case '+':
//                 result = num1 + num2;
//                 System.out.println("Result: " + result);
//                 break;
                
//             case '-':
//                 result = num1 - num2;
//                 System.out.println("Result: " + result);
//                 break;
                
//             case '*':
//                 result = num1 * num2;
//                 System.out.println("Result: " + result);
//                 break;
                
//             case '/':
//                 if (num2 != 0) {
//                     result = num1 / num2;
//                     System.out.println("Result: " + result);
//                 } else {
//                     System.out.println("Error: Division by zero is not allowed.");
//                 }
//                 break;
                
//             default:
//                 System.out.println("Error: Invalid operator.");
//                 break;
//         }
        
//         scanner.close();
//     }
// }

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/
// import java.util.ArrayList;
// import java.util.List;
// import java.util.Scanner;

// class User {
//     private String name;
//     private int age;

//     public User(String name, int age) {
//         this.name = name;
//         this.age = age;
//     }

//     public String getName() {
//         return name;
//     }

//     public int getAge() {
//         return age;
//     }
// }

// public class CRUDApp {
//     private List<User> userList;
//     private Scanner scanner;

//     public CRUDApp() {
//         userList = new ArrayList<>();
//         scanner = new Scanner(System.in);
//     }

    // public void run() {
    //     boolean running = true;
    //     while (running) {
    //         System.out.println("=== CRUD App ===");
    //         System.out.println("1. Create User");
    //         System.out.println("2. Read Users");
    //         System.out.println("3. Update User");
    //         System.out.println("4. Delete User");
    //         System.out.println("5. Exit");
    //         System.out.print("Enter your choice: ");

    //         int choice = scanner.nextInt();
    //         scanner.nextLine(); // Consume the newline character

    //         switch (choice) {
    //             case 1:
    //                 createUser();
    //                 break;
    //             case 2:
    //                 readUsers();
    //                 break;
    //             case 3:
    //                 updateUser();
    //                 break;
    //             case 4:
    //                 deleteUser();
    //                 break;
    //             case 5:
    //                 running = false;
    //                 break;
    //             default:
    //                 System.out.println("Invalid choice. Please try again.");
    //         }
    //         System.out.println();
    //     }
    //     scanner.close();
    // }

    // private void createUser() {
    //     System.out.print("Enter user name: ");
    //     String name = scanner.nextLine();
    //     System.out.print("Enter user age: ");
    //     int age = scanner.nextInt();
    //     scanner.nextLine(); // Consume the newline character

    //     User user = new User(name, age);
    //     userList.add(user);

    //     System.out.println("User created successfully.");
    // }

    // private void readUsers() {
    //     if (userList.isEmpty()) {
    //         System.out.println("No users found.");
    //         return;
    //     }

    //     System.out.println("=== User List ===");
    //     for (User user : userList) {
    //         System.out.println("Name: " + user.getName() + ", Age: " + user.getAge());
    //     }
    // }

    // private void updateUser() {
    //     System.out.print("Enter the index of the user to update: ");
    //     int index = scanner.nextInt();
    //     scanner.nextLine(); // Consume the newline character

    //     if (index >= 0 && index < userList.size()) {
    //         User user = userList.get(index);
    //         System.out.print("Enter new user name: ");
    //         String name = scanner.nextLine();
    //         System.out.print("Enter new user age: ");
    //         int age = scanner.nextInt();
    //         scanner.nextLine(); // Consume the newline character

    //         user = new User(name, age);
    //         userList.set(index, user);

    //         System.out.println("User updated successfully.");
    //     } else {
    //         System.out.println("Invalid index. No user found at the specified index.");
    //     }
    // }

    // private void deleteUser() {
    //     System.out.print("Enter the index of the user to delete: ");
    //     int index = scanner.nextInt();
    //     scanner.nextLine(); // Consume the newline character

    //     if (index >= 0 && index < userList.size()) {
    //         userList.remove(index);
    //         System.out.println("User deleted successfully.");
    //     } else {
    //         System.out.println("Invalid index. No user found at the specified index.");
    //     }
    // }

    //     public static void main(String[] args) {
    //         CRUDApp crudApp = new CRUDApp();
    //         crudApp.run();
    //     }
    // }

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

// import java.util.ArrayList;
// import java.util.List;

// public class ListExample {
//     public static void main(String[] args) {
//         // Creating a List of integers
//         List<Integer> numbers = new ArrayList<>();

//         // Adding elements to the list
//         numbers.add(10);
//         numbers.add(20);
//         numbers.add(30);
//         numbers.add(40);
//         numbers.add(50);

//         // Accessing elements from the list
//         System.out.println("Element at index 2: " + numbers.get(2)); // Output: 30

//         // Modifying an element in the list
//         numbers.set(3, 45);
//         System.out.println("Modified list: " + numbers); // Output: [10, 20, 30, 45, 50]

//         // Removing an element from the list
//         numbers.remove(1);
//         System.out.println("Updated list: " + numbers); // Output: [10, 30, 45, 50]

//         // Checking if the list contains an element
//         System.out.println("Contains 30? " + numbers.contains(30)); // Output: true

//         // Getting the size of the list
//         System.out.println("Size of the list: " + numbers.size()); // Output: 4

//         // Iterating over the list
//         System.out.println("List elements:");
//         for (int number : numbers) {
//             System.out.println(number);
//         }
//     }
// }

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

// import javax.imageio.ImageIO;
// import java.awt.*;
// import java.awt.image.BufferedImage;
// import java.io.File;
// import java.io.IOException;

// public class MemeGenerator {
//     public static void main(String[] args) {
//         try {
//             // Load the base image
//             BufferedImage image = ImageIO.read(new File("base_image.jpg"));

//             // Create a Graphics2D object to perform image manipulation
//             Graphics2D graphics = image.createGraphics();

//             // Set font properties
//             Font font = new Font("Impact", Font.BOLD, 50);
//             graphics.setFont(font);
//             graphics.setColor(Color.WHITE);
//             graphics.setStroke(new BasicStroke(2));

//             // Add top text
//             String topText = "TOP TEXT";
//             int topTextX = 50;
//             int topTextY = 75;
//             graphics.drawString(topText, topTextX, topTextY);

//             // Add bottom text
//             String bottomText = "BOTTOM TEXT";
//             int bottomTextX = 50;
//             int bottomTextY = image.getHeight() - 75;
//             graphics.drawString(bottomText, bottomTextX, bottomTextY);

//             // Dispose the Graphics2D object
//             graphics.dispose();

//             // Save the modified image
//             String outputFileName = "output_image.jpg";
//             ImageIO.write(image, "jpg", new File(outputFileName));

//             System.out.println("Meme generated successfully. Saved as " + outputFileName);
//         } catch (IOException e) {
//             System.out.println("Error occurred while generating meme: " + e.getMessage());
//         }
//     }
// }


/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/
// import java.sql.*;
// import java.util.ArrayList;
// import java.util.List;

// public class EmployeeDAO {
//     private Connection connection;

//     public EmployeeDAO() {
//         String url = "jdbc:mysql://localhost:3306/mydatabase";
//         String username = "username";
//         String password = "password";

//         try {
//             connection = DriverManager.getConnection(url, username, password);
//         } catch (SQLException e) {
//             System.out.println("Database connection error: " + e.getMessage());
//         }
//     }

//     public List<Employee> getAllEmployees() {
//         List<Employee> employees = new ArrayList<>();

//         try {
//             Statement statement = connection.createStatement();
//             ResultSet resultSet = statement.executeQuery("SELECT * FROM employees");

//             while (resultSet.next()) {
//                 int id = resultSet.getInt("id");
//                 String name = resultSet.getString("name");
//                 String email = resultSet.getString("email");
//                 double salary = resultSet.getDouble("salary");

//                 Employee employee = new Employee(id, name, email, salary);
//                 employees.add(employee);
//             }

//             resultSet.close();
//             statement.close();
//         } catch (SQLException e) {
//             System.out.println("Error retrieving employees: " + e.getMessage());
//         }

//         return employees;
//     }

//     public void addEmployee(Employee employee) {
//         try {
//             PreparedStatement preparedStatement = connection.prepareStatement(
//                     "INSERT INTO employees (name, email, salary) VALUES (?, ?, ?)");

//             preparedStatement.setString(1, employee.getName());
//             preparedStatement.setString(2, employee.getEmail());
//             preparedStatement.setDouble(3, employee.getSalary());

//             preparedStatement.executeUpdate();
//             preparedStatement.close();
//         } catch (SQLException e) {
//             System.out.println("Error adding employee: " + e.getMessage());
//         }
//     }

//     public void updateEmployee(Employee employee) {
//         try {
//             PreparedStatement preparedStatement = connection.prepareStatement(
//                     "UPDATE employees SET name=?, email=?, salary=? WHERE id=?");

//             preparedStatement.setString(1, employee.getName());
//             preparedStatement.setString(2, employee.getEmail());
//             preparedStatement.setDouble(3, employee.getSalary());
//             preparedStatement.setInt(4, employee.getId());

//             preparedStatement.executeUpdate();
//             preparedStatement.close();
//         } catch (SQLException e) {
//             System.out.println("Error updating employee: " + e.getMessage());
//         }
//     }

//     public void deleteEmployee(int id) {
//         try {
//             PreparedStatement preparedStatement = connection.prepareStatement(
//                     "DELETE FROM employees WHERE id=?");

//             preparedStatement.setInt(1, id);

//             preparedStatement.executeUpdate();
//             preparedStatement.close();
//         } catch (SQLException e) {
//             System.out.println("Error deleting employee: " + e.getMessage());
//         }
//     }

//     public void closeConnection() {
//         try {
//             if (connection != null) {
//                 connection.close();
//             }
//         } catch (SQLException e) {
//             System.out.println("Error closing the database connection: " + e.getMessage());
//         }
//     }
// }


/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

// public class Employee {
//     private int id;
//     private String name;
//     private String email;
//     private double salary;

//     public Employee(int id, String name, String email, double salary) {
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.salary = salary;
//     }

//     // Getters and setters for the properties

//     public int getId() {
//         return id;
//     }

//     public void setId(int id) {
//         this.id = id;
//     }

//     public String getName() {
//         return name;
//     }

//     public void setName(String name) {
//         this.name = name;
//     }

//     public String getEmail() {
//         return email;
//     }

//     public void setEmail(String email) {
//         this.email = email;
//     }

//     public double getSalary() {
//         return salary;
//     }

//     public void setSalary(double salary) {
//         this.salary = salary;
//     }

//     // Other methods and business logic
// }


/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

// import java.sql.*;
// import java.util.ArrayList;
// import java.util.List;

// public class Employee {
//     private int id;
//     private String name;
//     private String email;
//     private double salary;

//     public Employee(int id, String name, String email, double salary) {
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.salary = salary;
//     }

//     // Getters and setters for the properties

//     public int getId() {
//         return id;
//     }

//     public void setId(int id) {
//         this.id = id;
//     }

//     public String getName() {
//         return name;
//     }

//     public void setName(String name) {
//         this.name = name;
//     }

//     public String getEmail() {
//         return email;
//     }

//     public void setEmail(String email) {
//         this.email = email;
//     }

//     public double getSalary() {
//         return salary;
//     }

//     public void setSalary(double salary) {
//         this.salary = salary;
//     }

//     // Other methods and business logic
// }

// public class EmployeeDAO {
//     private Connection connection;

//     public EmployeeDAO() {
//         String url = "jdbc:mysql://localhost:3306/mydatabase";
//         String username = "username";
//         String password = "password";

//         try {
//             connection = DriverManager.getConnection(url, username, password);
//         } catch (SQLException e) {
//             System.out.println("Database connection error: " + e.getMessage());
//         }
//     }

//     public List<Employee> getAllEmployees() {
//         List<Employee> employees = new ArrayList<>();

//         try {
//             Statement statement = connection.createStatement();
//             ResultSet resultSet = statement.executeQuery("SELECT * FROM employees");

//             while (resultSet.next()) {
//                 int id = resultSet.getInt("id");
//                 String name = resultSet.getString("name");
//                 String email = resultSet.getString("email");
//                 double salary = resultSet.getDouble("salary");

//                 Employee employee = new Employee(id, name, email, salary);
//                 employees.add(employee);
//             }

//             resultSet.close();
//             statement.close();
//         } catch (SQLException e) {
//             System.out.println("Error retrieving employees: " + e.getMessage());
//         }

//         return employees;
//     }

//     public void addEmployee(Employee employee) {
//         try {
//             PreparedStatement preparedStatement = connection.prepareStatement(
//                     "INSERT INTO employees (name, email, salary) VALUES (?, ?, ?)");

//             preparedStatement.setString(1, employee.getName());
//             preparedStatement.setString(2, employee.getEmail());
//             preparedStatement.setDouble(3, employee.getSalary());

//             preparedStatement.executeUpdate();
//             preparedStatement.close();
//         } catch (SQLException e) {
//             System.out.println("Error adding employee: " + e.getMessage());
//         }
//     }

//     public void updateEmployee(Employee employee) {
//         try {
//             PreparedStatement preparedStatement = connection.prepareStatement(
//                     "UPDATE employees SET name=?, email=?, salary=? WHERE id=?");

//             preparedStatement.setString(1, employee.getName());
//             preparedStatement.setString(2, employee.getEmail());
//             preparedStatement.setDouble(3, employee.getSalary());
//             preparedStatement.setInt(4, employee.getId());

//             preparedStatement.executeUpdate();
//             preparedStatement.close();
//         } catch (SQLException e) {
//             System.out.println("Error updating employee: " + e.getMessage());
//         }
//     }

//     public void deleteEmployee(int id) {
//         try {
//             PreparedStatement preparedStatement = connection.prepareStatement(
//                     "DELETE FROM employees WHERE id=?");

//             preparedStatement.setInt(1, id);

//             preparedStatement.executeUpdate();
//             preparedStatement.close();
//         } catch (SQLException e) {
//             System.out.println("Error deleting employee: " + e.getMessage());
//         }
//     }


//         public void closeConnection() {
//             try {
//                 if (connection != null) {
//                     connection.close();
//                 }
//             } catch (SQLException e) {
//                 System.out.println("Error closing the database connection: " + e.getMessage());
//             }
//         }
//     }
    


/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

// public interface UserDao {
//     User findById(int id);
//     List<User> findAll();
//     void save(User user);
//     void update(User user);
//     void delete(User user);
// }

// public class UserDaoImpl implements UserDao {
//     @Override
//     public User findById(int id) {
//         // Database query to find a user by ID
//         // Return the user object
//     }

//     @Override
//     public List<User> findAll() {
//         // Database query to retrieve all users
//         // Return a list of user objects
//     }

//     @Override
//     public void save(User user) {
//         // Logic to save a user to the database
//     }

//     @Override
//     public void update(User user) {
//         // Logic to update a user in the database
//     }

//     @Override
//     public void delete(User user) {
//         // Logic to delete a user from the database
//     }
// }

// public class User {
//     // User class with properties and methods
// }



/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/




/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/




/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/




/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

