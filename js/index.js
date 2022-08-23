let channels = document.querySelector("#channels");
let messages = document.querySelector("#messages");
let id_channel = localStorage.getItem("id_channel");

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

function setChannel (new_channel) {
    if (id_channel != new_channel) {
        localStorage.setItem("id_channel", new_channel);
        $(".channel"+new_channel).css("background", "red");
        $(".channel"+id_channel).css("background", "white");
        id_channel = new_channel;
    }
}

function readMessages () {
    $.ajax({
        url: "./php/readMessages.php",
        data: {
            id_channel: id_channel
        },
        type: "POST",
        success: function(data) {
            localStorage.setItem("id_channel", id_channel);
            messages.innerHTML = data;
        }
    });
}

setInterval(readMessages, 1000);

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
            message: input.value,
            id_channel: localStorage.getItem("id_channel")
        },
        success: function (data) {
            input.value = "";
        }
    });
}