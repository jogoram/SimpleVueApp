package mx.teksi.authtest.simpleapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TestController {

    

    @Autowired(required = true)    
    InterfaceService interfaceService;
    
    
    @GetMapping(value="/test1")
    public String getTest() {
               
        return interfaceService.imprimirMensaje();
    }

    @GetMapping(value="/test2")
    public String getOtroTest() {
        
        return interfaceService.imprimirOtroMensaje();
    }
    

}