(function() {
    function HomeCtrl() {
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
                console.log(firebaseUser);
                btnLogout.classList.remove('hide');
            } else {
                console.log('not logged in');
                btnLogout.classList.add('hide');
            }
        });

    }
    angular
        .module('markOff')
        .controller('HomeCtrl', HomeCtrl);
})();