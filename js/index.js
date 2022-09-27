let channels = $("#channels"), messages = $("#messages"), start = 0;

function readChannels () {
    return $.ajax({
        url: "./php/readChannels.php",
        type: "POST",
        success: function(data) {
            if (data.length == 0) {
                channels.html("No channels!");
            } else {
                channels.html(data);
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

$(document).on("click", ".setChannel", function(){
    let id_channel = $(this).data("channel-id");
    console.log(id_channel);
    $.ajax({
        url: "./php/setChannel.php",
        data: {
            id_channel: id_channel
        },
        type: "POST",
        success: function(data) {
            console.log("Success! New channel: "+data);
        }
    });
});

function readMessages () {
    $.ajax({
        url: "./php/readMessages.php",
        type: "POST",
        data: {
            start: start
        },
        success: function (data) {
            if (data.items) {
                data.items.forEach(element => {
                    start = element.id_message;
                    $("#messages").append("<div>" + element.username + " - " + element.message + "</div>");
                });
                scrollTop("#messages");
            }
        }
    });
}

readMessages();
setInterval(readMessages, 750);

function sendMessage () {
    let input = $("#inputText");
    if (input.val() == "") return;
    $.ajax({
        url: "./php/sendMessage.php",
        type: "POST",
        data: {
            message: input.val()
        },
        success: function () {
            input.val("");
        }
    });
}