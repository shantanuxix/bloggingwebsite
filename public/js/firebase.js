let firebaseConfig = {
        apiKey: "AIzaSyD0prVU3wJ-I3VHTU2hh3m_EK1Q2lPBOOA",
        authDomain: "blog-f5718.firebaseapp.com",
        projectId: "blog-f5718",
        storageBucket: "blog-f5718.appspot.com",
        messagingSenderId: "481726901857",
        appId: "1:481726901857:web:4807a66968d3300b188420",
        measurementId: "G-RQB51PP43M"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();