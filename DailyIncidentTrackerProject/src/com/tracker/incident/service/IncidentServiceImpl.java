package com.tracker.incident.service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.UnknownHostException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.json.JSONException;
import org.json.JSONObject;

import com.tracker.incident.model.Incident;
import com.tracker.incident.model.Login;
import com.tracker.incident.util.ConnectToDB;


@Path("/incident")
//@Consumes("application/json")
//@Produces("application/json")
public class IncidentServiceImpl {

	public IncidentServiceImpl() {
		System.out.println("constructor");
	}
	
	@POST
    @Path("/addIncident")
	@Consumes("application/json")
	@Produces("application/json")
	public Response addIncident(InputStream incomingData) throws JSONException, UnknownHostException   {
		System.out.println("Add Inc"+incomingData);
		StringBuilder incidentBuilder = new StringBuilder();
		try {
			BufferedReader in = new BufferedReader(new InputStreamReader(incomingData));
			String line = null;
			while ((line = in.readLine()) != null) {
				incidentBuilder.append(line);
			}
		} catch (Exception e) {
			System.out.println("Error Parsing: - ");
		}
		int addStatus =0;
		System.out.println("Data Received: " + incidentBuilder.toString());
		JSONObject jsonObject = new JSONObject(incidentBuilder.toString());
		Incident incident = setIncidentObj(jsonObject);
		ConnectToDB con = new ConnectToDB();
		String duplicateINC = con.verifyIncident(incident.getINC());
		if(duplicateINC.contains("Data available!!")) {
			addStatus =1;
		}
		System.out.println("Duplicate INC: "+duplicateINC);
		
		if(addStatus==0) {
			con.writeIncidentToCOllection(incident,"add");
//			return Response.status(200).entity(incidentBuilder.toString()).build();
			return Response.status(200).header( "Access-Control-Allow-Origin","*").header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE").
					header("Access-Control-Allow-Headers", "Content-Type").entity(incidentBuilder.toString()).build();
		}
		else if(addStatus==1) {
			con.closeConnections();
//			return Response.status(100).entity(incidentBuilder.toString()).build();
			return Response.status(100).header( "Access-Control-Allow-Origin","*").header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE").
					header("Access-Control-Allow-Headers", "Content-Type").entity(incidentBuilder.toString()).build();
		}
		else {
			con.closeConnections();
//			return Response.status(300).entity(incidentBuilder.toString()).build();
			return Response.status(300).header( "Access-Control-Allow-Origin","*").header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE").
					header("Access-Control-Allow-Headers", "Content-Type").entity(incidentBuilder.toString()).build();
		}
	}
	
	@PUT
    @Path("/updateIncident")
	@Produces("application/json")
	public Response updateIncident(InputStream incomingData) throws JSONException, UnknownHostException {
		System.out.println("Incoming request in PUT:"+incomingData);
		StringBuilder incidentBuilder = new StringBuilder();
		try {
			BufferedReader in = new BufferedReader(new InputStreamReader(incomingData));
			String line = null;
			while ((line = in.readLine()) != null) {
				incidentBuilder.append(line);
			}
		} catch (Exception e) {
			System.out.println("Error Parsing");
		}
		JSONObject jsonObject = new JSONObject(incidentBuilder.toString());
		
		System.out.println("json Object from Form =>"+jsonObject);
		
		
		Incident incident = setIncidentObj(jsonObject);
		ConnectToDB con = new ConnectToDB();
		if(incident.getStatus().equalsIgnoreCase("closed")) {
			String data = con.deleteIncDetails(incident.getINC());
			con.closeConnections();

			return Response.status(200).entity(incidentBuilder.toString()).build();
		}else {
			con.getIncDetails(incident.getINC());
			String data = con.deleteIncDetails(incident.getINC());
			con.writeIncidentToCOllection(incident, "update");
			con.closeConnections();
			return Response.status(200).entity(incidentBuilder.toString()).build();
			
		}
		
	}
	
