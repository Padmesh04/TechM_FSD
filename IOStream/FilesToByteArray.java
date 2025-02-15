package Task.IOStream;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
//9. Write a Java program to read the contents of a file into a byte array.
public class FilesToByteArray {
    public static void main(String[] args) {
        String filePath = "/Users/padmeshg/Downloads/Recents/src";

        try {
            byte[] fileBytes = readFileToByteArray(filePath);
            System.out.println("File read successfully. Byte array length: " + fileBytes.length);
        } catch (IOException e) {
            System.err.println("Error reading file: It is a Directory");
        }
    }

    public static byte[] readFileToByteArray(String filePath) throws IOException {
        return Files.readAllBytes(Paths.get(filePath));
    }
}