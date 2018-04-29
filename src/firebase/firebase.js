import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDRtxgC0AUaZ_27OSxMsV1JDsUufCYi1Do",
  authDomain: "expensify-38b0c.firebaseapp.com",
  databaseURL: "https://expensify-38b0c.firebaseio.com",
  projectId: "expensify-38b0c",
  storageBucket: "expensify-38b0c.appspot.com",
  messagingSenderId: "758335794295"
};
firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses')
.once('value')
.then((snapshot) => {
  const expenses = []
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expenses)
})



database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 976123498763
})

//
// database.ref().on("value", snap => {
//   console.log(snap.val());
// });

// setTimeout(() => {
//   database.ref("age").set(33);
// }, 3500);

// setTimeout(() => {
//   database.ref().off();
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(38);
// }, 10000);

// database.ref('location/city')
//   .once('value')
//   .then((snap) => {
//     const val = snap.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Deu ruim')
//   })

// database.ref().set({
//   name: 'Diego Menezes',
//   age: 30,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });
