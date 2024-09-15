// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

// Firebase configuration (same as in fcm_page.html)
var firebaseConfig = {
    apiKey: "AIzaSyCMfEhAeJE_BQ8eQyK6Mn52hiGf3LeXzcg",
    authDomain: "prasiddhaacharya-com-np.firebaseapp.com",
    projectId: "prasiddhaacharya-com-np",
    storageBucket: "prasiddhaacharya-com-np.appspot.com",
    messagingSenderId: "912047485186",
    appId: "1:912047485186:web:23dab6d9bc527d8a84d21b",
    measurementId: "G-TCFKJ034P3"
};

// Initialize Firebase in the service worker
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle background messages
messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Background message received: ", payload); // Log the background message

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    // Display the notification
    return self.registration.showNotification(notificationTitle, notificationOptions);
});
