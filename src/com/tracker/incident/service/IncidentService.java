package com.tracker.incident.service;


import javax.ws.rs.core.Response;

import com.tracker.incident.model.Incident;

public interface IncidentService {

	/*public Response addPerson(Person p);
	public Response deletePerson(int id);
	public Person[] getAllPersons();*/
	public Response addIncident(Incident inc);
	public Response getIncident(String inc);
	public Response getAllIncidents();
	public Response deleteIncident(String inc);
	public Response verifyIncident(String inc);
	public Response updateIncident(Incident inc);
	public Response verifyLoginCredentials(String credentials);
	public Response createLoginCredentials(String credentials);
	
}
