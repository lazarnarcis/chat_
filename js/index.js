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
                readMessages();
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
            readMessages();
        }
    });
}

function readMessages () {
    messages.html("");
    $.ajax({
        url: "./php/readMessages.php",
        success: function (data) {
            $("#messages").append(data);
            scrollTop("#messages");
        }
    });
}

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
            readMessages();
        }
    });
}