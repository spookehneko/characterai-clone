<template>
	<div class="bg-black/50 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center" @click="$emit('close')">
		<div class="bg-[#26272b] border-2 border-black p-[2rem] w-[24rem] flex flex-col rounded-3xl text-center gap-5" @click.stop>
			<h1 class="text-2xl">Sign in</h1>
			<div class="flex flex-col gap-3 px-2">
				<button class="bg-[#303136] rounded-full py-2 flex gap-3 px-3 items-center justify-center">
					<Icon name="logos:google-icon" size="18px" />
					<h1>Continue with Google</h1>
				</button>
				<button class="bg-[#303136] rounded-full py-2 flex gap-2 px-3 items-center justify-center">
					<Icon class="ml-[-10px]" name="raphael:apple" size="27px" />
					<h1 class="">Continue with Apple</h1>
				</button>
			</div>
			<h1>or</h1>
			<div>
				<div class="flex flex-col px-8">
					<div class="flex items-center gap-4">
						<Icon name="mdi:email" size="1.5em" />
						<input placeholder="Email" class="bg-transparent rounded-s flex-grow focus:outline-none" />
					</div>
				</div>
			</div>
			<button>
				<h1>Trouble signing in?</h1>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineEmits(["close"])
</script>
