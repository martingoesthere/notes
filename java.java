import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

public class CRUDApplication {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Enter a command: add, retrieve, update, delete or exit:");
            String command = scanner.nextLine();

            if (command.equalsIgnoreCase("add")) {
                addRecord(scanner);
            } else if (command.equalsIgnoreCase("retrieve")) {
                retrieveRecord(scanner);
            } else if (command.equalsIgnoreCase("update")) {
                updateRecord(scanner);
            } else if (command.equalsIgnoreCase("delete")) {
                deleteRecord(scanner);
            } else if (command.equalsIgnoreCase("exit")) {
                System.out.println("Goodbye!");
                break;
            } else {
                System.out.println("Invalid command.");
            }
        }

        scanner.close();
    }

    public static void addRecord(Scanner scanner) {
        System.out.println("Enter the name:");
        String name = scanner.nextLine();

        System.out.println("Enter the age:");
        int age = Integer.parseInt(scanner.nextLine());

        System.out.println("Enter the email:");
        String email = scanner.nextLine();

        try {
            FileWriter writer = new FileWriter("database.txt", true);
            writer.write(name + "," + age + "," + email + "\n");
            writer.close();
            System.out.println("Record added successfully.");
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }

    public static void retrieveRecord(Scanner scanner) {
        ArrayList<String> records = new ArrayList<String>();

        try {
            File file = new File("database.txt");
            Scanner fileScanner = new Scanner(file);

            while (fileScanner.hasNextLine()) {
                String line = fileScanner.nextLine();
                records.add(line);
            }

            fileScanner.close();
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }

        if (records.size() == 0) {
            System.out.println("No records found.");
        } else {
            System.out.println("Records:");

            for (String record : records) {
                String[] fields = record.split(",");
                System.out.println("Name: " + fields[0] + ", Age: " + fields[1] + ", Email: " + fields[2]);
            }
        }
    }


    public static void updateRecord(Scanner scanner) {
        System.out.println("Enter the email of the record to update:");
        String email = scanner.nextLine();

        ArrayList<String> records = new ArrayList<String>();

        try {
            File file = new File("database.txt");
            Scanner fileScanner = new Scanner(file);

            while (fileScanner.hasNextLine()) {
                String line = fileScanner.nextLine();
                if (line.contains(email)) {
                    records.add(line);
                }
            }

            fileScanner.close();
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }

        if (records.size() == 0) {
            System.out.println("Record not found.");
        } else if (records.size() == 1) {
            System.out.println("Enter the new name:");
            String name = scanner.nextLine();

            System.out.println("Enter the new age:");
            int age = Integer.parseInt(scanner.nextLine());

            try {
                FileWriter writer = new FileWriter("database.txt");
                for (String record : records) {
                    String[] fields = record.split(",");
                    String updatedRecord = fields[0] + "," + name + "," + age + "," + fields[3];
                    writer.write(updatedRecord + "\n");
                }
                writer.close();
                System.out.println("Record updated successfully.");
            } catch (IOException e) {
                System.out.println("An error occurred.");
                e.printStackTrace();
            }
        } else {
            System.out.println("Multiple records found.");
        }
    }


    public static void deleteRecord(Scanner scanner) {
        System.out.println("Enter the email of the record to delete:");
        String email = scanner.nextLine();

        ArrayList<String> records = new ArrayList<String>();

        try {
            File file = new File("database.txt");
            Scanner fileScanner = new Scanner(file);

            while (fileScanner.hasNextLine()) {
                String line = fileScanner.nextLine();
                if (line.contains(email)) {
                    records.add(line);
                }
            }

            fileScanner.close();
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }

        if (records.size() == 0) {
            System.out.println("Record not found.");
        } else if (records.size() == 1) {
            try {
                File inputFile = new File("database.txt");
                File tempFile = new File("temp.txt");

                FileWriter writer = new FileWriter(tempFile);

                Scanner scanner2 = new Scanner(inputFile);
                while (scanner2.hasNextLine()) {
                    String line = scanner2.nextLine();
                    if (!line.contains(email)) {
                        writer.write(line + "\n");
                    }
                }
                scanner2.close();
                writer.close();
                inputFile.delete();
                tempFile.renameTo(inputFile);
                System.out.println("Record deleted successfully.");
            } catch (IOException e) {
                System.out.println("An error occurred.");
                e.printStackTrace();
            }
        } else {
            System.out.println("Multiple records found.");
        }
    }
}




/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/

import java.util.Scanner;

public class MyScanner {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
    }
}

String inputString = scanner.next();

String inputLine = scanner.nextLine();

int inputInt = scanner.nextInt();
float inputFloat = scanner.nextFloat();
double inputDouble = scanner.nextDouble();

boolean inputBoolean = scanner.nextBoolean();

scanner.close();

