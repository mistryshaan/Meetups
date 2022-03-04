import { MongoClient } from "mongodb";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const data = request.body;

    const client = await MongoClient.connect(
      "mongodb+srv://shaan_mistry:SulKCLUTm9zWqSVA@cluster0.ublju.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const meetupCollections = client.db().collection("meetups");

    const result = await meetupCollections.insertOne(data);

    console.log(result);

    client.close();

    response.status(201).json({ message: "Meetup created" });
  }
}
