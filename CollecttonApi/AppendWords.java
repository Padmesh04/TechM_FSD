package Task.CollecttonApi;

import java.util.LinkedList;

public class AppendWords {
    public static void main(String[] args) {
        LinkedList<String> MoviesList = new LinkedList<>();
        MoviesList.add("Paddy");
        MoviesList.add("Saman");
        MoviesList.addLast("Ily");

        System.out.println(MoviesList);
    }
}
