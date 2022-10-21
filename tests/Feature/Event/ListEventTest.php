<?php

namespace Tests\Feature\Event;

use App\Models\Event;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ListEventTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     */
    public function list_all_event()
    {
        $this->get('/api/events')
            ->assertStatus(200)
            ->assertJson([
                'success' => true,
                'code' => 200,
                'message' => 'Events Fetched.',
                'data' => []
            ]);
    }
}
