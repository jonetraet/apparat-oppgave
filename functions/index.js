const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express')
const cors = require

admin.initializeApp()
const db = admin.firestore()

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

exports.uploadFile = functions.https.onRequest((request, response) => {
    response.status(200).json({
        message: "HEI"
    })
});

exports.getPosts = functions.https.onRequest((request, response) => {
    admin
        .firestore()
        .collection('posts')
        .get()
        .then((data) => {
            let posts = [];
            data.forEach((doc) => {
                posts.push(doc.data());
            });
            return response.json(posts);
        })
        .catch(err)
        console.error(err)
});

exports.createPost = functions.https.onRequest((request, response) =>{
    const newPost = {
        author: 'Jonebass'
    };

    admin.firestore()
        .collection('posts')
        .add(newPost)
        .then(doc => {
            return response.json({message : `document ${doc.id} created successfully`});
        })
        .catch(err => {
            response.status(500).json({ error: 'something went wrong'});
            console.error(err)
        })
});

/* exports.createAPost = functions.https.onRequest((request, response) =>{
    const ref = db.collection('posts').add({
        text: 'Hello i a text'
    });

}); */