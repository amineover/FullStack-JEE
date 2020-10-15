package com.controller;
 
import java.sql.Array;
import java.util.ArrayList;
import java.util.Date;
import java.util.Set;

import org.hibernate.annotations.Where;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dao.GradeRepository;
import com.dao.IndisponibiliteProjection;
import com.dao.IndisponibiliteRepository;
import com.dao.SalarierDiplomeRepository;
import com.dao.SalarierFormationRepository;
import com.dao.SalarierProjection;
import com.dao.DemandeProjection;
import com.dao.DemandeRepository;
import com.dao.DiplomeProjection;
import com.dao.DiplomeRepository;
import com.dao.FonctionProjection;
import com.dao.FonctionRepository;
import com.dao.FormationProjection;
import com.dao.FormationRepository;
import com.dao.GradeProjection;
import com.dao.SalarierRepository;
import com.dao.SituationDemandeRepository;
import com.dao.TypeDemandeRepository;
import com.dao.UserRepository;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.model.Grade;
import com.model.Indisponibilite;
import com.model.Demande;
import com.model.Diplome;
import com.model.SalarierDiplome;
import com.model.SalarierFormation;
import com.model.Fonction;
import com.model.Formation;
import com.model.Salarier;
import com.model.SituationDemande;
import com.model.TypeDemande;
import com.model.user;

import antlr.collections.List;

import org.springframework.web.bind.annotation.PostMapping;

@CrossOrigin(origins = "*")
@RestController
public class SalarierController {

	
	@Autowired
	SalarierRepository Salarierrep;
	
	
	
	@Autowired
	DemandeRepository demanderep;
	
	@Autowired
	DiplomeRepository diplomerep;
	
	@Autowired
	FonctionRepository fonctionrep;
	
	@Autowired
	FormationRepository formationrep;
	
	@Autowired
	IndisponibiliteRepository indisponibiliterep;
	
	@Autowired
    GradeRepository graderep;
		
	@Autowired
	SituationDemandeRepository SituationDemanderep;

	@Autowired
	SalarierDiplomeRepository SalarierDiplomerep;
	
	
	@Autowired
	SalarierFormationRepository SalarierFormationrep;
	 
	@Autowired
	UserRepository userrep;
	
	@Autowired
	TypeDemandeRepository TypeDemanderep;
		
		@PostMapping("/login") 
		 public Salarier sauvegUser(@RequestBody Salarier salarier) {	
			 
			Salarier user;
			user = Salarierrep.findByEmailAndPassword(salarier.getemail(), salarier.getpassword());
		
			return user;
		}
		 
		
	     @JsonIgnore 
	     @PostMapping("/sauvegDemande") 
	 public Demande sauvegDemandeConge(@RequestBody Demande demande) {		 		 		       		           
		     return demanderep.save(demande);
	}
	     @JsonIgnore 
	    	 @PostMapping("/sauvegDiplome") 
	 public Diplome sauvegDiplome(@RequestBody Diplome diplome) {		 		 		       		           
		     return diplomerep.save(diplome);
	}
     @JsonIgnore 
     @PostMapping("/sauvegFonction") 
	 public Fonction sauvegFonction(@RequestBody Fonction fonction) {
		 

		 try { 
	fonctionrep.save(fonction);}catch (Exception e) {
	// TODO: handle exception
} 
		 return null;
	}
     @JsonIgnore 
      @PostMapping("/sauvegFormation") 
	 public Formation sauvegFormation(@RequestBody Formation Formation) {		 		 		       		           
		     return formationrep.save(Formation);
	}
     @JsonIgnore 
      @PostMapping("/sauvegGrade") 
	 public Grade sauvegGrade(@RequestBody Grade grade) {		 		 		       		           
		     return graderep.save(grade);
	}
     @JsonIgnore  
	 @PostMapping("/sauvegSituationDemande") 
	 public SituationDemande sauvegSituationDemande(@RequestBody SituationDemande situationDemande) {		 		 		       		           
		     return SituationDemanderep.save(situationDemande);
	}
     @JsonIgnore 
     @PostMapping("/sauvegSalarier") 
	 public Salarier sauvegSalarier(@RequestBody Salarier salarier) {		 		 		       		           
		     return Salarierrep.save(salarier); 
		 //return null;
	}
     @JsonIgnore 
     @PostMapping("/sauvegIndisponibilite") 
	 public Indisponibilite sauvegIndisponibilite(@RequestBody Indisponibilite Indisponibilite) {	
    	 
		     return indisponibiliterep.save(Indisponibilite); 
		 //return null;
	}
     @JsonIgnore 
      @PostMapping("/sauvegSalarierDiplome") 
	 public SalarierDiplome sauvegSalarierDiplome(@RequestBody SalarierDiplome SalarierDiplome) {		 		 		       		           
		     return SalarierDiplomerep.save(SalarierDiplome); 
		 //return null;
	}
     @JsonIgnore 
      @PostMapping("/sauvegSalarierFormation") 
	 public SalarierFormation sauvegSalarierFormation(@RequestBody SalarierFormation SalarierFormation) {		 		 		       		           
		     return SalarierFormationrep.save(SalarierFormation); 
		 //return null;
	}
     @JsonIgnore 
      @PostMapping("/sauvegTypeDemande") 
	 public TypeDemande sauvegTypeDemande(@RequestBody TypeDemande TypeDemande) {		 		 		       		           
		     return TypeDemanderep.save(TypeDemande); 
		 //return null;
	} 
	 
	 
	 
