<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Leaders extends Model
{
    use HasFactory, HasApiTokens, Notifiable;
    protected $table = "ms_leader";
    protected $primaryKey = "leader_id";
    protected $fillable = [
        'full_name',
        'email',
        'whatsapp_number',
        'line_id',
        'github',
        'birth_place',
        'birth_date',
        'cv',
        'id_card'
    ];

    public function group() : BelongsTo{
        return $this->belongsTo(Groups::class, 'leader_id');
    }
}
