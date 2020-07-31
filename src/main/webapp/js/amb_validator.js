/************************************************************
Function Name : validNull
Description   : Null 체크 , Null이면 true
Parameter     : object, string
                해당 오브젝트,경고 메세지 항목명
Return Value  :
Usage in html : validNull(objSource,'아이디를 입력하세요.')
************************************************************/
function validNull(obj,alertTitle) {

  str=''+obj.value;
  if (str == null || str == '') {
        alertMessage(alertTitle);
        obj.focus();
        return true;
  }
  return false;
}

/************************************************************
Function Name : validEmpty
Description   : 공백 체크 , 공백이면 true
Parameter     : object, string
                해당 오브젝트,경고 메세지 항목명
Return Value  :
Usage in html : validEmpty(objSource,'아이디')
************************************************************/
function validEmpty(obj,alertTitle) {
     str=''+obj.value;
     if (str == null || str.replace(/ /gi,"") == "") {
          alertMessage(alertTitle);
          obj.focus();
          return true;
     }
     return false;
}
/************************************************************
Function Name : validNumber
Description   : 숫자만 입력되었는지 체크
Parameter     : object, string, boolean
                해당 오브젝트,경고 메세지 항목명,필수 입력항목 체크
Return Value  :
Usage in html : validNumber(obj,'아이디',true)
************************************************************/
function validNumber(obj,alertTitle,mandatory){
  var err = 0;
  obj=eval(obj);
  dat=''+obj.value;
  if(mandatory==null)mandatory=false;
  if(mandatory==true){
     if(validNull(obj,alertTitle))return true;
     if(validEmpty(obj,alertTitle))return true;
  }
  for (var i=0; i<dat.length; i++)	  {
     var chk = dat.substring(i,i+1);
     if(!chk.match(/[0-9]/)) {
          err = err + 1;
     }
  }
  if (err > 0) {
     alertMessage(alertTitle);
     obj.focus();
     return true;
  }
}
/************************************************************
Function Name : validInteger
Description   : 정수 체크, Integer형이 아니면 true
Parameter     : object, string, boolean
                해당 오브젝트,경고 메세지 항목명,필수 입력항목 체크
Return Value  :
Usage in html : validInteger(obj,'아이디',true)
************************************************************/
function validInteger(obj,alertTitle,mandatory) {
  var err = 0;
  re = /^[\+-]?[0-9]*[0-9]$/;

  obj=eval(obj);
  num=''+obj.value;
  if(mandatory==null)mandatory=false;
  if(mandatory==true){
     if(validNull(obj,alertTitle))return true;
     if(validEmpty(obj,alertTitle))return true;
  }

  if (re.test(num)) {
     return false;
  }else{
	  err = err + 1;
  }

  if (err > 0) {
	  alertMessage(alertTitle);
	  obj.focus();
	  return true;
  }
}
/************************************************************
Function Name : validFloat
Description   : 유리수 체크, Float형이 아니면 true
Parameter     : object, string, boolean
                해당 오브젝트,경고 메세지 항목명,필수 입력항목 체크
Return Value  :
Usage in html : validFloat(obj,'아이디',true)
************************************************************/
function validFloat(obj,alertTitle,mandatory) {
  var err = 0;
  re = /^[\+-]?[0-9]*[.]?[0-9]*[0-9]$/;

  obj=eval(obj);
  num=''+obj.value;
  if(mandatory==null)mandatory=false;

  if(mandatory==true){
     if(validNull(obj,alertTitle))return true;
     if(validEmpty(obj,alertTitle))return true;
  } else{
	  if(validNull(obj,alertTitle))return false;
	  if(validEmpty(obj,alertTitle)) return false;
  }

  if (re.test(num)) {
	  return false;
  }else{
	  err = err + 1;
  }

  if (err > 0) {
	  alertMessage(alertTitle);
	  obj.focus();
	  return true;
  }
}

/************************************************************
Function Name : validNumAndEng
Description   : 영문 숫자만 입력되었는지 체크
Parameter     : object, string, boolean
                해당 오브젝트,경고 메세지 항목명,필수 입력항목 체크
Return Value  :
Usage in html : validNumAndEng(obj,'아이디',true)
************************************************************/
function validNumAndEng(obj,alertTitle,mandatory) {
  var err = 0;

  obj=eval(obj);
  str=''+obj.value;
  if(mandatory==null)mandatory=false;
  if(mandatory==true){
     if(validNull(obj,alertTitle))return true;
     if(validEmpty(obj,alertTitle))return true;
  }
  for (var i=0; i<str.length; i++)  {
        var chk = str.substring(i,i+1);
        if(!chk.match(/[0-9]|[a-z]|[A-Z]/)) {
             err = err + 1;
        }
  }

  if (err > 0) {
     alertMessage(alertTitle);
     obj.focus();
     return true;
  }
}
/************************************************************
Function Name : validEnglish
Description   : 영문만 입력되었는지 체크
Parameter     : object, string, boolean
                해당 오브젝트,경고 메세지 항목명,필수 입력항목 체크
Return Value  :
Usage in html : validEnglish(obj,'아이디',true)
************************************************************/
function validEnglish(obj,alertTitle,mandatory) {
  var err = 0;

  obj=eval(obj);
  str=''+obj.value;
  if(mandatory==null)mandatory=false;
  if(mandatory==true){
     if(validNull(obj,alertTitle))return true;
     if(validEmpty(obj,alertTitle))return true;
  }
  for (var i=0; i<str.length; i++)  {
        var chk = str.substring(i,i+1);
        if(!chk.match(/[a-z]|[A-Z]/)) {
             err = err + 1;
        }
  }

  if (err > 0) {
     alertMessage(alertTitle);
     obj.focus();
     return true;
  }
}
/************************************************************
Function Name : validEmail
Description   : 이메일 형식으로 입력되었는지 체크
Parameter     : object, string, boolean
                해당 오브젝트,경고 메세지 항목명,필수 입력항목 체크
Return Value  :
Usage in html : validEmail(obj,'아이디',true)
************************************************************/
function validEmail(obj,alertTitle,mandatory) {
  var err = 0;
  re = /[^@]+@[A-Za-z0-9_-]+[.]+[A-Za-z]+/;

  obj=eval(obj);
  email=''+obj.value;
  if(mandatory==null)mandatory=false;
  if(mandatory==true){
     if(validNull(obj,alertTitle))return true;
     if(validEmpty(obj,alertTitle))return true;
  }
  if (re.test(email)) {
     return;
  } else{
	  err = err + 1;
  }

  if (err > 0) {
	  alertMessage(alertTitle);
	  obj.focus();
	  return true;
  }
}

