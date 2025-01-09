<?php

use App\Http\Controllers\LeaderController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use function Pest\Laravel\post;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/register', [UserController::class, 'register'])->name('Register');
Route::post('/login', [UserController::class, 'login'])->name('Login');
Route::post('/logout', [UserController::class, 'logout'])->name('Logout')->middleware('userAuth');
Route::post('/leader-registration', [UserController::class, 'leaderRegister'])->name('Leader.Register')->middleware('userAuth');