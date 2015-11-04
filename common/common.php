<?
/*
	------<====== Prelusive PHP ======>------
*/
function escapeValue($value){return '"'.mysql_escape_string($value).'"';}
function escapePostValue($name){return '"'.mysql_escape_string($_POST[$name]).'"';}
function connectDatabase(){
	mysql_connect('localhost', 'cl49743_ailurus', 'S7BiTWuW');
	mysql_select_db('cl49743_ailurus');
}
/*
		------<====== End ======>------
	------<====== Generic PHP ======>------
*/
function getMenuContent(){}
function getFooterContent(){}
/*
		------<====== End ======>------
*/
?>