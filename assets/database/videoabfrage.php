<?php

include("config.inc.php");

try{
	$db = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME,DB_USER,DB_PASSWORD);	
} catch (PDOException $e){
	echo "Verbindung fehlgeschlagen";
	die();
}
	
	$newsabfrage = $db->query('SELECT * FROM ((D7node INNER JOIN D7file_usage ON D7node.nid = D7file_usage.id) INNER JOIN D7file_managed ON D7file_usage.fid = D7file_managed.fid) INNER JOIN   D7field_data_field_youtube_id ON D7node.nid = D7field_data_field_youtube_id.entity_id ORDER BY created DESC limit 1'); 
	
	$newsabfrage = $newsabfrage->fetchAll();
		
		
	
	$l = 0;
		
		foreach($newsabfrage as $row){
			
			
	
		$News[$l] = array(
		'youtubeid'=> $row['field_youtube_id_value'],
		'filename'=> $row['filename']
		
		);
		
		$l++;  
		
		
			
		
}
echo json_encode($News);

?>