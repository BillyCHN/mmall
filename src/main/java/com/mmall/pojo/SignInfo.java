package com.mmall.pojo;

import java.util.Date;

public class SignInfo {
    private Integer id;

    private Integer userId;

    private Date updateTime;

    public SignInfo(Integer id, Integer userId, Date updateTime) {
        this.id = id;
        this.userId = userId;
        this.updateTime = updateTime;
    }

    public SignInfo() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

	@Override
	public String toString() {
		return "SignInfo [id=" + id + ", userId=" + userId + ", updateTime=" + updateTime + "]";
	}
    
    
}