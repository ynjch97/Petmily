/******** viewport 분기 /********/
$(document).ready(function() {	
	(function(doc) {
        var viewport = document.getElementById('viewport');
        if ( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/Android/i) )  {
            viewport.setAttribute("content", "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no");
        } else if ( navigator.userAgent.match(/iPad/i) ) {
            viewport.setAttribute("content", "width=1024, user-scalable=yes");
        } else {
            viewport.setAttribute("content", "user-scalable=yes");
        } 
    }(document));
});

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
$(document).ready(function(){  
	
	headerScroller();
	snbShowHide();
	snbDepthShowHide();	
	tableSortableNtheadFixed()
	html5DateMonthTypeChange();
	
	inputSpinner();
	trActive();
	currentMenu();

	addFile();

	datepicker();

});

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/********  *******/
// 모바일/패드/desktop body class명 추가
$(document).ready(function(){
	if ( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i) )  {
		 $('body').removeClass('ipad, desktop');
		 $('body').addClass('phone');
		 // mobileHover();
	} else if (navigator.userAgent.match(/iPad/i)){
		 $('body').removeClass('phone, desktop');
		 $('body').addClass('ipad');
		// mobileHover();
	} else {
		$('body').removeClass('phone, ipad');
		$('body').addClass('desktop');	
	}

	minNav();
});


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
$( window ).resize(function() {
	minNav();
});

function minNav() {
	var wW = $( window ).innerWidth();
	if (wW < 1025){
		$('body').addClass('minNav');

		$('#nav_aside').removeClass('open');
		$('#nav_aside').addClass('close');

		$('#header .subMenuIcon').removeClass('close');
		$('#header .subMenuIcon').addClass('open');
	} else {
		$('body').removeClass('minNav');

		$('#nav_aside').addClass('open');
		$('#nav_aside').removeClass('close');

		$('#header .subMenuIcon').addClass('close');
		$('#header .subMenuIcon').removeClass('open');
	}
}



//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/******** Snb(Lnb) 펼침 숨김 *******/
function snbShowHide() {
	$(document).on("click", "#header .subMenuIcon", function(event){
		event.stopImmediatePropagation();
		snbAniAction();

		if ($('#nav_aside').hasClass('open')) {
			$(this).removeClass('open');
			$(this).addClass('close');
		} else if ($('#nav_aside').hasClass('close')) {
			$(this).removeClass('close');
			$(this).addClass('open');
		}
	});

	$(document).on("click", "#nav_aside.close .depth_1>li> a", function(event){
		event.stopImmediatePropagation();
		snbAniAction();

		if ($('#nav_aside').hasClass('open')) {
			$(this).removeClass('open');
			$(this).addClass('close');
		} else if ($('#nav_aside').hasClass('close')) {
			$(this).removeClass('close');
			$(this).addClass('open');
		}
	});
}


function snbAniAction() {	
	var lnb = $('#nav_aside');
	
	if (lnb.hasClass('open')) {
		lnb.removeClass('open');
		lnb.addClass('close');

		$('body').addClass('minNav');
		return false;
	} else if (lnb.hasClass('close')) {
		lnb.removeClass('close');
		lnb.addClass('open');

		$('body').removeClass('minNav');
		return false;
	}
}

/******** Snb(Lnb) Depth 펼침 숨김 *******/
function snbDepthShowHide() {
	$(document).on("click", ".depth_1>li>a", function(){	
		$('#nav_aside  .depth_1>li').removeClass('open');
		var _parent = $(this).parent('li');
		_parent.toggleClass('open');
		
	});
	$(document).on("click", ".depth_2>li>a", function(){	
		$('#nav_aside  .depth_2>li').removeClass('open');
		var _parent = $(this).parent('li');
		_parent.toggleClass('open');
		
	});

	$('ul.depth_1 li:has(ul)').addClass('subDepth'); //하위 메뉴가 있으면 class명 subDepth를 추가하여 아이콘 및 펼침 숨김 처리 
	$('ul.depth_1 li.active').addClass('open');
}

