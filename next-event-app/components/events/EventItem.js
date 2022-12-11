import Link from "next/link";

import classes from "./EventItem.module.css";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt='' />
      <div className={classes.content}>
        <h2>{title}</h2>
        <div className={classes.date}>
          <time>{humanReadableDate}</time>
        </div>
      </div>
      <div className={classes.address}>
        <address>{formattedAddress}</address>
      </div>
      <div className={classes.actions}>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </li>
  );
};

export default EventItem;
