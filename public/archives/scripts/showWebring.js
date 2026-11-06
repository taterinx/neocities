             
var nameSelfWebring = "Biggus";
var relationshipSelfWebring = "will always order the";
var charnameSelfWebring = "Spicy Italian";
var seriesSelfWebring = "Subway";
var imgurlSelfWebring = "images/selfinsert-ring.png";

var templateWebring = document.createElement("selfinsertwebring");
 templateWebring.innerHTML = "<div id='templateWebring'> <div id='webringiconbox'> <img id='iconWebring' src='" + imgurlSelfWebring + "'/> <div id='webringdescbox'> <p id='webringdesc'>" + nameSelfWebring + " " +  relationshipSelfWebring + " " + charnameSelfWebring + " from " + seriesSelfWebring + "! </p> </div> </div>  <div id='webringlinks'>	<p id='linkparaWebring'> <a href='https://webring.koinuko.pink/members.php' target='_PARENT'>Members List</a> | Part of the <a href='https://webring.koinuko.pink/members.php' target='_PARENT'>Self-Insert Webring</a></p> </div> </div>"; 
  document.getElementById("selfinsertwebring").appendChild(templateWebring);  
         
       