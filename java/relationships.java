// @Entity
// public class Vendor {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String name;
    
//     @OneToOne(mappedBy = "vendor") // mappedBy specifies the field in the target entity
//     private VendorDetail vendorDetail;
    
//     // getters and setters
// }

// @Entity
// public class VendorDetail {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String contactNumber;
    
//     @OneToOne
//     @JoinColumn(name = "vendor_id") // This establishes the foreign key relationship
//     private Vendor vendor; // This field establishes the connection back to Vendor
    
//     // getters and setters
// }

/**********************************************************************************************************************/

// @Entity
// public class Author {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String name;

//     @OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
//     private List<Book> books = new ArrayList<>();

//     // getters and setters
// }

// @Entity
// public class Book {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String title;

//     @ManyToOne
//     @JoinColumn(name = "author_id")
//     private Author author;

//     // getters and setters
// }
/**********************************************************************************************************************/

// @Entity
// public class Student {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String name;

//     @ManyToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE })
//     @JoinTable(
//         name = "student_course",
//         joinColumns = @JoinColumn(name = "student_id"),
//         inverseJoinColumns = @JoinColumn(name = "course_id")
//     )
//     private Set<Course> courses = new HashSet<>();

//     // Constructors, getters, setters
// }



// @Entity
// public class Course {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String title;

//     @ManyToMany(mappedBy = "courses")
//     private Set<Student> students = new HashSet<>();

//     // Constructors, getters, setters
// }





// // Example of adding a student to a course
// Student student = studentRepository.findById(studentId).orElse(null);
// Course course = courseRepository.findById(courseId).orElse(null);

// if (student != null && course != null) {
//     student.getCourses().add(course);
//     course.getStudents().add(student);

//     studentRepository.save(student);
//     courseRepository.save(course);
// }



// CREATE TABLE Student (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255)
// );




// CREATE TABLE Student (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255)
// );

// CREATE TABLE Course (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(255)
// );

// CREATE TABLE student_course (
//     student_id INT,
//     course_id INT,
//     PRIMARY KEY (student_id, course_id),
//     FOREIGN KEY (student_id) REFERENCES Student(id),
//     FOREIGN KEY (course_id) REFERENCES Course(id)
// );