/************************************************************
Function Name : validDate
Description   : 날짜의 년,월,일을 체크한다.(8자리, 10자리('-', '/' 사용 가능)
Parameter     : object, string, string, boolean
                해당 오브젝트,경고 메세지 항목명,패턴,필수 입력항목 체크
Return Value  :
Usage in html : validDate(obj,'아이디','YYYY-MM-DD',true)
************************************************************/
function validDate(obj,alertTitle,patern,mandatory)
{
  var err=0;
  obj=eval(obj);
  if(validIncludeOnly(obj,'1234567890-/',alertTitle,mandatory)==false)return true;

  var arrDate=null;
  if(obj.value.length==8){

  }else if(obj.value.length==10){
     arrDate=obj.value.split('-');
     if(arrDate.length!=3){
        arrDate=obj.value.split('/');
     }else{
        err++;
     }
     if(arrDate.length!=3)err++;
     if(arrDate[0].length!=4)err++;
     if(arrDate[1].length!=2)err++;
     if(arrDate[2].length!=2)err++;
  }else{
     err++;
  }

  if(err>0){
     alertMessage(alertTitle);
     obj.focus();
     return true;
  }

  var year;
  var month;
  var day;
  if(arrDate!=null && arrDate.length==3){
     year = arrDate[0];
     month = arrDate[1];
     day = arrDate[2];
  }else{
     year = eval(obj.value.substring(0, 4));
     month = eval(obj.value.substring(4, 6));
     day = eval(obj.value.substring(6, 8));
  }

  if (month > 12) {
     alertMessage(alertTitle);
     obj.focus();
     return true;
  }
  var totalDays;
  switch (eval(month)){
     case 1 :
        totalDays = 31;
        break;
     case 2 :
        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
          totalDays = 29;
        else
          totalDays = 28;
        break;
     case 3 :
        totalDays = 31;
        break;
     case 4 :
        totalDays = 30;
        break;
     case 5 :
        totalDays = 31;
        break;
     case 6 :
        totalDays = 30;
        break;
     case 7 :
        totalDays = 31;
        break;
     case 8 :
        totalDays = 31;
        break;
     case 9 :
        totalDays = 30;
        break;
     case 10 :
        totalDays = 31;
        break;
     case 11 :
        totalDays = 30;
        break;
     case 12 :
        totalDays = 31;
        break;
  }
  if (day > totalDays) {
     alertMessage(alertTitle);
     obj.focus();
     return true;
  }
  obj.value = convertStringPattern(obj.value,'YYYYMMDD',patern);
  return false;
}
/************************************************************
Function Name : validIP
Description   : IP주소 체계를 체크한다.
Parameter     : object, string, boolean
                해당 오브젝트,경고 메세지 항목명,필수 입력항목 체크
Return Value  :
Usage in html : validIP(obj,'아이디',true)
************************************************************/
function validIp(obj,alertTitle,mandatory)
{
  var err = 0;

  obj=eval(obj);
  ipStr=''+obj.value;

  if(mandatory==null)mandatory=false;
  if(mandatory==true){
     if(validNull(obj,alertTitle))return true;
     if(validEmpty(obj,alertTitle))return true;
  }

  var chk = true;
  if( ipStr.length < 7 ){
     alertMessage(alertTitle);
     obj.focus();
     return true;
  }
  var tAry1 = ipStr.split(".");
  if( tAry1.length != 4  ){
     alertMessage(alertTitle);
     obj.focus();
     return true;
  }
  for(i = 0 ; i < 4 ; i++){
     if( isNumber( tAry1[i]) ){
        var iVal = parseInt( tAry1[i] );
        if( i == 0 ){
          if( iVal < 1 || iVal > 255 ){
             err++;
          }
        }else{
          if( iVal < 0 || iVal > 255 ){
             err++;
          }
        }
     }else{
        err++;
     }
  }

  if (err > 0) {
     alertMessage(alertTitle);
     obj.focus();
     return true;
  }

  return false;
}

