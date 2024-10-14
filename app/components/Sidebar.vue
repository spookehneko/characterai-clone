<template>
	<aside :class="{'w-[256px] bg-[#131316]': isExpanded, 'w-[64px] bg-transparent': !isExpanded}" class="transition-all duration-300 text-white h-full py-5 px-3">
		<div class="flex justify-between mb-4">
			<NuxtLink :class="{'opacity-0': !isExpanded}" class="flex items-center p-0 transition-opacity duration-300" to="/">
				<NuxtImg
					src="/logo.png"
					height="23px"
					format="webp"
					alt="Character.ai Logo"
				/>
			</NuxtLink>

			<button @click="() => {isExpanded = !isExpanded}" class="text-white focus:outline-none">
				<Icon :name="isExpanded ? 'mdi:menu-open' : 'mdi:menu'" size="1.5em" />
			</button>
		</div>

		<ul :class="{'opacity-100': isExpanded, 'opacity-0 pointer-events-none mr[-20]px': !isExpanded}" class="space-y-2 transition-opacity duration-300 text-sm">
			<button class="rounded-full py-3 px-4 bg-[#202024] flex gap-3 items-center hover:bg-[#45464a]">
				<Icon name="ep:plus" size="24" />
				<h1>Create</h1>
			</button>
			<button class="rounded-xl py-3 px-4 bg-[#202024] flex gap-3 items-center w-full hover:bg-[#45464a]">
				<Icon name="ep:compass" size="24" />
				<h1>Discover</h1>
			</button>
			<div class="bg-[#202024] w-full px-2 rounded-xl flex items-center gap-2 py-1">
				<button class="mt-[5px] ml-2">
					<Icon name="mdi:magnify" size="1.5em" />
				</button>
				<div class="flex items-center w-full">
					<input placeholder="Character search" class="bg-transparent rounded-s flex-grow focus:outline-none" />
				</div>
			</div>
			<h1 class="px-3 pt-7 text-gray-400 text-xs">Today</h1>
		</ul>
	</aside>
</template>

<script setup lang="ts">
const isExpanded = ref(false)
</script>
