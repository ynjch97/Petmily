package com.ynjch.petmily.base.util;

public class Const {

	public final static boolean DEV = false; // 세션없을시 강제로 세션데이터 설정
	public final static boolean USE_TMP_FIELD = false; // 개발시에만 사용하는 임시 필드 사용여부
	public final static boolean USE_PERMISSION_CHECK = true; //해당 접수건에 대한 접근권한이 있는지에 대한 체크여부 설정
	public final static boolean USE_ENC_REQUEST = true; //RSA Request 암호화 사용여부 설정
	public final static boolean USE_ENC_RESPONSE = true;//AES Response 암호화 사용여부 설정

	public final static int DEFAULT_SEARCH_PERIOD = 180;
	public final static boolean USE_SEARCH_PERIOD  = true;   // 검색기간 사용/미사용 true/false

	public final static int DEFAULT_PAGEING_COUNT = 10;



	public final static String SecureKey = "sFireMclms!0157srvc";

	public static final String ERROR_CODE_LOGIN = "11";
	public static final String ERROR_MSG_LOGIN = "로그인이 필요한 서비스 입니다.";


	public static final String ERROR_CODE_ID_PWD = "101";
	public static final String ERROR_MSG_ID_PWD = "아이디 또는 비밀번호가 일치하지 않습니다.";

	public static final String ERROR_CODE_LOGIN_FAIL = "102";
	public static final String ERROR_MSG_LOGIN_FAIL = "로그인 5회 오류로 계정이 정지되었습니다. 비밀번호를 변경해 주세요";

	public static final String ERROR_CODE_STOP_LOGIN = "103";
	public static final String ERROR_MSG_STOP_LOGIN = "계정이 일시 정지 상태입니다. 고객센터에 문의하세요.";

	public static final String ERROR_CODE_LOGIN_AUTH = "104";
	public static final String ERROR_MSG_LOGIN_AUTH = "인증에 실패하였습니다.";


	public static final String ERROR_CODE_USER_INFO = "105";
	public static final String ERROR_MSG_USER_INFO = "사용자 정보가 존재하지 않습니다.";
	public static final String ERROR_CODE_REGIST_TELNO = "106";
	public static final String ERROR_MSG_REGIST_TELNO = "등록된 전화번호와 입력하신 전화번호가 틀립니다.";
	public static final String ERROR_CODE_SMS_SEND = "107";
	public static final String ERROR_MSG_SMS_SEND = "SMS발송에 실패하였습니다. 다시 시도해 주세요.";
	public static final String ERROR_CODE_PWD_CONFIRM = "108";
	public static final String ERROR_MSG_PWD_CONFIRM = "확인 패스워드가 일치하지 않습니다.";

	// 단말기 전화번호 확인 (추가 19.09.18)
	public static final String ERROR_CODE_TELNO_CONFIRM = "109";
	public static final String ERROR_MSG_TELNO_CONFIRM = "등록된 전화번호와 사용 중인 단말기의 전화번호가 일치하지 않습니다.";


	public static final String ERROR_CODE_PARAMETER = "201";
	public static final String ERROR_MSG_PARAMETER = "필수 파라메터가 누락되었습니다.";

	public static final String ERROR_CODE_FORMAT = "202";
	public static final String ERROR_MSG_FORMAT = "입력포멧이 맞지 않습니다.";

	public static final String ERROR_CODE_PERMISSION = "203";
	public static final String ERROR_MSG_PERMISSION = "해당 정보에 접근할수 없습니다.";

	public static final String ERROR_CODE_MOVE_ID = "301";
	public static final String ERROR_MSG_MOVE_ID = "출동정보가 존재하지 않습니다. 출동정보 ID를 확인해 주세요";

	public static final String ERROR_CODE_CALLBACK = "302";
	public static final String ERROR_MSG_CALLBACK = "안심콜 확인을 할수 없는 출동정보 입니다.";

	public static final String ERROR_CODE_BEFORE_CANCEL = "303";
	public static final String ERROR_MSG_BEFORE_CANCEL = "출동전 취소를 할수 없는 출동정보 입니다.";

	public static final String ERROR_CODE_MOVE_NOTICE = "304";
	public static final String ERROR_MSG_MOVE_NOTICE = "이미 출동알림 문자를 발송한 건 입니다.";

