<?php

namespace App\Widgets;

use App\Account;
use App\Models\Direction;
use App\Models\Exchanger;
use App\Models\User;
use App\Review;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Widgets\BaseDimmer;

class GlobalWidget extends BaseDimmer
{
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [];

    /**
     * Treat this method as a controller action.
     * Return view() or other content to display.
     */
    public function run()
    {

        $directions = Direction::count();
        $exchangers = Exchanger::count();
        $users = Account::withCount('referrers')->orderBy('referrers_count', 'desc')->take(10)->get();
        $reviews = Review::count();
        $accounts = Account::count();

        return view('admin.widgets.global', compact('directions', 'exchangers', 'users', 'reviews', 'accounts'));
    }

    /**
     * Determine if the widget should be displayed.
     *
     * @return bool
     */
    public function shouldBeDisplayed()
    {
//        return Auth::user()->can('browse', Voyager::model('Page'));
        return true;
    }
}
