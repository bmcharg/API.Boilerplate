const apiURL = '/status/api';
const cmsURL = '/status/cms';

const moderationURL = '/status/moderation';
const configURL = '/status/config';

// const cmsURL = 'https://buzz-cms.stage.tools.bbc.co.uk';
// const moderationURL = 'https://buzz-moderation.stage.tools.bbc.co.uk';

const updateInterval = 30000;

var count = 0;

var apiStatusElement 				= document.getElementById("apiStatus");
var cmsStatusElement 				= document.getElementById("cmsStatus");
var moderationStatusElement = document.getElementById("moderationStatus");
var configStatusElement 		= document.getElementById("configStatus");

function init(){

	getStatus();
	setInterval(getStatus, updateInterval);

}

function getStatus(){

	count++;

	checkURL(apiURL, apiStatusElement);
	checkURL(cmsURL, cmsStatusElement);
	checkURL(moderationURL, moderationStatusElement);
	checkURL(configURL, configStatusElement);

}


function checkURL(url, statusElement){

  var xhttp = new XMLHttpRequest();

  xhttp.onload = function(){

    var status = JSON.parse(this.response).status;
    var cssClass = JSON.parse(this.response).cssClass;

    statusElement.innerHTML = status;
    statusElement.classList.add(cssClass);

  }

	xhttp.onerror = function() {
    statusElement.innerHTML = "FAILED";
    statusElement.classList.add("bad");
	};

  xhttp.open("GET", url, true);
  xhttp.send();

}


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}