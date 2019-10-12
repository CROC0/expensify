import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const db = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, db as default };





// db.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })

// db.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 959849891894
// });



// db.ref()
//   .on('value', (snapshot) => {
//     console.log(snapshot.val())
//   })

// db.ref().set(
// [
//       {
//         name: 'Matt Taylor',
//         age: 30,
//         location: {
//           city: 'Perth',
//           country: 'Australia'
//         }
//       },
//       {
//         name: 'Scott Ward',
//         age: 5,
//         location: {
//           city: 'Perth',
//           country: 'Australia'
//         }
//       }      
//     ]
// );

// db.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('error:',e)
//   })

