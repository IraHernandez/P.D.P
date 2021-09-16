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

export const getUsers = (userState) => {
    db.collection("Users").onSnapshot((querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id });

        });
        return userState(users)
    });
}
export const getUser = (userid) => db.collection("Users").doc(userid);







export const getSkills = (skillState) => {
    db.collection("HardSkills").onSnapshot((querySnapshot) => {
        const skills = [];
        querySnapshot.forEach((doc) => {
            skills.push({ ...doc.data(), id: doc.id });
        });
        return skillState(skills)
    });
}





