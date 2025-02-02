<?php

namespace App\Http\Controllers;

use App\Models\Groups;
use App\Models\Leaders;
use App\Models\Members;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $request){
        $input = Validator::make($request->all(), [
            'group_name' => 'required',
            'binusian' => 'required',
            'password' => 'required',
            'group_members' => 'required'
        ]);

        if($input->fails()){
            return response()->json($input->errors(), 422);
        }

        // $request['password'] = bcrypt($request['password']);
        $group_members = $request['group_members'];

        $group = Groups::create([
            'group_name' => $request['group_name'],
            'binusian' => $request['binusian'],
            'password' => $request['password'],
            'date_created' => now()
        ]);

        foreach($group_members as $group_member){
            Members::create([
                'group_id' => $group->group_id,
                'member_name' => $group_member
            ]);
        }
        $token = $group->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Data has been added',
            'token' => $token
        ], status:200);
    }

    public function login(Request $request){
        $inputValidate = Validator::make($request->all(), [
            'member_name' => 'required',
            'password' => 'required'
        ]);

        if($inputValidate->fails()){
            return response()->json($inputValidate->errors(), status: 422);
        }

        $group_members = $request['member_name'];
        // $request['password'] = bcrypt($request['password']);
        try{
            foreach($group_members as $group_member){
                Members::where('member_name', $group_member)->firstOrFail();
            }
            $group = Groups::where('password', $request->password)->firstOrFail();

            $token = $group->createToken('auth_token')->plainTextToken;
            return response()->json([
                'token' => $token,
                "data" => [
                    "group_id" => $group->group_id,
                    "group_name" => $group->group_name,
                    "binusian" => $group->binusian,
                    "leader_id" => $group->leader_id
                ]
            ]);
        }catch(\Exception $th){
            return response()->json(["data" => $th->getMessage()]);
        }
    }

    public function logout(Request $request){
        auth('group')->user()->tokens()->delete();
        // dd(auth('group')->user());
        return response()->json([
            "message" => "Log Out Successfully"
        ], 200);
    }

    public function leaderRegister(Request $request){
        $user = auth('group')->user();

        $input = Validator::make($request->all(), [
            'full_name' => 'required',
            'email' => 'required',
            'whatsapp_number' => 'required',
            'github' => 'required',
            'line_id' => 'required',
            'birth_place' => 'required',
            'birth_date' => 'required',
            'cv' => 'required',
            'id_card' => 'required|image'
        ]);


        if ($input->fails()) {
            return response()->json([
                'success' => false,
                'message' => $input->errors() 
            ], 422);
        }

        $group = Groups::where('group_id', $user->group_id)->firstOrFail();
        
        // cv handling
        $cv = $request->file('cv');
        $pathCV = $cv->move('uploads', $cv->getClientOriginalName());
        
        // id_card handling
        $id_card = $request->file('id_card');
        $pathIdCard = $id_card->move('uploads', $id_card->getClientOriginalName());
        
        $leader = Leaders::create($input->validated());
        $group->update([
            'leader_id' => $leader->leader_id
        ]);
        return response()->json(['message' => 'Leader has been added to your team'], 200);
    }
}
