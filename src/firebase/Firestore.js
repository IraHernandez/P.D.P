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

export const getUser = (userState) => {
    db.collection("Users").onSnapshot((querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id });

        });
        return userState(users)
    });
}






