package Task.CollecttonApi;

import java.util.ArrayList;
import java.util.List;

public class CheckElement {
    public static void main(String[] args) {
        ArrayList<Integer> numbers=new ArrayList<> (List.of(3,7,8,9,10));
        System.out.println(numbers.contains(4));
    }
}