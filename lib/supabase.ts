import { createClient } from "@supabase/supabase-js"

export const createSupabaseClient = () => {
     const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
     const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

     if (!url || !key) {
          console.error("Missing Supabase environment variables!");
     }

     return createClient(
          url!,
          key!,
          {
               global: {
                    fetch: async (url, options) => {
                         try {
                              return await fetch(url, options);
                         } catch (error) {
                              console.error("Supabase fetch failed. Check if project URL is correct/active:", url);
                              throw error;
                         }
                    }
               }
          }
     )
}