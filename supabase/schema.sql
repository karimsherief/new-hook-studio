-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor) after creating your project.
-- Simple setup: only a public booking table.

-- Enable UUID extension if not already
create extension if not exists "uuid-ossp";

-- Booking (public form, no auth required for insert)
create table if not exists public.booking (
  id uuid primary key default uuid_generate_v4(),
  first_name text,
  last_name text,
  phone text,
  content_type text,
  account_link text,
  location text check (location in ('indoor', 'outdoor')),
  content_format text check (content_format in ('reels', 'podcast', 'video editing')),
  created_at timestamptz not null default now()
);

alter table public.booking enable row level security;

-- Anyone (even anonymous) can submit a booking
drop policy if exists "Anyone can insert booking" on public.booking;
create policy "Anyone can insert booking"
  on public.booking for insert
  with check (true);

-- Any authenticated user can read, update, and delete bookings.
-- In this project you will only create a single admin user in Supabase,
-- so that one user is effectively the admin.
drop policy if exists "Auth users can read booking" on public.booking;
create policy "Auth users can read booking"
  on public.booking for select
  using (auth.uid() is not null);

drop policy if exists "Auth users can update booking" on public.booking;
create policy "Auth users can update booking"
  on public.booking for update
  using (auth.uid() is not null);

drop policy if exists "Auth users can delete booking" on public.booking;
create policy "Auth users can delete booking"
  on public.booking for delete
  using (auth.uid() is not null);
