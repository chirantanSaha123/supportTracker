package com.tracker.incident.util;

import java.net.UnknownHostException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.mongodb.BasicDBObjectBuilder;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.WriteResult;
import com.tracker.incident.model.Incident;
import com.tracker.incident.model.Login;
import com.tracker.incident.model.AppResponse;

public class ConnectToDB {

	public DB db;
	public DBCollection col;
	public MongoClient mongo;
	public  ConnectToDB() throws UnknownHostException {
		mongo = new MongoClient("localhost", 27017);
		db = mongo.getDB("IncidentTracker");
	}
	
	public DBCollection getActiveCollection() {
		col = db.getCollection("active");
		return col;
	}
	
	public DBCollection getLoginCollection() {
		col = db.getCollection("login");
		return col;
	}
	
	public DBCollection getArchiveCollection() {
		col = db.getCollection("archive");
		return col;
	}
	
	public DBCollection getUpdatedCollection() {
		col = db.getCollection("updated");
		return col;
	}
	
	public AppResponse writeIncidentToCOllection(Incident inc,String action) {
		DBObject doc = createIncidentDBObject(inc);
		if(action.equalsIgnoreCase("add"))
			col = getActiveCollection();
		else if(action.equalsIgnoreCase("update")) {
			System.out.println("UPDATE!!!!");
			col = getActiveCollection();
		}
		else if(action.equalsIgnoreCase("delete")) 
			col = getArchiveCollection();
		WriteResult result = col.insert(doc);
		AppResponse response = new AppResponse();
		if(result.getN()==0) {
			response.setStatus(true);
			response.setMessage("Success");
		}else {
			response.setStatus(false);
			response.setMessage("Failure");
		}
		//mongo.close();
		return response;
	}
	
	public AppResponse writeLoginToCollection(Login login) {
		DBObject doc = createLoginDBObject(login);
		col = getLoginCollection();
		WriteResult result = col.insert(doc);
		AppResponse response = new AppResponse();
		if(result.getN()==0) {
			response.setStatus(true);
			response.setMessage("Success");
		}else {
			response.setStatus(false);
			response.setMessage("Failure");
		}
		//mongo.close();
		return response;
	}
	
	private DBObject createIncidentDBObject(Incident inc) {
		
		BasicDBObjectBuilder docBuilder = BasicDBObjectBuilder.start();
		docBuilder.append("name",inc.getName());
		docBuilder.append("businessName",inc.getBusinessName());
		docBuilder.append("INC",inc.getINC());
		docBuilder.append("repName",inc.getRepName());
		//docBuilder.append("issue",inc.getIssue());
		docBuilder.append("creationDate",inc.getCreationDate());
		//docBuilder.append("updatedDate",inc.getUpdatedDate());
		docBuilder.append("age",inc.getAge());
		docBuilder.append("analyzedCategory",inc.getAnalyzedCategory());
		//docBuilder.append("closedDate",inc.getClosedDate());
		docBuilder.append("mostSLAloss",inc.getMostSLAloss());
		//docBuilder.append("SLAdays",inc.getSLAdays());
		docBuilder.append("severity",inc.getSeverity());
		docBuilder.append("notes",inc.getNotes());
		docBuilder.append("status",inc.getStatus());
		docBuilder.append("team",inc.getTeam());
		docBuilder.append("emailSubject",inc.getEmailSubject());
		docBuilder.append("section",inc.getSection());
		docBuilder.append("mostSLALostBy",inc.getMostSLALostBy());
		docBuilder.append("maxSLALost",inc.getMaxSLALost());
		//docBuilder.append("closedWith",inc.getClosedWith());
		//docBuilder.append("RFC",inc.getRFC());
		//docBuilder.append("RFCDate",inc.getRFCDate());
		docBuilder.append("RCAOwner",inc.getRCAOwner());
		return docBuilder.get();
	}
	
	private DBObject createLoginDBObject(Login login) {
		
		BasicDBObjectBuilder docBuilder = BasicDBObjectBuilder.start();
		docBuilder.append("userName",login.getUserName());
		docBuilder.append("password",login.getPassword());
		docBuilder.append("createDate",(new SimpleDateFormat("yyyy-MMM-dd")).format(new Date()).toString());
		docBuilder.append("role","WCT_USER");
		return docBuilder.get();
	}
	
	//multiple query params not working
	public String verifyLoginCredentials(Login login) throws JSONException {
		col = getLoginCollection();
		System.out.println("login::: "+login.toString());
		DBObject query = BasicDBObjectBuilder.start().add("userName", login.getUserName()).add("password", login.getPassword()).get();
		DBCursor cursor = col.find(query);
		JSONObject json = new JSONObject();
		JSONArray array=new JSONArray();
		while(cursor.hasNext()){
			DBObject result= cursor.next();
			System.out.println("login: "+result);
			array.put(result);
		}
		if(array.isNull(0))
			array.put("No details available!!");
		else
			array.put("SUCCESS");
		//mongo.close();
		json.put("Login", array);
		return json.toString() ;
	}

