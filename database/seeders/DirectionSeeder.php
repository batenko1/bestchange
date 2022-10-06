<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class DirectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $currencyCount = DB::table('currencies')->count();

        for ($i=0; $i<=500; $i++) {
            DB::table('directions')->insert([                
                'to_currency_id' => mt_rand(1, $currencyCount),
                'from_currency_id' => mt_rand(1, $currencyCount),
                'exchanger_id' => 1,
                'type'=>mt_rand(1,3),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);
        }
 
    }
}
