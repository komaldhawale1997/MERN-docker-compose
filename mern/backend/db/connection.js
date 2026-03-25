import { MongoClient, ServerApiVersion } from "mongodb";

const URI = "mongodb://database:27017";

const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("MongoDB connected ✅ ");
  db = client.db("employees");
} catch (err) {
  console.error(err);
}

export default db;
