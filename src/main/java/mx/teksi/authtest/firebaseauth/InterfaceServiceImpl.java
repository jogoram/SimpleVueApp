package mx.teksi.authtest.firebaseauth;

import org.springframework.stereotype.Service;

@Service("interfaceService")
public class InterfaceServiceImpl implements InterfaceService {

    @Override
    public String imprimirMensaje() {

        return "mensaje desde implementacion 1";
    }

    @Override
    public String imprimirOtroMensaje() {

        return "otro mensaje desde implementacion 1";
    }

}