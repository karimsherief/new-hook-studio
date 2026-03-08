# Hook Studio

Next.js app with Supabase: landing page, public booking form, and a simple admin dashboard to manage bookings.

## Setup

1. **Environment**
   - Copy `.env.example` to `.env.local`
   - Create a project at [Supabase](https://supabase.com) and add:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

2. **Database**
   - In Supabase Dashboard → SQL Editor, run the SQL in `supabase/schema.sql`.

3. **Auth**
   - In Supabase Dashboard → Authentication → Providers, enable Email and set up sign-in (e.g. email + password).
   - Create a single user for yourself in Supabase – this will be the only admin account.

4. **Run**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` — Landing page (image slider, about, services)
- `/book-project` — Public booking form (no login required)
- `/login` — Admin sign-in (Supabase email/password)
- `/admin` — Admin bookings dashboard (requires sign-in)

## Project structure

- `src/app/(auth)` — Login, auth callback
- `src/app/(admin)` — Admin layout and bookings dashboard
- `src/app/(user)` — Public booking page
- `src/app/api` — API routes (booking, signout)
- `src/components` — UI, auth, admin, user components
- `src/lib` — Supabase clients, auth helpers, DB helpers
- `src/types` — Shared types
