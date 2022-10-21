export default {
    /**Events */
   EVENT_LIST: "/api/events",
   EVENT_CREATE: "/api/events",
   EVENT_FIND: "/api/events/:id",
   EVENT_UPDATE: "/api/events/:id",
   EVENT_DELETE: "/api/events/:id",
};
export const eventTypes = [
    { value: 'upcoming_event', text: 'Upcoming Event' },
    { value: 'finished_event', text: 'Finished Event' },
    { value: 'upcoming_seven_day_event', text: 'Upcoming Seven Days Event' },
    { value: 'finished_last_seven_day_event', text: 'Finished Last Seven Days Event' },
]
