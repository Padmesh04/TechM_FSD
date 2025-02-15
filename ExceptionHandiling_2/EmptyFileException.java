package Task.ExceptionHandiling_2;

public class EmptyFileException extends Exception {
    public EmptyFileException(String message) {
        super(message);
    }
}