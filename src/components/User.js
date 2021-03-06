import React from 'react';
import firebase from 'firebase'

function User () {
    return (
        <form>
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
          />
          <button type="submit">Submit</button>
        </form>
    );
}

export default User;

function writeUserData(userId, name, email) {
  firebase.database().ref('user/' + userId).set({
    name: name,
    email: email,
  });
}