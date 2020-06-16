package mx.teksi.authtest.firebaseauth;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import mx.teksi.lib.ManejoArchivos;

@SpringBootApplication
@Configuration
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Value("${mx.teksi.rutaArchivos}")
	private String rutaArchivos;

	@Bean
	public ManejoArchivos getManejoArchivos()
	{
		return new ManejoArchivos(rutaArchivos);
	}



}