     @JsonIgnore 
     @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	  @RequestMapping(value="/getSalarie", method=RequestMethod.GET)
  		public java.util.List<Salarier> getSalariers() {	
  		    return Salarierrep.findAll();
	   
	   }
    
     @JsonIgnore 
     @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	   @RequestMapping(value="/getDemande", method=RequestMethod.GET)
 		public java.util.List<Demande> getDemandes() {
    	 System.out.println(demanderep.findAll());
 		    return demanderep.findAll();
	   
	   }
     @JsonIgnore 
     @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	   @RequestMapping(value="/getDiplome", method=RequestMethod.GET)
 		public java.util.List<Diplome> getDiplomeList() {	
 		    return diplomerep.findAll();
	   
	   }
	   @JsonIgnore 
	   @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	   @RequestMapping(value="/getFonction", method=RequestMethod.GET)
 		public java.util.List<Fonction> getFonctions() {	
 		   
 		    
 		   try { 
 			  return fonctionrep.findAll();
 			   }catch (Exception e) {
 				// TODO: handle exception
 			} 
 					 return null;
	   
	   }
	     @JsonIgnore 
	     @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	   @RequestMapping(value="/getFormation", method=RequestMethod.GET)
 		public java.util.List<Formation> getFormation() {	
 		    return formationrep.findAll();
	  
	   }
	     @JsonIgnore 
	     @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	   @RequestMapping(value="/getIndisponibilite", method=RequestMethod.GET)
 		public java.util.List<Indisponibilite> getIndisponibilite() {	
 		    return indisponibiliterep.findAll();
	   
	   }
	     @JsonIgnore 
	     @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	   @RequestMapping(value="/getGrade", method=RequestMethod.GET)
 		public java.util.List<Grade> getGrade() {	
 		    return graderep.findAll();
	   
	   }
	   
	     @JsonIgnore 
	     @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	   	   @RequestMapping(value="/getSituationDemande", method=RequestMethod.GET)
	  		public java.util.List<SituationDemande> getSituationDemande() {	
	  		    return SituationDemanderep.findAll();
		   
		   }
	   
	   
	     @JsonIgnore 
	     @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	   	   @RequestMapping(value="/getSalarierFormation", method=RequestMethod.GET)
	  		public java.util.List<SalarierFormation> getSalarierFormation() {	
	  		    return SalarierFormationrep.findAll();
		   
		   }
	   
	     @JsonIgnore 
	     @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	   	   @RequestMapping(value="/getSalarierDiplome", method=RequestMethod.GET)
	  		public java.util.List<SalarierDiplome> getSalarierDiplome() {	
	  		    return SalarierDiplomerep.findAll();
		   
		   }
	     @JsonIgnore 
	     @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	      	   @RequestMapping(value="/getTypeDemande", method=RequestMethod.GET)
	     		public java.util.List<TypeDemande> getTypeDemande() {	
	     		    return TypeDemanderep.findAll();
	   	   
	   	   }
	      	   
	      	   
		 @DeleteMapping("/deletSalarier") 
		 public String deletSalarier(@RequestParam Long id) {		 		 		       		           
			     Salarierrep.deleteById(id);
			     return "deleted"; 
			 //return null;
		}
		 
		 @DeleteMapping("/deletDemande") 
		 public String deletDemande(@RequestParam Long id) {		 		 		       		           
			 	demanderep.deleteById(id);
			     return "deleted"; 
			 //return null;
		}
		 
		 @DeleteMapping("/deletDiplome") 
		 public String deletDiplome(@RequestParam Long id) {		 		 		       		           
			 diplomerep.deleteById(id);
			     return "deleted"; 
			 //return null;
		}
		 
		 @DeleteMapping("/deletFonction") 
		 public String deletFonction(@RequestParam Long id) {		 		 		       		           
			 fonctionrep.deleteById(id);
			     return "deleted"; 
			 //return null;
		}
		 
		  @DeleteMapping("/deletFormation") 
		 public String deletFormation(@RequestParam Long id) {		 		 		       		           
			  formationrep.deleteById(id);
			     return "deleted"; 
			 //return null;
		}
		 
		 
		 	  @DeleteMapping("/deletGrade") 
		 public String deletGrade(@RequestParam Long id) {		 		 		       		           
		 		 graderep.deleteById(id);
			     return "deleted"; 
			 //return null;
		}
		 
