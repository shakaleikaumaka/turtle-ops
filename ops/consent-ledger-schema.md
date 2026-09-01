# consent-ledger.json — schema v1

Machine-readable consent state for every asset on the ShellPit. One file per pit (`consent-ledger.json` at site root). The ledger is the memory of the living door: **it never forgets a "no," and it never erases the difference between "assumed" and "yes."**

**2026-08-01 convention — collective camp-consensus grants:** when a whole camp/organizing body collectively says yes (declared by camp command after group decision), assets move `assumed → explicit` with `order_ref: shaka-<date>-consent-consensus`, a top-level `consensus_at` + `consensus_note`, and every surface states honestly that this is a COLLECTIVE grant, NOT per-person signatures. Per-person yeses keep arriving as ordinary `explicit-yes-<n>` upgrades; any single person still revokes instantly. The `pending → assumed → explicit` chain stays visible forever.

## Top level

```json
{
  "schema": "pit-consent-ledger/1",
  "pit": "shellpit",
  "policy": {
    "canon_order": "shaka-2026-08-01-consent-consensus",
    "principle": "living door — collective camp-consensus explicit grant (2026-08-01), instant takedown, per-person explicit yeses still collected",
    "takedown_sla_hours": 24,
    "stewards": "the pit fam — via the Admiral & Terri"
  },
  "contact": "consent@publicinform.com",
  "updated": "2026-07-29T00:00:00Z",
  "counts": { "assumed": 0, "explicit": 50, "revoked": 0, "total": 50 },
  "assets": [ ... ],
  "events": [ ... ]
}
```

- `updated` — last ledger mutation (ISO 8601, UTC).
- `counts` — **derived, never hand-edited**: recompute from `assets` on every write.

## Per-asset entry (`assets[]`)

```json
{
  "id": "1gRlmaTqhz1r3z26iDA-28FkPejous9t0",
  "type": "video | photo | audio | transcript",
  "path": "media/IMG_4359_2.mp4",
  "consent": "explicit",
  "stamped_at": "2026-08-01T20:09:00Z",
  "order_ref": "shaka-2026-08-01-consent-consensus",
  "history": [
    { "from": null,      "to": "pending",  "at": "2026-07-28T21:22:50Z", "by": "pit-bull",  "note": "ingested, nothing public" },
    { "from": "pending", "to": "assumed",  "at": "2026-07-29T00:00:00Z", "by": "shaka-order", "note": "full deploy blessed" },
    { "from": "assumed", "to": "explicit", "at": "2026-08-01T20:09:00Z", "by": "shaka-consensus-declaration", "note": "camp reached consent consensus — collective grant, hold lifted" }
  ]
}
```

| field | notes |
|---|---|
| `id` | stable asset id (Drive id / filename hash). Never reused, even after revocation. |
| `type` | `video`, `photo`, `audio`, `transcript`. Derived artifacts (thumbs, frames, mp3s) are covered by their parent's entry — list them in `path`-adjacent tooling, don't give them separate consent. |
| `consent` | current state, exactly one of: **`assumed`** — camp command assumed (overruleable instantly) · **`explicit`** — a yes: either the person said yes by name, OR a collective camp-consensus grant (always marked `order_ref: *-consent-consensus` + honest "collective, not per-person" framing — never presented as individual signatures) · **`revoked`** — pulled; do not republish without a fresh explicit yes. (`pending` exists only as a pre-launch history state — nothing public may be `pending`.) |
| `stamped_at` | when the current state began. |
| `order_ref` | which order/request caused the current state (`shaka-2026-07-29`, `takedown-<n>`, `explicit-yes-<n>`). |
| `history[]` | append-only transitions `{from,to,at,by,note}`. **Never rewrite or delete history.** `pending→assumed` stays visible forever — "assumed" is never laundered into "explicit." |

## Takedown / consent events (`events[]`)

Append-only log of every consent action — the paper trail for the promise:

```json
{
  "id": "takedown-0001",
  "kind": "takedown | explicit_yes | assumption",
  "received_at": "2026-08-02T14:10:00Z",
  "resolved_at": "2026-08-02T15:02:00Z",
  "via": "email:consent@publicinform.com",
  "requester_note": "one-word email: 'remove'",
  "asset_ids": ["1gRlmaTqhz1r3z26iDA-28FkPejous9t0"],
  "actions": ["media-pulled", "transcript-pulled", "search-index-purged", "frames-audio-purged", "ledger-stamped", "confirmation-sent"],
  "note": "resolved in 52min"
}
```

Rules:
- **Takedowns**: flip each asset to `revoked`, append `history`, add event with all `actions` checked off. `resolved_at - received_at` should be ≤ `takedown_sla_hours`; if not, the `note` says why — radical honesty.
- **Explicit yeses**: `assumed → explicit` with `order_ref: explicit-yes-<n>` and a celebratory event. Upgrades only — a yes is never downgraded except by that person.
- **Privacy**: events describe the *action*, not the person. No names, no email addresses, no identifying detail in the ledger — the ledger remembers decisions, not identities. (A revoked asset's `id`/`path` may be tombstoned to `"revoked"` once the file is gone, but `history` stays.)

🦀 *The ledger is the door's memory. Keep it honest and the door keeps working.*
