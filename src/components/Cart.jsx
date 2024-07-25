import React from 'react';
import { useParams } from 'react-router-dom';

const Cart = ({ launches }) => {
  const { id } = useParams();
  const launch = launches.find((launch) => launch.flight_number === parseInt(id));

  if (!launch) return <div>Loading...</div>;

  return (
    <div className="cart">
      <h3>Details for {launch.mission_name}</h3>
      <p><strong>Rocket Name:</strong> {launch.rocket.rocket_name}</p>
      <p><strong>Launch Site:</strong> {launch.launch_site.site_name_long}</p>
      <p><strong>Launch Success:</strong> {launch.launch_success ? "Successful" : "Failed"}</p>
      <p><strong>Payload:</strong> {launch.rocket.second_stage.payloads.map(payload => payload.payload_id).join(', ')}</p>
      {launch.links.article_link && (
        <p><strong>Article:</strong> <a href={launch.links.article_link} target="_blank" rel="noopener noreferrer">Read more</a></p>
      )}
      {launch.links.video_link && (
        <p><strong>Video:</strong> <a href={launch.links.video_link} target="_blank" rel="noopener noreferrer">Watch</a></p>
      )}
    </div>
  );
};

export default Cart;
