package com.ynjch.petmily.service.user;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ynjch.petmily.mapper.user.UserMapper;
import com.ynjch.petmily.vo.user.User;

@Service
public class UserService {
   
   private Logger logger = Logger.getLogger(this.getClass());
   
   @Autowired
   private UserMapper userMapper;
   
   public List<LinkedHashMap<String, Object>> getUserList(){
      logger.debug("==================================== Service 입니다.");
      
      List<LinkedHashMap<String, Object>> userList = userMapper.getUserList();
      return userList;
   }
   
}