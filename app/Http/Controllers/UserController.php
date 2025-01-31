<?php

namespace App\Http\Controllers;

use App\Models\Groups;
use App\Models\Leaders;
use App\Models\Members;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\admin;
use Laravel\Sanctum\HasApiTokens;

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
        $group_id_card = $request->file('id_card');
        $pathIdCard = $group_id_card->move('uploads', $group_id_card->getClientOriginalName());

        $leader = Leaders::create($input->validated());
        $group->update([
            'leader_id' => $leader->leader_id
        ]);
        return response()->json(['message' => 'Leader has been added to your team'], 200);
    }


    //userdashboard
    public function userDashboard(){
        $group=Groups::all();
        return response()->json(['success' => true, 'Group' => $group], 200);
    }

    public function adminLogin(Request $request){
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if (!Auth::guard('admin')->attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $admin = Auth::guard('admin')->user();
        $token = $admin->createToken('authAdminToken')->accessToken;

        return response()->json([
            'message' => 'Admin login successful',
            'access_token' => $token,
        ], 200);
    }

    //adminview
    public function adminView(){
        $group=Groups::all();
        return response()->json(['success' => true, 'Group' => $group], 200);
    }



        //Update Group
    public function save(Request $request){
        $Grouppy = new Groups;

        try{
            $Grouppy->binusian = $request->binusian;
            $Grouppy->date_created = $request->date_created;
            $Grouppy->password = $request->password;
            $Grouppy->leader_id = $request->leader_id;
            $Grouppy->group_name = $request->group_name;
            $Grouppy->save();
        }catch(\Exception $e){
            return response()->json(['error'=>$e->getMessage()],500);
        }
        return response()->json([
            'success'=>true,
            'group_data'=>$Grouppy
        ]);
    }

    // Update Group
    public function groupUpdate($group_id, Request $request) {
        $groupToUpdate = Groups::find($group_id);

        if (!$groupToUpdate) {
            return response()->json(['error' => 'Group not found'], 404);
        }

        $groupToUpdate->binusian = $request->binusian;
        $groupToUpdate->date_created = $request->date_created;
        $groupToUpdate->leader_id = $request->leader_id;
        $groupToUpdate->group_name = $request->group_name;

        $groupToUpdate->save();

        return response()->json([
            'success' => true,
            'message' => 'Group has been updated successfully',
            'new_group_data' => $groupToUpdate
        ], 200);
    }

    // Delete Group
    public function groupDelete($group_id) {
        $group = Groups::find($group_id);

        if (!$group) {
            return response()->json(['error' => 'Group not found'], 404);
        }

        $group->delete();

        return response()->json([
            'success' => true,
            'message' => 'Group has been deleted successfully'
        ], 200);
    }
}
