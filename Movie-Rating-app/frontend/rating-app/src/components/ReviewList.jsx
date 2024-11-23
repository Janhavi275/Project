import { useEffect, useState } from "react"
import axios from "axios"
function ReviewList()
{
    const [reviews, setReviews] = useState([])
    const [err, setErrors] = useState([])
    const fetchReviews=()=>
    {
        axios.get("http://localhost:4000/movies")
        .then((reviews)=>{
            setReviews(reviews.data)
            console.log(reviews.data)
        })
        .catch((err)=>
        {
            setErrors(err)
        })
    }

    const deleteReviews=(id)=>
    {
        if (window.confirm("Are you sure to delete?"))
        {
            axios.delete(`http://localhost:4000/movies/${id}`)
            .then(()=>{
                fetchReviews()
                alert("Deleted")
            })
            .catch((err)=>
            {
                console.log(err)
            })
        }
    }
    useEffect(()=>{fetchReviews()},[])
    return(
        <>
            <h1>Review List</h1>
            <table className="table table-bordered">
                <thead>
                    <tr><th>ID</th><th>Movie Name</th><th>Genre</th><th>Rating</th><th colSpan={2}>Action</th></tr>
                </thead>
                <tbody>
                    {reviews.map((r)=>(
                        <tr><td>{r.id}</td><td>{r.mvname}</td><td>{r.genre}</td><td>{r.rating}</td><td><button onClick={()=>deleteReviews(r.id)} className="btn btn-warning">Delete</button></td><td><a className="btn btn-secondary" href="/edit/{r.id}">Edit</a></td></tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ReviewList