package com.controller;
 
import java.sql.Array;
#this line not correct
import java.util.ArrayList;
import java.util.Date;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dao.DemandeCongeProjection;
import com.dao.DemandeCongeRepository;
import com.dao.LigneMachineSalarierRepository;
import com.dao.LigneSalarierClassificationRepository;
import com.dao.SalarierRepository;
import com.model.CapteurActivite; 
import com.model.DemandeConge;
import com.model.LigneMachineSalarier;
import com.model.LigneSalarierClassification;
import com.model.Machine;
import com.model.Salarier;

import org.springframework.web.bind.annotation.PostMapping;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class SalarierController {
/*
	@Autowired
	SalarierRepository demandeep;
		
	@Autowired
	DemandeCongeRepository demandeCep;
	
	@Autowired
	LigneSalarierClassificationRepository ligneSalarierClassificationep;
	
	@Autowired
	LigneMachineSalarierRepository ligneMachineSalarierep;
	
 
	@RequestMapping("/calculePaie") 
	 public double calculePaie(@RequestParam(name = "salarier") long salarier,@RequestParam(name = "dateDebut")  Date dateDebut,@RequestParam(name = "dateFin")   Date dateFin) {		 		 
            System.out.println(dateDebut);
		 double totalHeurTr = 0;
		   ArrayList<LigneMachineSalarier> listLigneMachines = demandeep.getListMachineSalarier(salarier); 
		   System.out.println(listLigneMachines.size());
		   for (int i = 0; i <=  listLigneMachines.size() - 1 ; i++) {
			   System.out.println("index : " + i);
			   LigneMachineSalarier ligneMachineSalarier = listLigneMachines.get(i);
			   double nbrHeur =  demandeep.getActivite(ligneMachineSalarier.getMachine().getId(), ligneMachineSalarier.getDateDebut(),ligneMachineSalarier.getDateFin());
			   totalHeurTr = totalHeurTr + nbrHeur;
		   }
		 
		    
		    return totalHeurTr;
	}
	 
	 @PostMapping("/ajouterDemandeConge") 
	 public DemandeConge ajouterDemandeConge(@RequestBody DemandeConge demandeConge) {		 		 		       		           
		     return demandeCep.save(demandeConge);
	}
	 @PostMapping("/ajouterSalarierClassification") 
	 public double ajouterSalarierClassification(@RequestBody LigneSalarierClassification salarierClassification ) {		 		 
		 ligneSalarierClassificationep.save(salarierClassification);
		       double testVal = 1500.50;		     
		     return testVal;
	}
	 
	 @PostMapping("/ajouterSalarierMachine") 
	 public double ajouterSalarierMachine(@RequestBody LigneMachineSalarier ligneMachineSalariere ) {		 		 
		 ligneMachineSalarierep.save(ligneMachineSalariere);
		       double testVal = 1500.50;		     
		     return testVal;
	}
	 
	   @RequestMapping(value="/getConges", method=RequestMethod.GET)
     	public Set<DemandeCongeProjection> demandeConge() {	
     		    Set<DemandeCongeProjection> listDemandeConge = demandeCep.getConges();
     		    return listDemandeConge;
     	}
	   
	*/ 
	}
