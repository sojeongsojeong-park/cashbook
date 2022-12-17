import { Fragment } from "react";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/Events-search";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <Fragment>
      <EventsSearch />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
