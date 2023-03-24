import mongoose from "mongoose"

mongoose.set('strictQuery', false)

export const dbConnect = async (url:string) => {
    try {
        await mongoose.connect(url)
        console.log('connected to db')
    } catch (error: any) {
        console.log(error.message)
    }
}
