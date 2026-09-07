import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL) ||
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SUPABASE_URL) ||
  (typeof process !== 'undefined' && process.env?.SUPABASE_URL) ||
  'https://ecinxcbbwvdvboksmewr.supabase.co';

const supabaseAnonKey = 
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY) ||
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY) ||
  (typeof process !== 'undefined' && process.env?.SUPABASE_ANON_KEY) ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaW54Y2Jid3ZkdmJva3NtZXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg3NjI4ODYsImV4cCI6MjEwNDMzODg4Nn0.ovapW4oAarzA9EMIHcQJCaXegdZ50aIktIGm-4_atI8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
