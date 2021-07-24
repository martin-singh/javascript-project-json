// JavaScript Document
let hotelInfo;
let details;
let xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function(){
    if(xhr.status === 200) {
        hotelInfo = JSON.parse(xhr.responseText);
        display(0); // by default when data is loaded, room with id 0 will be displayed.
    }
}

// display data to the webpage
function display(roomId) {
    console.log('RoomId: ', roomId);
    document.getElementById('roomName').innerHTML = hotelInfo[roomId].name;
    document.getElementById('desc').innerHTML = hotelInfo[roomId].description;
    document.getElementById('photo').src = hotelInfo[roomId].photo;

    document.getElementById('weekday').innerHTML = hotelInfo[roomId].cost.weekday;
    document.getElementById('weekend').innerHTML = hotelInfo[roomId].cost.weekend;

    details = '';
    for(let i = 0; i < hotelInfo[roomId].details.length; i++) {
        details += '<p>' + hotelInfo[roomId].details[i] + '</p>';
    } // end for
    document.getElementById('details').innerHTML = details;
} // end function