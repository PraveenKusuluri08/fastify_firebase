import {db} from "../../../../fbConfig/admin";


export const Test = async (req: any, reply: any) => {
    return db.collection("TEST").get().then((snap) => {
        return snap.docs
    }).then((doc) => {
        doc.forEach(doc => {
            console.log(doc.data())
             return reply.code(200).send({name: doc.data().name})
        })
    })
        .catch(err => {
            console.log(err)
            return reply.code(400).send({message: "Failed to get the data"})
        })
}