	@GET
	@Path("/getAllIncidents")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllIncidents() throws UnknownHostException, JSONException{
		ConnectToDB con = new ConnectToDB();
		System.out.println("inside getAllIncidents");
		/*return Response.status(200).header( "Access-Control-Allow-Origin","*").header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE").
		header("Access-Control-Allow-Headers", "Content-Type").entity(con.getAllIncDetails()).build();
		*/
		return Response.status(200).entity(con.getAllIncDetails()).build();
		//return con.getAllIncDetails();
	}
	
	
	@PUT
	@Path("/verifyLogin")
	@Produces(MediaType.APPLICATION_JSON)
	public Response verifyLoginCredentials(InputStream incomingData) throws UnknownHostException, JSONException, ParseException{
		ConnectToDB con = new ConnectToDB();
		System.out.println("inside verifyLoginCredentials");
		
		StringBuilder loginBuilder = new StringBuilder();
		try {
			BufferedReader in = new BufferedReader(new InputStreamReader(incomingData));
			String line = null;
			while ((line = in.readLine()) != null) {
				loginBuilder.append(line);
			}
		} catch (Exception e) {
			System.out.println("Error Parsing");
		}
		JSONObject jsonObject = new JSONObject(loginBuilder.toString());
		Login login = setLoginObj(jsonObject);
		
		String data = con.verifyLoginCredentials(login);
		con.closeConnections();
		return Response.status(200).header( "Access-Control-Allow-Origin","*").header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE").
				header("Access-Control-Allow-Headers", "Content-Type").entity(data).build();
		
	}
	
	
	@POST
	@Path("/createLogin")
	@Consumes("application/json")
	@Produces("application/json")
	public Response createLoginCredentials(InputStream incomingData) throws UnknownHostException, JSONException, ParseException{
		ConnectToDB con = new ConnectToDB();
		
		StringBuilder loginBuilder = new StringBuilder();
		try {
			BufferedReader in = new BufferedReader(new InputStreamReader(incomingData));
			String line = null;
			while ((line = in.readLine()) != null) {
				loginBuilder.append(line);
			}
		} catch (Exception e) {
			System.out.println("Error Parsing");
		}
		JSONObject jsonObject = new JSONObject(loginBuilder.toString());
		Login login = setLoginObj(jsonObject);
		int addStatus = 0;
		String duplicateLogin = con.verifyLogin(login.getUserName());
		if(duplicateLogin.contains("Data available!!")) {
			addStatus =1;
		}
		if(addStatus==0) {
			con.writeLoginToCollection(login);
			return Response.status(200).header( "Access-Control-Allow-Origin","*").header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE").
					header("Access-Control-Allow-Headers", "Content-Type").entity(loginBuilder.toString()).build();
		}
		else if(addStatus==1) {
			con.closeConnections();
			return Response.status(100).header( "Access-Control-Allow-Origin","*").header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE").
					header("Access-Control-Allow-Headers", "Content-Type").entity(loginBuilder.toString()).build();
		}
		else {
			con.closeConnections();
			return Response.status(300).header( "Access-Control-Allow-Origin","*").header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE").
					header("Access-Control-Allow-Headers", "Content-Type").entity(loginBuilder.toString()).build();
		}
	}
	
	
	private Incident setIncidentObj(JSONObject jsonObject) throws JSONException {
		Incident incident = new Incident();
		incident.setName(jsonObject.get("name")==null?"":jsonObject.get("name").toString());
		incident.setSeverity(Integer.parseInt(jsonObject.get("severity").toString()));
		incident.setBusinessName(jsonObject.get("businessName")==null?"":jsonObject.get("businessName").toString());
		incident.setINC(jsonObject.get("INC")==null?"":jsonObject.get("INC").toString());
		incident.setRepName(jsonObject.get("repName")==null?"":jsonObject.get("repName").toString());
		//incident.setIssue(jsonObject.get("issue").toString());
		incident.setCreationDate(jsonObject.get("creationDate")==null?"":jsonObject.get("creationDate").toString());
		//incident.setUpdatedDate(jsonObject.get("updatedDate").toString());
		incident.setAge(jsonObject.get("age")==null?null:Integer.parseInt(jsonObject.get("age").toString()));
		incident.setAnalyzedCategory(jsonObject.get("analyzedCategory")==null?"":jsonObject.get("analyzedCategory").toString());
		//incident.setClosedDate(jsonObject.get("closedDate")==null?new Date("01/01/2015").toString():jsonObject.get("closedDate").toString());
		incident.setMostSLAloss(jsonObject.get("mostSLAloss")==null?"":jsonObject.get("mostSLAloss").toString());
		//incident.setSLAdays(jsonObject.get("SLAdays")==null?null:Integer.parseInt(jsonObject.get("SLAdays").toString()));
		incident.setNotes(jsonObject.get("notes")==null?"":jsonObject.get("notes").toString());
		incident.setStatus(jsonObject.get("status")==null?"":jsonObject.get("status").toString());
		incident.setTeam(jsonObject.get("team").toString());
		incident.setEmailSubject(jsonObject.get("emailSubject")==null?"":jsonObject.get("emailSubject").toString());
		
		incident.setSection(jsonObject.get("section")==null?"":jsonObject.get("section").toString());
		
		
		incident.setMostSLALostBy(jsonObject.get("mostSLALostBy")==null?"":jsonObject.get("mostSLALostBy").toString());
		incident.setMaxSLALost(jsonObject.get("maxSLALost")==null?null:Integer.parseInt(jsonObject.get("maxSLALost").toString()));
		//incident.setClosedWith(jsonObject.get("closedWith")==null?"":jsonObject.get("closedWith").toString());
		//incident.setRFC(jsonObject.get("RFC")==null?"":jsonObject.get("RFC").toString());
		//incident.setRFCDate(jsonObject.get("RFCDate")==null?"":jsonObject.get("RFCDate").toString());
		incident.setRCAOwner(jsonObject.get("RCAOwner")==null?"":jsonObject.get("RCAOwner").toString());
		return incident;
	}
	