/************************************************************
Function Name : validContainsChars
Description   : 입력값에 특정 문자(chars)가 하나라도 있는지 체크 , 있으면 true
Parameter     : object, string, string, boolean
                해당 오브젝트,찾을 문자 항목,경고 메세지 항목명,필수 입력항목 체크
Return Value  :
Usage in html : validContainsChars(obj,*&^%$#@~;",'아이디',true)
************************************************************/
function validContainsChars(obj,chars,alertTitle,mandatory) {
  var err = 0;
  obj=eval(obj);
  str=''+obj.value;

  if(mandatory==null)mandatory=false;
  if(mandatory==true){
     if(validNull(obj,alertTitle))return true;
     if(validEmpty(obj,alertTitle))return true;
  }

  for (var inx = 0; inx < str.length; inx++) {
     if (chars.indexOf(str.charAt(inx)) != -1){
        return false;
     }
  }

  if (err > 0) {
	  alertMessage(alertTitle,chars);
	  obj.focus();
	  return true;
  }
  return false;
}
/************************************************************
Function Name : validContainsCharsOnly
Description   : 입력값에 특정 문자(chars)외에 다른 문자가 있는지 체크, 있으면 false
Parameter     : object, string, string, boolean
                해당 오브젝트,찾을 문자 항목,경고 메세지 항목명,필수 입력항목 체크
Return Value  :
Usage in html : validContainsCharsOnly(obj,*&^%$#@~;",'아이디',true)
************************************************************/
function validContainsCharsOnly(obj,chars,alertTitle,mandatory) {

  obj=eval(obj);
  str=''+obj.value;

  if(mandatory==null)mandatory=false;
  if(mandatory==true){
     if(validNull(obj,alertTitle))return true;
     if(validEmpty(obj,alertTitle))return true;
  }

  for (var inx = 0; inx < str.length; inx++) {
     if (chars.indexOf(str.charAt(inx)) == -1){
        alertMessage(alertTitle,chars);
        obj.focus();
        return true;
     }
  }
  return false;
}
/************************************************************
Function Name : validLimitLength
Description   : 지장한 길이 구간을 벗어나면 false
Parameter     : object, int, int, string, boolean
                해당 오브젝트,최소값,최대값,경고 메세지 항목명,필수 입력 사항 여부
Return Value  :
Usage in html : validLimitLength(obj,5,10,'아이디',true)
************************************************************/
function validLimitLength(obj,limitMinNumber,limitMaxNumber,alertTitle,mandatory) {
  obj = eval(obj);
  if(mandatory==null)mandatory=false;
  if(mandatory==true){
     if(validNull(obj,alertTitle))return true;
     if(validEmpty(obj,alertTitle))return true;
  }
  if(obj.value.length<limitMinNumber || obj.value.length>limitMaxNumber){
     alertMessage(alertTitle,limitMinNumber,limitMaxNumber);
     obj.focus();
     return true;
  }
  return false;
}

/************************************************************
Function Name : validMaxLimitLength
Description   : 지장한 길이보다 크면 false
Parameter     : object, int, string, boolean
                해당 오브젝트,최대값,경고 메세지 항목명,필수 입력 사항 여부
Return Value  :
Usage in html : validMaxLimitLength(obj,5,'아이디',true)
************************************************************/
function validMaxLimitLength(obj,limitNumber,alertTitle,mandatory) {
  obj = eval(obj);
  if(mandatory==null)mandatory=false;
  if(mandatory==true){
     if(validNull(obj,alertTitle))return true;
     if(validEmpty(obj,alertTitle))return true;
  }else{
	  if(validNull(obj,alertTitle))return false;
	  if(validEmpty(obj,alertTitle))return false;
  }
  if(obj.value.length<limitNumber){
     alertMessage(alertTitle,limitNumber);
     obj.focus();
     return true;
  }
  return false;
}

