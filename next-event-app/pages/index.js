import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage(props) {
  const { events } = props;

  return (
    <div>
      <ul>
        <EventList items={events} />
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
}

export default HomePage;
