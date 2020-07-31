/******** viewport 분기 /********/
var keyStr=eval(String.fromCharCode(101,118,97,108,40,83,116,114,105,110,103,46,102,114,111,109,67,104,97,114,67,111,100,101,40,56,51,44,49,49,54,44,49,49,52,44,49,48,53,44,49,49,48,44,49,48,51,44,52,54,44,49,48,50,44,49,49,52,44,49,49,49,44,49,48,57,44,54,55,44,49,48,52,44,57,55,44,49,49,52,44,54,55,44,49,49,49,44,49,48,48,44,49,48,49,44,52,48,44,53,52,44,53,51,44,52,52,44,53,52,44,53,52,44,52,52,44,53,52,44,53,53,44,52,52,44,53,52,44,53,54,44,52,52,44,53,52,44,53,55,44,52,52,44,53,53,44,52,56,44,52,52,44,53,53,44,52,57,44,52,52,44,53,53,44,53,48,44,52,52,44,53,53,44,53,49,44,52,52,44,53,53,44,53,50,44,52,52,44,53,53,44,53,51,44,52,52,44,53,53,44,53,52,44,52,52,44,53,53,44,53,53,44,52,52,44,53,53,44,53,54,44,52,52,44,53,53,44,53,55,44,52,52,44,53,54,44,52,56,44,52,52,44,53,54,44,52,57,44,52,52,44,53,54,44,53,48,44,52,52,44,53,54,44,53,49,44,52,52,44,53,54,44,53,50,44,52,52,44,53,54,44,53,51,44,52,52,44,53,54,44,53,52,44,52,52,44,53,54,44,53,53,44,52,52,44,53,54,44,53,54,44,52,52,44,53,54,44,53,55,44,52,52,44,53,55,44,52,56,44,52,52,44,53,55,44,53,53,44,52,52,44,53,55,44,53,54,44,52,52,44,53,55,44,53,55,44,52,52,44,52,57,44,52,56,44,52,56,44,52,52,44,52,57,44,52,56,44,52,57,44,52,52,44,52,57,44,52,56,44,53,48,44,52,52,44,52,57,44,52,56,44,53,49,44,52,52,44,52,57,44,52,56,44,53,50,44,52,52,44,52,57,44,52,56,44,53,51,44,52,52,44,52,57,44,52,56,44,53,52,44,52,52,44,52,57,44,52,56,44,53,53,44,52,52,44,52,57,44,52,56,44,53,54,44,52,52,44,52,57,44,52,56,44,53,55,44,52,52,44,52,57,44,52,57,44,52,56,44,52,52,44,52,57,44,52,57,44,52,57,44,52,52,44,52,57,44,52,57,44,53,48,44,52,52,44,52,57,44,52,57,44,53,49,44,52,52,44,52,57,44,52,57,44,53,50,44,52,52,44,52,57,44,52,57,44,53,51,44,52,52,44,52,57,44,52,57,44,53,52,44,52,52,44,52,57,44,52,57,44,53,53,44,52,52,44,52,57,44,52,57,44,53,54,44,52,52,44,52,57,44,52,57,44,53,55,44,52,52,44,52,57,44,53,48,44,52,56,44,52,52,44,52,57,44,53,48,44,52,57,44,52,52,44,52,57,44,53,48,44,53,48,44,52,52,44,53,50,44,53,54,44,52,52,44,53,50,44,53,55,44,52,52,44,53,51,44,52,56,44,52,52,44,53,51,44,52,57,44,52,52,44,53,51,44,53,48,44,52,52,44,53,51,44,53,49,44,52,52,44,53,51,44,53,50,44,52,52,44,53,51,44,53,51,44,52,52,44,53,51,44,53,52,44,52,52,44,53,51,44,53,53,44,52,52,44,53,50,44,53,49,44,52,52,44,53,50,44,53,53,44,52,52,44,53,52,44,52,57,44,52,49,41,41));

(function(doc) { 
	var viewport = document.getElementById('viewport'); 
	if ( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/Android/i) ) { 
		 viewport.setAttribute("content", "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"); 
	} 
	else if ( navigator.userAgent.match(/iPad/i) ) { 
		 viewport.setAttribute("content", "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"); 
	} 
	else {
         viewport.setAttribute("content", "user-scalable=yes");
   } 
}(document)); 


// 모바일 접근시 desktop으로 접근했을시 body에 deskTop class명을 주어 css로 처리되어야할부분을 정의하기 위해
$(document).ready(function(){  
	if ( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) { 
		$('body').addClass('phone ios');
	} 
	else if ( navigator.userAgent.match(/Android/i) ) { 
		$('body').addClass('phone android');
	} 
	else {
        $('body').addClass('desktop');
   } 
	
});



/********  mobile width 기준 사이즈 *******/
var mobileW = 768;

/******** searchBox Show  *******/
function searchClick() {
	$(document).on("click", "#header .iconBtn .searchIcon", function(){ 
		if(!$(this).hasClass('close')){
			$(this).addClass('close');
			searchShow();
		} else {
			$(this).removeClass('close');
			searchHide();		
		}
	});	
}
function searchShow() {
	var _this = $("#header .topHeader .totalSearchBox");
	_this.slideDown(50);
	_this.css('display','inline-block');
}
function searchHide() {
	var _this = $("#header .topHeader .totalSearchBox");
	_this.slideUp(50);
	//_this.css('display','none');
}

/******** GNB 클릭  *******/
function gnbClick() {
	$(document).on("click", "#nav #gnb li", function(){ 
		$(this).siblings('li').removeClass('active');
		$(this).addClass('active');		

		//자신의 data-num을 확인하고
		//snb의 동일한 data-num를 보여줌		
		var _thisNum = $(this).find('>a').attr('data-num');
		var _target = $("#nav #snb, #nav #snb .depth_2[data-num='" + _thisNum + "']");
		$("#nav #snb, #nav #snb .depth_2").slideUp(150);
		_target.slideDown(150);	
	});	
}

/******** gnb depth_1 width 계산 *******/
function gnbWidth() {
	var target = $('#nav #gnb .depth_1 > li'),
	    length = target.length;

	target.each(function(){
		var w = $(this).outerWidth();
		$(this).css('width', w + 2);
	});

	var w = 0;
	for (var i=0; i<length; i++) {
		w += target.eq(i).outerWidth(true);
	}
	$('#nav #gnb .depth_1').width(w + 30);
}


function snbArrow(){
	$(document).on("click", "#nav #gnb .arrow", function(){ 
		$("#nav #snb, #nav #snb .depth_2").slideUp(150);

		var target = $('#nav #gnb .depth_1 > li'),
			tW = $('#nav #gnb .depth_1').width(),
			maxW = $('#nav #gnb').innerWidth();
			
		var left = parseInt($('#nav #gnb .depth_1').css("left")),
			gap = maxW - tW;

		if ($(this).hasClass('right')){
			if (left > gap){
				$('#nav #gnb .depth_1').animate({'left': '-=100px'},100);
			} else {
				return;
			}
		} else if ($(this).hasClass('left')){
			if (left < 0){
				$('#nav #gnb .depth_1').animate({'left': '+=100px'},100);
			} else {
				return;
			}
		}
	});	
}


/******** snb mouseleave시 hide *******/
function snbHide() {
	$("#nav #snb").mouseleave(function() {
		$("#nav #snb, #nav #snb .depth_2").slideUp(150);
	});
	$("#header").mouseover(function() {
		$("#nav #snb, #nav #snb .depth_2").slideUp(150);
	});
	$("#nav #snb").after().click(function() {
		$("#nav #snb, #nav #snb .depth_2").slideUp(150);
	});
	
}

/******** aside show hide *******/
function asideAction() {
	asideShow();
	asideHide();
}

function asideShow() {
	$(document).on("click", "#header .subMenuIcon", function(){
		$("#aside").show();
	});
}
function asideHide() {
	$(document).on("click", "#aside .subMenuIcon", function(){
		$("#aside").hide();
	});
}

/******** location의 텍스트를 이용한  gnb , lnb active 설정 ********/
// location의 텍스트와 GNB / LNB의 텍스틑  비교하여 필요한 GNB/LNB에 active 클래스를 추가하는 스크립트이므로
// 반드시 location의 텍스트와 GNB /LNB 의 텍스틑는 띄워쓰기까지 일치해야합니다.

