package com.tracker.incident.model;

public class Incident {

	private String name;
	private String businessName;
	private String INC;
	private String repName;
	//private String issue;
	private String creationDate;
	//private String updatedDate;
	private int age;//total
	private String analyzedCategory;
	//private String closedDate;
	private String mostSLAloss; //team name
	//private int SLAdays; //
	private int severity;
	private String notes;
	private String status;
	private String team;
	private String emailSubject;
	private String section;
	private String mostSLALostBy;
	private int maxSLALost;
	/*private String closedWith;
	private String RFC;
	private String RFCDate;*/
	private String RCAOwner;
	
	
	public String getRCAOwner() {
		return RCAOwner;
	}
	public void setRCAOwner(String rCAOwner) {
		RCAOwner = rCAOwner;
	}
	/*public String getClosedWith() {
		return closedWith;
	}
	public void setClosedWith(String closedWith) {
		this.closedWith = closedWith;
	}
	public String getRFC() {
		return RFC;
	}
	public void setRFC(String rFC) {
		RFC = rFC;
	}
	public String getRFCDate() {
		return RFCDate;
	}
	public void setRFCDate(String rFCDate) {
		RFCDate = rFCDate;
	}*/

	public String getMostSLALostBy() {
		return mostSLALostBy;
	}
	public void setMostSLALostBy(String mostSLALostBy) {
		this.mostSLALostBy = mostSLALostBy;
	}
	public int getMaxSLALost() {
		return maxSLALost;
	}
	public void setMaxSLALost(int maxSLALost) {
		this.maxSLALost = maxSLALost;
	}

	
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBusinessName() {
		return businessName;
	}
	public void setBusinessName(String businessName) {
		this.businessName = businessName;
	}
	public String getINC() {
		return INC;
	}
	public void setINC(String iNC) {
		INC = iNC;
	}
	public String getRepName() {
		return repName;
	}
	public void setRepName(String repName) {
		this.repName = repName;
	}
	/*public String getIssue() {
		return issue;
	}
	public void setIssue(String issue) {
		this.issue = issue;
	}*/
	public String getCreationDate() {
		return creationDate;
	}
	public void setCreationDate(String creationDate) {
		this.creationDate = creationDate;
	}
/*	public String getUpdatedDate() {
		return updatedDate;
	}
	public void setUpdatedDate(String updatedDate) {
		this.updatedDate = updatedDate;
	}*/
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getAnalyzedCategory() {
		return analyzedCategory;
	}
	public void setAnalyzedCategory(String analyzedCategory) {
		this.analyzedCategory = analyzedCategory;
	}
	/*public String getClosedDate() {
		return closedDate;
	}
	public void setClosedDate(String closedDate) {
		this.closedDate = closedDate;
	}*/
	public String getMostSLAloss() {
		return mostSLAloss;
	}
	public void setMostSLAloss(String mostSLAloss) {
		this.mostSLAloss = mostSLAloss;
	}
	/*public int getSLAdays() {
		return SLAdays;
	}
	public void setSLAdays(int sLAdays) {
		SLAdays = sLAdays;
	}*/
	public int getSeverity() {
		return severity;
	}
	public void setSeverity(int severity) {
		this.severity = severity;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getTeam() {
		return team;
	}
	public void setTeam(String team) {
		this.team = team;
	}
	public String getEmailSubject() {
		return emailSubject;
	}
	public void setEmailSubject(String emailSubject) {
		this.emailSubject = emailSubject;
	}
	public String getSection() {
		return section;
	}
	public void setSection(String section) {
		this.section = section;
	}
	@Override
	public String toString() {
		return "Incident [name=" + name + ", businessName=" + businessName + ", INC=" + INC + ", repName=" + repName
				+ ", creationDate=" + creationDate + ", age=" + age + ", analyzedCategory=" + analyzedCategory
				+  ", mostSLAloss=" + mostSLAloss + ", severity=" + severity + ", notes="
				+ notes + ", status=" + status + ", team=" + team + ", emailSubject=" + emailSubject + ", section="
				+ section + ", mostSLALostBy=" + mostSLALostBy + ", maxSLALost=" + maxSLALost + ", RCAOwner=" + RCAOwner
				+ "]";
	}
	
	
	
}
