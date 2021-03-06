(function() {
    function HomeCtrl($location, $window) {
        var self = this;
        // constants set to element ID
        const Email = document.getElementById('Email');
        const Password = document.getElementById('Password');
        const btnLogin = document.getElementById('btnLogin');
        const btnSignUp = document.getElementById('btnSignUp');
        const btnLogout = document.getElementById('btnLogout');

        // Login event
        btnLogin.addEventListener('click', e => {
            const auth = firebase.auth();
            const email = Email.value;
            const pass = Password.value;

            const promise = auth.signInWithEmailAndPassword(email, pass);
            promise.catch(e => alert(e.message));
            promise.then(function(userData){
                alert("Signed In successful");
            }, function(error) {
                alert(error.message);
            })
        });

        btnSignUp.addEventListener('click', e => {
            // TODO: check 4 real email
            const email = Email.value;
            const pass = Password.value;
            const auth = firebase.auth();

            const promise = auth.createUserWithEmailAndPassword(email, pass);
            promise.catch(e => alert(e.message));
            promise.then(function(userData){
                alert("User Created!");
            }, function(error) {
                alert(error.message);
            })
        })

        btnLogout.addEventListener('click', e => {
            firebase.auth().signOut();
            alert("Logout successful")
        })

        this.currentUser;

        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser) {
                console.log(firebase.auth().currentUser.email);
                btnLogout.classList.remove('hide');
            } else {
                console.log("User logged out")
                btnLogout.classList.add('hide');
            }
        });
        
    }
    angular
        .module('markOff')
        .controller('HomeCtrl', ['$location', '$window', HomeCtrl]);
})();
