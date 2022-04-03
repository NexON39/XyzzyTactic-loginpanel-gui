window.addEventListener('load', function() {
    const register_btn = document.getElementById('input_register');
    register_btn.addEventListener('click', function() {
        var login_input = document.getElementById('input_login').value;
        var pass_input = document.getElementById('input_pass').value;
        mta.triggerEvent("register", login_input, pass_input, register);
    })
})