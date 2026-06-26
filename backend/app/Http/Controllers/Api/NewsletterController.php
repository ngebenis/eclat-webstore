<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewsletterRequest;
use App\Models\NewsletterSubscriber;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    /**
     * POST /api/newsletter/subscribe
     */
    public function subscribe(NewsletterRequest $request): JsonResponse
    {
        $subscriber = NewsletterSubscriber::updateOrCreate(
            ['email' => $request->email],
            [
                'name'             => $request->name,
                'is_active'        => true,
                'subscribed_at'    => now(),
                'unsubscribed_at'  => null,
                'ip_address'       => $request->ip(),
            ],
        );

        $created = $subscriber->wasRecentlyCreated;

        return response()->json([
            'data'    => ['subscribed' => true],
            'message' => $created
                ? 'Berhasil berlangganan! Cek inbox Anda untuk konfirmasi.'
                : 'Email Anda sudah terdaftar. Terima kasih!',
            'status'  => $created ? 201 : 200,
        ], $created ? 201 : 200);
    }

    /**
     * DELETE /api/newsletter/unsubscribe
     */
    public function unsubscribe(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'email' => ['required', 'email'],
        ]);

        $subscriber = NewsletterSubscriber::where('email', $validated['email'])->first();

        if ($subscriber) {
            $subscriber->update([
                'is_active'       => false,
                'unsubscribed_at' => now(),
            ]);
        }

        return response()->json([
            'data'    => ['unsubscribed' => true],
            'message' => 'Anda berhasil berhenti berlangganan.',
            'status'  => 200,
        ]);
    }
}
