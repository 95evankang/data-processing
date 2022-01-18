//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

/*

        Print all data to id of output on page


*/

let myData = ''; //will store data for output
urlParams.forEach(function(value,key) {
    // will replace underscore with space

    ////https://stackoverflow.com/questions/542232/in-javascript-how-can-i-perform-a-global-replace-on-string-with-a-variable-insi
    key = key.split("_").join(" ");
    myData += `<p>${key}: ${key}</p>`;

         console.log(value,key)
});

myData += `<p><a href="index.html">Clear</a></p>`;

document.getElementById("output").innerHTML = myData;