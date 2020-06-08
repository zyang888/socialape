const admin = require("firebase-admin");
var serviceAccount = require("../admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialape-1720f.firebaseio.com",
  storageBucket: "socialape-1720f.appspot.com",
});

const db = admin.firestore();

module.exports = { admin, db };