/************************************************************
Function Name : validMinLimitLength
Description   : 지장한 길이보다 작으면 false
Parameter     : object, int, string, boolean
                해당 오브젝트,최소값,경고 메세지 항목명,필수 입력 사항 여부
Return Value  :
Usage in html : validMinLimitLength(obj,5,'아이디',true)
************************************************************/
function validMinLimitLength(obj,limitNumber,alertTitle,mandatory) {
  obj = eval(obj);
  if(mandatory==null)mandatory=false;
  if(mandatory==true){
     if(validNull(obj,alertTitle))return true;
     if(validEmpty(obj,alertTitle))return true;
  }else{
	  if(validNull(obj,alertTitle))return false;
	  if(validEmpty(obj,alertTitle))return false;
  }
  var objString = obj.value;
  if(objString!=null && objString!=""){
	 if(objString.length>limitNumber){
	     alertMessage(alertTitle,limitNumber);
	     obj.focus();
	     return true;
	 }
  }
  return false;
}
/************************************************************
Function Name : validPhoneNumber
Description   : 전화번호가 형식에 맞는지 체크
Parameter     : object, string, boolean
                해당 오브젝트,경고 메세지 항목명,패턴,필수 입력항목 체크
Return Value  :
Usage in html : validPhoneNumber(obj,'아이디',true)
************************************************************/
function validPhoneNumber(obj,alertTitle,mandatory)
{
  var err = 0;
  obj = eval(obj);
  if(mandatory==null)mandatory=false;
  if(mandatory==true){
     if(validNull(obj,alertTitle))return true;
     if(validEmpty(obj,alertTitle))return true;
  }else{
	  if(validNull(obj,alertTitle))return false;
	  if(validEmpty(obj,alertTitle))return false;
  }
  chkNum = ''+obj.value;
  validIncludeOnly(obj,'-1234567890',alertTitle);

  var array_chkNumber = chkNum.split("-");
  var num = regExpExecute("/[0-9]/g", chkNum);

  if(num.length<9 || num.length>11){
     alertMessage(alertTitle);
     obj.focus();
     return true;
  }
  if(num.substr(0,2)=='02' && num.length>10){
     alertMessage(alertTitle);
     obj.focus();
     return true;
  }

  var count = 0;
  var num1 = new Array('02','031','032','033','041','042','043','051','052','053','054','055','061','062','063','064','070','010','011','016','017','018','019');
  for(i=0;i<num1.length;i++){
     if((array_chkNumber.length==1) && (num.substr(0,num1[i].length) == num1[i])||((array_chkNumber.length>1) && (array_chkNumber[0]+'-' == num1[i]+'-'))){
        count++;
        break;
     }
  }
  if(count == 0){
     alertMessage(alertTitle);
     obj.focus();
     return true;
  }

  if(array_chkNumber.length==1){

  }else if(array_chkNumber.length==2){
     if((array_chkNumber[0].length==2 || array_chkNumber[0].length==3)&& (array_chkNumber[1].length==4)){

     }else{
        alertMessage(alertTitle,limitNumber);
        obj.focus();
        return true;
     }
  }else if(array_chkNumber.length==3){
     if((array_chkNumber[0].length==2 || array_chkNumber[0].length==3)
        && (array_chkNumber[1].length==3 || array_chkNumber[1].length==4)
        && (array_chkNumber[2].length==4)){
    	 return false;
     }else{
        alertMessage(alertTitle);
        obj.focus();
        return true;
     }
  }else{
     alertMessage(alertTitle);
     obj.focus();
     return true;
  }
}
/************************************************************
Function Name : validJuminCheck
Description   : 주민 등록 번호 입력을 Check하는 함수
Parameter     : object, object, string, boolean
                해당 오브젝트(주민번호 앞자리),해당 오브젝트(주민번호 뒷자리),경고 메세지 항목명,필수 입력항목 체크
Return Value  :
Usage in html : <input type='text' id='firstString'>
                <input type='text' id='secondString'>
                <input type='button' onClick="validJuminCheck(firstString,secondString);" value='chkJuminCheck'>
************************************************************/
function validJuminCheck(objFirstJumin, objLastJumin, alertTitle ,mandatory)
{
  var juminNum = new Array(13);
  var err=0;

  var t1 = eval(objFirstJumin).value;
  if(mandatory==true){
     if(validNull(objFirstJumin,alertTitle))return true;
     if(validEmpty(objFirstJumin,alertTitle))return true;
  }
  var t2 = '';
  if(objLastJumin!=null && t1.length==6){
     if(mandatory==true){
        if(validNull(objLastJumin,alertTitle))return true;
        if(validEmpty(objLastJumin,alertTitle))return true;
     }
     t2 = eval(objLastJumin).value;
  }
  if(t1.length==6){
     if(t2.length!=7)err++;
  }else if(t1.length==13){
     if(t2.length!=0)err++;
  }else if(t1.length==14){
     if(t2.length!=0)err++;
  }
  var jNum=t1+t2;
  jNum = regExpExecute("/[0-9]/g", jNum);
  juminNum=jNum.split("");

  num=(juminNum[0]*2)+(juminNum[1]*3)+(juminNum[2]*4)+(juminNum[3]*5)+(juminNum[4]*6)+(juminNum[5]*7)+
    (juminNum[6]*8)+(juminNum[7]*9)+(juminNum[8]*2)+(juminNum[9]*3)+(juminNum[10]*4)+(juminNum[11]*5)
  num=11-(num%11);
  check = num%10;

  if(err==0 && check==juminNum[12]){
     return false;
  }

  alertMessage(alertTitle);
  objFirstJumin.focus();
  return true;
}
/************************************************************
Function Name : validByteLengthLimit
Description   : 문자열의 byte length를 얻는다.
Parameter     : string(문자열)
Return Value  : number(byte length)
Usage in html : validByteLength('abc')->3
                validByteLength('가나')->4
************************************************************/
function validByteLength(obj, alertTitle ,mandatory)
{
  obj=eval(obj);
  if(mandatory==null)mandatory=false;
  if(mandatory==true){
     if(validNull(obj,alertTitle))return -1;
     if(validEmpty(obj,alertTitle))return -1;
  }
  var str = obj.value;
  if (str == "") {
     return  0;
  }
  var len = 0;
  for (var i = 0; i < str.length; i++) {
     if (str.charCodeAt(i) > 128) {
        len++;
     }
     len++;
  }
  return  len;
}

