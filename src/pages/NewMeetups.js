import { useNavigate } from 'react-router-dom'

import NewMeetupform from "../components/meetups/NewMeetupform";

function NewMeetupsPage() {
    const navigate = useNavigate();
    function addMeetupHandler(meetupData) {
        fetch('https://react-learning-a6d20-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/');
        });

    }
    return (
        <section>
            <h1>Add meetup</h1>
            <NewMeetupform onAddMeetup={addMeetupHandler} />
        </section>
    )
}
export default NewMeetupsPage;