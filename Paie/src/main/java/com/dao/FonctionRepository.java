package com.dao;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.model.Fonction;
import com.model.SalarierDiplome;



@RepositoryRestResource(excerptProjection = FonctionProjection.class)
public interface FonctionRepository extends JpaRepository<Fonction, Long> {

	List<Fonction> findBySalarier(int id);
	@Query("select c  from Fonction c ")
	Set<FonctionProjection> getFonction();
 
}