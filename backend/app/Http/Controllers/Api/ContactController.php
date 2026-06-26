<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Models\ContactMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    /**
     * POST /api/contact
     */
    public function store(ContactRequest $request): JsonResponse
    {
        $message = ContactMessage::create([
            ...$request->validated(),
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'status'     => ContactMessage::STATUS_NEW,
        ]);

        // Optionally dispatch a notification email
        // Mail::to(config('mail.admin_address', 'hello@eclat.id'))
        //     ->queue(new NewContactMessageMail($message));

        return response()->json([
            'data'    => ['id' => $message->id],
            'message' => 'Pesan Anda berhasil terkirim. Tim kami akan merespons dalam 1×24 jam kerja.',
            'status'  => 201,
        ], 201);
    }
}
