<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('directions', function (Blueprint $table) {
            $table->id();
            $table->float('rate', 8, 4)->default(0);
            $table->integer('from_currency_id')->index();
            $table->integer('to_currency_id')->index();
            $table->integer('exchanger_id')->index();
            $table->integer('type'); // 1 - top, 2 - digital, 3 - bank
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rates');
    }
};
