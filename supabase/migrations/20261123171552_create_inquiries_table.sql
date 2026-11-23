/*
# Create inquiries table for contact form submissions

1. New Tables
- `inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the person contacting
  - `email` (text, not null) — email to reply to
  - `company` (text, nullable) — optional company name
  - `profile` (text, nullable) — which service track they're interested in ("shenzhen" or "ningbo")
  - `message` (text, not null) — the inquiry body
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `inquiries`.
- Grant INSERT to `anon, authenticated` so the public contact form can submit.
- Grant SELECT/UPDATE/DELETE to `authenticated` so the owner can read/manage inquiries after sign-in (no sign-in UI yet, but reserved).
- No public SELECT: inquiries are private messages, not shared data.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  profile text,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON inquiries TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON inquiries TO authenticated;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries"
ON inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_inquiries" ON inquiries;
CREATE POLICY "auth_select_inquiries"
ON inquiries FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "auth_update_inquiries" ON inquiries;
CREATE POLICY "auth_update_inquiries"
ON inquiries FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_inquiries" ON inquiries;
CREATE POLICY "auth_delete_inquiries"
ON inquiries FOR DELETE
TO authenticated
USING (true);
