import { createClient } from "@supabase/supabase-js/dist/index.cjs";
const supabaseurl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
export const supabase = createClient(supabaseurl,supabaseKey)