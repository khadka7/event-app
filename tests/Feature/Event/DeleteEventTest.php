<?php

namespace Tests\Feature\Event;

use App\Models\Event;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DeleteEventTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     */
    public function failed_to_fetch_event()
    {
        $randomText = 'test';
        $this->delete('/api/events/' . $randomText)
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
    public function can_delete_event()
    {
        $event = Event::factory()->create()->toArray();
        $this->delete('/api/events/' . $event['id'])
            ->assertStatus(200)
            ->assertJson([
                'success' => true,
                'code' => 200,
                'message' => 'Event Deleted.',
                'data'=>[]
            ]);
    }
}
