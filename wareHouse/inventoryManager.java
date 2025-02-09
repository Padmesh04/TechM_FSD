package Task.wareHouse;

import java.util.Map;
import java.util.PriorityQueue;
import java.util.concurrent.ConcurrentHashMap;

public class inventoryManager {

    Map<String, product> products;
    private PriorityQueue<order> orderQueue;
    private final Object lock = new Object();

    public inventoryManager() {
        products = new ConcurrentHashMap<>();
        orderQueue = new PriorityQueue<>(new OrderComparator());
    }

    public void addProduct(product product) {
        products.put(product.getProductID(), product);
    }

    public void processOrder(order order) throws OutOfStockException {
        synchronized (lock) {
            for (String productID : order.getproductIDs()) {
                product product = products.get(productID);
                if (product == null || product.getQuantity() <= 0) {
                    throw new OutOfStockException("Product " + productID + " is out of stock.");
                }
                product.setQuantity(product.getQuantity() - 1);
                System.out.println("Processed order for product: " + product);
            }
        }
    }

    public void addOrder(order order) {
        orderQueue.add(order);
    }

    public void fulfillOrders() {
        while (!orderQueue.isEmpty()) {
            order order = orderQueue.poll();
            try {
                processOrder(order);
                System.out.println("Fulfilled order: " + order.getorderID());
            } catch (OutOfStockException e) {
                System.err.println(e.getMessage());
            }
        }
    }
}