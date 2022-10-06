<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Direction extends Model
{
    use HasFactory;

    public function fromCurrencyId() {
        return $this->belongsTo(Currency::class, 'from_currency_id');
    }

    public function toCurrencyId() {
        return $this->belongsTo(Currency::class, 'to_currency_id');
    }

    public function exchangerId() {
        return $this->belongsTo(Exchanger::class, 'exchanger_id');
    }
}
