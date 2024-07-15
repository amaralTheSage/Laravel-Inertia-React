<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [PostController::class, 'index'])->name('feed');
Route::resource('posts', PostController::class)->except('index');


// Route::inertia('/', 'Home');