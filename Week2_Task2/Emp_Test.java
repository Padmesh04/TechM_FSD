package Task.Week2_Task2;

import Task.Week2_Task2.Employee;

public class Emp_Test {
    public static void main(String[] args) {
        Employee emp1 = new Employee("Paddy", 15, 1200000, 4);
        emp1.getEmployeeDetails();
        System.out.println(emp1.getLoanEligibility());;
    }
}