	private Login setLoginObj(JSONObject jsonObject) throws JSONException, ParseException {
		Login login = new Login();
		login.setUserName(jsonObject.get("userName").toString());
		login.setPassword(jsonObject.get("password").toString());
		/*login.setCreateDate(new SimpleDateFormat("yyyy-MMM-dd").parse(jsonObject.get("createDate").toString()));
		login.setRole(jsonObject.get("role").toString());*/
		return login;
	}
	
	@GET
	@Path("/verify")
	@Produces(MediaType.TEXT_PLAIN)
	public Response verifyRESTService(InputStream incomingData) {
		String result = "IncidentRESTService Successfully started..";
		return Response.status(200).header( "Access-Control-Allow-Origin","*").header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE").
				header("Access-Control-Allow-Headers", "Content-Type").
				entity(result).build();
		
	}
	

	@GET
	@Path("/{inc}/verifyIncident")
	@Produces(MediaType.APPLICATION_JSON)
	public Response verifyIncident(@PathParam("inc")String inc) throws UnknownHostException, JSONException {
		ConnectToDB con = new ConnectToDB();
		String data = con.verifyIncident(inc);
		con.closeConnections();
//		return data;
		return Response.status(200).header( "Access-Control-Allow-Origin","*").header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE").
				header("Access-Control-Allow-Headers", "Content-Type").entity(data).build();
	}
	
	@GET
	@Path("/{inc}/getIncident")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getIncident(@PathParam("inc")String inc) throws UnknownHostException, JSONException {
		System.out.println("FIRST HERE");
		ConnectToDB con = new ConnectToDB();
//		return con.getIncDetails(inc);
		/*return Response.status(200).header( "Access-Control-Allow-Origin","*").header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE").
				header("Access-Control-Allow-Headers", "Content-Type").entity(con.getIncDetails(inc)).build();
		*/
		return Response.status(200).entity(con.getIncDetails(inc)).build();
	}
	
	@PUT
	@Path("/{inc}/deleteIncident")
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteIncident(@PathParam("inc")String inc) throws UnknownHostException, JSONException {
		ConnectToDB con = new ConnectToDB();
		String data = con.deleteIncDetails(inc);
		con.closeConnections();
//		return data;
		return Response.status(200).header( "Access-Control-Allow-Origin","*").header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE").
				header("Access-Control-Allow-Headers", "Content-Type").entity(data).build();
	}
	
}
