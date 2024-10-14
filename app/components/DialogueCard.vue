<template>
	<div class="flex" :class="{'self-end': end}">
		<div v-if="!end" class="flex flex-col gap-2">
			<div class="flex gap-3 text-sm items-center">
				<div>
					<NuxtImg
						:src="img"
						width="24px"
						height="24px"
						format="webp"
						alt="User pfp"
					/>
				</div>
				<h1>{{ name }}</h1>
			</div>
			<div class="p-4 rounded-xl bg-[#26272b]">
				<h1>{{ content }}</h1>
			</div>
		</div>

		<div v-else class="flex flex-col gap-2 items-end">
			<div class="flex gap-3 text-sm items-center">
				<h1>{{ name }}</h1>
				<div>
					<NuxtImg
						:src="img"
						width="24px"
						height="24px"
						format="webp"
						alt="User pfp"
					/>
				</div>
			</div>
			<div class="p-4 rounded-xl bg-[#26272b]">
				<h1>{{ content }}</h1>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineProps(["name", "img", "content", "end"])
</script>

