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

function load() {
    console.log(start);
    $.get("./php/loadChat.php?start=" + start, function (result) {
        if (result.items) {
            result.items.forEach(item => {
                start = item.id_message;
                $.post("./php/readMessages.php?id_message="+item.id_message, $(this).serialize()).done(function (data) {
                    $("#messages").append(data);
                    scrollTop("#messages");
                });
            });
        }
        load();
    });
}

load();

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