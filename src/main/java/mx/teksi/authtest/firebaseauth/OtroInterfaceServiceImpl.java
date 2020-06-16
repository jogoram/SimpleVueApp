package mx.teksi.authtest.firebaseauth;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service("otroInterfaceService")
public class OtroInterfaceServiceImpl extends InterfaceServiceImpl implements InterfaceService {

    

     @Override
    public String imprimirOtroMensaje() {
        
        
        return super.imprimirOtroMensaje()+ "\n Esta es una nueva funcionaliad";

    }

}