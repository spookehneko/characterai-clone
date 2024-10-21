// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },

	future: {
		compatibilityVersion: 4,
	},

	modules: [
		'@nuxt/icon',
		'@nuxt/fonts',
		'@nuxtjs/tailwindcss',
		'@nuxt/image',
		'@nuxtjs/supabase'
	],

	fonts: {
		families: [
			{ name: "Roboto Mono", provider: "fontsource" }
		]
	},

	supabase: {
		redirect: false
	}

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://knncsxqhpzwjsgtqhtqw.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
})
