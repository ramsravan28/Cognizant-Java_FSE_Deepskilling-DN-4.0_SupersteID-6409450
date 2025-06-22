public class PdfDocumentFactory extends DocumentFactory{
    @Override
    public Document createDocument(){
        System.out.println("Pdf Document Created!");
        return new PdfDocument();
    }
}