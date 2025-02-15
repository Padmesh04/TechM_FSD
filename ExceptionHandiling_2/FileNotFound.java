package Task.ExceptionHandiling_2;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class FileNotFound {
    public static void readFile(String filePath) throws FileNotFoundException {
        File file = new File(filePath);
        Scanner scanner = new Scanner(file);
        System.out.println("File found");//Message when file found
        scanner.close();
    }

    public static void main(String[] args) {
        try {
            readFile("/Users/padmeshg/IdeaProjects/padmesh/calculator/src/Number.tx"); // Path might be differ
        } catch (FileNotFoundException e) {
            System.out.println("Exception caught: File not found.");//Message when file not found
        }
    }
}