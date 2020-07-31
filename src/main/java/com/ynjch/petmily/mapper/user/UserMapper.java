package com.ynjch.petmily.mapper.user;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.ynjch.petmily.vo.user.User;

@Component
public interface UserMapper {
	
   // 사용자 리스트
	List<LinkedHashMap<String, Object>> getUserList();
   
}