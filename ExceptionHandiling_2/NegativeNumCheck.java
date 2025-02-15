package Task.ExceptionHandiling_2;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class NegativeNumCheck {
    public static void checkNumbersInFile(String filePath) throws FileNotFoundException, PositiveNumberException {
        File file = new File(filePath);
        Scanner scanner = new Scanner(file);

        while (scanner.hasNextInt()) {
            int num = scanner.nextInt();
            if (num > 0) {
                scanner.close();
                throw new PositiveNumberException("Error: Positive number " + num + " found in file.");
            }
        }
        scanner.close();
        System.out.println("File contains only negative numbers or may contain zero.");
    }

    public static void main(String[] args) {
        try {
            checkNumbersInFile("/Users/padmeshg/IdeaProjects/padmesh/calculator/src/Number.txt "); // path might be differ for other user
        } catch (FileNotFoundException e) {
            System.out.println("Exception caught: File not found.");// Message that has to throw
        } catch (PositiveNumberException e) {
            System.out.println(e.getMessage());
        }
    }
}