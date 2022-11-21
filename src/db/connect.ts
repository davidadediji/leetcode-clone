import mongoose from "mongoose"

const connectionString = `mongodb+srv://davidadediji:doyindiji9@task-manager-express.l521szt.mongodb.net/?retryWrites=true&w=majority`

export const dbConnect = async () => {
    try {
        await mongoose.connect(connectionString)
        console.log('connected to db')
    } catch (error: any) {
        console.log(error.message)
    }
}
