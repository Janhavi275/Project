const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const MovieReviews = require("./models/movieModel")
const app = express()
app.use(express.json())
app.use(cors())

// connect db using a existing db name
mongoose.connect("mongodb://localhost/MoviesDB",
    {
        useNewUrlParser : true
    }
).then(()=>{console.log("MongoDB connection Successful")})
.catch((err)=>{console.log("MongoDB connection Unsuccessful")})

app.route("/movies")
.get((req,res)=>
{
    MovieReviews.find().then((reviews)=>
    {
        res.status(200).json(reviews)
    }).catch((err)=>
    {
        res.status(404).send("An Error occurred")
    })
    // res.send("Following are the movie details")
})

.post((req,res)=>
{
    if (req.body)
    {
        const newReview = new MovieReviews(req.body)
        newReview.save()
        .then(()=>{
            console.log(req.body)
        res.send("Saved details successfully")})
        .catch(()=>
        {
            res.status(404).send("An error occurred")
        })
    }
    else
    {
        res.send("Please provide review")
    }
})

app.route('/movies/:id')
.put((req,res)=>
{
    const reviewid = req.params.id
    const updatedReview = req.body
    MovieReviews.findOne({id:{$eq:reviewid}}).then((review)=>
    {
        MovieReviews.findByIdAndUpdate(review._id,updatedReview,{new:true}).then(()=>
        {
            res.status(200).send("Updated review successfully")
        }).catch((err)=>{
            res.status(404).send("An error occurred")
        })
    })
    
})

.delete((req,res)=>
{
    const reviewid = req.params.id
    MovieReviews.findOneAndDelete({id:{$eq:reviewid}}).then(()=>
    {
        res.status(200).send("Deleted review successfully")
    }).catch((err)=>{
        res.status(404).send("An error occurred")
    })
})

app.listen(4000,()=>
{
    console.log("Connected to rating app")
})