try {
    int inputInt = scanner.nextInt();
} catch (InputMismatchException e) {
    System.out.println("Invalid input. Please enter an integer.");
}



/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/

import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the first number:");
        double num1 = scanner.nextDouble();

        System.out.println("Enter the second number:");
        double num2 = scanner.nextDouble();

        System.out.println("Enter the operation (+, -, *, /):");
        char operator = scanner.next().charAt(0);

        double result = 0.0;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                System.out.println("Invalid operator.");
                return;
        }

        System.out.println("Result: " + result);

        scanner.close();
    }
}

/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/
John Doe,80
Jane Smith,90
Bob Johnson,75


import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class StudentData {
    public static void main(String[] args) {
        try {
            File file = new File("students.txt");
            Scanner scanner = new Scanner(file);

            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                String[] parts = line.split(",");
                String name = parts[0];
                int grade = Integer.parseInt(parts[1]);
                System.out.println("Name: " + name + ", Grade: " + grade);
            }

            scanner.close();
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        }
    }
}

/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/

CREATE DATABASE mydb;
USE mydb;

CREATE TABLE students (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  PRIMARY KEY (id)
);


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DatabaseConnection {
    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        try {
            Class.forName("com.mysql.jdbc.Driver");

            conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/mydb?useSSL=false",
                "username",
                "password"
            );

            stmt = conn.createStatement();
            rs = stmt.executeQuery("SELECT * FROM students");

            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age);
            }
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }

                if (stmt != null) {
                    stmt.close();
                }

                if (conn != null) {
                    conn.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}

/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/
public interface PaymentGateway {
    boolean pay(double amount);
  }
  
  public class PaypalGateway implements PaymentGateway {
    public boolean pay(double amount) { /* ... */ }
  }
  
  public class CreditCardGateway implements PaymentGateway {
    public boolean pay(double amount) { /* ... */ }
  }
  
  public class Checkout {
    private PaymentGateway paymentGateway;
  
    public Checkout(PaymentGateway paymentGateway) {
      this.paymentGateway = paymentGateway;
    }
  
    public boolean processPayment(double amount) {
      return paymentGateway.pay(amount);
    }
  }

  /****************************************************************************************************************************/

  public interface Printer {
    void print(Document document);
  }
  
  public interface Scanner {
    void scan(Document document);
  }
  
  public interface Fax {
    void fax(Document document);
  }
  
  public class MultiFunctionPrinter implements Printer, Scanner, Fax {
    public void print(Document document) { /* ... */ }
    public void scan(Document document) { /* ... */ }
    public void fax(Document document) { /* ... */ }
  }

  /****************************************************************************************************************************/

  public class Vehicle {
    public void accelerate() { /* ... */ }
    }

    public class Car extends Vehicle {
    public void steer() { /* ... */ }
    }

    public class Driver {
    public void drive(Vehicle vehicle) {
    vehicle.accelerate();
    }
}


  /****************************************************************************************************************************/

  public interface Shape {
    double area();
  }
  
  public class Circle implements Shape {
    private double radius;
  
    public Circle(double radius) {
      this.radius = radius;
    }
  
    @Override
    public double area() {
      return Math.PI * radius * radius;
    }
  }
  
  public class Rectangle implements Shape {
    private double width;
    private double height;
  
    public Rectangle(double width, double height) {
      this.width = width;
      this.height = height;
    }
  
    @Override
    public double area() {
      return width * height;
    }
  }
  
/****************************************************************************************************************************/

public class Calculator {
    public int add(int a, int b) {
      return a + b;
    }
  }
  
  public class CalculatorUI {
    private Calculator calculator = new Calculator();
  
    public void showResult(int a, int b) {
      int result = calculator.add(a, b);
      System.out.println("Result: " + result);
    }
  }
  

/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/

Scanner scanner = new Scanner(System.in);
System.out.print("Enter your age: ");
String ageString = scanner.nextLine();
int age = Integer.parseInt(ageString);


/****************************************************************************************************************************/

Properties props = new Properties();
props.load(new FileInputStream("config.properties"));
int maxConnections = Integer.parseInt(props.getProperty("max_connections"));

/****************************************************************************************************************************/
public static void main(String[] args) {
    if (args.length == 1) {
        int maxConnections = Integer.parseInt(args[0]);
        // Do something with maxConnections
    }
}

/****************************************************************************************************************************/

BufferedReader reader = new BufferedReader(new FileReader("data.csv"));
String line;
while ((line = reader.readLine()) != null) {
    String[] parts = line.split(",");
    int value1 = Integer.parseInt(parts[0]);
    int value2 = Integer.parseInt(parts[1]);
    // Do something with value1 and value2
}

/****************************************************************************************************************************/



/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/


/****************************************************************************************************************************/
/****************************************************************************************************************************/
/****************************************************************************************************************************/

