(function() {
    function HomeCtrl() {
        var self = this;
        this.welcome = "Welcome to MarkItOff";    
        
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
            promise.catch(e => console.log(e.message));
        });
        
        btnSignUp.addEventListener('click', e => {
            
            // TODO: check 4 real email
            const email = Email.value;
            const pass = Password.value;
            const auth = firebase.auth();

            const promise = auth.createUserWithEmailAndPassword(email, pass);
            promise.catch(e => console.log(e.message));
        })
        
        btnLogout.addEventListener('click', e => {
            firebase.auth().signOut();
        })
        
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser) {
                btnLogout.classList.remove('hide');
            } else {
                btnLogout.classList.add('hide');
            }
        });
        
        this.currentUser;
        this.authData = function(){
            self.currentUser = firebase.auth().currentUser.email;
        };


    }
    angular
        .module('markOff')
        .controller('HomeCtrl', HomeCtrl);
})();