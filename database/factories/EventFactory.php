<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $startDate = Carbon::today()->addDays(rand(0, 365))->format('Y-m-d');
        $endDate = Carbon::parse($startDate)->addDays(rand(1,365))->format('Y-m-d');
        return [
            'title'=>$this->faker->word,
            'description'=>$this->faker->text,
            'start_date'=>$startDate,
            'end_date'=>$endDate,
        ];
    }
}
