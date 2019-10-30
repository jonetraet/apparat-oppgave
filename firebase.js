import { firebase } from '@firebase/app';
import '@firebase/firestore'
import '@firebase/auth';

const config = {
    apiKey: "AIzaSyBPlALPE7FUuIx4vr5vw5EmlLLaFXCP4KE",
    authDomain: "apparat-oppgave.firebaseapp.com",
    databaseURL: "https://apparat-oppgave.firebaseio.com",
    projectId: "apparat-oppgave",
    storageBucket: "apparat-oppgave.appspot.com",
    messagingSenderId: "317285027699",
    appId: "1:317285027699:web:be39252dd624fa4526bf06",
    measurementId: "G-128MSH51MM"
};
firebase.initializeApp(config);


export default firebase;
export const app = firebase.app();
export const auth = firebase.auth();
