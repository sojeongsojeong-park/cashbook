import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://cdn.pixabay.com/photo/2017/01/12/02/21/melbourne-1973533_1280.jpg",
    address: "Some address 4, 12342 melbourne",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375__480.jpg",
    address: "Some address 4, 12342 Sydney",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg",
    address: "Some address 8, 98302 Paris",
    description: "This is a third meetup!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://sojeong:12341234@cluster0.ujbdnkg.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 3600,
  };
}
// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res
//   return {
//     props:{
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export default HomePage;
