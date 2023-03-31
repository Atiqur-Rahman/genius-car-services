// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBB7bbYukyG1voaDIhyFslSpBMKaNuuInk',
    authDomain: 'genius-car-services-1da15.firebaseapp.com',
    projectId: 'genius-car-services-1da15',
    storageBucket: 'genius-car-services-1da15.appspot.com',
    messagingSenderId: '804568923751',
    appId: '1:804568923751:web:db6f7d846375f29b52dec2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
