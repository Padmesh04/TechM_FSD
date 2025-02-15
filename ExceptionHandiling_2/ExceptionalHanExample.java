package Task.ExceptionHandiling_2;

public class ExceptionalHanExample {
    public static void main(String[] args) {

        try {
            int n=10/0;
        } catch (ArithmeticException e) {
            System.out.println("Cant be divided by Zero");// Message that  has to be thrown
        }
    }
}