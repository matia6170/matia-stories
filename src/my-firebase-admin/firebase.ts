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
app = admin.apps.length==0?admin.initializeApp(process.env.FIREBASE_ADMIN_CONFIG):app;
const db = admin.firestore();

export {app, db};
