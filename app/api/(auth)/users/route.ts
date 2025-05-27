import connect from "@/app/lib/db";
import User from "@/app/lib/modals/user";
import { Types } from "mongoose";
import { NextResponse } from "next/server"

//check mongodb for existing data and is in correct format - used for updating data
const ObjectId = require("mongoose").Types.ObjectId;



export const GET = async () => {
    //get api for new users
    try {
        await connect(); //need to try connecting to db before anything else
        const users = await User.find() //name of model we created imported from lib and we are using the find function to return all the users in db
        return new NextResponse(JSON.stringify(users), {status: 200});
    } catch (error: any) {
        return new NextResponse("Error in fetching users" + error.message, {status: 500});
    }

};

export const POST = async (request:Request) => {
    try {
        const body = await request.json(); //gets data from the body
        await connect();
        //create instance for user
        const newUser = new User(body); //creates new instance of user with the data passed from client side and saved to db
        await newUser.save();

        return new NextResponse(
            JSON.stringify({message: "User is created", user: newUser}), {status: 200}
        );

    }catch (error:any) {
        return new NextResponse("Error in creating user" + error.message, {status:500});
    }
};

//if a user updates their data
export const PATCH = async (request: Request) => {
    try {
        //get data that needs to be updated
        const body = await request.json();
        const {userId, newUsername} = body; //grabbing it from body

        await connect();
        //error handling if data not found or invalid
        if (!userId || !newUsername) {
            return new NextResponse(
                JSON.stringify({message: "ID or new username not found"}), {status:400}
            );
        }

        if (!Types.ObjectId.isValid(userId)) {
            return new NextResponse(
                JSON.stringify({message: "Invalid user id"}), {status:400}
            );
        }

        //find if user exists and if it does update with the new data
        const updatedUser = await User.findOneAndUpdate (
            {_id: new ObjectId(userId)},
            {username: newUsername},
            {new: true}
        );

        //check if user got updated or not - if it errored
        if(!updatedUser) {
            return new NextResponse(
                JSON.stringify({message: "User not found in database"}), {status: 400}
            );
        }

        return new NextResponse (
            JSON.stringify({message: "User has been updated", user: updatedUser}), {status: 200}
        );

    }catch (error: any) {
        return new NextResponse("Error in updating user" + error.message, {status: 500});
    }
};

//delete request
export const DELETE = async (request: Request) => {
    try {
        //find the user params to delete - receive it through the url
        const {searchParams} = new URL (request.url);
        const userId = searchParams.get('userId');
        //check if user id actually exists or not
        if (!userId) {
            return new NextResponse (
                JSON.stringify({message: "ID or username not found"}), {status: 400}
            );
        }

        //verify if user id is valid or not
        if (!Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({message: "Invalid user id"}), {status:400});
        }
        //connect with database
        await connect();
        //find and delete the id that is being recieved from url
        const deletedUser = await User.findByIdAndDelete(
            new Types.ObjectId(userId)
        );
        //check if there is no error and return response
        if (!deletedUser) {
            return new NextResponse(
                JSON.stringify({message: "User not found in database"}), {status: 400}
            );
        }
        //return response that it was successfully deleted
        return new NextResponse(
            JSON.stringify({message: "User was deleted", user: deletedUser}), {status: 200}
        );
    } catch (error: any) {
        return new NextResponse("Error in deleting user" + error.message, {status:500});
    }
};