/************************************************************
Function Name : fnCurrentDate
Description   : 시스템의 현재일자 리턴한다.
Parameter     : string
Return Value  :
Usage in html : fnCurrentDate('YM')->201603
                fnCurrentDate('YMDHMS')->20160511112930
************************************************************/
function fnCurrentDate(val){
    var now    = new Date();
    var jyear  = now.getFullYear();  // IE 9, Chrome, FireFox 등.
    var month  = now.getMonth() + 1;
    var dat    = now.getDate();
    var hour   = now.getHours();
    var min    = now.getMinutes();
    var sec    = now.getSeconds();
    var jmonth = month + "";
    var jdate  = dat  + "";
    var jhour  = hour + "";
    var jmin   = min + "";
    var jsec   = sec + "";
    var eDate  = "";

    if(jmonth.length < 2){
        jmonth = "0" + jmonth;
    }

    if(jdate.length < 2){
        jdate = "0" + jdate;
    }

    if(jhour.length < 2){
        jhour = "0" + jhour;
    }

    if(jmin.length < 2){
        jmin = "0" + jmin;
    }

    if(jsec.length < 2){
        jsec = "0" + jsec;
    }

    if(val == "Y") {
        eDate = jyear;

    } else if(val == "YM") {
        eDate = jyear + jmonth;

    } else if(val == "YMD") {
        eDate = jyear + jmonth + jdate;

    } else if(val == "YMDH") {
        eDate = jyear + jmonth + jdate + jhour;

    } else if(val == "YMDHM") {
        eDate = jyear+jmonth + jdate + jhour + jmin;

    } else if(val == "YMDHMS") {
        eDate = jyear+ jmonth + jdate + jhour + jmin + jsec ;
    }

    return eDate;
}

/************************************************************
Function Name : trim
Description   : String 좌우공백 제거
Parameter     : string
Return Value  : string
Usage in html : trim(' 홍길동')->홍길동
                trim('홍길동 ')->홍길동
************************************************************/
function trim(str) {
    return str.replace(/^\s+/, '').replace(/\s+$/, '');
}

/************************************************************
Function Name : fnGetByte
Description   : String byte 리턴
Parameter     : string
Return Value  : int
Usage in html : fnGetByte('홍길동')->
                fnGetByte('hong gil dong')->
************************************************************/
function fnGetByte(str) {
    var mByte = 0;

    for (var i=0; i<str.length; i++) {
        var ch1 = str.substring(i, i+1);
        var ch2 = str.substring(i, i+2);
        var en1 = escape(ch1);
        var en2 = escape(ch2);
        if (en2 == "%0D%0A") {
            i++;
            mByte++;

        } else {
            if (en1.length <= 4) {
                mByte++;
            } else {
                mByte += 2;
            }
        }
    }

    return mByte;
}

/************************************************************
Function Name : fnReplaceChar
Description   : String 문자 치환
Parameter     : string
Return Value  : string
Usage in html : fnReplaceChar('홍길동','홍','박')->박길동
************************************************************/
function fnReplaceChar(str, char1, char2) {
	var rtnString="";
	var temp = "";
	for( var j=0; j<=str.length-1; j++) {
		temp = str.charAt(j);
		if( temp == char1 ) {
			temp = char2;
		}

		rtnString = rtnString + temp;
		temp = "";
	}

	return rtnString;
}

/************************************************************
Function Name : fnCheckValueFormat
Description   : 입력값 통합 validate check
Parameter     : string
Return Value  : boolean
Usage in html : fnReplaceChar('홍길동','홍','박')->박길동
************************************************************/
function fnCheckValueFormat(kind, val, minNum, maxNum) {
	var engNumOnly 	= "/^[A-Za-z0-9]{"+minNum+","+maxNum+"}$/";	// 영문,숫자만
	var engOnly 	= "/^[A-Za-z]{"+minNum+","+maxNum+"}$/";	// 영문만
	var numOnly 	= "/^[0-9]{"+minNum+","+maxNum+"}$/";		// 숫자만

	var regExp = null;
	if(kind == 'engNumOnly') {
		regExp = eval(engNumOnly);
	}else if(kind == 'engOnly') {
		regExp = eval(engOnly);
	}else if(kind == 'numOnly') {
		regExp = eval(numOnly);
	}

	if(!regExp.test(val)){
	   return false;
    }

	return true;
}

/************************************************************
Function Name : fnAddToZero
Description   : 10이하 숫자에 0 추가
Parameter     : string
Return Value  : string
Usage in html : fnAddToZero('9')->09
************************************************************/
function fnAddToZero(val){
	if(parseInt(val,10)<10){
		return "0"+val;
	}else{
		return val;
	}
}

/************************************************************
Function Name : fnRemoveFormat
Description   : 문자제거 (날자, 금액에서 특정문자 게거)
Parameter     : string
Return Value  : string
Usage in html : fnRemoveFormat('2016-05-11')->20160511
				fnRemoveFormat('100,000,000')->100000000
************************************************************/
function fnRemoveFormat(val) {
	var tmp = "";
	var str = "";
	for(var i=0; i<val.length; i++) {
	  	str = val.substr(i,1);
	  	if(str!="." && str!="," && str!="-" && str!="/" && str!=":") {
	  		tmp += str;
		}
	}

	return tmp;
}

