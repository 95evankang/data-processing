//use location object to access querystring (address bar)
const queryString = window.location.search;
let myData = ''; //will store data for output
let myCart = '';//will store info about Cart contents
let myTotal = 0;//cost of items in cart

console.log(queryString);

if(queryString != ""){
       

        //separate querystring parameters
        const urlParams = new URLSearchParams(queryString);

        
        urlParams.forEach(function(value,key) {//process data


                if(value=="Cart"){//Add Price of Cart items
                        //alert(value);
                        

                        switch(value){

                        case "Widget":
                                myCart += "Widget: $3.99<br />";  
                                myTotal += 3.99;  
                        break;

                        case "Sprocket":
                                myCart += "Sprocket: $5.99<br />";  
                                myTotal += 5.99;  
                        break;

                        case "Thingy":
                                myCart += "Thingy: $1.99<br />";  
                                myTotal += 1.99;  
                        break;
                        }

                }else{
                        //build the shipping info
                        key = key.split("  ").join(" ");
                        function titleCase(value){
                                value = value.toLowerCase().split(' ');
                                for (var i = 0; i < value.length; i++) {
                                    value[i] = value[i].charAt(0).toUpperCase() + value[i].slice(1);
                                }
                                return value.join(' ');
                            }
                            if (key == "First Name"){
                                value = titleCase(value);
                                console.log(value);
                            }
                            if (key == "Last Name"){
                                value = titleCase(value);
                                console.log(value);
                            }
                            if (key == "Address"){
                                value = titleCase(value);
                                console.log(value);
                            }
                            if (key == "City"){
                                value = titleCase(value);
                                console.log(value);
                            }
                
                myData += `<p>${key}: ${value}</p>`;
                }       
        });

        myCart = `
                  <p><b>Cart Contents</b></p>
                  <p>${myCart}</p>
                  <p>Total: $${myTotal}</p>
                 `;
        
        myData = myCart + "<p><b>Shipping Information</b></p>" + myData;
        myData += `<p><a href="index.html">Clear</a></p>`;

        document.getElementById("output").innerHTML = myData;
} 



