import {Schema, model} from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: Date,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        maxLength: 13
    },
    gender: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    },
    active: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
}
);

const userModel = new model("Users", userSchema);

export default userModel;