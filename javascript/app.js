  
  (function(){

      const config = {
    apiKey: "AIzaSyAOVRnd7DwdkRifd4AJki1Mawml2o5koVU",
    authDomain: "egydo-7a82d.firebaseapp.com",
    databaseURL: "https://egydo-7a82d.firebaseio.com",
    storageBucket: "egydo-7a82d.appspot.com",
    messagingSenderId: "539244155775"
  }; 
  firebase.initializeApp(config);

//get elements
  const txtemail = document.getElementById('txtemail');
  const txtpassword = document.getElementById('txtpassword');
  const signin = document.getElementById('signin');
  const signup = document.getElementById('signup');
  const signout = document.getElementById('signout'); 
//add login event
  signin.addEventListener('click',e=>{
      const email = txtemail.value;
      const pass = txtpassword.value;
      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(email,pass);
      promise.catch(e => console.log(e.message));
  });
//add sign up event
  signup.addEventListener('click',e=>{
      const email = txtemail.value;
      const pass = txtpassword.value;
      const auth = firebase.auth();
      const promise = auth.createUserWithEmailAndPassword(email,pass);

      promise.catch(e => console.log(e.message));


  });
  signout.addEventListener('click',e=>{
      firebase.auth().signOut();

  });

  //add real time listener
  firebase.auth().onAuthStateChanged(firebaseuser =>{
      if(firebaseuser){
          console.log(firebaseuser);
      } else{
          console.log('not logged in');
          signout.classlist.add('hide');
      }

  });
  

  }())
  
  