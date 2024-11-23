import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddReview() {
    const navigate = useNavigate();

    const idRef = useRef();
    const movieNameRef = useRef();
    const genreRef = useRef();
    const ratingRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            id: idRef.current.value,
            mvname: movieNameRef.current.value,
            genre: genreRef.current.value,
            rating: ratingRef.current.value,
        };

        axios
            .post("http://localhost:4000/movies", newReview)
            .then(() => {
                alert("Review added successfully!");
                navigate("/"); 
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
            <h1>Add New Review</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <label>ID</label>
                    <input
                        type="text"
                        ref={idRef}
                        className="form-control"
                        placeholder="Enter a unique ID"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Movie Name</label>
                    <input
                        type="text"
                        ref={movieNameRef}
                        className="form-control"
                        placeholder="Enter movie name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Genre</label>
                    <input
                        type="text"
                        ref={genreRef}
                        className="form-control"
                        placeholder="Enter genre"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Rating</label>
                    <input
                        type="number"
                        ref={ratingRef}
                        className="form-control"
                        placeholder="Enter rating (1-5)"
                        min="1"
                        max="5"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Add Review
                </button>
            </form>
        </div>
    );
}

export default AddReview;
