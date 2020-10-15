package com.dao;
import org.springframework.data.rest.core.config.Projection;

import com.model.user;



@Projection(
		  name = "UserProjection", 
		  types = { user.class }) 
public interface UserProjection {

		
	    public String getemail();  
	    public long getId();
	    public UserProjection getuser();

}


