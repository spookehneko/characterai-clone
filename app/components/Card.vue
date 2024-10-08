<template>
	<NuxtLink class="h-[140px] w-[312px] cursor-pointer">
		<div class="flex h-[140px] bg-[#202024] w-[312px] rounded-xl p-3 hover:bg-gray-800">
			<NuxtImg :src="imgsrc" width="90px" class="rounded-lg object-cover mr-3" />
			<div class="h-full flex flex-col justify-between">
				<h1>Character name</h1>
				<h1 class="text-sm text-gray-400">By @test</h1>
				<h1 class="text-sm">Greeting</h1>
				<div class="flex items-center gap-1">
					<Icon name="mdi:comment" size="0.8em" />
					<h1 class="text-sm">1m</h1>
				</div>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup lang="ts">
	defineProps(["imgsrc"])
</script>
