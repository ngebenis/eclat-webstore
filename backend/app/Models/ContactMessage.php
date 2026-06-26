<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactMessage extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'subject',
        'message',
        'status',
        'ip_address',
        'user_agent',
    ];

    protected $casts = [
        'status' => 'string',
    ];

    const STATUS_NEW      = 'new';
    const STATUS_READ     = 'read';
    const STATUS_REPLIED  = 'replied';
    const STATUS_ARCHIVED = 'archived';

    /* ── Scopes ──────────────────────────────────────────────────────── */
    public function scopeUnread($query)
    {
        return $query->where('status', self::STATUS_NEW);
    }
}
