import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../helper/api";
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

export default function AllEventsPage(props) {

    const router = useRouter();
    const { events } = props;


    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }


    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </Fragment>
    )
}

export async function getStaticProps() {
    const events = await getAllEvents();

    return (
        {
            props: {
                events: events,
            },
            revalidate: 60
        }
    )

}