package Task.CollecttonApi;

import java.util.LinkedList;
import java.util.List;

public class MultipleInserting {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>( List.of("Red", "Green"));
        list.add(1, "Blue");
        list.add(2, "Yellow");

        System.out.println(list);
    }

}