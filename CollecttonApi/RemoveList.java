package Task.CollecttonApi;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

public class RemoveList {
    public static void main(String[] args) {
        LinkedList<Integer> number = new LinkedList<>(List.of(10, 20, 30, 40, 50, 60, 70));
        Collections.reverse(number);
        System.out.println(number);

    }
}