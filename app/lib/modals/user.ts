import {Schema, model, models} from "mongoose";

const UserSchema = new Schema(
    {
        email: {type: "string", required: true, unique: true},
        username: {type: "string", required: true, unique: true},
        password: {type: "string", required: true},
    },
    //when new user gets created or updated it creates a timestamp in the db
    {
        timestamps: true
    }
)

const User = models.User || model("User", UserSchema);

export default User;