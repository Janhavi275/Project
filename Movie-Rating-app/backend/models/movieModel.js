const mongoose = require("mongoose")
// Creating a schema for your collection
const movieSchema = new mongoose.Schema(
    {'id':Number,'mvname':String , 'genre':String, 'rating':Number}
);

// Create a model using schema

const MovieReviews = mongoose.model('MovieReviews',movieSchema)
console.log(MovieReviews)

module.exports=MovieReviews