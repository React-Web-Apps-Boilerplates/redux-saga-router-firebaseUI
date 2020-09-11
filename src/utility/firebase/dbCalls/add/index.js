import { userCollectionRef } from "../../references";

const MERGE = { merge: true };

export const addUser = async (data) => {
    await userCollectionRef.doc(data.id).set(data, MERGE);
};