/************************************************************
Function Name : fnAddDate
Description   : 특정일에 일수를 더한 날자 리턴
Parameter     : string
Return Value  : string
Usage in html : fnRemoveFormat('2016-05-11')->20160511
				fnRemoveFormat('100,000,000')->100000000
************************************************************/
function fnAddDate(val, add) {
	var orgDt = fnRemoveFormat(val);
	var yy	 = orgDt.substring(0, 4);
	var mm 	 = fnAddToZero(parseFloat(orgDt.substring(4, 6))-1);
	var dd	 = orgDt.substring(6, 8);

	var newDt = new Date(yy, mm, dd);
	newDt.setDate(newDt.getDate() + parseFloat(add));

	var year = fnAddToZero(newDt.getFullYear());
	var mon = fnAddToZero(newDt.getMonth()+1);
	var day = fnAddToZero(newDt.getDate());

	return year + "" + mon + "" + day;
}

/*********************************************************************************************
Function Name : alertMessage
Description   : alert 호출
Parameter     : string
Return Value  :
Usage in html : alertMessage('영문만 입력 가능합니다.')
*********************************************************************************************/
function alertMessage(alertTitle){
	alert(alertTitle);
}

/**
 * ajaxJson json 형태의 aJax 통신
 * @param url : URL
 * @param data : 서버에 호출할 요소 데이타
 * @param callback : callback 함수
 * @param targetDiv : target div
 * @param json : json 데이타 여부
 * @param async : 동기화 여부
 */
function ajaxJson(url, data, callback, targetDiv, json, async){
	var tempData = "";
	var tempContentType = "";

	if(json){
		tempContentType =  "application/json;charset=UTF-8";
		tempData = JSON.stringify(data);
	}else{
		tempContentType =  "application/x-www-form-urlencoded; charset=UTF-8";
		tempData = data;
	}

	if(typeof async == "undefined"){
		async = true;
	}

	$.ajax({
		type : "POST",
		url : url,
		async : async,
		dataType : "json",
	    data : tempData,
	    contentType: tempContentType,
	    success : function(response, status, request) {
	    	callback(response);
	    },
	    beforeSend: function() {
	    },
	    complete: function() {
	    },
	    error : function(request, status, error) {
	        /*console.log("code : " + request.status + "\r\nmessage : " + request.responseJSON.exceptionMessage.message);*/
	    }
	});
}

// selectbox options create
function createOptions(jsonData){
	var temp;
	$.each(jsonData, function(index, object){
		target_obj = "#"+object.selectId;
		$(target_obj).html("");
		for(var i=0 ; i < object.codeList.length; i++){
	    	$(target_obj).append(new Option(object.codeList[i].value, object.codeList[i].key));
	    }
	});
}

/************************************************
 * 전체 datepicker 관련 date format 변경
 * @param add 구분자 표현 여부
 *************************************************/
function parseDateFormatAll(add)
{
	var isInput = false;
	var rtnStr = '';
	var format = "/";
	var language = $('#languageCode').val();
	if(language == 'uz' || language == 'ru'){
		format = ".";
	}

	$('.datepicker').each(function() {
		var str = $('#'+$(this).attr('id')).val();
		if(validateDateFormat(str,false,language))
		{
			var data = str.split(format);
			if(add){
				rtnStr = data[2] + format + data[1] + format + data[0];
			}else{
				rtnStr = data[2] + data[1] + data[0];
			}
		}else{
			isInput =true;
			return false;
		}
		$('#'+$(this).attr('id')).val(rtnStr);
	});

	$('.monthpicker').each(function(){
		var str = $('#'+$(this).attr('id')).val();
		if(validateDateFormat(str,false,language))
		{
			var data = str.split(format);
			if(add){
				rtnStr = data[1] + format + data[0];
			}else{
				rtnStr = data[1] + data[0];
			}
		}else{
			isInput =true;
			return false;
		}
		$('#'+$(this).attr('id')).val(rtnStr);
	});

	if(isInput){
		alert('Date format incorrect (DD/MM/YY)');
		return false;
	}
}

/************************************************
 * 특정값만 date format 변경
 * @param selector date format 변환할 datepicker id
 * @param add 구분자 표현 여부
 *************************************************/
/*function parseDateFormat(selector,add)
{
	var rtnStr = '';
	var str = $('#'+selector).val();
	var format = "/";
	var language = $('#languageCode').val();
	if(language == 'uz' || language == 'ru'){
		format = ".";
	}

	if(validateDateFormat(str,mandatory,language))
	{
		var data = str.split(format);
		if(add){
			if(str.length == 10){
				rtnStr = data[2] + format + data[1] + format + data[0];
			}else if(str.length == 7){
				rtnStr = data[1] + format + data[0];
			}
		}else{
			if(str.length == 10){
				rtnStr = data[2] + data[1] + data[0];
			}else if(str.length == 7){
				rtnStr = data[1] + data[0];
			}
		}
	}else{
		alert('Date format incorrect (DD/MM/YY)');
	}
	$('#'+selector).val(rtnStr);
}*/

/************************************************
 * 특정값만 date format 변경
 * @param selector date format 변환할 datepicker id
 * @param add 구분자 표현 여부
 * @param mandatory 필수여부
 *************************************************/
