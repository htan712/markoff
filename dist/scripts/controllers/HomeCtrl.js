(function() {
    function HomeCtrl() {
        this.welcome = "Welcome to MarkItOff";
//        
//        var config = {
//            apiKey: "AIzaSyDmh1VnxLNQUFTjw53VZyW4-EqQ_Nd3dWI",
//            authDomain: "markoff-9194b.firebaseapp.com",
//            databaseURL: "https://markoff-9194b.firebaseio.com",
//            storageBucket: "",
//        };
//        firebase.initializeApp(config);
//        var rootRef = firebase.database().ref();
//        var catRef = rootRef.child("/cats");
//        var wasabiRef = catRef.child("/wasabi");
//        
//        window.foo = $firebaseArray(wasabiRef)
//    
    }
    angular
        .module('markOff')
        .controller('HomeCtrl', HomeCtrl);
})();