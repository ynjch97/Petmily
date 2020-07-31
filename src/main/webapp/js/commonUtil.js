/**
 * @author user 화면이동
 */
function movePage(sUrl, param) {
	$("#_soTempForm").remove();
	var sHtml = "";
	sHtml += "<form id=\"_soTempForm\" action=\"" + sUrl + "\" method=\"post\">";
	sHtml += "</form>";
	$("body").append(sHtml);
	if (param != null) {
		var keys = Object.keys(param);
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			$("#_soTempForm").append("<input type=\"hidden\" name=\"" + key + "\"/>");
			$("#_soTempForm input:last").val(param[key]);
		}
	}
	$("#_soTempForm").submit();
}

/**
 * @param str
 * @returns {Boolean} 문자열 공백 체크
 */
function isEmpty(str) {
	var bRet = false;
	if (str == null || str == "") {
		bRet = true;
	}
	return bRet;
}

/**
 * @param str
 * @returns 메일 형식 체크
 */
function isValidEmail(str) {
	return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(str);
}

/**
 * @param str
 * @returns 비밀번호 형식 체크
 */
function isValidPassword(str) {
	return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[`,!,”,￡,$,%,^,&,*,(,),_,+,\-,=,{,},\[,\],:,@,~,;,’,#,<,>,?,.,\/,\,|])[0-9a-zA-Z`,!,”,￡,$,%,^,&,*,(,),_,+,\-,=,{,},\[,\],:,@,~,;,’,#,<,>,?,.,\/,\,|]{8,16}$/.test(str);
}

/**
 * @param str
 * @returns 숫자 형식 체크
 */
function isValidNumber(str) {
	return /^[0-9]+$/.test(str);
}

/**
 * @param file_id
 *          파일 다운로드
 */
function downloadFile(file_id) {
	var param = new Object();
	param.file_id = file_id;
	movePage("/common/file/download", param);
}

function getFileExt(sStr) {
	if (isEmpty(sStr)) {
		return "";
	}
	return sStr.substring(sStr.lastIndexOf(".") + 1);
}

function getFileName(sStr, cChar) {
	if (isEmpty(sStr)) {
		return "";
	}
	if (cChar == null) {
		cChar = "\\";
	}
	return sStr.substring(sStr.lastIndexOf("\\") + 1);
}

function showLoading(sText) {
	var sHtml = "";
	sHtml += "<div class=\"loadingBox stySquare\">";
	sHtml += "	<div class=\"loadingBg\"></div>";
	sHtml += "	<div class=\"loadingImg\">";
	sHtml += "		<div class=\"img01\"></div>";
	sHtml += "		<div class=\"img02\"></div>";
	sHtml += "		<div class=\"img03\"></div>";
	sHtml += "		<div class=\"img04\"></div>";
	sHtml += "		<div class=\"img05\"></div>";
	sHtml += "		<div class=\"img06\"></div>";
	sHtml += "		<div class=\"img07\"></div>";
	sHtml += "	</div>";
	sHtml += "</div>";
	$("body").prepend(sHtml);
}

function hideLoading() {
	$(".loadingBox").remove();
}

function closeModalId(modalId) {
	$("#" + modalId).remove();
}

function expandAll(treeId) {
	$("#" + treeId).dynatree("getRoot").visit(function(node) {
		node.expand(true);
	});
}

function getNodeDepth(node) {
	var depth = 0;
	if (node.parent != null) {
		depth += getNodeDepth(node.parent) + 1;
	}
	return depth;
}

function expandUntil(treeId, depth) {
	$("#" + treeId).dynatree("getRoot").visit(function(node) {
		if (getNodeDepth(node) <= depth) {
			node.expand(true);
		} else {
			node.expand(false);
		}
	});
}

function collapseAll(treeId) {
	$("#" + treeId).dynatree("getRoot").visit(function(node) {
		node.expand(false);
	});
}

function fn_checkIsNull(formId) {
	var isChecked = true;
	$("#" + formId + " [xRequired=true]").each(function() {
		if (this.type == 'checkbox' || this.type == 'radio') {
			if ($("[name=" + this.name + "]:checked").val() == undefined || $("[name=" + this.name + "]:checked").val() == 'undefined' || $("[name=" + this.name + "]:checked").val() == '') {
				alert(this.title + "을/를 선택하세요.");
				this.focus();
				isChecked = false;
				return false;
			}
		} else if (this.type == 'select-one') {
			if (this.value == '') {
				alert(this.title + "을/를 선택하세요.");
				this.focus();
				isChecked = false;
				return false;
			}
		} else {
			if (this.value == '') {
				alert(this.title + "을/를 입력하세요.");
				this.focus();
				isChecked = false;
				return false;
			}
		}
	});
	return isChecked;
}

function openSelectCategory(selectedCategoryId) {
	var url = "/admin/product/productCategory/select.ajax";
	var param = new Object();
	param.callback = "onSelectCategory";
	if (!isEmpty(selectedCategoryId)) {
		param.selectedCategoryId = selectedCategoryId;
	}
	openModal(url, "selectCategoryModal", param,"600");
}

function onSelectCategory(arr) {
	console.log(arr);
}

function openSelectImage(selectedImageId) {
	var url = "/common/file/select.ajax";
	var param = new Object();
	param.callback = "onSelectImage";
	if (!isEmpty(selectedImageId)) {
		param.selectedImageId = selectedImageId;
	}
	openModal(url, "selectImageModal", param,'365');
}

function openImageList(selectedImageId) {
	if (!isEmpty(selectedImageId)) {
		var url = "/common/file/select.ajax";
		var param = new Object();
		param.selectedImageId = selectedImageId;
		openModal(url , 'selectImageModal',param,'365');
	}
}

function onSelectImage(arr) {
	console.log(arr);
}

function initImage(element) {
	var maxWidth = $(element).parent("div").width();
	var maxHeight = $(element).parent("div").height();
	var width = $(element).width();
	var height = $(element).height();
	if (width > height) {
		var rateHeight = Math.floor(height * maxWidth / width);
		$(element).css("width", maxWidth+"px");
		$(element).css("height", rateHeight+"px");
		$(element).css("margin-top", ((maxHeight-rateHeight)/2)+"px");
	} else {
		var rateWidth = Math.floor(width * maxHeight / height);
		$(element).css("height", maxHeight+"px");
		$(element).css("width", rateWidth+"px");
		$(element).css("margin-left", ((maxWidth-rateWidth)/2)+"px");
	}
	$(element).animate({opacity : 1}, 200);
}

function refreshTree(treeId) {
	$("#"+treeId).data("scrollTop", $(document).scrollTop());
	$("#tree").dynatree("getTree").reload();
}

function selectAllSet(id,message){
	 // 전체 선택여부
		$("#"+id+" option:eq(0)").before('<option value="" selected >'+message+'</option>');
}


function fnShowLoading() {
    var loadImage =  '<div class="loadingBox styCircle insidePage"><div class="loadingBg">'
                     +'</div><div class="loadingImg">'
                     +'<div class="img01"></div>'
                     +'<div class="img02"></div>'
                     +'<div class="img03"></div>'
                     +'<div class="img04"></div>'
                     +'<div class="img05"></div>'
                     +'<div class="img06"></div>'
                     +'<div class="img07"></div>'
                     +'</div></div>';
    $('.data').children().remove();
    $('.data').append(loadImage);   
}