var siteIdSpan = document.getElementById("siteid");

 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     var activeTab = tabs[0];
     chrome.tabs.sendMessage(activeTab.id, "getSiteId", {}, function(siteid) {
         siteIdSpan.innerHTML = siteid;
     });
 });