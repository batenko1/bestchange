<?php

use Illuminate\Support\Facades\Route;

Artisan::call('optimize:clear');
Artisan::call('view:clear');
Artisan::call('cache:clear');
Artisan::call('config:clear');

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/get-grafic-users', 'AdminController@getGraficUser');
Route::get('/get-new-requests', 'AdminController@getNewRequests');


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
