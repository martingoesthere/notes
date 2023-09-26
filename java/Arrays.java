// package java;
// Arrays.asList();
// Arrays.sort();
// Arrays.binarySearch();
// int[] numbers = {5, 10, 15, 20, 25, 30};
// int searchKey = 20;
// int index1 = Arrays.binarySearch(numbers, searchKey);
// System.out.println("Example 1 - Index of " + searchKey + ": " + index1);
// Arrays.compare();
// Arrays.compareUnsigned();
// Arrays.copyOf();
// Arrays.copyOfRange();
// Arrays.deepEquals();
// // Arrays.deepHashCode();
// Arrays.deepToString();
// String array2DString = Arrays.deepToString(array2D);
// Arrays.equals();
// Arrays.fill();
// Arrays.hashCode();
// Arrays.mismatch();
// Arrays.parallelSort();
// Arrays.sort();
// Arrays.spliterator();
// Arrays.stream();
// Arrays.toString();























































// // import java.util.Arrays;

// // public class BinarySearchExamples {
// //     public static void main(String[] args) {

// //         // Example 3: Searching for a custom object in a sorted array using a custom comparator
// //         Person[] people = {
// //             new Person("Alice", 25),
// //             new Person("Bob", 30),
// //             new Person("Charlie", 22)
// //         };
// //         Person searchPerson = new Person("Bob", 0); // Search based on name
// //         int index3 = Arrays.binarySearch(people, searchPerson, new PersonNameComparator());
// //         System.out.println("Example 3 - Index of " + searchPerson.getName() + ": " + index3);
// //     }
// // }

// // class Person {
// //     private String name;
// //     private int age;

// //     public Person(String name, int age) {
// //         this.name = name;
// //         this.age = age;
// //     }

// //     public String getName() {
// //         return name;
// //     }
// // }

// // class PersonNameComparator implements java.util.Comparator<Person> {
// //     @Override
// //     public int compare(Person p1, Person p2) {
// //         return p1.getName().compareTo(p2.getName());
// //     }
// // }


// // Example 1 - Index of 20: 3
// // Example 2 - Index of Charlie: 2
// // Example 3 - Index of Bob: 1






















// // import java.util.ArrayList;
// // import java.util.Collections;
// // import java.util.Comparator;
// // import java.util.List;

// // public class ComparatorExamples {
// //     public static void main(String[] args) {
// //         // Example 1: Sorting integers in descending order
// //         List<Integer> numbers = new ArrayList<>();
// //         numbers.add(42);
// //         numbers.add(15);
// //         numbers.add(7);
// //         numbers.add(23);
// //         numbers.add(56);

// //         Comparator<Integer> descendingComparator = (num1, num2) -> num2 - num1;
// //         Collections.sort(numbers, descendingComparator);

// //         System.out.println("Example 1 - Sorted numbers in descending order: " + numbers);

// //         // Example 2: Sorting strings by length
// //         List<String> strings = new ArrayList<>();
// //         strings.add("apple");
// //         strings.add("banana");
// //         strings.add("cherry");

// //         Comparator<String> lengthComparator = Comparator.comparingInt(String::length);
// //         Collections.sort(strings, lengthComparator);

// //         System.out.println("Example 2 - Sorted strings by length: " + strings);

// //         // Example 3: Sorting custom objects by name
// //         List<Person> people = new ArrayList<>();
// //         people.add(new Person("Alice", 25));
// //         people.add(new Person("Bob", 30));
// //         people.add(new Person("Charlie", 22));

// //         Comparator<Person> nameComparator = Comparator.comparing(Person::getName);
// //         Collections.sort(people, nameComparator);

// //         System.out.println("Example 3 - Sorted people by name: " + people);
// //     }
// // }

// // class Person {
// //     private String name;
// //     private int age;

// //     public Person(String name, int age) {
// //         this.name = name;
// //         this.age = age;
// //     }

// //     public String getName() {
// //         return name;
// //     }

// //     @Override
// //     public String toString() {
// //         return name + " (" + age + ")";
// //     }
// // }
// // Example 1 - Sorted numbers in descending order: [56, 42, 23, 15, 7]
// // Example 2 - Sorted strings by length: [apple, cherry, banana]
// // Example 3 - Sorted people by name: [Alice (25), Bob (30), Charlie (22)]
