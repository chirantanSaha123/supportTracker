package com.jwt.service;

import java.util.Date;

public class Incident {
	private int incidentId;
	private String incNumber;
	private Date createdOn;
	private String mostSLALostBy;
	private int mostSLALost;
	private String cmName;
	private String cmBizName;
	private String subjectLine;
	private String reportedBy;
	private String category;
	private int agingDays;
	private String issueWith;
	private String severity;
	private String pendingReason;
	private String closedWith;
	private String status;
	private String rfcNumber;
	private Date rfcDate;	
	private String description;
	private String impact;
	
	
	
	public String getImpact() {
		return impact;
	}
	public void setImpact(String impact) {
		this.impact = impact;
	}
	public int getIncidentId() {
		return incidentId;
	}
	public void setIncidentId(int incidentId) {
		this.incidentId = incidentId;
	}
	public String getIncNumber() {
		return incNumber;
	}
	public void setIncNumber(String incNumber) {
		this.incNumber = incNumber;
	}
	public Date getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}
	public String getMostSLALostBy() {
		return mostSLALostBy;
	}
	public void setMostSLALostBy(String mostSLALostBy) {
		this.mostSLALostBy = mostSLALostBy;
	}
	public int getMostSLALost() {
		return mostSLALost;
	}
	public void setMostSLALost(int mostSLALost) {
		this.mostSLALost = mostSLALost;
	}
	public String getCmName() {
		return cmName;
	}
	public void setCmName(String cmName) {
		this.cmName = cmName;
	}
	public String getCmBizName() {
		return cmBizName;
	}
	public void setCmBizName(String cmBizName) {
		this.cmBizName = cmBizName;
	}
	public String getSubjectLine() {
		return subjectLine;
	}
	public void setSubjectLine(String subjectLine) {
		this.subjectLine = subjectLine;
	}
	public String getReportedBy() {
		return reportedBy;
	}
	public void setReportedBy(String reportedBy) {
		this.reportedBy = reportedBy;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public int getAgingDays() {
		return agingDays;
	}
	public void setAgingDays(int agingDays) {
		this.agingDays = agingDays;
	}
	public String getIssueWith() {
		return issueWith;
	}
	public void setIssueWith(String issueWith) {
		this.issueWith = issueWith;
	}
	public String getSeverity() {
		return severity;
	}
	public void setSeverity(String severity) {
		this.severity = severity;
	}
	public String getPendingReason() {
		return pendingReason;
	}
	public void setPendingReason(String pendingReason) {
		this.pendingReason = pendingReason;
	}
	public String getClosedWith() {
		return closedWith;
	}
	public void setClosedWith(String closedWith) {
		this.closedWith = closedWith;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getRfcNumber() {
		return rfcNumber;
	}
	public void setRfcNumber(String rfcNumber) {
		this.rfcNumber = rfcNumber;
	}
	public Date getRfcDate() {
		return rfcDate;
	}
	public void setRfcDate(Date rfcDate) {
		this.rfcDate = rfcDate;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	

}
