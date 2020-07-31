/**
 * 공통 SelectBox 가져오기
 * @returns
 */
function selectBoxSetting(grp_cd, selectId,selectedValue){
   if(grp_cd == '100') {
	   if(selectedValue != null && selectedValue != ''){
		   callAajaxJson(grp_cd, selectId,selectedValue);		   
	   }else{
		   callAajaxJson(grp_cd, selectId);
	   }
      setDefaultName('team_cd', '선택') ;
   }else{
	   if(selectedValue != null && selectedValue != ''){
		   callAajaxJson(grp_cd, selectId,selectedValue);		   
	   }else{
		   callAajaxJson(grp_cd, selectId);
	   }
   }
   
   /**
    * 부서가 변했을 경우
    */
   $('#dept_cd').change(function(){
    var data = $(this).val();
     callAajaxJson(data, 'team_cd');     
   });
};

/**
 * db접속하여 selectBox 정보 가져오기
 * @param grp_cd
 * @param selectId
 * @returns
 */
function callAajaxJson(grp_cd , selectId,selectedValue) {
   var url = '/admin/code/createComboBox.json';
      
   var param = new Object();
   param.grp_cd = grp_cd;
   
   $.ajax({
      type : "POST",
      url : url,
      data : param,
      dataType :'json',
      success : function(response, status, request) {
    	  if(selectedValue != null && selectedValue != ''){
    		  createOption(selectId ,response,selectedValue);
    	  }else{
    		  createOption(selectId ,response);
    	  }
      },
      error : function(request, status, error) {
         /*console.log("code : " + request.status + "\r\nmessage : " + request.responseJSON.exceptionMessage.message);*/
      }
   }).done(function(){
   });
};

/**
 * 해당 selectBox에 Data넣기
 * @param selectId
 * @param jsonData
 * @returns
 */
function createOption( selectId, jsonData) {
   $('#'+selectId).html('');
   
   $.each(jsonData, function(index, object){
      target_obj = "#"+selectId;
      $(target_obj).append(new Option(object.dtl_cd_desc, object.dtl_cd));
   });
}
/**
 * 해당 selectBox에 Data넣기
 * @param selectId
 * @param jsonData
 * @param selectedValue
 * @returns
 */
function createOption( selectId, jsonData,selectedValue) {
   $('#'+selectId).html('');
   
   $.each(jsonData, function(index, object){
      target_obj = "#"+selectId;
      $(target_obj).append(new Option(object.dtl_cd_desc, object.dtl_cd));
   });
   
	$(target_obj).val(selectedValue).prop("selected", true);
}

/**
 * 콤보박스 기본명 설정
 * @param selectId
 * @param msg
 * @returns
 */
function setDefaultName(selectId,msg){
   target_obj = "#"+selectId;
   $(target_obj).html("");
    $(target_obj).append(new Option(msg,''));
}


function phoneFomatter(value){
	if (value == null || value.length == 0) return '';
	
	var str = value.replace(/[^0-9/*]/g, '');
	var tmp = '';

	if(str.length > 11){
		return str = str.substr(0,11);
	}

	var regStr = /^(01[0126789\*]{1}|02|0[3-9\*]{1}[0-9\*]{1})?-?([0-9\*]{3,4})-?([0-9\*]{4}$)/;
	
    if(str.length < 9){
    	tmp = str.replace(regStr, '$2-$3');
    }else{
    	tmp = str.replace(regStr, '$1-$2-$3');
    }
    
    if(tmp == null || tmp == ''){
    	tmp = str;
    }
    
	return tmp;
}

