package mx.teksi.authtest.firebaseauth;

import java.util.UUID;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

@Data
@AllArgsConstructor
@ToString
@Component
@Scope(value = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class TestBean {

    private String idBean;

    public  TestBean()
    {
        this.idBean = UUID.randomUUID().toString();
    }   
    

    public String getString() {
        
        return new String("sad");
    }
  
}