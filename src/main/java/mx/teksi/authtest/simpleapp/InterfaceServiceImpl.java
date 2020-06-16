package mx.teksi.authtest.simpleapp;

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