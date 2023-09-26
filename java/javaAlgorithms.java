
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.Collections;

public class JavaAlgorithms {

    // 
    public static int highestDigit(int num1) {

        String one = num1 + "";
        
        String[] two = one.split("");
        
        System.out.println(two + "oneee");
        ArrayList<String> three = new ArrayList<>();
        
        for(String word : two){
            three.add(word);
        }
        
        Collections.sort(three);
        Collections.reverse(three);
        
        System.out.println(three);
        
        return Integer.parseInt(three.get(0));
    }

    public static void main(String[] args) {
        
        System.out.println(highestDigit(4666));   // Output: 6
        System.out.println(highestDigit(544));    // Output: 5
        System.out.println(highestDigit(379));    // Output: 9
        System.out.println(highestDigit(2));      // Output: 2
        System.out.println(highestDigit(377401)); // Output: 7

    }
}
 
/****************************************************************************************************************/
// Check if String Ending Matches Second String

