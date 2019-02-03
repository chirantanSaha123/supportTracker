package com.jwt.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

@Path("/incidents")
public class HelloWorldService {

	
	  @GET	  
	  @Produces(MediaType.APPLICATION_JSON)	  
	  @Path("/{incidentNumber}") public Response
	  getIncidentDetails(@PathParam("incidentNumber") String incidentNumber) {
		  
		  Incident imr1 = new Incident();
			imr1.setAgingDays(19);
			imr1.setCategory("Loan Request");
			imr1.setClosedWith("Change management");
			imr1.setCmBizName("TEST INC");
			imr1.setCmName("Chirantan Saha");
			imr1.setCreatedOn(new Date("2019/01/15"));
			imr1.setDescription("01/15- Complain received. \\n\\n 01/25- Sent to MYCA. \\n\\n 02/01- Issue fixed");
			imr1.setImpact("Impact to Amex Brand");
			imr1.setIncidentId(1);
			imr1.setIncNumber(incidentNumber);
			imr1.setIssueWith("MYCA");
			imr1.setMostSLALost(10);
			imr1.setMostSLALostBy("CAS");
			imr1.setPendingReason("Pending Investigation");
			imr1.setReportedBy("Jensen");
			imr1.setRfcDate(new Date("2019/02/02"));
			imr1.setRfcNumber("CHG1234567");
			imr1.setSeverity("Sev 4");
			imr1.setStatus("In Progress");
			imr1.setSubjectLine("Unable to request funds.");
			
	 
	  return
	  Response.status(200).header("Access-Control-Allow-Origin","*").entity(imr1).
	  build();
	  
	  }
	 

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllIncidens() throws EncryptedDocumentException, IOException {
		String message="Hello there!!!!";
		List<Incident> imrs = new ArrayList<Incident>();
		
		Incident imr1 = new Incident();
		imr1.setAgingDays(19);
		imr1.setCategory("Loan Request");
		imr1.setClosedWith("Change management");
		imr1.setCmBizName("TEST INC");
		imr1.setCmName("Chirantan Saha");
		imr1.setCreatedOn(new Date("2019/01/15"));
		imr1.setDescription("01/15- Complain received. \\n\\n 01/25- Sent to MYCA. \\n\\n 02/01- Issue fixed");
		imr1.setImpact("Impact to Amex Brand");
		imr1.setIncidentId(1);
		imr1.setIncNumber("INC0001001");
		imr1.setIssueWith("MYCA");
		imr1.setMostSLALost(10);
		imr1.setMostSLALostBy("CAS");
		imr1.setPendingReason("Pending Investigation");
		imr1.setReportedBy("Jensen");
		imr1.setRfcDate(new Date("2019/02/02"));
		imr1.setRfcNumber("CHG1234567");
		imr1.setSeverity("Sev 4");
		imr1.setStatus("In Progress");
		imr1.setSubjectLine("Unable to request funds.");
		
		
		Incident imr2 = new Incident();
		imr2.setAgingDays(19);
		imr2.setCategory("Unable to add/edit vendor");
		imr2.setClosedWith("Change management");
		imr2.setCmBizName("TEST INC");
		imr2.setCmName("Chirantan Saha");
		imr2.setCreatedOn(new Date("2019/01/25"));
		imr2.setDescription("01/15- Complain received. \\n\\n 01/25- Sent to MYCA. \\n\\n 02/01- Issue fixed");
		imr2.setImpact("Impact to Amex Brand");
		imr2.setIncidentId(2);
		imr2.setIncNumber("INC0001002");
		imr2.setIssueWith("CLP");
		imr2.setMostSLALost(8);
		imr2.setMostSLALostBy("CAS");
		imr2.setPendingReason("Pending Investigation");
		imr2.setReportedBy("Kelsey");
		imr2.setRfcDate(new Date("2019/02/02"));
		imr2.setRfcNumber("CHG1234568");
		imr2.setSeverity("Sev 4");
		imr2.setStatus("In Progress");
		imr2.setSubjectLine("Unable to request funds.");
		
		
		Incident imr3 = new Incident();
		imr3.setAgingDays(19);
		imr3.setCategory("Loan Request");
		imr3.setClosedWith("");
		imr3.setCmBizName("TEST INC");
		imr3.setCmName("Chirantan Saha");
		imr3.setCreatedOn(new Date("2019/01/15"));
		imr3.setDescription("01/15- Complain received. \\n\\n 01/25- Sent to MYCA. \\n\\n 02/01- Issue fixed");
		imr3.setImpact("Impact to Amex Brand");
		imr3.setIncidentId(3);
		imr3.setIncNumber("INC0001001");
		imr3.setIssueWith("MYCA");
		imr3.setMostSLALost(10);
		imr3.setMostSLALostBy("CAS");
		imr3.setPendingReason("Pending Investigation");
		imr3.setReportedBy("Jensen");
		imr3.setRfcDate(null);
		imr3.setRfcNumber("");
		imr3.setSeverity("Sev 4");
		imr3.setStatus("In Progress");
		imr3.setSubjectLine("Unable to request funds.");
		
		
		
		Incident imr4 = new Incident();
		imr4.setAgingDays(19);
		imr4.setCategory("Loan Request");
		imr4.setClosedWith("Change management");
		imr4.setCmBizName("TEST INC");
		imr4.setCmName("Chirantan Saha");
		imr4.setCreatedOn(new Date("2019/01/15"));
		imr4.setDescription("01/15- Complain received. \\n\\n 01/25- Sent to MYCA. \\n\\n 02/01- Issue fixed");
		imr4.setImpact("Impact to Amex Brand");
		imr4.setIncidentId(4);
		imr4.setIncNumber("INC0001001");
		imr4.setIssueWith("MYCA");
		imr4.setMostSLALost(10);
		imr4.setMostSLALostBy("CAS");
		imr4.setPendingReason("Pending Investigation");
		imr4.setReportedBy("Jensen");
		imr4.setRfcDate(new Date("2019/02/02"));
		imr4.setRfcNumber("CHG1234567");
		imr4.setSeverity("Sev 4");
		imr4.setStatus("In Progress");
		imr4.setSubjectLine("Unable to request funds.");
		
		
		
		Incident imr5 = new Incident();
		imr5.setAgingDays(19);
		imr5.setCategory("Loan Request");
		imr5.setClosedWith("Change management");
		imr5.setCmBizName("TEST INC");
		imr5.setCmName("Chirantan Saha");
		imr5.setCreatedOn(new Date("2019/01/15"));
		imr5.setDescription("01/15- Complain received. \\n\\n 01/25- Sent to MYCA. \\n\\n 02/01- Issue fixed");
		imr5.setImpact("Impact to Amex Brand");
		imr5.setIncidentId(5);
		imr5.setIncNumber("INC0001001");
		imr5.setIssueWith("MYCA");
		imr5.setMostSLALost(10);
		imr5.setMostSLALostBy("CAS");
		imr5.setPendingReason("Pending Investigation");
		imr5.setReportedBy("Jensen");
		imr5.setRfcDate(new Date("2019/02/02"));
		imr5.setRfcNumber("CHG1234567");
		imr5.setSeverity("Sev 4");
		imr5.setStatus("In Progress");
		imr5.setSubjectLine("Unable to request funds.");
		
		imrs.add(imr1);			
		imrs.add(imr2);
		imrs.add(imr3);
		imrs.add(imr4);
		imrs.add(imr5);
		
		return Response.status(200).header("Access-Control-Allow-Origin","*").entity(imrs).build();

	}

}
