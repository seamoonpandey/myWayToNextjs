import { useRef, useState } from "react";

function HomePage() {

  const [feedbackItems, setFeedbackItems] = useState([]);


  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    const reqBody = { email: enteredEmail, text: enteredFeedback };


    if (enteredEmail === "" || enteredFeedback === "") {
      alert("Please fill out all the fields");
    }
    console.log(enteredEmail);
    console.log(enteredFeedback);
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',

      }
    }).then((response) => response.json())
      .then((data) => console.log(data)); //{email:'test@test.com' , text:'some feedback'}
  }

  function loadFeedbackHandler() {
    fetch('/api/feedback')
      .then((response) => response.json())
      .then((data) => {
        setFeedbackItems(data.feedback);
      }); //{email:'test@test.com' , text:'some feedback'}

  }



  return (
    <div>
      <h1>The Home Page</h1>
      <form>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Email Address</label>
          <textarea id='feedback' rows='5' ref={feedbackInputRef} />
        </div>
        <button type="button" onClick={submitFormHandler}>Send feedback</button>
      </form>
      <hr />
      <button type="button" onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>
    </div>
  );
}

export default HomePage;