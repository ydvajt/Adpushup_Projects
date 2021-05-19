var pincodeField = document.getElementById("pincode");
var buttonField = document.getElementById("button");
var bodyEl = document.getElementById("formattedData");

buttonField.addEventListener("click", loadData);


function loadData() {
  var pincodeValue = pincodeField.value;
  var pincodeRegex = /\d+/;
  if (pincodeValue.match(pincodeRegex)) {
      bodyEl.innerHTML = '';
    console.log("helelo");
    var xhttp = new XMLHttpRequest();
    xhttp.open(
      "GET",
      "https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByPin?pincode="+pincodeValue+"&date=09-05-2021",
      true
    );
    xhttp.onload = function () {
      if (this.status === 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);
        var centers = data.centers;
        centers.forEach(function (items) {
          var trTag = document.createElement("tr");
          var tdName = document.createElement("td");
          var tdAddress = document.createElement("td");
          var nameValue = items.name;
          var addressValue = items.address;
          tdName.innerText = nameValue;
          tdAddress.innerText = addressValue;
          trTag.appendChild(tdName);
          trTag.appendChild(tdAddress);
          bodyEl.appendChild(trTag);

        });
      }
    };
    xhttp.send();
  } else {
    alert("Pincode Invalid");
  }
}
