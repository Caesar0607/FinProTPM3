<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Members extends Model
{
    use HasFactory, HasApiTokens, Notifiable;
    protected $table = "ms_member";
    protected $fillable = [
        'group_id',
        'member_name'
    ];

    public function group() : BelongsTo{
        return $this->belongsTo(Groups::class, 'group_id');
    }
}