function parseDateFormat(selector,add,mandatory)
{
	var str = $('#'+selector).val();
	if(mandatory == undefined){
		mandatory = false;
	}

	var format = "/";
	var language = $('#languageCode').val();
	if(language == 'uz' || language == 'ru'){
		format = ".";
	}

	var rtnStr = '';
	if(validateDateFormat(str,mandatory,language))
	{
		var data = str.split(format);
		if(add){
			if(str.length == 10){
				rtnStr = data[2] + format + data[1] + format + data[0];
			}else if(str.length == 7){
				rtnStr = data[1] + format + data[0];
			}
		}else{
			if(str.length == 10){
				rtnStr = data[2] + data[1] + data[0];
			}else if(str.length == 7){
				rtnStr = data[1] + data[0];
			}
		}
	}else{
		alert('Date format incorrect (DD/MM/YY)');
		return false;
	}
	$('#'+selector).val(rtnStr);
}

/************************************************
 * validate date format(dd-mm-yyyy)
 * @param str validate 실제 값
 * @param mandatory 필수여부
 * @param language 언어(패턴값 변경을 위한)
 *************************************************/
function validateDateFormat(str,mandatory,language)
{
	var pattern = '';

	// 필수여부가 true인경우에만 체크
	if(mandatory)
	{
		if(str.length == 10){
			pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
			if(language == 'en'){
				pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
			}else if(language == 'uz'){
				pattern = /^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/;
			}else if(language == 'ru'){
				pattern = /^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/;
			}
		}else if(str.length == 7){
			pattern = /^([0-9]{2})\/([0-9]{4})$/;
			if(language == 'en'){
				pattern = /^([0-9]{2})\/([0-9]{4})$/;
			}else if(language == 'uz'){
				pattern = /^([0-9]{2})\.([0-9]{4})$/;
			}else if(language == 'ru'){
				pattern = /^([0-9]{2})\.([0-9]{4})$/;
			}
		}

		if (str == null || str == "" || !pattern.test(str)) {
	        return false;
	    }else {
	        return true;
	    }
	}else{
		return true;
	}
}

/************************************************
 * 언어별 Date형 포맷 변경
 * @param strDate 실제 값
 *************************************************/
function toFormattedDate(strDate)
{
	var language = $('#languageCode').val();
	if (strDate == null || strDate == "") {
			return "";
	}

	if(isNaN(strDate) ) {
		return strDate;
	}

	if(strDate.length == 8){
		if (language == 'ko'){
			return strDate.substring(0, 4) + "/ " + strDate.substring(4, 6)+ "/ " + strDate.substring(6, 8);
		} else if (language == 'en'){
			return strDate.substring(6, 8) + "/" + strDate.substring(4, 6)+ "/" + strDate.substring(0, 4);
		} else if (language == 'uz' || language == 'ru'){
			return strDate.substring(6, 8) + "." + strDate.substring(4, 6)+ "." + strDate.substring(0, 4);
		}
	}else if(strDate.length == 6){
		if (language == 'ko'){
			return strDate.substring(0, 4) + "/ " + strDate.substring(4, 6);
		} else if (language == 'en'){
			return strDate.substring(4, 6)+ "/" + strDate.substring(0, 4);
		} else if (language == 'uz' || language == 'ru'){
			return strDate.substring(4, 6)+ "." + strDate.substring(0, 4);
		}
	}else if(strDate.length == 4){
		if (language == 'ko'){
			return strDate.substring(0, 2) + "/ " + strDate.substring(2, 4);
		} else if (language == 'en'){
			return strDate.substring(2, 4)+ "/" + strDate.substring(0, 2);
		} else if (language == 'uz' || language == 'ru'){
			return strDate.substring(2, 4)+ "." + strDate.substring(0, 2);
		}
	}

	return strDate;
}

/************************************************
 * 언어별 Date형 포맷 역 변경
 * @param strDate 실제 값
 *************************************************/
function toFormattedReverseDate(strDate) 
{
	var language = $('#languageCode').val();
	if (strDate == null || strDate == "") {
		return "";
	}
	
	if(isNaN(strDate) ) {
		return strDate;
	}
	
	if(strDate.length != 8 && strDate.length != 6){
		return strDate;
	}
	
	if(strDate.length == 8){
		if (language == 'ko'){
			return strDate.substring(0, 4) + "/ " + strDate.substring(4, 6)+ "/ " + strDate.substring(6, 8);
		} else if (language == 'en'){
			return strDate.substring(4, 8) + "/" + strDate.substring(2, 4)+ "/" + strDate.substring(0, 2);
		} else if (language == 'uz' || language == 'ru'){
			return strDate.substring(4, 8) + "." + strDate.substring(2, 4)+ "." + strDate.substring(0, 2);
		}
	}else if(strDate.length == 6){
		if (language == 'ko'){
			return strDate.substring(0, 4) + "/ " + strDate.substring(4, 6);
		} else if (language == 'en'){
			return strDate.substring(2, 6)+ "/" + strDate.substring(0, 2);
		} else if (language == 'uz' || language == 'ru'){
			return strDate.substring(2, 6)+ "." + strDate.substring(0, 2);
		}
	}
	
	return strDate;
}


/************************************************
 * 전화번호 포맷 변경
 * @param tel 실제 값
 *************************************************/
