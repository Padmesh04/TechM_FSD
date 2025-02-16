package Task.CollecttonApi;

import java.util.ArrayList;
import java.util.List;

public class RemoveListElements {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>( List.of("Paddy","Victor","Sam","KK"));
        names.remove(3);
        System.out.println(names);
    }
}