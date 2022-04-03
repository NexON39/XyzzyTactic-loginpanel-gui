window.addEventListener('load', function() {
    const login_btn = document.getElementById('input_login_btn');
    login_btn.addEventListener('click', function() {
        var login_input = document.getElementById('input_login').value;
        var pass_input = document.getElementById('input_pass').value;
        mta.triggerEvent("login", login_input, pass_input, login);
    })
})