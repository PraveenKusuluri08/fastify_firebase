import * as admin from "firebase-admin"


import * as serviceAccount from "./admin.json"

admin.initializeApp({

    credential: admin.credential.cert(serviceAccount as any),
    databaseURL: "https://fastify-fb-curd-default-rtdb.firebaseio.com"
});

const db = admin.firestore()
const auth = admin.auth()

export {db,auth}