package com.ynjch.petmily.controller.user;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ynjch.petmily.base.util.PetmilyUtil;
import com.ynjch.petmily.service.user.UserService;
import com.ynjch.petmily.vo.user.User;

@Controller
@RequestMapping(value = "/user")
public class UserControllor {
	
	private static final Logger logger = LoggerFactory.getLogger(UserControllor.class);
	private String thisUrl = "user";
	
	@Autowired
	private UserService userService;
		
	@RequestMapping(value = "userList", method = {RequestMethod.POST, RequestMethod.GET})
	public String getUserList(Model model, HttpServletRequest request) {
//	    List<Map<String, Object>> userList = userService.getUserList();
//		model.addAttribute("user", userList);

		return thisUrl + "/userList";
	}
	
	@RequestMapping(value = "userListAction", method = {RequestMethod.POST, RequestMethod.GET}, produces = "application/json;charset=UTF-8")
	@ResponseBody
    public String getUserListAction(Model model, HttpServletRequest request) throws JSONException {
		JSONObject jobj = new JSONObject();
		List<LinkedHashMap<String, Object>> userList = userService.getUserList();

		jobj.put("user_list", userList);
		
		return PetmilyUtil.showResult(jobj.toString());
	}
	
}

// MASTER 에서 두 번째 수정 - test 브랜치 만들어진 이후임
// MASTER 에서 수정함