		  	  @DeleteMapping("/deletIndisponibilite") 
		 public String deletIndisponibilite(@RequestParam Long id) {		 		 		       		           
		  		indisponibiliterep.deleteById(id);
			     return "deleted"; 
			 //return null;
		}
		 
		   	  @DeleteMapping("/deletSituationDemande") 
		 public String deletSituationDemande(@RequestParam Long id) {		 		 		       		           
		   		SituationDemanderep.deleteById(id);
			     return "deleted"; 
			 //return null;
		}
		 
		 
		    	  @DeleteMapping("/deletSalarierFormation") 
		 public String deletSalarierFormation(@RequestParam Long id) {		 		 		       		           
		    		  SalarierFormationrep.deleteById(id);
			     return "deleted"; 
			 //return null;
		}
		 
		 
		     	  @DeleteMapping("/deletSalarierDiplome") 
		 public String deletSalarierDiplome(@RequestParam Long id) {		 		 		       		           
		    		  SalarierDiplomerep.deleteById(id);
			     return "deleted"; 
			 //return null;
		}
		 
		 
		 
			     	  @DeleteMapping("/deletTypeDemande") 
		 public String deletTypeDemande(@RequestParam Long id) {		 		 		       		           
			     		 TypeDemanderep.deleteById(id);
			     return "deleted"; 
			 //return null;
		}
		  
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 @GetMapping("/searchSalarier") 
		 public Salarier getByIdSalarier(@RequestParam Long id) { 
				try
				{
					Salarier Salarier=Salarierrep.findById(id).get();
					return Salarier;
				}
				catch (Exception e) {
					return null;
				}
			}
		 @GetMapping("/findBySituationDemande") 
		 public java.util.List<Demande> findBySituationDemande(@RequestParam String etat) { 
					return demanderep.findBySituationDemande(etat);
			} 
		 @GetMapping("/findBySituationDemandeAndSalarier") 
		 public java.util.List<Demande> findBySituationDemandeAndSalarier(@RequestParam String etat, int salarier) { 
					return demanderep.findBySituationDemandeAndSalarier(etat,salarier);
			}
		 @GetMapping("/findBySalarier") 
		 public java.util.List<Demande> findBySalarier(@RequestParam int salarier) { 
					return demanderep.findBySalarier(salarier);
			}
		 @GetMapping("/searchDiplome") 
		 public Diplome getByIdDiplome(@RequestParam Long id) { 
				try
				{
					Diplome Diplome=diplomerep.findById(id).get();
					return Diplome;
				}
				catch (Exception e) {
					return null;
				}
			}	
		 @GetMapping("/searchFonction") 
		 public java.util.List<Fonction> getByIdFonction(@RequestParam int id) { 
				 
				return fonctionrep.findBySalarier(id);
			} 
		 @GetMapping("/searchFormation") 
		 public Formation getByIdFormation(@RequestParam Long id) { 
				try
				{
					Formation Formation=formationrep.findById(id).get();
					return Formation;
				}
				catch (Exception e) {
					return null;
				}
			}
		 	 @GetMapping("/searchGrade") 
		 public Grade getByIdGrade(@RequestParam Long id) { 
				try
				{
					Grade Grade=graderep.findById(id).get();
					return Grade;
				}
				catch (Exception e) {
					return null;
				}
			}
		  	 @GetMapping("/searchIndisponibilite") 
		 public java.util.List<Indisponibilite> getByIdIndisponibilite(@RequestParam int id) { 
						return indisponibiliterep.findBySalarier(id);
			}
		 	 @GetMapping("/searchSituationDemande") 
		 public SituationDemande getByIdSituationDemande(@RequestParam Long id) { 
				try
				{
					SituationDemande SituationDemande=SituationDemanderep.findById(id).get();
					return SituationDemande;
				}
				catch (Exception e) {
					return null;
				}
			}
		 	 
		 	 @GetMapping("/searchSalarierFormation") 
			 public java.util.List<SalarierFormation> getByIdSalarierFormation(@RequestParam int id) { 
					 
					return SalarierFormationrep.findBySalarier(id);
				}
		 	 
		 	 @GetMapping("/searchSalarierDiplome") 
			 public java.util.List<SalarierDiplome> getByIdSalarierDiplome(@RequestParam int id) { 
					 
						 
						return SalarierDiplomerep.findBySalarier(id);
					 
				} 
		 	 
		 	 
		 	 @GetMapping("/searchTypeDemande") 
			 public TypeDemande getByIdTypeDemande(@RequestParam Long id) { 
					try
					{
						TypeDemande TypeDemande=TypeDemanderep.findById(id).get();
						return TypeDemande;
					}
					catch (Exception e) {
						return null;
					}
				}
	}
