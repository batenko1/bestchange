<?php

namespace App\Http\Controllers;

use App\Account;
use App\CashbackRequest;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function getGraficUser() {

        $users = Account::selectRaw('count(*) as count_user, DATE_FORMAT(created_at, "%d %M") as day')
            ->groupBy(\DB::raw("DATE_FORMAT(created_at, '%d %M')"))
            ->take(30)
            ->get()
            ->reverse();

        $days = $users->pluck('day')->toArray();
        $countUsers = $users->pluck('count_user')->toArray();

        return compact('days', 'countUsers');

    }

    public function getNewRequests() {
        $cashbackRequests = CashbackRequest::where('status', 0)->count();

        return $cashbackRequests;
    }
}
