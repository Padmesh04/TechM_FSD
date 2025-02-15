package Task.Week2_Task1;

public class Student {
    private String name;
    private int[] marks;
    private int total;
    private double average;

    public String getName() {
        return name;
    }

    public int[] getMarks() {
        return marks;
    }

    public int getTotal() {
        return total;
    }

    public double getAverage() {
        return average;
    }

    public Student(String name, int[] marks) {
        this.name = name;
        this.marks = marks;
    }

    private void calculateTotalAndAverage() {
        total = 0;
        for (int mark : marks) {
            total += mark;
        }
        average = (double) total / marks.length;
    }

}