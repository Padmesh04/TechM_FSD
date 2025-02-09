package Task.wareHouse;

import java.util.Comparator;
import java.util.List;

public class order {

    private String orderID;
    private List<String> productIDs;
    private Priority priority;

    public enum Priority {
        STANDARD, EXPEDITED
    }

    public order(String orderID, List<String> productIDs, Priority priority) {
        this.orderID = orderID;
        this.productIDs = productIDs;
        this.priority = priority;
    }

    public String getorderID() {
        return orderID;
    }

    public List<String> getproductIDs() {
        return productIDs;
    }

    public Priority getPriority() {
        return priority;
    }
}

class OrderComparator implements Comparator<order> {
    @Override
    public int compare(order o1, order o2) {
        return o1.getPriority().compareTo(o2.getPriority());
    }
}

class OutOfStockException extends Exception {
    public OutOfStockException(String message) {
        super(message);
    }
}

class InvalidLocationException extends Exception {
    public InvalidLocationException(String message) {
        super(message);
    }
}