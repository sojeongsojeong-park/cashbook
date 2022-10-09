import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import React from "react";

const HomePage = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Next Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active Next meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://sojeong:${process.env.NEXT_PUBLIC_PASSWORD}@cluster0.ujbdnkg.mongodb.net/meetups?retryWrites=true&w=majority`
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
