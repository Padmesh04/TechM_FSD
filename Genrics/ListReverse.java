package Task.Genrics;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ListReverse {
    public static <T> List<T> reverseList(List<T> list) {
        List<T> reversedList = new ArrayList<>(list);
        Collections.reverse(reversedList);
        return reversedList;
    }

    public static void main(String[] args) {
        List<Integer> numbers = List.of(1, 2, 3, 4, 5);//List to be reversed
        System.out.println(reverseList(numbers));
    }
}