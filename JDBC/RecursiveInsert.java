package Task.JDBC;
import java.sql.*;
import java.util.Scanner;
public class RecursiveInsert {



    public static final String URL = "jdbc:mysql://localhost:3306/employee";
    public static final String USER = "root";
    public static final String PASSWORD = "Paddy@15";

    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Scanner scanner = new Scanner(System.in)) {

            System.out.print("Enter number of employees to insert: ");
            int n = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            insertEmployees(conn, scanner, n);

            System.out.println("Data inserted successfully.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void insertEmployees(Connection conn, Scanner scanner, int count) throws SQLException {
        if (count <= 0) return;

        String sql = "INSERT INTO employeedetails (empname, empid, phoneno) VALUES (?, ?, ?)";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            System.out.print("Enter Employee Name: ");
            String name = scanner.nextLine();

            System.out.print("Enter Employee ID: ");
            int id = scanner.nextInt();

            System.out.print("Enter Phone Number: ");
            scanner.nextLine(); // Consume newline
            String phone = scanner.nextLine();

            pstmt.setString(1, name);
            pstmt.setInt(2, id);
            pstmt.setString(3, phone);
            pstmt.executeUpdate();
        }

        insertEmployees(conn, scanner, count - 1); // Recursive call
    }
}