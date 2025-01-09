<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ms_leader', function (Blueprint $table) {
            $table->id('leader_id');
            $table->string('full_name');
            $table->string('email');
            $table->string('whatsapp_number');
            $table->string('line_id');
            $table->string('github');
            $table->string('birth_place');
            $table->date('birth_date');
            $table->longText('cv');
            $table->longText('id_card');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ms_leader');
    }
};
