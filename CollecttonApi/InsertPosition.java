package Task.CollecttonApi;

import java.util.LinkedList;
import java.util.List;

public class InsertPosition {
    public static void main(String[] args) {
        LinkedList<String> movieList = new LinkedList<> (List.of("ABC","DFG","RTC"));
        movieList.add(0, "FRD");
        System.out.println(movieList);
    }
}