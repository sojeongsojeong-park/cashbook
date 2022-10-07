import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  const router = useRouter();
  return (
    <MeetupDetail
      image='https://cdn.pixabay.com/photo/2017/01/12/02/21/melbourne-1973533_1280.jpg'
      title='First Meetup'
      address='Some address 4, 12342 melbourne'
      description='This is a first meetup description!'
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: true ,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetups
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {},
    },
  };
}

export default MeetupDetails;
