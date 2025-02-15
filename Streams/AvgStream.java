package Task.Streams;

import java.util.Arrays;
import java.util.List;

public class AvgStream {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(10, 40, 30, 80, 10);

        double average = numbers.stream().mapToInt(Integer::intValue).average().orElse(0.0);

        System.out.println("The Average is : " + average);
    }
}
