import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
// import Todo from "../components/Todo";

const AllMeetUps = () => {
  const [meetups, setMeetups] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);

    fetch(
      "https://react-meetup-d9398-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let meetups = [];
        for (let key in data) {
          let meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setLoader(false);
        setMeetups(meetups);
      });
  }, []);

  if (loader) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      {/* <h1>My Todo</h1>
                  <Todo title="Learn React" description="Lorem ipsum..." /> */}
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
};

export default AllMeetUps;
