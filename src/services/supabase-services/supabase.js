import { createClient } from '@supabase/supabase-js'

// Create Supabase client
const supabase = createClient('https://nrfuhieqwsyaivtdfbsq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yZnVoaWVxd3N5YWl2dGRmYnNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU1MjQ2MzAsImV4cCI6MjAxMTEwMDYzMH0.IkPpMV43zKBmzNUWqMnxNqbsqADaCbetkKky0l0dhAg')
export default supabase