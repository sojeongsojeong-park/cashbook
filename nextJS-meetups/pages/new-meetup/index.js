import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHandler = () => {};
  return (<NewMeetUpForm onAddMeetup={addMeetupHandler} />);
};

export default NewMeetupPage;