function snbClick() {	
	$(document).on("click", "#nav_aside li", function(){ 
		$(this).addClass('active');
	});
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/******** location의 텍스트를 이용한  gnb , lnb active 설정 ********/
// location의 텍스트와 GNB / LNB의 텍스틑  비교하여 필요한 GNB/LNB에 active 클래스를 추가하는 스크립트이므로
// 반드시 location의 텍스트와 GNB /LNB 의 텍스틑는 띄워쓰기까지 일치해야합니다.

// 해당 템플릿은 GNB가 없으므로 Gnb관련 항목은 삭제하고 curLocation 비교 구문 부분을 수정합니다.
function currentMenu() {
	var curLocation_1 = $(".location").find("a").eq(1).text().replace(/\s/g, ""),
		curLocation_2 = $(".location").find("a").eq(2).text().replace(/\s/g, ""),
		curLocation_3 = $(".location").find("a").eq(3).text().replace(/\s/g, ""),
		
		lnb = $(".depth_1"),
		lnbMenu_1 = lnb.find(">li"),
		lnbMenu_2 = lnb.find(">li>ul>li");
		lnbMenu_3 = lnb.find(">li>ul>li>ul>li");

	
	lnbMenu_1.each(function(){
		var _this = $(this),
			menuStr = _this.find(">a>span").text().replace(/\s/g, "");
		if(menuStr == curLocation_1){
			_this.addClass("active");
			if (_this.hasClass('subDepth')){
				_this.addClass("open");
			}
		}
	});

	lnbMenu_2.each(function(){
		var _this = $(this),
			menuStr = _this.find(">a>span").text().replace(/\s/g, "");
		if(menuStr == curLocation_2){
			_this.addClass("active");
			if (_this.hasClass('subDepth')){
				_this.addClass("open");
			}
		}
	});
	lnbMenu_3.each(function(){
		var _this = $(this),
			menuStr = _this.find(">a>span").text().replace(/\s/g, "");
		if(menuStr == curLocation_3){
			_this.addClass("active");
			if (_this.hasClass('subDepth')){
				_this.addClass("open");
			}
		}
	});
}


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/******** 스크롤시 header가 따라다니게 *******/
function headerScroller() {

	var currentScrollTop = 0;
	
	$(window).on('scroll', function() {        // 스크롤을 하는 경우에만 실행됨
		scrollController();
	});
	
	function scrollController() {                   // top 메뉴의 위치를 제어하는 함수
		currentHeadHeight = $('#header').height();
		currentScrollTop = $(window).scrollTop();
		if (currentScrollTop < currentHeadHeight) {
			$('#header').removeClass('fixed');
		} else if(currentScrollTop > currentHeadHeight) {
			$('#header').addClass('fixed');
		}
	}
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/******** table sortable,  table thead fixed 스크립트 *******/
function tableSortableNtheadFixed() {
	$('table.tableSortable, table.theadFix').each(function() {
		
		var curTable = $(this);
		var curTableHeight = curTable.attr('data-role-height');

		//table 자신을 감싸는 div tableWrapBox 생성 및 table 의  data-role-height를 가져와 div tableWrapBox에 height를 넣어줌
		function tableWrapBoxMake(){
			curTable.wrapAll('<div class="tableWrapBox" />');
			curTable.parent('.tableWrapBox').css({'height' : curTableHeight });
		}

		// 제이쿼리 플러그인 TableSorter2.0 (jquery.tablesorter.js, jquery.tablesorter.widgets.js)을 이용한 tablesorter 생성
		function tableSorterMake(){
			curTable.tablesorter({
				widthFixed : false,
				widgets: ['stickyHeaders'],
				widgetOptions: {
					stickyHeaders_attachTo : curTableSorterBox
				}
			});	
		}		

		//table 자신을 복사하여 tbody는 제거하고 table 자신 다음에 div tableTheadWarpBox를 생성하고 여기에 복사해 넣음
		function tableTheadFixed(){
			var curTableClone = curTable.clone();
			tableWrapBoxMake();

			curTable.after("<div class='tableTheadWarpBox'></div>");
			curTableClone.removeClass('theadFix').find('tbody, tfoot').remove();
			curTable.next('.tableTheadWarpBox').html(curTableClone);

			curTable.parent('.tableWrapBox').on('scroll', function() {
				var e =  $(this);
				var curHeight = e.scrollTop();
				e.find('.tableTheadWarpBox').css('top' , curHeight);
			});
		}
		
		// table이 sortable 과 thead Fixed가 함께 필요한 경우
		if (curTable.hasClass('theadFix') && curTable.hasClass('tableSortable') ){
			if (curTable.hasClass('theadFixEnd')){//중복으로 작업이 일어나지 않게 가상의 class theadFixEnd 존재 확인			
				tableSorterMake(); //tablesorter 생성
			} else {
				curTable.addClass('theadFixEnd');//중복으로 작업이 일어나지 않게 가상의 class theadFixEnd 추가
				tableWrapBoxMake();
				var curTableSorterBox = curTable.parent('.tableWrapBox');
				tableSorterMake(); //tablesorter 생성
			}

		// table이 sortable만 필요한 경우
		} else if (curTable.hasClass('tableSortable')) {
			curTable.tablesorter({
				widthFixed : false
			});		
		
		// table이 thead Fixed만 필요한 경우
		} else if (curTable.hasClass('theadFix')) {
			if (curTable.hasClass('theadFixEnd')){//중복으로 작업이 일어나지 않게 가상의 class theadFixEnd 존재 확인
			} else {
				curTable.addClass('theadFixEnd');//중복으로 작업이 일어나지 않게 가상의 class theadFixEnd 추가
				tableTheadFixed();
			}
		}
		
	});
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/******** input number Spinner *******/
function inputSpinner() {
	$('input.spinner').each(function() {
		
		var attr_disable = $(this).prop("disabled");
		var thisWidth = $(this).width();
        
		if ($(this).hasClass('noSpinner'))
		{
			$(this).removeClass('spinner');
			return false;
		} 
		else 
		{
			
			if (attr_disable == true) {
				$(this).spinner({ disabled: true });
			} else {
				$(this).spinner({
					change: function(event,ui){
						$(this).attr("value",$(this).val());
					}
				});
			}

			//만약 spinner로 만들어질 input에 인라인 스타일로 width가 있을시는 해당 width를 가져와서 spinner를 감싸는 span에 width를 넣어줌
			
			var spinnerInputStyle = $(this).prop('style');
			for (var i = 0; i < spinnerInputStyle.length; i++) {
				var style_name = spinnerInputStyle[i];
				var style_value = spinnerInputStyle[style_name];
			  
				if (style_name == 'width') {
					var thisSpinnerBox = $(this).parent('span.ui-spinner');
					thisSpinnerBox.css('width',style_value);
				}
			}
		}		
	});
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/******** 일반 table tr 클릭시 해당 tr부분을 활성화표시하는 스크립트 *******/
function trActive() {
	$(document).on("click", "table.amb_table.trActive tbody tr", function(){
		$(this).addClass('trActived').siblings().addClass('trNoActived').removeClass('trActived');
	});
	$(document).on("click", "table.amb_table.trActive tfoot", function(){
		$(this).parent('table.trActive').find('tr').removeClass('trActived , trNoActived');
	});
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/* 첨부파일 input value */
function addFile(){
	var fileTarget = $('.inputFileBox input[type=file].upload_hidden');

	fileTarget.on('change', function(){  // 값이 변경되면
		if(window.FileReader){  // modern browser
		var filename = $(this)[0].files[0].name;
		} 
		else {  // old IE
		var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
		}
		// 추출한 파일명 삽입
		$(this).siblings('.upload_name').val(filename);
	});
}
/* /첨부파일 input value */



// modal의 width가 window의 width보다 클때 모달에 강제로 추가한 width를 auto로 변경하는 스크립트
$(window).resize(function() {
	//popupScroll();//레이어팝업 스크롤 생기게 하는 스크립트

	if ($('.modal.in').length != 0) {
		if ($('.modal.in').length > 1)
		{
			$('.modal.in').each(function(){
				setModalMaxHeight(this);
				setModalMarginTop(this);
			});
		} else {
			setModalMaxHeight($('.modal.in'));
			setModalMarginTop($('.modal.in'));
		}
		
	}
});	


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// modal layerpopup window기준 max-height 재설정 // modal-body에 스크롤 생성
var setModalMaxHeight = function(element) {
	this.$element     = $(element);  
	this.$content     = this.$element.find('.modal-content');
	this.$dialog      = this.$element.find('.modal-dialog');

	var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
    var dialogMargin  = $(window).width() < 768 ? 20 : 60;
    var contentHeight = $(window).height() - (dialogMargin + borderWidth);
    var headerHeight  = this.$element.find('.modal_header').outerHeight() || 0;
    var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
    var maxHeight     = contentHeight - (headerHeight + footerHeight);

	this.$content.css({
		'overflow': 'hidden'
	});

	if(this.$dialog.hasClass('fullWidth')){
		this.$element
		.find('.modal_body').css({
			'max-height': maxHeight,
			'min-height': maxHeight,
			'overflow-y': 'auto'
		});
	} else {
		this.$element
		.find('.modal_body').css({
			'max-height': maxHeight,
			'overflow-y': 'auto'
		});
	} 
	
}

var setModalMarginTop = function(element) {
	this.$element     = $(element);  
	this.$dialog      = this.$element.find('.modal-dialog');
	var dialogHeight  = this.$dialog.height();

	//alert(dialogHeight);
	
	this.$dialog.css({
		'margin-top' : -dialogHeight/2
	});
}


var setModalPosition = function(){
	setModalMaxHeight($('.modalPopup'));
	setModalMarginTop($('.modalPopup'));

	setModalMaxHeight($('.modalPopup2'));
	setModalMarginTop($('.modalPopup2'));

}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//모달 레이어 팝업 띄우기// ajax방식으로 띄울 레이버 팝업 페이지(url방식 호출)다 불러옵니다
function openModal(url, popupId, param, width) {
	
	var pDivId = popupId; //띄울 팝업 아이디 생성
	if ($('.modalPopup').length != 0) {
		var pDiv = '<div id="' + pDivId + '" class="modalPopup2 modal"></div>'; // ajax로 html을 넣을 div 생성
	} else {
		var pDiv = '<div id="' + pDivId + '" class="modalPopup modal"></div>'; // ajax로 html을 넣을 div 생성
	}
	var paramData = '';

	var tWidth = width; //레이어 팝업의  width 강제설정
	
	if(width == ''){
		tWidth = '500'; //기본넓이
	}else if (width == 'full'){
		tWidth = '96%';
	}else{
		tWidth = width;
	}	


	if(param == null){
		paramData = popupId;
	}else{
		paramData = param;
	}
	
	$.ajax({
		//type : "get",
		type : "post",
		url : url,
		data : paramData ,
		async : true,
		success : function(html) {
			var page = html;
			$('body').append(pDiv);
			$('#' + pDivId).html(page);
		},		
		complete : function(){//ajax로 html을 넣기가 완료되면			
			$('#' + pDivId).removeClass('in').data('bs.modal', null);
			$('#' + pDivId)
			.modal({
				backdrop: 'static', 
				keyboard: false
			})
			.find('.modal-dialog')
			.css({
				'width': tWidth
			});
			$('#' + pDivId).next('.modal-backdrop').remove();

			
			////////////////			
			datepicker();
			inputSpinner();
			tableSortableNtheadFixed()
			html5DateMonthTypeChange();

			setModalPosition();
		}
	});
}

// 모달 레이어 팝업 삭제 닫기
function closeModal(obj){
	var divObj = null;
	var parents = $(obj).parents();
	
	for (var i=0;i<parents.length;i++) {
		var parent = parents[i];
		if ($(parent).hasClass("modal")) {
			divObj = parent;
			break;
		}
	}

	var thisPopId = divObj.id;
	if ($('#' + thisPopId).hasClass('modalPopup2')){
		$('#' + thisPopId).modal('toggle').remove();
		$('body').addClass('modal-open');
	} else {
		$('#' + thisPopId).modal('toggle').remove();
	}
	
}


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


/******** new 윈도우 팝업 스크립트 *******/
function openWindow(url, width, height, winPopupId) {
	var NewW = '';
	var NewH = '';
	var sw = screen.width;
	var sh = screen.height;	

	if(width == 'full'){
		var NewW = screen.availWidth;
		var left = 0;
	}else{
		NewW = width;
		var left = (sw/2)-(NewW/2);
		var top = (sh/2)-(NewH/2);
	}

	if(height == 'full'){
		var NewH = screen.availHeight;
		var top = 0;
	}else{
		NewH = height;
		var left = (sw/2)-(NewW/2);
		var top = (sh/2)-(NewH/2);
	}
	
	var windowName = winPopupId;
	var windowFeatures = 'height=' + NewH +
						 ',width=' + NewW +
						 ',top=' + top +
						 ',left=' + left +
						 ',status=no, toolbar=no, location=no, menubar=no, directoryies=no, resizable=yes, scrollbars=yes, titlebar=no';

	var popup = window.open(url, windowName, windowFeatures);

	$(popup).on('load', function() {
		// 속성 찾기
		var findClass = $(popup.document).find(".modal-dialog");

		// style 속성 지우기
		findClass.removeAttr('style');
		findClass.addClass("amb_winpopup");		
		findClass.find('h1.popupHeader > .close').remove();
	});
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/******** html5의 input type date및 month 속성을 jq datepicker로 바꾸기 워한 type속성 변경 스크립트 *******/
function html5DateMonthTypeChange() {
	$('input[type=date]').each(function() {
		$(this).attr('type','text').addClass('datepicker').attr("readonly",true);
	});
}

/******** dateMonthPicker 스크립트 *******/
function datepicker() {

	$('.datepicker').each(function() {
		if($(this).hasClass('months'))
		{
			$(this).datepicker({
				language : "ko",
				todayBtn: "linked",
				keyboardNavigation: false,
				calendarWeeks: false, //20170915 수정 
				autoclose: true,
				format: "yyyy-mm",
				viewMode: "months", 
				minViewMode: "months"
			});
			
		} 
		else if ($(this).hasClass('years')){
			$(this).datepicker({
				language : "ko",
				todayBtn: "linked",
				keyboardNavigation: false,
				calendarWeeks: false, //20170915 수정 
				autoclose: true,
				format: "yyyy",
				viewMode: "years", 
				minViewMode: "years"
			});
		}
		else
		{	
			$(this).datepicker({
				language : "ko",
				todayBtn: "linked",
				keyboardNavigation: false,
				calendarWeeks: false, //20170915 수정 
				autoclose: true,
				format: "yyyy-mm-dd"
			});
		}
	
	});

	$('.datepickerRange').each(function(index, element) {	
		

		$(this).find('input.datepicker:eq(0)').addClass("from"+index);
		    
		/* Find 'To' */ 
		$(this).find('input.datepicker:eq(1)').addClass("to"+index);			
		
		var startDate = $(".from"+index).datepicker("getDate");
		var FromEndDate = $(".to"+index).datepicker("getDate");
		
		
		$(".from"+index).datepicker(
			'setEndDate', FromEndDate
		).on('changeDate', function(selected){		        
			var startDate = $(this).datepicker("getDate");
			$('.to'+index).datepicker("setStartDate",startDate);
		});

		$('.to'+index).datepicker(
			'setStartDate', startDate
		).on('changeDate', function(selected){
			var FromEndDate = $(this).datepicker("getDate");
			$('.from'+index).datepicker('setEndDate', FromEndDate);
		});  			
	});

	
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// .lineTable 아래의 table 에 tr에 td가 2개 이상인경우 tr로 감싸는 스크립트 // 모바일일때의 크기 때문
function mobileTrNew() {
	var wW = $(window).width();
	//alert(wW);
	if (wW < 768)  {
		var targetTable = $('.unitBox.searchBox table.amb_form_table');
		var targetTr = targetTable.find('tbody tr');
		
		targetTr.each(function(){
			var tds = $(this).children('th').length;
			
			if (tds == 2){
				var _this = $(this);		

				var _firstTd = _this.children('td').first();
				var _tCopy = _firstTd.nextAll().clone();

				//var _nweTr = _tCopy.wrapAll('<tr />').clone();
				var _row = $("<tr class='new'></tr>");
				_row.insertAfter(_this);
				_this.next('tr.new').append(_tCopy);
				_firstTd.nextAll().remove();
				
				//$(_firstTh + _firstTd).wrapAll('<div />');
			}
		});

		targetTable.each(function(){
			
			$(this).addClass('newTable');
			//$(this).find('td[colspan=4]').attr('colspan','2');
			$(this).find('td[colspan=3]').attr('colspan','');
			$(this).find('colgroup').remove();
			$(this).find('tbody tr > th:first-child').css('width','20%');
			/*
			$(this).find('td').removeAttr('colspan');
			$(this).find('colgroup > col').removeAttr('width');
			$(this).find('colgroup > col:eq(2), colgroup > col:eq(3)').remove();
			$(this).find('colgroup > col:eq(0)').css('width','20%');
			*/
		});

		//동적 생성 datePicker 재적용
		//targetTable.find("input.datepicker").removeClass('hasDatepicker').datepicker();
	}

	if (wW > 768)  {
		var targetTable = $('.unitBox.searchBox table.amb_form_table.newTable');
		var targetTr = targetTable.find('tbody tr.new');
		
		targetTr.each(function(){
			var tds = $(this).children('th').length;

			var _this = $(this);
			var _tCopy = _this.children('*').clone();
			
			_this.prev('tr').addClass('old').append(_tCopy);
			$(this).remove();

		});
		targetTable.find('th').css('width','12%');
		targetTable.removeClass('newTable');

	}

}

var swalConfirm = function(title, type, callback){
	   swal({
	        title: title,
	        type: type,
	        showCancelButton: true,
	        closeOnConfirm: false
	    }, function (e) {
	       if(e){//true 일 경우
	          callback();
	       }
	    });
	};
