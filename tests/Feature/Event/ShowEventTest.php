<?php

namespace Tests\Feature\Event;

use App\Models\Event;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ShowEventTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     */
    public function show_event()
    {
        $event = Event::factory()->create();
        $this->get('/api/events/'.$event->id)
            ->assertStatus(200)
            ->assertJson([
                'success' => true,
                'code' => 200,
                'message' => 'Event Fetched.',
                'data' => []
            ]);
    }

    /**
     * @test
     */
    public function failed_to_fetch_event(){
        $randomText = 'test';
        $this->get('/api/events/'.$randomText)
            ->assertStatus(400)
            ->assertJson([
                'success' => false,
                'code' => 400,
                'message' => 'No Event found.',
            ]);
    }
}
