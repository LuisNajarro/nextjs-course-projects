import EventItem from "@/components/events/event-item";

function EventList(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((event) => (
        <EventItem />
      ))}
    </ul>
  );
}

export default EventList;
