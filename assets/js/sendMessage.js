var socket = io();
$(function () {
    $("#send").click(function () {
        var message = {
            nama: $("#name").val(),
            message: $("#sendMessage").val()
        };
        postPesan(message);
    })
    getPesan();
});

socket.on('message', tambahPesan);

function tambahPesan(message) {
    $("#message").append(
        `<div class="row">
        <div class"col"> ${message.nama} </div>
        <div class="col">${message.message}</div>
        </div>`);
}


function getPesan() {
    $.get('http://localhost:3000/message', function (data) {
        data.forEach(tambahPesan);
    });
}

function postPesan(message) {
    $.post('http://localhost:3000/message', message);
}