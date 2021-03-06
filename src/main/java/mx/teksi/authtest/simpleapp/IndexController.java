package mx.teksi.authtest.simpleapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class IndexController {

    @Autowired
    TestBean testBean;

    @GetMapping(value="/")
    public String getTest(Model model) {
        model.addAttribute("tituloPagina", "Registro de pesadas");
        return "index";
    }


    @GetMapping(value="/test")
    public String getTestBean(Model model) {
        
        model.addAttribute("bean", testBean);
        return "test";
      
    }

}