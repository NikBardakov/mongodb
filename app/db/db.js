var mongo = require("mongodb");


let db = connectDB();

async function connectDB() {
    let conn;
    let _db
    try {
        const connectionString = process.env.DB_URI || "mongodb://root:password@localhost:27017";
        const client = new mongo.MongoClient(connectionString);
        conn = await client.connect();
        _db = conn.db("petdb");

    } catch (e) {
        console.error(e);
    }

    return _db
}

module.export = db;