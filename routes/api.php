<?php

use App\Http\Controllers\LeaderController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use function Pest\Laravel\post;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
//Group Member
Route::post('/register', [UserController::class, 'register'])->name('Register');
Route::post('/login', [UserController::class, 'login'])->name('Login');
Route::post('/logout', [UserController::class, 'logout'])->name('Logout')->middleware('userAuth');
Route::post('/leader-registration', [UserController::class, 'leaderRegister'])->name('Leader.Register')->middleware('userAuth');
Route::PATCH('/update/{group_id}',[UserController::class,'groupUpdate'])->name('Update');
Route::DELETE('/delete/{group_id}',[UserController::class,'groupDelete'])->name('Delete');
//Admin
Route::get('/admin',[UserController::class,'adminView'])->name('AdminView');
Route::post('/admin-login',[UserController::class,'adminLogin'])->name('AdminLogin');
//user dash
Route::get('/user-dashboard',[UserController::class,'userDashboard'])->name('UserDashboard');
Route::get('')
