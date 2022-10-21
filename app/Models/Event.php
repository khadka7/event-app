<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $table = 'events';
    protected $guarded = ['id'];

    const UPCOMING_EVENT ='upcoming_event';
    const FINISHED_EVENT ='finished_event';
    const UPCOMING_SEVEN_DAY_EVENT ='upcoming_seven_day_event';
    const FINISHED_LAST_SEVEN_DAY_EVENT ='finished_last_seven_day_event';
}
