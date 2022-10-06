<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        

        $data = file(__DIR__.'/currencies.txt');

        foreach ($data as $row) {
            $row = explode("\t", trim($row));        
            DB::table('currencies')->insert([
                'name' => $row[0],
                'short_name' => $row[1],
                'color_code' => trim($row[2]),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);
        }


        // //
    }
}
