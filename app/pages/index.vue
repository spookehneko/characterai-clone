<template>
	<div>
		<Dashboard v-if="loggedIn" />
		<Landing v-else />
	</div>
</template>

<script setup lang="ts">
	const loggedIn = ref(true)
</script>

