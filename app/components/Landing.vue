<template>
	<div>
		<Navbar @open="openModal = true" />
		<main class="px-6 flex justify-center">
			<div class="flex flex-col">
				<div class="w-full h-full max-w-7xl">
					<h1 class="p-4 self-start w-full">For you</h1>
					<div class="flex gap-4">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
				<div class="w-full h-full max-w-7xl">
					<h1 class="p-4 self-start w-full">Try these</h1>
					<div class="flex gap-4">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
				<div class="w-full h-full max-w-7xl">
					<h1 class="p-4 self-start w-full">Featured</h1>
					<div class="flex gap-4">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
				<Modal v-show="openModal" @close="openModal = false" />
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
	const openModal = ref(false)
</script>


