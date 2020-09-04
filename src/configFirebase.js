const admin = require("firebase-admin");
const firebase=require('firebase');

const serviceAccount = require("./parcial2-9251b-firebase-adminsdk-lb78f-6d9022f6e4.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://parcial2-9251b.firebaseio.com"
});

var firebaseConfig = {
  apiKey: "AIzaSyBmFwgtcvrCYOfyM9VkCxDsO1QojAMon7M",
  authDomain: "parcial2-9251b.firebaseapp.com",
  databaseURL: "https://parcial2-9251b.firebaseio.com",
  projectId: "parcial2-9251b",
  storageBucket: "parcial2-9251b.appspot.com",
  messagingSenderId: "931183053750",
  appId: "1:931183053750:web:09870182880c70d5fb8f17"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = { admin, firebase };