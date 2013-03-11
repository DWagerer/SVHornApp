<?php

$ID = $_GET['ID'];

include("config.inc.php");

try{
	$db = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME,DB_USER,DB_PASSWORD);	
} catch (PDOException $e){
	echo "Verbindung fehlgeschlagen";
	die();
}
	
	$newsabfrage = $db->query('SELECT * FROM D7node INNER JOIN D7field_data_field_titelbild ON D7node.nid = D7field_data_field_titelbild.entity_id INNER JOIN D7field_data_field_datum ON D7node.nid = D7field_data_field_datum.entity_id INNER JOIN D7file_managed ON D7field_data_field_titelbild.field_titelbild_fid = D7file_managed.fid INNER JOIN D7field_data_body ON D7node.nid = D7field_data_body.entity_id where D7node.type = "news" and D7node.nid = "'.$ID.'"'); 
	$newsabfrage = $newsabfrage->fetchAll();
		
		
	
	$l = 0;
		
		foreach($newsabfrage as $row){
			
			
	
		$News[$l] = array(
		'title'=> $row['title'],
		'filename_titelbild'=> $row['uri'],
		'datum'=> $row['field_datum_value'],
		'content'=> $row['body_value'],
		
		);
		
		$l++;  
		
		
			
		
}
echo json_encode($News);

?>