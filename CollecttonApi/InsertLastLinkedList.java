package Task.CollecttonApi;

import java.util.LinkedList;
import java.util.List;

public class InsertLastLinkedList {
    public static void main(String[] args) {

        LinkedList<String> movieList = new LinkedList<>(
                List.of("PAD", "Meet", "Ben "));
        movieList.addLast("Sam");
        System.out.println(movieList);

    }
}