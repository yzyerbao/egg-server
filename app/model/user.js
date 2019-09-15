module.exports = app => {
    const mongoose = app.mongoose
    const UserSchema = new mongoose.Schema({
        mobile: {type: String, unique: true, required: true},
        password: {type: String, required: true},
        name: {type: String},
        createdAt: {type: Date, default: Date.now}
    });
    return mongoose.model('User', UserSchema)
}
