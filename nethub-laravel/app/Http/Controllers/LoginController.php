<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Check if the user exists
        $user = User::where('email', $validatedData['email'])->first();

        if (!$user) {
            return response()->json(['error' => 'User does not exist'], 404);
        }

        // Check if the provided password is correct
        if (!Hash::check($validatedData['password'], $user->password)) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }

        // Attempt to log the user in with the validated credentials
        if (Auth::attempt($validatedData)) {
            // If authentication is successful, create a new token
            $token = Auth::user()->createToken('nethub')->plainTextToken;

            // Return the token in a success response
            return response()->json(['token' => $token], 200);
        }

        // If authentication fails, return an error message
        return response()->json(['error' => 'Invalid credentials'], 401);
    }
}
