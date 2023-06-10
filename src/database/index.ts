import mongoose, {ConnectOptions} from "mongoose";

const uri: string = process.env.DB_URI || '';
const connectionOptions: ConnectOptions = {
    autoIndex: false,
}
export const connectToDB = async (connectionURI?: string) => {
    try {
        await mongoose.connect(connectionURI || uri, connectionOptions);
        console.log("--> Connected to database");
    }
    catch (err) {
        let errorMessage = `Unable to connect to the database. \n${err}`;
        if(err instanceof Error){
            errorMessage = err.message;
        }
        throw new Error(errorMessage);
    }
}

export const disconnectFromDB = async () => {
    try {
        await mongoose.disconnect();
        console.log("--> Disconnected from database");
    }
    catch (err) {
        let errorMessage = `Unable to disconnect from the database. \n${err}`;
        if(err instanceof Error){
            errorMessage = err.message;
        }
        throw new Error(errorMessage);
    }
};