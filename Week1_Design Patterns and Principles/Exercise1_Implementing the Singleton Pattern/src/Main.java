public class Main{
    public static void main(String[] args){
        Logger L1 = Logger.getInstance();
        L1.log("First Log message");
        Logger L2 = Logger.getInstance();
        L2.log("Second log message");
        if(L1 == L2){
            System.out.println("Logger class has only @oneInstance");
        }
        else{
            System.out.println("Logger class has @multipleInstances");
        }
    }
}