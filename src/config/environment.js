import "dotenv/config";

const Config = {
    port: process.env.PORT,
    mongoUri: process.env.MONGODB_URI,
    dbName: process.env.MONGO_DBNAME,
};

export default Config