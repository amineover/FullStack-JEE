package com.dao;
import org.springframework.data.rest.core.config.Projection;

import com.model.Demande;


@Projection(
		  name = "DemandeCongeProjection", 
		  types = { Demande.class }) 
public interface DemandeProjection {

		
	    public String getCode();  
	    public long getId();
	    public SalarierProjectionKey getSalarier();

}


