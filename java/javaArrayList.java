package java;
// import java.util.ArrayList;
// public class javaArrayList {
    
//     public static void main(String[] args) {
//         // Create an ArrayList of Strings
//         ArrayList<String> fruits = new ArrayList<>();

//         // Add elements
//         fruits.add("Apple");
//         fruits.add("Banana");
//         fruits.add("Orange");
//         fruits.add("Mango");

//         // Display the ArrayList
//         System.out.println("Initial ArrayList: " + fruits);

//         // 1. add(E element)
//         fruits.add("Grapes");
//         System.out.println("After adding 'Grapes': " + fruits);

//         // 2. add(int index, E element)
//         fruits.add(2, "Strawberry");
//         System.out.println("After adding 'Strawberry' at index 2: " + fruits);

//         // 3. addAll(Collection<? extends E> c)
//         ArrayList<String> moreFruits = new ArrayList<>();
//         moreFruits.add("Pineapple");
//         moreFruits.add("Watermelon");
//         fruits.addAll(moreFruits);
//         System.out.println("After adding more fruits: " + fruits);

//         // 4. addAll(int index, Collection<? extends E> c)
//         ArrayList<String> berries = new ArrayList<>();
//         berries.add("Blueberry");
//         berries.add("Raspberry");
//         fruits.addAll(1, berries);
//         System.out.println("After adding berries at index 1: " + fruits);

//         // 5. clear()
//         fruits.clear();
//         System.out.println("After clearing the ArrayList: " + fruits);

//         // Re-populate the ArrayList
//         fruits.addAll(moreFruits);
//         fruits.addAll(berries);

//         // 6. contains(Object o)
//         boolean containsApple = fruits.contains("Apple");
//         System.out.println("Contains 'Apple'? " + containsApple);

//         // 7. get(int index)
//         String fruitAtIndex2 = fruits.get(2);
//         System.out.println("Fruit at index 2: " + fruitAtIndex2);

//         // 8. indexOf(Object o)
//         int indexOfMango = fruits.indexOf("Mango");
//         System.out.println("Index of 'Mango': " + indexOfMango);

//         // 9. isEmpty()
//         boolean isListEmpty = fruits.isEmpty();
//         System.out.println("Is the list empty? " + isListEmpty);

//         // 10. remove(Object o)
//         boolean removedBanana = fruits.remove("Banana");
//         System.out.println("Removed 'Banana'? " + removedBanana);
//         System.out.println("After removing 'Banana': " + fruits);

//         // 11. remove(int index)
//         String removedFruit = fruits.remove(3);
//         System.out.println("Removed fruit at index 3: " + removedFruit);
//         System.out.println("After removing at index 3: " + fruits);

//         // 12. removeAll(Collection<?> c)
//         ArrayList<String> fruitsToRemove = new ArrayList<>();
//         fruitsToRemove.add("Pineapple");
//         fruitsToRemove.add("Watermelon");
//         boolean removedAll = fruits.removeAll(fruitsToRemove);
//         System.out.println("Removed all? " + removedAll);
//         System.out.println("After removing all: " + fruits);

//         // 13. set(int index, E element)
//         fruits.set(1, "Cherry");
//         System.out.println("After setting 'Cherry' at index 1: " + fruits);

//         // 14. size()
//         int size = fruits.size();
//         System.out.println("Size of the ArrayList: " + size);

//         // 15. subList(int fromIndex, int toIndex)
//         ArrayList<String> sublist = new ArrayList<>(fruits.subList(1, 4));
//         System.out.println("Sublist from index 1 to 4: " + sublist);

//         // 16. toArray()
//         String[] fruitArray = fruits.toArray(new String[0]);
//         System.out.print("Fruit array: ");
//         for (String fruit : fruitArray) {
//             System.out.print(fruit + " ");
//         }
//         System.out.println();
//     }
// }









// import java.util.ArrayList;

// public class ArrayListMethodsDemo {
//     public static void main(String[] args) {
//         // Create an ArrayList of Strings
//         ArrayList<String> fruits = new ArrayList<>();

//         // Add elements
//         fruits.add("Apple");
//         fruits.add("Banana");
//         fruits.add("Orange");
//         fruits.add("Mango");

//         // ... (previous code)

//         // 17. ensureCapacity(int minCapacity)
//         ((ArrayList<String>) fruits).ensureCapacity(10);

//         // 18. forEach(Consumer<? super E> action)
//         System.out.print("Fruits (using forEach): ");
//         fruits.forEach(fruit -> System.out.print(fruit + " "));
//         System.out.println();

//         // 19. get(int index)
//         String firstFruit = fruits.get(0);
//         System.out.println("First fruit: " + firstFruit);

//         // 20. iterator()
//         System.out.print("Fruits (using iterator): ");
//         var iterator = fruits.iterator();
//         while (iterator.hasNext()) {
//             String fruit = iterator.next();
//             System.out.print(fruit + " ");
//         }
//         System.out.println();

//         // 21. listIterator()
//         System.out.print("Fruits (using listIterator): ");
//         var listIterator = fruits.listIterator();
//         while (listIterator.hasNext()) {
//             String fruit = listIterator.next();
//             System.out.print(fruit + " ");
//         }
//         System.out.println();

//         // 22. listIterator(int index)
//         System.out.print("Fruits (using listIterator from index 1): ");
//         var listIteratorFromIndex = fruits.listIterator(1);
//         while (listIteratorFromIndex.hasNext()) {
//             String fruit = listIteratorFromIndex.next();
//             System.out.print(fruit + " ");
//         }
//         System.out.println();

//         // 23. removeIf(Predicate<? super E> filter)
//         boolean removed = fruits.removeIf(fruit -> fruit.startsWith("A"));
//         System.out.println("Removed fruits that start with 'A'? " + removed);
//         System.out.println("After removing: " + fruits);

//         // 24. retainAll(Collection<?> c)
//         ArrayList<String> fruitsToRetain = new ArrayList<>();
//         fruitsToRetain.add("Mango");
//         boolean retainedAll = fruits.retainAll(fruitsToRetain);
//         System.out.println("Retained all 'Mango'? " + retainedAll);
//         System.out.println("After retaining: " + fruits);

//         // 25. sort(Comparator<? super E> c)
//         fruits.sort(String::compareToIgnoreCase);
//         System.out.println("After sorting: " + fruits);
//     }
// }


// import java.util.ArrayList;
// import java.util.Collections;
// import java.util.Comparator;

// public class ArrayListMethodsDemo {
//     public static void main(String[] args) {
//         // Create an ArrayList of Strings
//         ArrayList<String> fruits = new ArrayList<>();

//         // Add elements
//         fruits.add("Apple");
//         fruits.add("Banana");
//         fruits.add("Orange");
//         fruits.add("Mango");

//         // ... (previous code)

//         // 26. spliterator()
//         System.out.print("Fruits (using spliterator): ");
//         var spliterator = fruits.spliterator();
//         spliterator.forEachRemaining(fruit -> System.out.print(fruit + " "));
//         System.out.println();

//         // 27. toArray(T[] a)
//         String[] fruitArray = new String[fruits.size()];
//         fruitArray = fruits.toArray(fruitArray);
//         System.out.print("Fruits array (toArray): ");
//         for (String fruit : fruitArray) {
//             System.out.print(fruit + " ");
//         }
//         System.out.println();

//         // 28. trimToSize()
//         ((ArrayList<String>) fruits).trimToSize();

//         // 29. sort(Comparator<? super E> c)
//         Collections.sort(fruits, Comparator.reverseOrder());
//         System.out.println("After reverse sorting: " + fruits);
//     }
// }
