<?php

include("config.inc.php");

try{
	$db = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME,DB_USER,DB_PASSWORD);	
} catch (PDOException $e){
	echo "Verbindung fehlgeschlagen";
	die();
}
	
	$newsabfrage = $db->query('SELECT * FROM D7node INNER JOIN D7field_data_field_vorschaubild ON D7node.nid = D7field_data_field_vorschaubild.entity_id INNER JOIN D7field_data_field_datum ON D7node.nid = D7field_data_field_datum.entity_id INNER JOIN D7file_managed ON D7field_data_field_vorschaubild.field_vorschaubild_fid = D7file_managed.fid where D7node.type = "news" ORDER BY D7field_data_field_datum.field_datum_value DESC limit 20'); 
	
	$newsabfrage = $newsabfrage->fetchAll();
		
		
	
	$l = 0;
		
		foreach($newsabfrage as $row){
			
			
	
		$News[$l] = array(
		'title'=> $row['title'],
		'filename_vorschau'=> $row['uri'],
		'id'=> $row['nid'],
		'datum'=> $row['field_datum_value']
		
		);
		
		$l++;  
		
		
			
		
}
echo json_encode($News);

?>