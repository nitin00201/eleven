import { connectDB } from "./lib/mongodb.js";
import Audio from "./models/Audio.js";

async function seed() {
  await connectDB();

  await Audio.deleteMany();

  await Audio.insertMany([
    {
      language: "english",
      url: "https://example.com/audio/english.mp3",
    },
    {
      language: "arabic",
      url: "https://example.com/audio/arabic.mp3",
    },
  ]);

  console.log("✅ Database seeded");
  process.exit();
}

seed();
