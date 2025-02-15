package Task.Streams;

import java.util.Arrays;
import java.util.List;

public class CountingSpecificWords {

    public static void main(String[] args) {
        List<String> words = Arrays.asList("Pad", "Hello", "Navin", "love", "SAM");

        char targetLetter = 'S';
        long count = words.stream().filter(word -> word.startsWith(String.valueOf(targetLetter))).count();

        System.out.println("Number of words starting with '" + targetLetter + "': " + count);
    }
}