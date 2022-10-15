<?php

namespace App;

use App\Services\PaymentService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;


class CashbackRequest extends Model
{

    public function accountId() {
        return $this->belongsTo(Account::class, 'account_id');
    }

    public function save(array $options = [])
    {


        if(!$this->status || $this->status != request()->status || !$this->id) {
            $this->processed_at = now();
        }

//        $paymentService = new PaymentService();
//        $paymentService->create();

        parent::save($options);
    }


}
