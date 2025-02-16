package Task.CollecttonApi;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ListShuffle {
    public static void main(String[] args) {
        ArrayList<String> movies = new ArrayList<>( List.of( "PAD","SAM","NAVIN","ARUN"));
        Collections.shuffle(movies);

        System.out.println(movies);
    }
}