package com.mmall.dao;

import java.util.Date;

import org.apache.ibatis.annotations.Param;

import com.mmall.pojo.SignInfo;

public interface SignInfoMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(SignInfo record);
    
    int insertById(Integer userId);
    
    int insertSelective(SignInfo record);

    SignInfo selectByPrimaryKey(Integer id);
    
    SignInfo isSignInByPrimaryKey(@Param("userId") Integer id);

    int updateByPrimaryKeySelective(SignInfo record);

    int updateByPrimaryKey(SignInfo record);
    
    
}