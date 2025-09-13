// models/Audio.js
import mongoose from "mongoose";

const AudioSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true,
    enum: ["english", "arabic"], // add more if needed
  },
  url: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Audio || mongoose.model("Audio", AudioSchema);
