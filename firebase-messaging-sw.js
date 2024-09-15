importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyCMfEhAeJE_BQ8eQyK6Mn52hiGf3LeXzcg",
    authDomain: "prasiddhaacharya-com-np.firebaseapp.com",
    projectId: "prasiddhaacharya-com-np",
    storageBucket: "prasiddhaacharya-com-np.appspot.com",
    messagingSenderId: "912047485186",
    appId: "1:912047485186:web:23dab6d9bc527d8a84d21b",
    measurementId: "G-TCFKJ034P3"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});