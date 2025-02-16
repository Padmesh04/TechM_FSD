package Task.CollecttonApi;

import java.util.ArrayList;
import java.util.List;

public class ElementRetrival {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>( List.of( "Sam","Marco","Paddy" ));
        System.out.println(names.get(0));
    }
}