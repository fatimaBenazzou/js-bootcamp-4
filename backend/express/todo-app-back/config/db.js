import mongoose from "mongoose";

mongoose.set("debug", true);

export async function connectDB() {
    mongoose
        .connect(process.env.MONGODB_URI, {
            dbName: process.env.MONGODB_DBNAME,
            auth: {
                username: process.env.MONGODB_USERNAME,
                password: process.env.MONGODB_PASSWORD,
            },
        })
        .then(() => {
            console.log(`DB Connected`);
        })
        .catch((err) => console.error("MongoDB connection error:", err));
}
