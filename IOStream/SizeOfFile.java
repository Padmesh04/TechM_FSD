package Task.IOStream;
//8. Write a Java program to get the file size in bytes, KB, MB.

import java.io.File;

public class SizeOfFile {
    public static void main(String[] args) {

        String filePath = "/Users/padmeshg/IdeaProjects/padmesh/calculator/src/Number.txt";

        File file = new File(filePath);

        if (file.exists() && file.isFile()) {
            // Get file size in bytes
            long fileSizeBytes = file.length();

            // Convert to KB and MB
            double fileSizeKB = fileSizeBytes / 1024.0;
            double fileSizeMB = fileSizeKB / 1024.0;

            // Display the results
            System.out.println("File Size: ");
            System.out.println(fileSizeBytes + " Bytes");
            System.out.printf("%.2f KB\n", fileSizeKB);
            System.out.printf("%.2f MB\n", fileSizeMB);
        } else {
            System.out.println("File does not exist or is not a valid file.");
        }

    }
}