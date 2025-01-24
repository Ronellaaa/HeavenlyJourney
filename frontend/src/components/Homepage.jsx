import react from 'react';
import j1 from '../assets/j(1).png';
import '../styles/homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <img src={j1} alt="j1" />
    </div>
  );
}
export default Homepage;