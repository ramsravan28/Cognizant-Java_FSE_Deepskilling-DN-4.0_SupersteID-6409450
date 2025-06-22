import java.util.Arrays;
import java.util.Comparator;

public class Main{
    public static Product linearSearch(Product[] products, String targetName) {
        for(Product p : products) {
            if(p.productName.equalsIgnoreCase(targetName)) {
                return p;
            }
        }
        return null;
    }
    public static Product binarySearch(Product[] products, String targetName) {
        int low = 0;
        int high = products.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(targetName);
            if (cmp == 0) return products[mid];
            else if (cmp < 0) low = mid + 1;
            else high = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(1,"Laptop","Electronics"),
            new Product(2,"Phone","Electronics"),
            new Product(3,"Shoes","Fashion"),
            new Product(4,"T-shirt","Fashion")
        };
        System.out.println("Linear Search:");
        Product res1 = linearSearch(products,"Phone");
        System.out.println(res1 != null ? "Found: " + res1 : "Not Found");

        Arrays.sort(products,Comparator.comparing(p -> p.productName.toLowerCase()));
        System.out.println("\nBinary Search:");
        Product res2 = binarySearch(products,"Phone");
        System.out.println(res2 != null ? "Found: " + res2 : "Not Found");
    }
}
