<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
return new class extends Migration{public function up(){Schema::create('messages',function(Blueprint $t){$t->id();$t->foreignId('chat_room_id')->constrained();$t->string('user_id');$t->text('body');$t->timestamps();});}public function down(){Schema::dropIfExists('messages');}};