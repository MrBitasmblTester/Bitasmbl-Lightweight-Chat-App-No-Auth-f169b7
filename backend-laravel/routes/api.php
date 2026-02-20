<?php
use Illuminate\Support\Facades\Route;
Route::get('/health',fn()=>['ok'=>true]);
Route::get('/rooms','ChatRoomController@index');
Route::get('/rooms/{id}/messages','MessageController@index');