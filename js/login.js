function login () {
    let error = document.querySelector("#error");
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");

    if (username.value == "" || password.value == "") {
        error.innerHTML = "Please fill all inputs!";
    } else {
        $.ajax({
            url: "./php/loginUser.php",
            type: "POST",
            data: $("#login").serialize(),
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