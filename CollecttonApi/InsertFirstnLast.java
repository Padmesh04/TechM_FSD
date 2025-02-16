package Task.CollecttonApi;

import java.util.LinkedList;
import java.util.List;

public class InsertFirstnLast {
    public static void main(String[] args) {
        LinkedList<String> movieList = new LinkedList<>(
                List.of("OKOK", "HEY", "Love Today ", "Sinamika "));
        movieList.addFirst("Paddy");
        movieList.addLast("Sam");
        System.out.println(movieList);
    }
}