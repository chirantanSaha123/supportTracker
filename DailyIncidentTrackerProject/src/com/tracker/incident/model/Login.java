package com.tracker.incident.model;

import java.util.Date;
import java.util.List;

public class Login {

	private String userName;
	private String password;
	private Date createDate;
	private String role;
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
	
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	@Override
	public String toString() {
		return "Login [userName=" + userName + ", password=" + password + ", createDate=" + createDate + ", role="
				+ role + "]";
	}
	
}
	
