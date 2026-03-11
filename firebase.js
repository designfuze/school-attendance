const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_DOMAIN",

projectId: "YOUR_PROJECT",

storageBucket: "YOUR_BUCKET",

messagingSenderId: "YOUR_ID",

appId: "YOUR_APP"

};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const storage = firebase.storage()
