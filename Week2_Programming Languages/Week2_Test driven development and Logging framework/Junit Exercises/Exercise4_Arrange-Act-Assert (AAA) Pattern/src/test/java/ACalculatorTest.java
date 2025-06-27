import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class ACalculatorTest {
    private ACalculator calculator;
    @Before
    public void setUp() {
        calculator = new ACalculator();
        System.out.println("Setup: Calculator ready");
    }
    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown: Calculator cleared");
    }
    @Test
    public void testAddition() {
        int a = 5;
        int b = 3;
        int result = calculator.add(a, b);
        assertEquals(8, result);
    }
    @Test
    public void testSubtraction() {
        int a = 10;
        int b = 4;
        int result = calculator.subtract(a, b);
        assertEquals(6, result);
    }
}