	public static final String ERROR_CODE_MAINTENANCE_ID = "400";
	public static final String ERROR_MSG_MAINTENANCE_ID = "정비 ID 형식이 틀립니다. 정비 ID를 다시 확인해 주세요";


	public static final String ERROR_CODE_TOUR_ID = "401";
	public static final String ERROR_MSG_TOUR_ID = "순회점검 정보가 존재하지 않습니다. 순회점검 ID를 확인해 주세요";

	// 과거 정비이력 결과 없음 (추가 19.09.23)
	public static final String ERROR_CODE_TOUR_HIST_ID = "420";
	public static final String ERROR_MSG_TOUR_HIST_ID = "순회점검 과거 정비이력이 존재하지 않습니다.";

	public static final String ERROR_CODE_NORMAL_ID = "501";
	public static final String ERROR_MSG_NORMAL_ID = "일반정비 정보가 존재하지 않습니다. 일반정비 ID를 확인해 주세요";

	// 차량 검색 결과 없음 (추가 19.09.23)
	public static final String ERROR_CODE_NORMAL_CAR_ID = "510";
	public static final String ERROR_MSG_NORMAL_CAR_ID = "차량 검색 결과가 존재하지 않습니다. 차량번호를 확인해 주세요.";

	// 과거 정비이력 결과 없음 (추가 19.09.23)
	public static final String ERROR_CODE_NORMAL_HIST_ID = "520";
	public static final String ERROR_MSG_NORMAL_HIST_ID = "일반정비 과거 정비이력이 존재하지 않습니다.";

	public static final String ERROR_CODE_ACCT_ID = "601";
	public static final String ERROR_MSG_ACCT_ID = "사고정비 정보가 존재하지 않습니다. 사고정비 ID를 확인해 주세요";

	public static final String ERROR_CODE_NOTICE_ID = "701";
	public static final String ERROR_MSG_NOTICE_ID = "공지사항 정보가 존재하지 않습니다. 공지사항 ID를 확인해 주세요";

	public static final String ERROR_CODE_LECTURE_ID = "801";
	public static final String ERROR_MSG_LECTURE_ID = "영상교육 정보가 존재하지 않습니다. 영상교육 ID를 확인해 주세요";

	// 사진, 사인 관련 처리
	public static final String ERROR_CODE_NO_PHOTOLIST = "901";
	public static final String ERROR_MSG_NO_PHOTOLIST = "등록된 사진이 없습니다.";

	public static final String ERROR_CODE_SIGN_EXIST = "902";
	public static final String ERROR_MSG_SIGN_EXIST = "이미 등록된 사인이 존재합니다.";

	public static final String ERROR_CODE_NO_SIGN_RECEIVED = "903";
	public static final String ERROR_MSG_NO_SIGN_RECEIVED = "등록할 사인이 없습니다.";

	public static final String ERROR_CODE_SIGN_UP_FAIL = "904";
	public static final String ERROR_MSG_SIGN_UP_FAIL = "사인 등록을 실패하였습니다.";

	public static final String ERROR_CODE_NO_PHOTO_RECEIVED = "905";
	public static final String ERROR_MSG_NO_PHOTO_RECEIVED = "등록할 사진이 없습니다.";

	public static final String ERROR_CODE_PHOTO_UP_FAIL = "906";
	public static final String ERROR_MSG_PHOTO_UP_FAIL = "사진 등록을 실패하였습니다.";

	public static final String ERROR_CODE_NO_PHOTO_DEL_ID = "907";
	public static final String ERROR_MSG_NO_PHOTO_DEL_ID = "삭제할 사진 ID를 전송하지 않았습니다.";

	public static final String ERROR_CODE_PHOTO_DEL_FAIL = "908";
	public static final String ERROR_MSG_PHOTO_DEL_FAIL = "사진 삭제를 실패하였습니다.";

	public static final String ERROR_CODE_BAD_PHOTO_TYPE = "909";
	public static final String ERROR_MSG_BAD_PHOTO_TYPE = "잘못된 사진 Type입니다.";

	public static final String ERROR_CODE_EDITABLE = "910";
	public static final String ERROR_MSG_EDITABLE = "등록 가능한 상태가 아닙니다.";

	public static final String ERROR_CODE = "err_code";
	public static final String ERROR_MSG = "err_msg";

}
