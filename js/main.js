// JavaScript Document
let xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function(){
    if(xhr.status === 200) {
        let myStuff = JSON.parse(xhr.responseText);
        console.log(myStuff);

        for(i = 0; i < myStuff.presidents.length; i++){
            console.log('p: ', myStuff.presidents[i].first);
            console.log('p: ', myStuff.presidents[i].last);
            console.log('p: ', myStuff.presidents[i].served);

            console.log('vp: ', myStuff.vicepresidents[i].first);
            console.log('vp: ', myStuff.vicepresidents[i].last);
        }
        let myString = '';
        for(i = 0; i < myStuff.presidents.length; i++){
            let num = i + 1;
            myString += '<br>President ' + num + ' was ';
            myString += myStuff.presidents[i].first + ' ' + myStuff.presidents[i].last + '. ';
            myString += 'He served from ' + myStuff.presidents[i].served + ' with ';

            myString += myStuff.vicepresidents[i].first + ' ' + myStuff.vicepresidents[i].last;
        }
        document.getElementById('message').innerHTML = myString;
    }
}