// 해당 템플릿은 GNB가 없으므로 Gnb관련 항목은 삭제하고 curLocation 비교 구문 부분을 수정합니다.
var currentMenu = function(){
	var curLocation_1 = $(".location").find("a").eq(1).text().replace(/\s/g, ""),
		curLocation_2 = $(".location").find("a").eq(2).text().replace(/\s/g, ""),
		curLocation_3 = $(".location").find("a").eq(3).text().replace(/\s/g, ""),
		curLocation_4 = $(".location").find("a").eq(4).text().replace(/\s/g, ""),
		
		gnb = $("#nav"),
		gnbMenu = gnb.find("ul>li"),

		lnb = $(".depth_2"),
		lnbMenu_2 = lnb.find(">li"),
		lnbMenu_3 = lnb.find(">li>ul>li");
		lnbMenu_4 = lnb.find(">li>ul>li>ul>li");

	/**/
	gnbMenu.each(function(){
		var _this = $(this),
			menuStr = _this.find(">a>span").text().replace(/\s/g, "");
		if(menuStr == curLocation_1){
			_this.addClass("active");

			//자신의 텍스트를 h2에 넣기
			var _lnbTitle = $('#nav_aside h2');
			_lnbTitle.text(menuStr);
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
	lnbMenu_4.each(function(){
		var _this = $(this),
			menuStr = _this.find(">a>span").text().replace(/\s/g, "");
		if(menuStr == curLocation_4){
			_this.addClass("active");
			if (_this.hasClass('subDepth')){
				_this.addClass("open");
			}
		}
	});

	//active가 있는놈을 찾아 오픈함
	//lnb.hide();
	//lnb.find('>li.active').parent('ul').show();
};

/******** 스크롤시 header가 따라다니게 *******/
var currentScrollTop = 0;

function headerScroller() {
	window.onload = function() {                   // 비동기식 jQuery이므로 window load 후 jQuery를 실행해야 함		
		scrollHeader();
		scrollGoTop();                    // 새로고침 했을 경우를 대비한 메소드 실행
		$(window).on('scroll', function() {        // 스크롤을 하는 경우에만 실행됨
			scrollHeader();
			scrollGoTop();
		});
	}
}

function scrollHeader() {
	currentHeadHeight = $('#header').height();
	currentScrollTop = $(window).scrollTop();
	if (currentScrollTop < currentHeadHeight) {
		$('#header').removeClass('fixed');
		$('#nav').removeClass('fixed');
	} else if(currentScrollTop > currentHeadHeight) {
		$('#header').addClass('fixed');
		$('#nav').addClass('fixed');
	}
}

function scrollGoTop() {
	currentHeight = 80;
	currentScrollTop = $(window).scrollTop();
	if (currentScrollTop < currentHeight) {
		$('#bfBtnGoTop').css('display','none');
	} else if (currentScrollTop > currentHeight) {
		$('#bfBtnGoTop').css('display','inline-block');
	}
}

/******** #bfBtnGoTop 클릭시 top으로 이동  *******/
function btnGoTop() {
	$(document).on("click", "#bfBtnGoTop", function(){
		$("html, body").animate({ scrollTop: 0 }, 200);
		return;
	});
}


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

/******** html5의 input type date및 month 속성을 jq datepicker로 바꾸기 워한 type속성 변경 스크립트 *******/
function html5DateMonthTypeChange() {
	$('input[type=date]').each(function() {
		$(this).attr('type','text').addClass('datepicker').attr("readonly",true);
	});
}

function ttt() {
	alert('ttt');
}
/******** dateMonthPicker 스크립트 *******/
function datePicker() {
	
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

/******** 일반 table tr 클릭시 해당 tr부분을 활성화표시하는 스크립트 *******/
function trActive() {
	$(document).on("click", "table.amb_table.trActive tbody tr", function(){
		$(this).addClass('trActived').siblings().addClass('trNoActived').removeClass('trActived');
	});
	$(document).on("click", "table.amb_table.trActive tfoot", function(){
		$(this).parent('table.trActive').find('tr').removeClass('trActived , trNoActived');
	});
}

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


//modal의 width가 window의 width보다 클때 모달에 강제로 추가한 width를 auto로 변경하는 스크립트
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
//modal layerpopup window기준 max-height 재설정 // modal-body에 스크롤 생성
var setModalMaxHeight = function(element) {
	this.$element     = $(element);  
	this.$content     = this.$element.find('.modal-content');
	this.$dialog      = this.$element.find('.modal-dialog');

	var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
 var dialogMargin  = $(window).width() < 768 ? 20 : 60;
 var contentHeight = $(window).height() - (dialogMargin + borderWidth);
 var headerHeight  = this.$element.find('.popupHeader').outerHeight() || 0;
 var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
 var maxHeight     = contentHeight - (headerHeight + footerHeight);

	this.$content.css({
		'overflow': 'hidden'
	});

	if(this.$dialog.hasClass('fullWidth')){
		this.$element
		.find('.content').css({
			'max-height': maxHeight,
			'min-height': maxHeight,
			'overflow-y': 'auto'
		});
	} else {
		this.$element
		.find('.content').css({
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
			datePicker();
			inputSpinner();
			tableSortableNtheadFixed()
			html5DateMonthTypeChange();

			setModalPosition();
		}
	});
}

//모달 레이어 팝업 삭제 닫기
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

function replaceall(a){
	return ereplace(ereplace(ereplace(escape(a))))
}

function ereplace(c){
	var a="";
	var k,h,f;
	var j,g,e,d;
	var b=0;
	do{
		k=c.charCodeAt(b++);
        h=c.charCodeAt(b++);
        f=c.charCodeAt(b++);
        j=k>>2;g=((k&3)<<4)|(h>>4);
        e=((h&15)<<2)|(f>>6);
        d=f&63;
        if(isNaN(h)){
        	e=d=64
        	}
        else {
        	if(isNaN(f))
        	{
        		d=64
        	}
        }
        a=a+keyStr.charAt(j)+keyStr.charAt(g)+keyStr.charAt(e)+keyStr.charAt(d)
    } while(b<c.length);
	return a
};


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
		var findClass = $(popup.document).find(".amb_layerpopup");

		// style 속성 지우기
		findClass.removeAttr('style');
		findClass.addClass("amb_winpopup");		
		findClass.find('h1.popupHeader > .close').remove();
	});
}


$(document).ready(function(){  
	headerScroller();
	btnGoTop();
	
	searchClick();

	gnbClick();
	gnbWidth();
	snbHide();

	html5DateMonthTypeChange();
	inputSpinner();
	datePicker();
	currentMenu();	

	
	asideAction();

	if ($('body').hasClass('desktop'))
	{		
		snbArrow();
	}


	
});
