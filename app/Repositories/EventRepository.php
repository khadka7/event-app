<?php

namespace App\Repositories;

use App\Models\Event;
use Carbon\Carbon;

class EventRepository extends BaseRepository
{
    /**
     * CategoryRepository constructor.
     * @param Event $model
     */
    public function __construct(Event $model)
    {
        parent::__construct($model);
    }

    public function get_all($filters = [])
    {
        return $this->getQueries($filters)
            ->orderBy('start_date','ASC')
            ->get();
    }


    public function filterEventType($type, $data)
    {
        $now = Carbon::now()->format('Y-m-d');
        $upcomingSevenDays = Carbon::now()->addDays(7)->format('Y-m-d');
        $finishedLastSevenDays = Carbon::now()->subDays(7)->format('Y-m-d');
        switch ($type) {
            case Event::UPCOMING_EVENT:
                return $data->where('start_date', '>=', $now);
            case Event::FINISHED_EVENT:
                return $data->where('start_date', '<', $now);
            case Event::UPCOMING_SEVEN_DAY_EVENT:
                return $data->whereBetween('start_date', [$now,$upcomingSevenDays]);
            case Event::FINISHED_LAST_SEVEN_DAY_EVENT:
                return $data->whereBetween('start_date', [$finishedLastSevenDays,$now]);
            default:
                return null;
        }
    }

    protected function filterContent($data, $filters = [])
    {
        if (isset($filters['title'])) {
            $data->where('title', 'LIKE', '%' . $filters['title'] . '%');
        }
        if (isset($filters['start_date'])) {
            $data->where('start_date', '=', $filters['start_date']);
        }
        if (isset($filters['end_date'])) {
            $data->where('end_date', '=', $filters['end_date']);
        }
        if (isset($filters['active'])) {
            $data->where('active', '=', $filters['active']);
        }
        if (isset($filters['event_type'])) {
            return $this->filterEventType($filters['event_type'], $data);
        }
    }
}