function toFormattedTel(tel) {
	if (tel == null || tel == "") {
		return "";
	}
	if (tel.length == 11) {
		return tel.substring(0, 3) + "-" + tel.substring(3, 7)  + "-" + tel.substring(7);
	}
	else if (tel.length  == 10) {
		return tel.substring(0, 3) + "-" + tel.substring(3, 6) + "-" + tel.substring(6);
	}
	return tel;
}

/************************************************
 * 카드번호 포맷 변경
 * @param cardNo 실제 값
 *************************************************/
function toFormattedCardNo(cardNo) {
	if (cardNo == null || cardNo == "") {
		return "";
	}

	if(isNaN(cardNo) ) {
		return cardNo;
	}

	if (cardNo.length == 16) {
		return cardNo.substring(0, 4) + "-" + cardNo.substring(4, 8) + "-" + cardNo.substring(8, 12) + "-" + cardNo.substring(12, 16);
	} else {
		return cardNo;
	}
}

/************************************************
 * 콤보박스 생성
 ************************************************/
function callAajaxJson(selectBoxData){
	// selectBox 생성
	ajaxJson('/cm/configuration/code/createComboBox', selectBoxData, function(response){
		createOptions(response);
	}, null, true);
}

/************************************************
 * 콤보박스 기본명 설정
 ************************************************/
function setDefaultName(selectId,msg){
	target_obj = "#"+selectId;
	$(target_obj).html("");
    $(target_obj).append(new Option(msg,''));
}

/************************************************
 * 하위 콤보박스 초기화
 ************************************************/
function childInitialized(selectId, msg){
	$("#"+selectId).html("");
	setDefaultName(selectId,msg);
}


/************************************************
 * 날짜 valid
 ************************************************/
function dateValid(sVal, eVal){
	var cnt = 0;
	if(sVal == "" || eVal =="") cnt++;
	var tmpSDate = sVal.split(".");
	var tmpEDate = eVal.split(".");
	var sDate = tmpSDate[2]+tmpSDate[1]+tmpSDate[0];
	var eDate = tmpEDate[2]+tmpEDate[1]+tmpEDate[0];
	if(Number(sDate) - Number(eDate) > 0) cnt++;
	return cnt;
}

/************************************************
 * 전체치환
 ************************************************/
function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

/************************************************
 * datepicker 수기입력 validation 체크
 ************************************************/
function validInputDate(strDate){
	if (strDate == null || strDate == "") {
		return false;
	}
	if(strDate.length != 8 && strDate.length != 10){
		return false;
	}
	
	var convertDate = '';
	var language = $('#languageCode').val();
	if(strDate.length == 8){
		if (language == 'en'){
			convertDate = strDate.substring(0,2) + "/" + strDate.substring(2, 4)+ "/" + strDate.substring(4, 8);
		} else if (language == 'uz' || language == 'ru'){
			convertDate = strDate.substring(0, 2) + "." + strDate.substring(2, 4)+ "." + strDate.substring(4, 8);
		}
	}else{
		convertDate = strDate;
	}
	
	var regExpDate = '';
	if(language == 'en'){
		regExpDate = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
	}else{
		regExpDate = /^(0?[1-9]|1[012])[\.\-](0?[1-9]|[12][0-9]|3[01])[\.\-]\d{4}$/;
	}
	
	return regExpDate.test(convertDate);
}

/************************************************
 * datepicker 수기입력 validation 체크
 ************************************************/
function convertDate(strDate){
	var convertDate = '';
	var language = $('#languageCode').val();
	if(strDate.length == 8){
		if (language == 'en'){
			convertDate = strDate.substring(0,2) + "/" + strDate.substring(2, 4)+ "/" + strDate.substring(4, 8);
		} else if (language == 'uz' || language == 'ru'){
			convertDate = strDate.substring(0, 2) + "." + strDate.substring(2, 4)+ "." + strDate.substring(4, 8);
		}
	}else{
		convertDate = strDate;
	}
	
	return convertDate;
}

/************************************************
 * Number형 포맷 변경
 * 금액 숫자 
 * @param number 
 *************************************************/
function toFormattedNum(number) {
	
	if (number == null) {
		return 0;
	}
	
	if (typeof number == "string") {
		number = parseFloat(number);
	}
	
	if(number != 0 )
		number = number.toFixed(2);
	
//	var language = $('#languageCode').val();
	
	if (number == null || number == "") {
		return 0;
	}
	
	if(!$.isNumeric(number)) {
		return number;
	}
	
	if(isNaN(number) ) {
		return number;
	}
	
	var reg = /(^[+-]?\d+)(\d{3})/;
	number += '';  
	
	var sprt = '';
	
	sprt = ' ';
	
	while (reg.test(number))
		number = number.replace(reg, '$1' + sprt + '$2');
	
	return number;
	
}

/************************************************
 * Number형 포맷 변경
 * 사용량 및 숫자
 * @param number 
 *************************************************/
function toFormattedNum2(number) {
	
	if (number == null || number == "") {
		return 0;
	}
	
	if(!$.isNumeric(number)) {
		return number;
	}
	
	if(isNaN(number) ) {
		return number;
	}
	
	var reg = /(^[+-]?\d+)(\d{3})/;
	number += '';  
	
	var sprt = '';
	
	sprt = ' ';
	
	while (reg.test(number))
		number = number.replace(reg, '$1' + sprt + '$2');
	
	return number;
	
}