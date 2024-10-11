import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['client', 'trainer'], required: true },
  // Add more fields as needed (e.g., name, profile info)
});

export default mongoose.model('User', userSchema);