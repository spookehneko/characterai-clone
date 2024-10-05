// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },

	future: {
		compatibilityVersion: 4,
	},

	modules: [
		'@nuxt/icon',
		'@nuxt/fonts',
		'@nuxtjs/tailwindcss',
		'@nuxt/image',
	],

	fonts: {
		families: [
			{ name: "Roboto Mono", provider: "fontsource" }
		]
	}
})
