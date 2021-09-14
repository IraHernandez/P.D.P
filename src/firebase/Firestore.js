import { db } from "./FirebaseConfig";

// Add a new document with a generated id.
export const addRole = (role) => {
    db.collection("Roles").add(role)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }






