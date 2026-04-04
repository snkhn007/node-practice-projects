const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/CompleteLoginAndSignup')
 .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("users", userSchema);