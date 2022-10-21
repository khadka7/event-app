<?php

namespace Tests\Feature\Event;

use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CreateEventTest extends TestCase
{
    use DatabaseMigrations, WithFaker;

    /**
     * @test
     */
    public function create_event_requires_value()
    {
        $this->post('/api/events')
            ->assertStatus(422);
    }

    /**
     * @test
     */
    public function create_event_start_date_must_be_less_than_end_date_value()
    {
        $startDate = Carbon::today()->addDays(rand(0, 365))->format('Y-m-d');
        $endDate = Carbon::parse($startDate)->subDays(rand(1, 365))->format('Y-m-d');
        $data = [
            'title' => $this->faker->word,
            'description' => $this->faker->text,
            'start_date' => $startDate,
            'end_date' => $endDate,
        ];
        $this->post('/api/events',$data)
            ->assertStatus(422)
            ->assertExactJson([
                'errors' =>
                    [
                        'start_date' => ['The start date must be a date before end date.'],
                        'end_date' => ['The end date must be a date after start date.'],
                    ]
            ]);
    }


    /**
     * @test
     */
    public function can_create_event()
    {
        $event = Event::factory()->make()->toArray();
        $this->post('/api/events', $event)
            ->assertStatus(201)
            ->assertJson([
                'success' => true,
                'code' => 201,
                'message' => 'Event Created.',
                'data' => $event
            ]);
    }
}
