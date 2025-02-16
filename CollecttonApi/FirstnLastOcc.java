package Task.CollecttonApi;

import java.util.LinkedList;
import java.util.List;

public class FirstnLastOcc {

    public static void main(String[] args) {

        LinkedList<String> list = new LinkedList<>( List.of("Paddy", "Sam", "Paddy", "Paddy"," Red","Sam","Sam"));
        System.out.println("First time of Blue: " + list.indexOf("Sam"));
        System.out.println("Last time of Blue: " + list.lastIndexOf("Sam"));

    }
}