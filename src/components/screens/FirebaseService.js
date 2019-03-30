

export const signup=async(email, pass)=>{
    const firebase = require("firebase");
    try {
        firebase.initializeApp({         
                            apiKey: "AIzaSyBgKhsYKD9HemSGAKFtKaWmcHiQ-fvMWfE",
                            authDomain: "nipocket.firebaseapp.com",
                            databaseURL: "https://nipocket.firebaseio.com", 
                            storageBucket: "nipocket.appspot.com",
    
        });
        await firebase.auth()
            .createUserWithEmailAndPassword(email, pass);

        console.log("Account created");

        // Navigate to the Home page, the user is auto logged in

    } catch (error) {
        console.log(error.toString())
    }
    }
    export const login=async(email, pass)=>{
        const firebase = require("firebase");
        try {
            await firebase.auth()
                .signInWithEmailAndPassword(email, pass);
    
            console.log("Logged In!");
    
            // Navigate to the Home page
    
        } catch (error) {
            console.log(error.toString())
        }
        }

        export const signOut=async(email, pass)=>{
            const firebase = require("firebase");
            try {

                await firebase.auth().signOut();
        
                // Navigate to login view
        
            } catch (error) {
                console.log(error);
            }
            }

   

  