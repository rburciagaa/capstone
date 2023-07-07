import "../styles/reserve.css";
import Form from '../components/Form';

const Reserve=() =>{
    return (
      <div className="reserve">
          <div className="container">
              <div className="text">
              <h2>Book a table with us!</h2>
                  <p>Enjoy a Mediterranean meal with our exclusive and tradicional recipes with a modern touch, in the most pleasant and elegant place in town.</p>
              </div>
              <div className="form">
                  <h1>Reserve a Table</h1>
                  <p>Input your data and be ready to enjoy a totally new experience at Little Lemon.</p>
                  <Form />
              </div>
          </div>
      </div>
    )
  }
  
  export default Reserve