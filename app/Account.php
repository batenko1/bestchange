<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Account extends Model
{

    use HasFactory;

    public function referrerId() {
        return $this->belongsTo(self::class, 'referrer_id');
    }

    public function referrers() {
        return $this->hasMany(self::class, 'referrer_id');
    }
}
