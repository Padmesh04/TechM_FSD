package Task.CollecttonApi;

import java.util.ArrayList;
import java.util.List;

public class ListCopy {
    public static void main(String[] args) {
        ArrayList<String> colorsNames = new ArrayList<>( List.of("Red", "Green","Blue",  "Black","White","Yellow"));
        ArrayList<String> colors=new ArrayList< >(colorsNames);
        System.out.println(colors);
    }
}