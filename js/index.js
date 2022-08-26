let channels = document.querySelector("#channels");
let messages = document.querySelector("#messages");

function readChannels () {
    return $.ajax({
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
}

readChannels();

function scrollTop (div) {
    $(div).scrollTop($(div)[0].scrollHeight);
}

$('#inputText').keyup(function(e) {
    if (e.which == 13) sendMessage();
});

function setChannel (new_channel) {
    $.ajax({
        url: "./php/setChannel.php",
        data: {
            id_channel: new_channel
        },
        type: "POST",
        success: function(data) {
            console.log("Success! New channel: "+data);
        }
    });
}

let start = 0;

function loadChat() {
    $.get("./php/loadChat.php?start=" + start, function (result) {
        if (result.items) {
            for (let x = 0; x < result.items.length; x++) {
                start = result.items[x].id_message;
                readMessages(result.items[x].id_message);
            }
        }
        loadChat();
    });
}

loadChat();

function readMessages (id_message) {
    $.ajax({
        url: "./php/readMessages.php",
        type: "GET",
        data: {
            id_message: id_message
        },
        success: function (data) {
            $("#messages").append(data);
            scrollTop("#messages");
        }
    });
}

function sendMessage () {
    let input = document.querySelector("#inputText");
    if (input.value == "") return;
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