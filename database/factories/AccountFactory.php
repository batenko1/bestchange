<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AccountFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        $date = now()->subDays($this->faker->numberBetween(1, 10));
        return [
            'name' => $this->faker->name,
            'created_at' => $date,
            'email' => $this->faker->email,
            'referrer_id' => $this->faker->numberBetween(1, 2000),
            'password' => $this->faker->password
        ];
    }
}
