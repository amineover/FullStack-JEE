package com.dao;

import org.springframework.data.rest.core.config.Projection;
import com.model.Salarier; 

@Projection(
		  name = "SalarierProjectionKey", 
		  types = { Salarier.class }) 
public interface SalarierProjectionKey {

	public String getNom();
    public long getId();

}
