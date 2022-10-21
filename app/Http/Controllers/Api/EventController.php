<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\EventRequest;
use App\Repositories\EventRepository;
use App\Traits\ResponseMessage;
use Illuminate\Http\Request;

class EventController extends Controller
{
    use ResponseMessage;

    /**
     * @var EventRepository
     */
    private $repository;

    /**
     * @param EventRepository $repository
     */
    public function __construct(EventRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(Request $request)
    {
        $filters = $request->query->all();
        $events = $this->repository->get_all($filters);
        return $this->successResponse('Events Fetched.', $events);
    }

    public function show($id)
    {
        $event = $this->repository->get_one($id);
        if (!$event) return $this->failedResponse('No Event found.');
        return $this->successResponse('Event Fetched.', $event);
    }

    public function store(EventRequest $request)
    {
        try {
            $event = $this->repository->create($request->validated());
            return $this->successResponse('Event Created.', $event, 201);
        } catch (\Throwable $th) {
            return $this->failedResponse($th->getMessage());
        }
    }

    public function update(EventRequest $request, $id)
    {
        try {
            $event = $this->repository->update($request->validated(),$id);
            if (!$event) return $this->failedResponse('No Event found.');
            return $this->successResponse('Event Updated.', $event, 200);
        } catch (\Throwable $th) {
            return $this->failedResponse($th->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $event = $this->repository->delete($id);
            if (!$event) return $this->failedResponse('No Event found.');
            return $this->successResponse('Event Deleted.');
        } catch (\Throwable $th) {
            return $this->failedResponse($th->getMessage());
        }
    }

}
