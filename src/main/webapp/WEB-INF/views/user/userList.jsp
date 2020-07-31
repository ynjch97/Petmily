<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page session="false" %>

<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>Petmily</title>
	
	<!-- 해당 사이트의 레이아웃 템플릿 결정 -->
	<link rel="stylesheet" href="/css/amb_admin_import.css">
	
	<script type="text/javascript" src="/js/jquery/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="/js/amb_ui_common.js"></script>
	<!-- jquery modal drag drop등 jquery 특화 ui용 -->
	<script type="text/javascript" src="/js/jquery/jquery-ui.js"></script>
	<script type="text/javascript" src="/js/sweetalert/sweetalert.min.js"></script>
	<script type="text/javascript" src="/js/commonUtil.js"></script>
	
	<script type="text/javascript">
		var today = new Date();
		var mm = today.getMonth()+1;
		if(mm<10) mm='0'+mm;
		var yyyy = today.getFullYear();
		var yyyyMm = yyyy+'-'+ mm;
		
		$(document).ready(function() {
			//searchList(1);
		});
		
		// 검색
		function searchList(page) {
			$("#page").val(page);
			var param = $('#userListSearchForm').serialize();
			$.ajax({
				url : "userListAction.ajax",
				type : "POST",
				data : param,
				dataType : "json",
				success : function(data) {
			      	console.log(data);
			      	$.each(data,function(index,item){
	                    /* var td = $("<td></td>");
	                    var img = $("#tb.img").attr("src",item.m_image);
	                    var lab = $("#tb_lab").text(item.m_name);

	                    $(img).appendTo($(tr));
	                    $(lab).appendTo($(tr));

	                    $(tr).appendTo($("#result_table"));
	                    if((index+1)%4 ==0){

	                    } */
			      		console.log(index);
			      		console.log(item);
			      		console.log(item[0].user_nm);
	                });
					//$("#userListDiv").html(data);
				},
				error : function(request, status, error) {
				 	var msg = "ERROR : " + request.status + "<br>"
			      	msg +=  + "내용 : " + request.responseText + "<br>" + error;
			      	console.log(msg);
					swal({
		    			title: '실패'
				    });
				}
			});
		}
	</script> 
</head>
<body>

	<form id="userListSearchForm" name="userListSearchForm">
		<input type="hidden" id="page" name="page">
		<div class="unitBox searchBox">
			<table class="amb_form_table">
				<colgroup>
					<col style="width: 20%;" />
					<col style="width: 80%;" />
				</colgroup>
				<tbody>
					<tr>
	                    <th>검색어 입력</th>
	                    <td>
	                        <input type="text" id="usr_nm" name="usr_nm" placeholder='검색어 입력' />
	                    </td>
                	</tr>
				</tbody>
			</table>
			<span class="searchFormBtn">
				<a href="javascript:searchList(1);" id="btnSearch">검색</a>
			</span>
		</div>
	</form>
		
	<table>
		<colgroup>
			<col style="width: 5%;" />
			<col style="width: 15%;" />
			<col style="width: 10%;" />
			<col style="width: 10%;" />
			<col style="width: 40%;" />
			<col style="width: 20%;" />
		</colgroup>
		<thead>
			<tr>
				<td>NUM</td>
				<td>ID</td>
				<td>이름</td>
				<td>닉네임</td>
				<td>주소</td>
				<td>가입일</td>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${user}" var="user" varStatus="status">
				<tr>
					<td>${status.index+1}</td>
					<td>${user.user_id}</td>
					<td>${user.user_nm}</td>
					<td>${user.user_nick}</td>
					<td>${user.user_full_addr}</td>
					<td>${user.join_dt}</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>

	<div id="userListDiv" class="nh_conBox"></div> 

</body>
</html>
