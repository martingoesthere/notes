package java;
public class Main {
    public static void main(String[] args) {
      Object[] arr = {false, 1, 0, 1, 2, 0, 1, 3, "a"};
      moveZeros(arr);
      System.out.println(Arrays.toString(arr));
    }
    
    public static void moveZeros(Object[] arr) {
      int len = arr.length;
      int index = 0;
      
      for (int i = 0; i < len; i++) {
        if (!arr[i].equals(0)) {
          arr[index] = arr[i];
          index++;
        }
      }
      
      while (index < len) {
        arr[index] = 0;
        index++;
      }
    }
  }
  