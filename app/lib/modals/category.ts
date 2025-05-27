import { Schema, model, models } from "mongoose";

const CategorySchema = new Schema(
    {
        title: {type: "string", required: true},
        //say that this user created this category - adds reference to user model
        user:{type: Schema.Types.ObjectId, ref: "User"} 
    },
    {
        timestamps: true,
    }
);

const Category = models.Category || model("Category", CategorySchema);

export default Category;