import { MongoClient } from "mongodb";

async function connectDatabase() {
    const client = await MongoClient.connect(
        'mongodb+srv://pandey:NYLzd3tyo0Aq9ahf@cluster1.dmcghae.mongodb.net/events?retryWrites=true&w=majority'
    );

    return client;
}

async function insertDocument(client, document) {
    const db = client.db();

    await db.collection('newsletters').insertOne({ email: userEmail });
}

async function handler(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address' });
            return;
        }

        let client;

        try {
            client = await connectDatabase();
        } catch (error) {
            res.status(500).json({ message: 'Connecting through the database failed' });
            return;
        }

        try {
            await insertDocument(client, { email: userEmail });
            client.close();
        } catch (error) {
            res.status(500).json({ message: 'Inserting data failed' });
            return;
        }



        console.log(userEmail);
        res.status(201).json({ message: 'Signed Up' });
    }
}
export default handler;