<template>
	<div class="flex w-screen h-screen">
		<Sidebar />
		<div class="flex justify-center flex-grow px-5 py-6">
			<div class="w-full max-w-7xl flex flex-col gap-16">
				<div class="mt-[-12px] flex justify-between pr-10 items-center">
					<div class="flex gap-3 items-center">
						<div>
							<NuxtImg
								src="/botimg.png"
								width="34px"
								height="34px"
								format="webp"
								alt="Character.ai Logo"
							/>
						</div>
						<div class="flex flex-col">
							<h1>Character Assistant</h1>
							<h1 class="text-gray-400 text-sm">By @landon</h1>
						</div>
					</div>
					<div class="flex gap-3 items-center">
						<button class="cursor-pointer rounded-full">
							<Icon name="fluent:sound-wave-circle-16-filled" size="28px" />
						</button>
						<button class="cursor-pointer rounded-full">
							<Icon name="fluent:more-16-regular" size="28px" />
						</button>
					</div>
				</div>
				<main class="flex flex-col gap-10 items-center">
					<div class="flex flex-col items-center">
						<div>
							<NuxtImg
								src="/botimg.png"
								width="60px"
								height="60px"
								format="webp"
								alt="Character.ai Logo"
							/>
						</div>
						<h1>Character Assistant</h1>
						<p class="text-sm text-gray-400">Your AI work/study buddy</p>
						<p class="text-[0.75rem] text-gray-400">By @landon</p>
					</div>


					<div class="max-w-3xl w-full">
						Chat goes here
					</div>
				</main>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const { bot } = useRoute().params
</script>
