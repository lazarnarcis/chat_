function register () {
    let error = document.querySelector("#error");
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");
    let email = document.querySelector("#email");

    if (username.value == "" || password.value == "" || email.value == "") {
        error.innerHTML = "Please fill all inputs!";
    } else {
        $.ajax({
            url: "./php/registerUser.php",
            type: "POST",
            data: $("#register").serialize(),
            success: function(data) {
                if (data.length != 0) {
                    error.innerHTML = data;
                } else {
                    window.location.href = "index.php";
                }
            }
        });
    }
}

$("input[type=text], input[type=password], input[type=email]").keyup(function(e) {
    if (e.which == 13) register();
});