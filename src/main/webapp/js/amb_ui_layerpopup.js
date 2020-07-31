//모달 레이어 팝업 띄우기// ajax방식으로 띄울 레이버 팝업 페이지(url방식 호출)다 불러옵니다
function openModal(url, popupId, param) {
	
	var pDivId = popupId; //띄울 팝업 아이디 생성
	var pDiv = '<div id="' + pDivId + '"></div>'; // ajax로 html을 넣을 div 생성
	var paramData = '';

	if(param == null){
		paramData = popupId;
	}else{
		paramData = param;
	}
	
	$.ajax({
		type : "post",
		url : url,
		data : paramData ,
		async : true,
		success : function(html) {
			var page = html;
			$('body').append(pDiv);
			$('#' + pDivId).html(page);
			$('#' + pDivId).find("#inc_ambcss").remove(); // 개별 레이어 팝업 페이지 작업시 디자인 확인을 위해 추가된 중복된 css 제거

			tableSortableNtheadFixed();  // table sortable, table thead fixed 레이어 팝업에 들어갔을때를 위해 amb_ui_common.js에 있는 table sortable, table thead fixed 스크립트 호출
			datePicker();           // datepicker가 들어갔을때를 위해 amb_datepicker.js에 있는 table sortable, table thead fixed 스크립트 호출
			inputSpinner();              // input에 number spinner가 존재할때를 위해
		},		
		complete : function(){//ajax로 html을 넣기가 완료되면			
			var ewidth = $('#' + pDivId + ' .amb_layerpopup').outerWidth(); //불러온 html의 outerWidth
			var eheight = $('#' + pDivId + ' .amb_layerpopup').outerHeight();//불러온 html의 outerHeight	

			// 여기 부터 jq ui를 이용한 dialog modal 형식의 레이어 팝업 띄우기
			$('#' + pDivId).dialog({
				modal: true,
				width: ewidth,
				height: eheight,
				resizable: false,
				open: function(){
					// 레이어 팝업 background overlay 클릭시 modal close 구현 
					$('.ui-widget-overlay').on('click',function(){
						$('#' + pDivId).dialog('close').remove();
						$(this).remove();
					});
				}
			});				
			
			$('#' + pDivId).parent('.ui-dialog').draggable({cancel:'',handle:'.amb_layerpopup .popupHeader'});// popmodal > draggable 핸들 포인드 -> popupHeader	
			
			/* 2016.08.18 추가 */
			$('.ui-dialog-titlebar').remove(); //remove default titlebar 
			
		}
	});
}

// 모달 레이어 팝업 삭제 닫기
function closeModal(obj){
	var divObj = null;
	var parents = $(obj).parents();
	
	for (var i=0;i<parents.length;i++) {
		var parent = parents[i];
		if ($(parent).hasClass("ui-dialog-content")) {
			divObj = parent;
			break;
		}
	}

	var thisPopId = divObj.id; 
	$('#' + thisPopId).parent('.ui-dialog').next('.ui-widget-overlay').remove();
	$('#' + thisPopId).dialog('close').remove();
}
