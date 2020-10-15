package com.dao;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.model.Demande;
import com.model.SalarierFormation;


@RepositoryRestResource(excerptProjection = DemandeProjection.class)
public interface DemandeRepository extends JpaRepository<Demande, Long> {
 
	List<Demande> findBySituationDemande(String Etat); 
	List<Demande> findBySituationDemandeAndSalarier(String Etat,int salarier);
	List<Demande> findBySalarier(int salarier);
	@Query("select c  from Demande c ")
	Set<DemandeProjection> getDemande();

}