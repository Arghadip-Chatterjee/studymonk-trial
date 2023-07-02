import React, { useState, useEffect } from "react";

const ClientReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch client reviews from an API or database
    fetchClientReviews()
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, []);

  const fetchClientReviews = async () => {
    // Example API endpoint to fetch client reviews
    const response = await fetch("https://api.example.com/client-reviews");
    const data = await response.json();
    return data;
  };

  return (
    <section className="client-reviews">
      <h2>Client Reviews</h2>
      <div className="review-cards">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <img src={review.image} alt="Client" />
            <div className="review-card-content">
              <h3>{review.name}</h3>
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;
