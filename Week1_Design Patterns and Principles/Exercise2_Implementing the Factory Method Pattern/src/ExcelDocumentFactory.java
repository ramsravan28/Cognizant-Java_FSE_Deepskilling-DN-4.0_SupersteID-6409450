public class ExcelDocumentFactory extends DocumentFactory{
    @Override
    public Document createDocument(){
        System.out.println("Excel Document Created!");
        return new ExcelDocument();
    }
}