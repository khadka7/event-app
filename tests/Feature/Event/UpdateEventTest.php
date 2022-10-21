<?php

namespace Tests\Feature\Event;

use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UpdateEventTest extends TestCase
{
    use DatabaseMigrations, WithFaker;

    /**
     * @test
     */
    public function update_event_requires_value()
    {
        $event = Event::factory()->create()->toArray();
        $this->put('/api/events/'.$event['id'])
            ->assertStatus(422);
    }

    /**
     * @test
     */
    public function failed_to_fetch_event(){
        $randomText = 'test';
        $event = Event::factory()->create()->toArray();
        $this->put('/api/events/'.$randomText,$event)
            ->assertStatus(400)
            ->assertJson([
                'success' => false,
                'code' => 400,
                'message' => 'No Event found.',
            ]);
    }

    /**
     * @test
     */
    public function update_event_start_date_must_be_less_than_end_date_value()
    {
        $startDate = Carbon::today()->addDays(rand(0, 365))->format('Y-m-d');
        $endDate = Carbon::parse($startDate)->subDays(rand(1, 365))->format('Y-m-d');
        $event = Event::factory()->create()->toArray();
        $data = [
            'title' => $this->faker->word,
            'description' => $this->faker->text,
            'start_date' => $startDate,
            'end_date' => $endDate,
        ];
        $this->put('/api/events/'.$event['id'], $data)
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
    public function can_update_event()
    {
        $event = Event::factory()->create()->toArray();
        $this->put('/api/events/'.$event['id'], $event)
            ->assertStatus(200)
            ->assertJson([
                'success' => true,
                'code' => 200,
                'message' => 'Event Updated.',
                'data' => $event
            ]);
    }
}
