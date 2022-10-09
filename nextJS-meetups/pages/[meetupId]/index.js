import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  const router = useRouter();
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://sojeong:${process.env.NEXT_PUBLIC_PASSWORD}@cluster0.ujbdnkg.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: true,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetups
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    `mongodb+srv://sojeong:${process.env.NEXT_PUBLIC_PASSWORD}@cluster0.ujbdnkg.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetups = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetups._id.toString(),
        title: selectedMeetups.title,
        address: selectedMeetups.address,
        image: selectedMeetups.image,
        description: selectedMeetups.description,
      },
    },
  };
}

export default MeetupDetails;
