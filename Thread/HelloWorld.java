package Task.Thread;

public class HelloWorld extends Thread{
    public static void main(String[] args) {
        HelloWorld a =new HelloWorld();
        a.start();
    }

    public void run() {
        System.out.println("Hello World");
    }
}