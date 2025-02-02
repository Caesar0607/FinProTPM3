<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Groups extends Model
{
    use HasFactory, HasApiTokens, Notifiable;
    protected $table = "ms_group";
    protected $primaryKey = "group_id";
    protected $fillable = [
        'group_name',
        'binusian',
        'date_created',
        'password',
        'leader_id'
    ];

    public function leader() : HasOne{
        return $this->hasOne(Leaders::class, 'leader_id');
    }

    public function member() : HasMany{
        return $this->hasMany(Members::class, 'group_id');
    }
}
