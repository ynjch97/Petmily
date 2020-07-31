package com.ynjch.petmily.vo.user;

import java.sql.Date;

public class User {

	/** 기본 정보 */
	String user_id;
	String user_pw;
	int user_pw_cnt;
	String user_pw_lock;
	String user_pw_temp;
	String user_nm;
	String user_nick;
	String user_type;
	String user_birth;
	String user_gender;
	String user_sido;
	String user_sgg;
	String user_umd;
	String user_addr;
	String user_phn;
	Date join_dt;
	String crt_id;
	Date crt_dt;
	String upd_id;
	Date upd_dt;
	
	/** 편집된 정보 */
	String user_full_addr;
	
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getUser_pw() {
		return user_pw;
	}
	public void setUser_pw(String user_pw) {
		this.user_pw = user_pw;
	}
	public int getUser_pw_cnt() {
		return user_pw_cnt;
	}
	public void setUser_pw_cnt(int user_pw_cnt) {
		this.user_pw_cnt = user_pw_cnt;
	}
	public String getUser_pw_lock() {
		return user_pw_lock;
	}
	public void setUser_pw_lock(String user_pw_lock) {
		this.user_pw_lock = user_pw_lock;
	}
	public String getUser_pw_temp() {
		return user_pw_temp;
	}
	public void setUser_pw_temp(String user_pw_temp) {
		this.user_pw_temp = user_pw_temp;
	}
	public String getUser_nm() {
		return user_nm;
	}
	public void setUser_nm(String user_nm) {
		this.user_nm = user_nm;
	}
	public String getUser_nick() {
		return user_nick;
	}
	public void setUser_nick(String user_nick) {
		this.user_nick = user_nick;
	}
	public String getUser_type() {
		return user_type;
	}
	public void setUser_type(String user_type) {
		this.user_type = user_type;
	}
	public String getUser_birth() {
		return user_birth;
	}
	public void setUser_birth(String user_birth) {
		this.user_birth = user_birth;
	}
	public String getUser_gender() {
		return user_gender;
	}
	public void setUser_gender(String user_gender) {
		this.user_gender = user_gender;
	}
	public String getUser_sido() {
		return user_sido;
	}
	public void setUser_sido(String user_sido) {
		this.user_sido = user_sido;
	}
	public String getUser_sgg() {
		return user_sgg;
	}
	public void setUser_sgg(String user_sgg) {
		this.user_sgg = user_sgg;
	}
	public String getUser_umd() {
		return user_umd;
	}
	public void setUser_umd(String user_umd) {
		this.user_umd = user_umd;
	}
	public String getUser_addr() {
		return user_addr;
	}
	public void setUser_addr(String user_addr) {
		this.user_addr = user_addr;
	}
	public String getUser_phn() {
		return user_phn;
	}
	public void setUser_phn(String user_phn) {
		this.user_phn = user_phn;
	}
	public Date getJoin_dt() {
		return join_dt;
	}
	public void setJoin_dt(Date join_dt) {
		this.join_dt = join_dt;
	}
	public String getCrt_id() {
		return crt_id;
	}
	public void setCrt_id(String crt_id) {
		this.crt_id = crt_id;
	}
	public Date getCrt_dt() {
		return crt_dt;
	}
	public void setCrt_dt(Date crt_dt) {
		this.crt_dt = crt_dt;
	}
	public String getUpd_id() {
		return upd_id;
	}
	public void setUpd_id(String upd_id) {
		this.upd_id = upd_id;
	}
	public Date getUpd_dt() {
		return upd_dt;
	}
	public void setUpd_dt(Date upd_dt) {
		this.upd_dt = upd_dt;
	}
	public String getUser_full_addr() {
		return user_full_addr;
	}
	public void setUser_full_addr(String user_full_addr) {
		this.user_full_addr = user_full_addr;
	}
  
}