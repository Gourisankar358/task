const functions = require("firebase-functions");
const express = require('express');
const { initializeApp } = require("firebase-admin");
const admin = initializeApp()
const app = express()
const cors = require('cors')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
app.use(cors())

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

app.post('/register',async(req,res)=>{
    const user = req.body;
    await admin.firestore().collection('users').add(user)
    res.status(201).json({
        success:true,
        user
    })
})
app.post('/login',async(req,res)=>{
    // const user = await admin.auth.signInWithEmailAndPassword(req.body.email, req.body.password.value);
    const user = await admin.firestore().collection('users').where('email', '==', req.body.email).where('password', '==', req.body.password).get()
    let users = [];
     user.forEach(doc=>{
         let id = doc.id;
         let data = doc.data();
         users.push({id,...data});
     })
    if(users.length == 0){
        res.status(201).json({
            success:false,
            users
        })
    }
    res.status(201).json({
        success:true,
        users
    })
        
    
    
})
app.get('/show',async(req,res)=>{
     const user= await admin.firestore().collection('users').get()
     let users = [];
     user.forEach(doc=>{
         let id = doc.id;
         let data = doc.data();
         users.push({id,...data});
     })
    res.status(201).json({
        success:true,
        users
    })
})
exports.user = functions.https.onRequest(app)

