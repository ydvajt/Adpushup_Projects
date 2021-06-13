var getAll = `
var allInfo = window.adpushup.config;
var data = {
    siteId : allInfo.siteId,
    pageGroup : allInfo.pageGroup, 
    adpushupPercentage : allInfo.adpushupPercentage
    };
 var dataDiv = document.createElement('div');
 dataDiv.id ="extension";
  var dataInfo = JSON.stringify(data);
  dataDiv.innerHTML = dataInfo;
 document.body.appendChild(dataDiv);

`;

var scriptTag = document.createElement('script');
scriptTag.innerHTML = getAll;
document.body.appendChild(scriptTag);
var Info = document.getElementById('extension');
var InfoFinal = Info.innerHTML;
var Info1 = JSON.parse(InfoFinal);

console.log("content script " + Info1.siteId + " " + Info1.pageGroup + " " + Info1.adpushupPercentage);



 chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
     if (message === "getSiteId") {
         var getSiteIdCode = `
 var siteId = window.adpushup.config.siteId;
 var data = {
     siteId: siteId
 };
 var dataDiv = document.createElement("div");
 dataDiv.style.display = "none";
 dataDiv.id = "extensionData";
 dataDiv.innerHTML = JSON.stringify(data);
 document.body.appendChild(dataDiv);
 `
         var scriptTag = document.createElement("script");
         scriptTag.innerHTML = getSiteIdCode;

         document.body.appendChild(scriptTag);
         var dataDiv = document.getElementById("extensionData");
         var data = JSON.parse(dataDiv.innerHTML);
         console.log("SiteId from content.js: " + data.siteId);
         sendResponse(data.siteId);
     }
 })