<template>
	<div class="flex w-screen h-screen">
		<Sidebar />
		<div class="flex justify-center flex-grow px-6 py-6">
			<div class="w-full max-w-7xl flex flex-col gap-3">
				<p class="p-4 mb-[-2em] text-gray-400">Welcome back,</p>
				<div class="flex justify-between">
					<section class="flex p-4 gap-2 items-center">
						<Icon name="line-md:account" />
						<h1 class="text-xl">Fustigate</h1>
					</section>
					<div class="text-sm bg-[#202024] w-full max-w-[412px] px-3 rounded-full flex items-center gap-2">
						<button class="mt-[5px] ml-2">
							<Icon name="mdi:magnify" size="1.5em" />
						</button>
						<div class="flex items-center w-full">
							<input placeholder="Search for characters" class="bg-transparent rounded-s flex-grow focus:outline-none" />
						</div>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="w-full h-full max-w-7xl">
						<h1 class="p-4 self-start w-full">For you</h1>
						<div class="flex gap-4">
							<Card imgsrc="/gojo.png" />
							<Card imgsrc="/frieren.png" />
							<Card imgsrc="/gojo.png" />
							<Card imgsrc="/frieren.png" />
						</div>
					</div>
					<div class="w-full h-full max-w-7xl">
						<h1 class="p-4 self-start w-full">Try these</h1>
						<div class="flex gap-4">
							<Card imgsrc="/gojo.png" />
							<Card imgsrc="/frieren.png" />
							<Card imgsrc="/gojo.png" />
							<Card imgsrc="/frieren.png" />
						</div>
					</div>
					<div class="w-full h-full max-w-7xl">
						<h1 class="p-4 self-start w-full">Featured</h1>
						<div class="flex gap-4">
							<Card imgsrc="/gojo.png" />
							<Card imgsrc="/frieren.png" />
							<Card imgsrc="/gojo.png" />
							<Card imgsrc="/frieren.png" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const isExpanded = ref(true)
</script>