	public String getIncDetails(String inc) throws JSONException {
		System.out.println("HERE I COME");
		col = getActiveCollection();
		DBObject query = BasicDBObjectBuilder.start().add("INC", inc).get();
		DBCursor cursor = col.find(query);
		JSONObject json = new JSONObject();
		JSONArray array=new JSONArray();
		while(cursor.hasNext()){
			DBObject result= cursor.next();
			array.put(result);
		}
		if(array.isNull(0))
			array.put("No details available!!");
		json.put("Incident", array);
		//mongo.close();
		return json.toString() ;
	}
	
	
	
	public String verifyIncident(String inc) throws JSONException {
		col = getActiveCollection();
		DBObject query = BasicDBObjectBuilder.start().add("INC", inc).get();
		DBCursor cursor = col.find(query);
		JSONObject json = new JSONObject();
		JSONArray array=new JSONArray();
		boolean recsFound = false;
		while(cursor.hasNext()){
			recsFound = true;
			break;
		}
		if(!recsFound)
			array.put("No details available!!!");
		else
			array.put("Data available!!");
		json.put("Incident", array);
//		mongo.close();
		return json.toString() ;
	}
	
	public String verifyLogin(String userName) throws JSONException {
		col = getLoginCollection();
		DBObject query = BasicDBObjectBuilder.start().add("userName", userName).get();
		DBCursor cursor = col.find(query);
		JSONObject json = new JSONObject();
		JSONArray array=new JSONArray();
		boolean recsFound = false;
		while(cursor.hasNext()){
			recsFound = true;
			break;
		}
		if(!recsFound)
			array.put("No details available!!!");
		else
			array.put("Data available!!");
		json.put("Incident", array);
//		mongo.close();
		return json.toString() ;
	}
	
	public String deleteIncDetails(String inc) throws JSONException {
		DBCollection delCol = getActiveCollection();
		DBObject query = BasicDBObjectBuilder.start().add("INC", inc).get();
		DBCursor cursor = col.find(query);
		JSONObject json = new JSONObject();
		if(cursor.size()!=0) {
		int noOfRecs = 0;
		while(cursor.hasNext()){
			DBObject result= cursor.next();
			Incident incident = generateIncidentObj(result).get(0);
			this.writeIncidentToCOllection(incident,"delete");
			delCol.remove(result);
			noOfRecs++;
		}
			//mongo.close();
			return json.put("Incident", ("Successfully deleted "+noOfRecs+" records!!")).toString() ;
			}
		else {
			//mongo.close();
			return json.put("Incident", ("No records found!!")).toString() ;
		}
	}
	
	public String  getAllIncDetails() throws JSONException  {
		col = getActiveCollection();
		DBObject query = BasicDBObjectBuilder.start().get();
		
		System.out.println("HERE I COME");
		DBCursor cursor = col.find(query);
		JSONObject json = new JSONObject();
		JSONArray array=new JSONArray();
		while(cursor.hasNext()){
			DBObject result= cursor.next();
			array.put(result);
		}
		if(array.isNull(0))
			array.put("No details available!!");
		json.put("Incident", array);
		mongo.close();
		return json.toString() ;
		
		
		
	}
	
	private List<Incident> generateIncidentObj(DBObject dbObject) {
		System.out.println("HEREICOMETOO");
		col = getActiveCollection();
		DBCursor cursor = col.find(dbObject);
		LinkedHashMap<Object, Object> incMap;
		
		List<Incident> incidents = new ArrayList<Incident>();
		while(cursor.hasNext()){
		DBObject result= cursor.next();
			Incident incident = new Incident();
			incMap = (LinkedHashMap<Object, Object>) result.toMap();
			System.out.println("incMap  "+incMap);
			incident.setName(incMap.get("name").toString());
			incident.setBusinessName(incMap.get("businessName").toString());
			incident.setINC(incMap.get("INC").toString());
			incident.setRepName(incMap.get("repName").toString());
			//incident.setIssue(incMap.get("issue").toString());
			incident.setCreationDate(incMap.get("creationDate").toString());
			//incident.setUpdatedDate(incMap.get("updatedDate").toString());
			incident.setAge(Integer.parseInt(incMap.get("age").toString()));
			incident.setAnalyzedCategory(incMap.get("analyzedCategory").toString());
			//incident.setClosedDate(incMap.get("closedDate").toString());
			incident.setMostSLAloss(incMap.get("mostSLAloss").toString());
			//incident.setSLAdays(Integer.parseInt(incMap.get("SLAdays").toString()));
			incident.setSeverity(Integer.parseInt(incMap.get("severity").toString()));
			incident.setNotes(incMap.get("notes").toString());
			incident.setStatus(incMap.get("status").toString());
			incident.setTeam(incMap.get("emailSubject").toString());
			incident.setSection(incMap.get("section").toString());
			incident.setMostSLALostBy(incMap.get("mostSLALostBy").toString());
			incident.setMaxSLALost(Integer.parseInt(incMap.get("maxSLALost").toString()));
			//incident.setClosedWith(incMap.get("closedWith").toString());
			//incident.setRFC(incMap.get("RFC").toString());
			//incident.setRFCDate(incMap.get("RFCDate").toString());
			incident.setRCAOwner(incMap.get("RCAOwner").toString());
			incidents.add(incident);
		}
		//mongo.close();
		System.out.println("incidents "+incidents);
		return incidents;
	}
	
	public void closeConnections() {
		this.mongo.close();
	}
}
