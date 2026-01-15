import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types para o banco de dados
export type MoodEntry = {
  id: string
  user_id: string
  mood_value: number
  notes?: string
  created_at: string
}

export type MeditationSession = {
  id: string
  user_id: string
  meditation_id: number
  duration: number
  completed: boolean
  created_at: string
}

export type UserProfile = {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  preferences?: {
    notifications: boolean
    theme: 'light' | 'dark'
    language: string
  }
  created_at: string
  updated_at: string
}

// Funções auxiliares para mood tracking
export async function saveMoodEntry(userId: string, moodValue: number, notes?: string) {
  const { data, error } = await supabase
    .from('mood_entries')
    .insert({
      user_id: userId,
      mood_value: moodValue,
      notes: notes || null,
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getMoodEntries(userId: string, limit = 30) {
  const { data, error } = await supabase
    .from('mood_entries')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) throw error
  return data
}

// Funções auxiliares para meditações
export async function saveMeditationSession(
  userId: string,
  meditationId: number,
  duration: number,
  completed: boolean
) {
  const { data, error } = await supabase
    .from('meditation_sessions')
    .insert({
      user_id: userId,
      meditation_id: meditationId,
      duration,
      completed,
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getMeditationStats(userId: string) {
  const { data, error } = await supabase
    .from('meditation_sessions')
    .select('*')
    .eq('user_id', userId)
    .eq('completed', true)

  if (error) throw error
  
  const totalSessions = data.length
  const totalMinutes = data.reduce((sum, session) => sum + session.duration, 0)
  
  return {
    totalSessions,
    totalMinutes,
    averagePerSession: totalSessions > 0 ? totalMinutes / totalSessions : 0,
  }
}

// Funções auxiliares para perfil do usuário
export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data
}

export async function updateUserProfile(userId: string, updates: Partial<UserProfile>) {
  const { data, error } = await supabase
    .from('user_profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()

  if (error) throw error
  return data
}
