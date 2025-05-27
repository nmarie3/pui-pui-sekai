import connect from "@/app/lib/db";
import User from "@/app/lib/modals/user";
import Category from "@/app/lib/modals/category";
import { Types } from "mongoose";
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
    try {
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");

    //check if user id exists and is valid
    if(!userId || !Types.ObjectId.isValid(userId)) {
        return new NextResponse(
            JSON.stringify({message: "Invalid or missing user id"}), {status: 400}
        );
    }
    }catch (error:any) {

    }
};