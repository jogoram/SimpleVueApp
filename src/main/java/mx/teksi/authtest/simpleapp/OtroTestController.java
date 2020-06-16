package mx.teksi.authtest.simpleapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OtroTestController {

    @Autowired(required = true)    
    InterfaceService otroInterfaceService;
    
    
    @GetMapping(value="/test3")
    public String getTest() {
               
        return otroInterfaceService.imprimirMensaje();
    }

    @GetMapping(value="/test4")
    public String getOtroTest() {
        
        return otroInterfaceService.imprimirOtroMensaje();
    }
    
    
}