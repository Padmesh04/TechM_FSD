package Task.wareHouse;

public class location {

    private int aisle;
    private int shelf;
    private int bin;

    public location(int aisle, int shelf, int bin) {
        this.aisle = aisle;
        this.shelf = shelf;
        this.bin = bin;
    }

    @Override
    public String toString() {
        return "Location{" + "aisle=" + aisle + ", shelf=" + shelf + ", bin=" + bin + '}';
    }
}