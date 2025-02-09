package Task.wareHouse;

public class product {

    private String productID;
    private String name;
    private int quantity;
    private location location;

    public product(String productID, String name, int quantity, location location) {
        this.productID = productID;
        this.name = name;
        this.quantity = quantity;
        this.location = location;
    }

    public String getProductID() {
        return productID;
    }

    public String getName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }

    public location getLocation() {
        return location;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "Product{" + "productID='" + productID + '\'' + ", name='" + name + '\'' + ", quantity=" + quantity
                + ", location=" + location + '}';
    }
}