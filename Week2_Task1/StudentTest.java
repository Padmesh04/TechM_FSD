package Task.Week2_Task1;

import java.util.*;


public class StudentTest {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Student> students = new ArrayList<>();

        System.out.print("Enter the number of students: ");
        int numberOfStudents = scanner.nextInt();
        scanner.nextLine(); // Consume newline

        for (int i = 0; i < numberOfStudents; i++) {
            System.out.print("Enter the name of student " + (i + 1) + ": ");
            String name = scanner.nextLine();

            System.out.print("Enter the number of subjects for " + name + ": ");
            int numberOfSubjects = scanner.nextInt();
            int[] marks = new int[numberOfSubjects];

            for (int j = 0; j < numberOfSubjects; j++) {
                System.out.print("Enter the marks for subject " + (j + 1) + ": ");
                marks[j] = scanner.nextInt();
            }
            scanner.nextLine(); // Consume newline

            students.add(new Student(name, marks));
        }
        Collections.sort(students, Comparator.comparingDouble(Student::getAverage).reversed());
        for (Student stu : students) {
            System.out.println(stu.getName() + "  " + stu.getAverage());
        }

    }
}

