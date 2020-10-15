package com.dao;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.model.Indisponibilite;
import com.model.SalarierDiplome;


@RepositoryRestResource(excerptProjection = IndisponibiliteProjection.class)
public interface IndisponibiliteRepository extends JpaRepository<Indisponibilite, Long> {
	@Query("select c  from Indisponibilite c ")
	Set<IndisponibiliteProjection> getIndisponibilite();
	List<Indisponibilite> findBySalarier(int id);
}