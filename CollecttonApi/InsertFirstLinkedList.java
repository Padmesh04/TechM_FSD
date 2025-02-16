package Task.CollecttonApi;

import java.util.LinkedList;
import java.util.List;

public class InsertFirstLinkedList {
    public static void main(String[] args) {

        LinkedList<String> movieList = new LinkedList<>(
                List.of("PAD", "Love", "Ben "));
        movieList.addFirst("SAM");
        System.out.println(movieList);

    }
}