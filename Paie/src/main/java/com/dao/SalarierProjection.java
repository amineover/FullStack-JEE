package com.dao;

import org.springframework.data.rest.core.config.Projection;
import com.model.Salarier; 

@Projection(
		  name = "SalarierProjection", 
		  types = { Salarier.class }) 
public interface SalarierProjection {
	public String getCode();
	public String getNom();
	public String getPrenom();
    public long getId();
}
