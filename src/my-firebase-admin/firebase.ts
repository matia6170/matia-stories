import { getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const admin = require("firebase-admin");

const { initializeApp } = require("firebase-admin/app");

// let app = null;
// let db:FirebaseFirestore.Firestore|null = null;

// if (getApps().length === 0) {
//   app = initializeApp(process.env.FIREBASE_ADMIN_CONFIG);
//   db = getFirestore(app);
// }else {
//     db = getFirestore(getApps()[0]);
// }

let app = null;
app =
  admin.apps.length == 0
    ? admin.initializeApp({
        type: "service_account",
        project_id: "matiachoi",
        private_key_id: process.env.private_key_id,
        private_key: process.env.private_key,
        client_email: process.env.client_email,
        client_id: process.env.client_id,
        auth_uri: process.env.auth_uri,
        token_uri: process.env.token_uri, 
        auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url ,
        client_x509_cert_url: process.env.client_x509_cert_url,
        universe_domain: "googleapis.com",
      })
    : app;
const db = admin.firestore();

export { app, db };
