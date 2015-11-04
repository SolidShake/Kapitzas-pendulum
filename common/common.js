/*
	------<====== Prelusive JS ======>------
*/
function setCookie(cookieName, cookieValue){
	document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + ";expires=" + 
					(new Date(new Date().getFullYear() + 2,0,0)).toUTCString();
}
function getCookie(cookieName){
  var cookieValue = document.cookie.match('(^|;)?' + cookieName + '=([^;]*)(;|$)');
  return cookieValue ? decodeURIComponent(cookieValue[2]) : '';
}
function deleteCookie(cookieName){
	document.cookie = cookieName + "=" + ";expires=Thu Jan 01 1970 00:00:00";
}
/*
		------<====== End ======>------
	------<====== Request JS ======>------
*/
function nameIsNotValid(name){
	return name != name.match(/[a-zA-Zа-яА-Я ]+/);
}
function mailIsNotValid(mail){
	return !/^\w+[a-zA-Z\d_.-]*@{1}\w{1}[a-zA-Z\d_.-]*\.{1}\w{2,4}$/.test(mail);
}
/*
		------<====== End ======>------
	------<====== Generic JS ======>------
*/
/*
$(document).ready(function(){
});
*/
/*
		------<====== End ======>------
*/