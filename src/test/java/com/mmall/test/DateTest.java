package com.mmall.test;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.mmall.dao.SignInfoMapper;
import com.mmall.pojo.SignInfo;

public class DateTest {

	@Autowired
	private SignInfoMapper signInfoMapper;
	
	@Test
	public  void testDate() {
		System.out.println("testing!!!");
		//SignInfo signInfo = signInfoMapper.selectByPrimaryKeyAndDate(26, new Date());
		
		//System.out.println(signInfo.toString());
		
	}
}
