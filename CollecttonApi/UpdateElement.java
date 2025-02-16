package Task.CollecttonApi;

import java.util.ArrayList;
import java.util.List;

public class UpdateElement {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>(List.of("PAD","NAVIN","SAM"));
        names.set(1, "MARCO");
        System.out.println(names);
    }
}