// JavaScript Document
//---------- Section 4: Loading External JSON Data ----------
let xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';

// tracking the data
xhr.onreadystatechange = function() {
    console.log(xhr.readyState); // 4 in the log means done (it works)
    console.log(xhr.status); // 200 in the log means successful
    console.log(xhr.statusText);
}

// will execute when readystate returns a 4
xhr.onload = function() {
    if(xhr.status === 200) {
        let myStuff = JSON.parse(xhr.responseText);
        console.log(myStuff);
    }
}

xhr.send();

//---------- Section 3: Exploring JSON ----------
/*
let theData1 = '{"Martin":{"age":"35", "degree":{"HVE":"Lexicon", "BA":"DU"}}, "Manjit":{"age":"61", "degree":"Basic"}}';

let myObject = JSON.parse(theData1);
console.log('obj --> ', myObject);

let myString = JSON.stringify(myObject);
console.log('string --> ', myString);

document.getElementById('message').innerHTML = myObject.Martin.degree.HVE;
*/