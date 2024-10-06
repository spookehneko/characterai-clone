<template>
	<header>
		<nav class="flex gap-3 w-full justify-between py-5 px-2 text-sm">
			<section class="flex gap-4">
				<NuxtLink class="flex items-center p-0" to="/">
					<NuxtImg
						src="/logo.png"
						height="34px"
						format="webp"
						alt="Character.ai Logo"
					/>
				</NuxtLink>
				<div class="flex flex-row w-full gap-4 justify-start">
					<button class="text-black bg-white rounded-full py-2 px-4 hover:bg-gray-100">Sign Up to Chat</button>
					<button class="border-[1px] rounded-full px-4 border-[#2f3035] hover:bg-gray-900">Login</button>
				</div>
			</section>
			<section class="w-full md:w-full min-[140px] max-w-[412px] bg-[#202024] rounded-full px-2">
				<div class="h-10 w-full md:w-full min-[140px] max-w-[412px]">
					<div class="flex gap-2 w-full border-spacing-1 max-w-[412px] p-[10px]">
						<button>
							<Icon name="mdi:magnify" size="1.5em" />
						</button>
						<div class="flex items-center w-full">
							<input placeholder="Search" class="bg-transparent rounded-s flex-grow focus:outline-none" />
						</div>
					</div>
				</div>
			</section>
		</nav>
	</header>
</template>

<script setup lang="ts">

</script>
