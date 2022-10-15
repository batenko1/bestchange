<?php

namespace Database\Seeders;

use App\Account;
use Illuminate\Database\Seeder;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Account::truncate();
        Account::factory()->count(2000)->create();
    }
}
