package Task.Streams;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class DucpRemove {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(5,5,5,5,42,5,88,7,7, 32, 2, 4, 5, 1 );

        List<Integer> uniqueNumbers = numbers.stream().distinct().collect(Collectors.toList());

        System.out.println("List without duplicates: " + uniqueNumbers);
    }
}