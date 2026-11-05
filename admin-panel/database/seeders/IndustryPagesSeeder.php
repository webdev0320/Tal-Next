<?php

namespace Database\Seeders;

use App\Models\IndustryPages as IndustryPagesModel;
use Illuminate\Database\Seeder;

class IndustryPagesSeeder extends Seeder
{
    public function run(): void
    {
        IndustryPagesModel::sync();
    }
}
