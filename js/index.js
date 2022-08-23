let channels = document.querySelector("#channels");
let messages = document.querySelector("#messages");

$.ajax({
    url: "./php/readChannels.php",
    type: "POST",
    success: function(data) {
        if (data.length == 0) {
            channels.innerHTML = "No channels!";
        } else {
            channels.innerHTML = data;
        }
    }
});

function scrollTop (div) {
    $(div).scrollTop($(div)[0].scrollHeight);
}

$('#inputText').keyup(function(e) {
    if (e.which == 13) sendMessage();
});

function readMessages () {
    $.ajax({
        url: "./php/readMessages.php",
        type: "POST",
        success: function(data) {
            messages.innerHTML = data;
            scrollTop(messages);
        }
    });
}

setInterval(readMessages, 1000);

function setChannel (new_channel) {
    $.ajax({
        url: "./php/setChannel.php",
        data: {
            id_channel: new_channel
        },
        type: "POST",
        success: function(data) {
            console.log("Success!");
        }
    });
}

function sendMessage () {
    let input = document.querySelector("#inputText");
    if (input.value == "") {
        alert("Please fill the input!");
        return;
    }
    $.ajax({
        url: "./php/sendMessage.php",
        type: "POST",
        data: {
            message: input.value
        },
        success: function (data) {
            input.value = "";
        }
    });
}