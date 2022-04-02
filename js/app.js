// Made by NexON39 "kscode.pl@gmail.com"
// Made for XyzzyTactic

window.addEventListener('load', function() {
    const login_box = document.getElementById('login_box');
    const input1 = document.querySelector('.input_text1');
    const input2 = document.querySelector('.input_text2');

    window.addEventListener('click', function() {
        if(input1 == document.activeElement || input2==document.activeElement)
            login_box.style.border = "1px var(--red) solid";
        else
            login_box.style.border = "1px var(--gray-login-border) solid";
    })
})