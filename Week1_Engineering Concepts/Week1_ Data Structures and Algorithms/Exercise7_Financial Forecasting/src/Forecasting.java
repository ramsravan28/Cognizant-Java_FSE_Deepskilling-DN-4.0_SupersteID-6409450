public class Forecasting{
    public static double calculateFutureValue(double presentValue,double growthRate,int years) {
        if (years == 0) {
            return presentValue;
        } else {
            return calculateFutureValue(presentValue,growthRate,years - 1) * (1 + growthRate);
        }
    }

    public static void main(String[] args) {
        double presentValue = 500; 
        double growthRate = 0.07;
        int years = 7;
        double futureValue = calculateFutureValue(presentValue,growthRate,years);
        System.out.println("Predicted future value after " + years + " years: " + futureValue);
        years = 17;
        futureValue = calculateFutureValue(presentValue,growthRate,years);
        System.out.println("Predicted future value after " + years + " years: " + futureValue);
    }
}
/* 
1. Explain the concept of recursion and how it can simplify certain problems.
    Recursion is a programming technique where a method calls itself to solve smaller instances of the same problem. 
    It simplifies problems that have a repetitive or hierarchical structure by reducing them into base and recursive cases.
    Recursion often leads to cleaner and more understandable code for problems like tree traversal, factorial calculation, and Fibonacci series.

2. Discuss the time complexity of your recursive algorithm.
    The time complexity of the recursive algorithm is O(n) because it makes one recursive call for each year until it reaches zero. 
    The space complexity is also O(n) due to the call stack created by recursion. */