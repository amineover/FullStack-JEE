package com.dao;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
 
import com.model.*;


@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {

  @Override
  public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
	config.exposeIdsFor(Salarier.class); 
	config.getProjectionConfiguration().addProjection(SalarierProjection.class);
	config.getProjectionConfiguration().addProjection(DemandeProjection.class);
	config.getProjectionConfiguration().addProjection(GradeProjection.class);
	config.getProjectionConfiguration().addProjection(SituationDemandeProjection.class);
	config.getProjectionConfiguration().addProjection(FonctionProjection.class);
	
    config.getCorsRegistry()
    .addMapping("/**")
    .allowedOrigins("*")
    .allowedHeaders("*")
    .allowedMethods("OPTIONS","HEAD","GET","PUT","POST","DELETE","PATCH");
    
    config.setReturnBodyOnCreate(true);
    config.setReturnBodyForPutAndPost(true);
    config.setReturnBodyOnUpdate(true);
  }
  
  
  
   
  
  public RepositoryConfig(){
      super();
  }
}