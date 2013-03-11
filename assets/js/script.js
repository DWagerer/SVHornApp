var obj;
var objSingle;
var obj_video;
var object_video;
var iduebergabe;
var iduebergabe_video;

var obj_newssingle; 

var ID_uebergabe;
var ID = '1';


	
console.log(ID);

/* NEWS ABFRAGE */

function show_news() 
 {

    var xmlhttp = new XMLHttpRequest();
       
    xmlhttp.open("GET", 'assets/database/newsabfrage.php', true);
    xmlhttp.send(null);
    xmlhttp.onreadystatechange = function() 
	{
        if(xmlhttp.readyState != 4) 
		{
            document.getElementById("laden").innerHTML = 'LADEN'; 
        }
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) 
		{
        	document.getElementById("laden").innerHTML = ''; 
			obj = JSON.parse(xmlhttp.responseText);
        	render(obj);
			
        }      
            
    }
	


function render(object){
    
    obj = object;
	
	var oldNewsList = document.getElementById("news_list_home");
		if ( oldNewsList.hasChildNodes() )
			{
   			 while ( oldNewsList.childNodes.length >= 1 )
    			{
       			 oldNewsList.removeChild( oldNewsList.firstChild );       
    			} 
			}
			
	
	
	for(var i =0; i<obj.length; i++){
	var liste = document.getElementById("news_list_home");
	var newNews = document.createElement("li");
	liste.appendChild(newNews);	
	
	var uri = obj[i].filename_vorschau;
	var url = uri.replace("public://", "");
	
	newNews.innerHTML = '<a href="javascript:show_news_single('+obj[i].id+');"><div class="newseintrag"><img src="http://svhorn.dmedia.at/sites/default/files/'+url+'" /><div class="newstext"><div class="datum">'+obj[i].datum+'</div><div class="headline">'+obj[i].title+'</div></div></div></a>';		
	}	
	
	var oldNewsListNEWS = document.getElementById("news_list_news");
		if ( oldNewsListNEWS.hasChildNodes() )
			{
   			 while ( oldNewsListNEWS.childNodes.length >= 1 )
    			{
       			 oldNewsListNEWS.removeChild( oldNewsListNEWS.firstChild );       
    			} 
			}
	
	
	for(var c =0; c<obj.length; c++){
	var listeNEWS = document.getElementById("news_list_news");
	var newNewsNEWS = document.createElement("li");
	listeNEWS.appendChild(newNewsNEWS);	
	
	var uri_neu = obj[c].filename_vorschau;
	var url_neu = uri_neu.replace("public://", "");
	
	newNewsNEWS.innerHTML = '<a href="javascript:show_news_single('+obj[c].id+');"><div class="newseintrag"><img src="http://svhorn.dmedia.at/sites/default/files/'+url_neu+'" /><div class="newstext"><div class="datum">'+obj[c].datum+'</div><div class="headline">'+obj[c].title+'</div></div></div></a>';		
	}	
	
}

$('#site_news').hide();
$('#site_home').show();

}

/* NEWS ABFRAGE SINGLE */

function show_news_single(ID_uebergabe) {
	
ID = ID_uebergabe;
var phpFile_newssingle = 'assets/database/newsabfrage_single.php?ID=';

var xmlhttp_newssingle = new XMLHttpRequest();
	
       
    xmlhttp_newssingle.open("GET", phpFile_newssingle+ID, true);
    xmlhttp_newssingle.send(null);
    xmlhttp_newssingle.onreadystatechange = function() 
	{
        if(xmlhttp_newssingle.readyState != 4) 
		{
            document.getElementById("news_single_laden").innerHTML = 'LADEN'; 
        }
        if(xmlhttp_newssingle.readyState == 4 && xmlhttp_newssingle.status == 200) 
		{
        	document.getElementById("news_single_laden").innerHTML = ''; 
			obj_newssingle = JSON.parse(xmlhttp_newssingle.responseText);
        	render(obj_newssingle);
			
        }      
            
    }
	


function render(object_newssingle){   
    obj_newssingle = object_newssingle;
	
	
	var oldNewsSingle = document.getElementById("newssingle");
		if ( oldNewsSingle.hasChildNodes() )
			{
   			 while ( oldNewsSingle.childNodes.length >= 1 )
    			{
       			 oldNewsSingle.removeChild( oldNewsSingle.firstChild );       
    			} 
			}
			
	
	
	
	for(var a=0; a<obj_newssingle.length; a++){
	var newssingle = document.getElementById("newssingle");
	var newnewssingle = document.createElement("div");
	newssingle.appendChild(newnewssingle);
	
	var uri_single = obj_newssingle[a].filename_titelbild;
	var url_single = uri_single.replace("public://", "");
	
	
	newnewssingle.innerHTML ='<div class="newsbeitrag_single"><div class="newsbeitrag_single_titelbild"><img src="http://svhorn.dmedia.at/sites/default/files/'+url_single+'"/></div><div class="newsbeitrag_single_titel">'+obj_newssingle[a].title+'</div><div class="newsbeitrag_single_text">'+obj_newssingle[a].content+'</div></div>';		
	}	
}	

$('#site_news').show();
$('#site_home').hide();


}



