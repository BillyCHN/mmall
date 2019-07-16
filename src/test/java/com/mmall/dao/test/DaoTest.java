package com.mmall.dao.test;

import com.mmall.dao.UserMapper;
import com.mmall.pojo.Cart;
import com.mmall.pojo.User;
import com.mmall.test.TestBase;
import org.junit.Ignore;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.Timestamp;
import java.util.Date;
import java.util.Vector;

/**
 * Created by geely on mmall.
 */
public class DaoTest extends TestBase {

    @Autowired
    private UserMapper userMapper;

    @Ignore
    @Test
    public void testDao(){
        User a = new User();
        a.setPassword("111");
        a.setUsername("aaaaageely");
        a.setRole(0);
        a.setCreateTime(new Date());
        a.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        System.out.println(userMapper.insert(a));
        System.out.println("aaaaaaaaaaaaaa");
    }

    @Test
    public void testVector(){
        Vector vector = new Vector();
        vector.addElement(new User(1, "username", "password", "5621@mail.com", "138", "138", "138", 1, new Date(2019, 01, 02),new Date(2019, 01, 02)));
        
        vector.addElement(new Cart(1, 2, 3, 4, 1, new Date(2019, 01, 02), new Date(2019, 01, 02)));
        
        System.out.println(vector.get(0));
//        System.out.println(vector.get(2));
        
    }


}
