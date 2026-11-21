
/* Rupee Mart Firebase Cloud Messaging Service Worker */

importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD4iTJtzLZ4egz-iCpUIF8L4lV-a-Y7GKI",
  authDomain: "rupee-mart.firebaseapp.com",
  projectId: "rupee-mart",
  storageBucket: "rupee-mart.firebasestorage.app",
  messagingSenderId: "114105173221",
  appId: "1:114105173221:web:e783d45180c6c262bb800c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title =
    payload?.notification?.title ||
    payload?.data?.title ||
    'Rupee Mart Admin';

  const options = {
    body:
      payload?.notification?.body ||
      payload?.data?.body ||
      'You have a new update.',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    data: payload?.data || {}
  };

  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const target =
    event.notification?.data?.url || '/admin.html';

  event.waitUntil((async () => {
    const windows = await clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    });

    for (const client of windows) {
      if ('focus' in client) {
        await client.focus();

        if ('navigate' in client && target) {
          await client.navigate(target);
        }
        return;
      }
    }

    if (clients.openWindow) {
      await clients.openWindow(target);
    }
  })());
});
