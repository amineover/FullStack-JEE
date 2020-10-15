package com.dao;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.model.user;


@RepositoryRestResource(excerptProjection = UserProjection.class)
public interface UserRepository extends JpaRepository<user, Long> {
		user  findByEmailAndPassword(String email,String password);
 
 
	
}