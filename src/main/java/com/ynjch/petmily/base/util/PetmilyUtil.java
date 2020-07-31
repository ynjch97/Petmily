package com.ynjch.petmily.base.util;

import java.io.UnsupportedEncodingException;

import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PetmilyUtil {
	
    private static Logger logger = LoggerFactory.getLogger(PetmilyUtil.class); 
    
	public static String showResult(String str)
	{
		String result = str;
		
//		if (Const.USE_ENC_RESPONSE) {
//			try {
//				result = SignEncDec.encrypt(str);
//			} catch (UnsupportedEncodingException e) {
//				logger.error("", e);
//			}
//		}
		
		return result;
	}
	
}
