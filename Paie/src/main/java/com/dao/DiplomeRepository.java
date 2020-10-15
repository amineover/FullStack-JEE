package com.dao;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.model.Diplome;


@RepositoryRestResource(excerptProjection = DiplomeProjection.class)
public interface DiplomeRepository extends JpaRepository<Diplome, Long> {
	
	@Query("select c  from Diplome c ")
	Set<DiplomeProjection> getDiplomeS();
 
}