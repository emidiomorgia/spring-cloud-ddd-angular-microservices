package info.morgia.akron.identityservice;

public class HomeResponse {
    private int id;
    private String value;

    
    public int getId() {
        return id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public void setId(int id) {
        this.id = id;
    }

    public HomeResponse(int id, String value) {
        this.id = id;
        this.value = value;
    }


}