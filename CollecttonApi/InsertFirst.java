package Task.CollecttonApi;

import java.util.ArrayList;
import java.util.List;

public class InsertFirst {
    public static void main(String[] args) {
        ArrayList<String> names=new ArrayList<>( List.of("Paddy","Navin","Ambi"));
        names.add(0,"Sam");
        System.out.println(names);
    }
}