public class WordDocumentFactory extends DocumentFactory{
    @Override
    public Document createDocument(){
        System.out.println("Word Document Created!");
        return new WordDocument();
    }
}