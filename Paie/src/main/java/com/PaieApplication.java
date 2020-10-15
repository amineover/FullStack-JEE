package com;
import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class PaieApplication  {
/*	
	//static ServerSocket variable
    private static ServerSocket server;
    //socket server port on which it will listen
    private static int port = 9876;*/
    
 

	public static void main(String[] args) throws IOException, ClassNotFoundException{
		SpringApplication.run(PaieApplication.class, args);
     
   }
	
	@Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/greeting-javaconfig").allowedOrigins("*");
            }
        };
    }
	/*	
	@Bean
	  public CommandLineRunner demo(CapteurActiviteRepository repository) {
	    return (args) -> {
	    	
	    	
	    	  //create the socket server object
	        server = new ServerSocket(port);
	        //keep listens indefinitely until receives 'exit' call or program terminates
	        while(true){
	            System.out.println("Waiting for the client request");
	            //creating socket and waiting for client connection
	            Socket socket = server.accept();
	            //read from socket to ObjectInputStream object
	            ObjectInputStream ois = new ObjectInputStream(socket.getInputStream());
	            //convert ObjectInputStream object to String
	            String message = (String) ois.readObject();
	            String[] sousChaines = message.split("!");
	            System.out.println("size: " + sousChaines.length);
	            SimpleDateFormat sdf = new SimpleDateFormat("EE MMM dd HH:mm:ss z yyyy",Locale.ENGLISH);
	            Long id= Long.parseLong(sousChaines[0]);
	            Date Dated = sdf.parse(sousChaines[2]);
	            Date Datef = sdf.parse(sousChaines[3]);
	           // SimpleDateFormat print = new SimpleDateFormat("MMM d, yyyy HH:mm:ss");
	            
	            CapteurActivite m =new CapteurActivite(id,sousChaines[1],Dated, Datef);
	            System.out.println("id: " + m.id);
	            System.out.println("code: " + m.code);
	            System.out.println("datedebut: " + m.dateDebut);
	            System.out.println("datefin: " + m.dateFin);
	            
	           
	            
	            CapteurActivite c = new CapteurActivite();
	            c.setMachine(new Machine(m.id));
	            c.setDateDebut(m.dateDebut);
	            c.setCode( m.code);
	            c.setDateFin(m.dateFin);
	            
	            /*LigneMachineSalarier l = new LigneMachineSalarier();
	            l.setDateDebut(m.dateDebut);
	            l.setCode( m.code);
	            l.setDateFin(m.dateFin);
	            repository.save(c);
	            
	            //create ObjectOutputStream object
	            ObjectOutputStream oos = new ObjectOutputStream(socket.getOutputStream());
	            //write object to Socket
	            oos.writeObject("Hi Client "+message);
	            //close resources
	              ois.close();
	              oos.close();
	              socket.close();
	            //terminate the server if client sends exit request
	            if(message.equalsIgnoreCase("exit")) break;
	        }
	        System.out.println("Shutting down Socket server!!");
	        //close the ServerSocket object
	       server.close();
	    	
	    };
	    
	    }
	*/

}
