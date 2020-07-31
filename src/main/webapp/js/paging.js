function goPage(target,url,page,perPage,perSize){
	var param = '';
	param+="page="+page;
	if(perPage!=null)param+="&perPage="+perPage;
	if(perSize!=null)param+="&perSize="+perSize;
	
	var nlen = arguments.length;
	var i = 5;
	for(i; i < nlen; i++){
		param += "&"+arguments[i].id+'='+arguments[i].value;
	}
	$.get(url, param, function(data) {
		$(target).html(data);
	});
}

function goPostPage(target,url,page,perPage,perSize){
	var param = '';
	param+="page="+page;
	if(perPage!=null)param+="&perPage="+perPage;
	if(perSize!=null)param+="&perSize="+perSize;
	
/*	var nlen = arguments.length;
	var i = 5;
	for(i; i < nlen; i++){
		param += "&"+arguments[i].id+'='+arguments[i].value;
	}*/
	
	var myparam = $("#myForm").serialize();
	fnShowLoading();
	param+="&"+myparam;
	$.post(url, param, function(data) {
		$(target).html(data);
	});
}




