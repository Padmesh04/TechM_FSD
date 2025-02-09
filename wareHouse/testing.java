package Task.wareHouse;

import java.util.Arrays;
import java.util.List;

public class testing {

    public static void main(String[] args) {
        inventoryManager inventoryManager = new inventoryManager();

        // Initialize inventory with some products
        inventoryManager.addProduct(new product("P001", "Widget", 10, new location(1, 1, 1)));
        inventoryManager.addProduct(new product("P002", "Gadget", 5, new location(1, 1, 2)));
        inventoryManager.addProduct(new product("P003", "Thingamajig", 0, new location(1, 1, 3))); // Out of stock

        // Create orders
        List<String> order1Products = Arrays.asList("P001", "P002");
        order order1 = new order("O001", order1Products, order.Priority.STANDARD);

        List<String> order2Products = Arrays.asList("P003"); // This will cause an OutOfStockException
        order order2 = new order("O002", order2Products, order.Priority.EXPEDITED);

        // Add orders to the inventory manager
        inventoryManager.addOrder(order1);
        inventoryManager.addOrder(order2);

        // Process orders in a separate thread
        Thread orderProcessingThread = new Thread(inventoryManager::fulfillOrders);
        orderProcessingThread.start();

        try {
            orderProcessingThread.join(); // Wait for the order processing to finish
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Final inventory state
        System.out.println("Final inventory state:");
        for (product product : inventoryManager.products.values()) {
            System.out.println(product);
        }
    }
}