/* Video Abfrage  */ 


function show_video() 
 {

    var xmlhttp_video = new XMLHttpRequest();
       
    xmlhttp_video.open("GET", 'assets/database/videoabfrage.php', true);
    xmlhttp_video.send(null);
    xmlhttp_video.onreadystatechange = function() 
	{
        if(xmlhttp_video.readyState != 4) 
		{
            document.getElementById("videoladen").innerHTML = 'LADEN'; 
        }
        if(xmlhttp_video.readyState == 4 && xmlhttp_video.status == 200) 
		{
        	document.getElementById("videoladen").innerHTML = ''; 
			obj_video = JSON.parse(xmlhttp_video.responseText);
        	render(obj_video);
			
        }      
            
    }
	

function render(object_video){
    
    obj_video = object_video;
	for(var j =0; j<obj_video.length; j++){
	var videocontainer = document.getElementById("youtube-video");
	var newVideo = document.createElement("div");
	videocontainer.appendChild(newVideo);
	
	var iduebergabe_video = obj_video[j].NodeID;
	
	
	newVideo.innerHTML = '<iframe class="video" src="http://www.youtube.com/embed/'+obj_video[j].youtubeid+'?rel=0&fmt=22&showsearch=0&showinfo=0 " frameborder="0" allowfullscreen></iframe>';		
	}	
}	
     
}

/* Fotoalbum Abfrage  */ 


function show_fotoalbum() 
 {

    var xmlhttp_fotoalbum = new XMLHttpRequest();
       
    xmlhttp_fotoalbum.open("GET", 'assets/database/fotoalbumabfrage.php', true);
    xmlhttp_fotoalbum.send(null);
    xmlhttp_fotoalbum.onreadystatechange = function() 
	{
        if(xmlhttp_fotoalbum.readyState != 4) 
		{
            document.getElementById("fotoalbumladen").innerHTML = 'LADEN'; 
        }
        if(xmlhttp_fotoalbum.readyState == 4 && xmlhttp_fotoalbum.status == 200) 
		{
        	document.getElementById("fotoalbumladen").innerHTML = ''; 
			obj_fotoalbum = JSON.parse(xmlhttp_fotoalbum.responseText);
        	render(obj_fotoalbum);
			
        }      
            
    }
	

function render(object_fotoalbum){
    
    obj_fotoalbum = object_fotoalbum;
	for(var k =0; k<obj_fotoalbum.length; k++){
	var fotoalbumcontainer = document.getElementById("fotoalbum");
	var newfotoalbum = document.createElement("div");
	fotoalbumcontainer.appendChild(newfotoalbum);
	
	var iduebergabe_video = obj_fotoalbum[k].NodeID;
	
	
	newfotoalbum.innerHTML = '<a href="javascript:show_foto_site();"><div class="fotoalbum"><img src="http://svhorn.dmedia.at/sites/default/files/'+obj_fotoalbum[k].filename+'" width="100%"/><div class="albumtitel">'+obj_fotoalbum[k].title+'</div></div></a>';			
	}	
}	
     
}


function show_videos_site() {
	alert('Hier gehts später zur Video Seite');
	}
	
function show_statistic_site() {
	alert('Hier gehts später zu den Statistiken');
	}
	
function show_liveticker_site() {
	alert('Hier gehts später zum Liveticker');
	}
	
function show_foto_site() {
	alert('Hier gehts später zu den Fotos');
	}

function show_impressum_site() {
	alert('Hier gehts später zum Impressum');
	}


$(document).ready(function() {
    $("body").css("display", "none");
 
    $("body").fadeIn(2000);
 
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
});