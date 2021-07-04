<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Tailwind from '../Tailwind.svelte';
	import Typewriter from 'svelte-typewriter';

	let open = false;
	let links = ['About', 'Live Demos', 'Resume'];

	function handleClick() {
		open = !open;
	}
</script>

<Tailwind />

<nav class=" w-full fixed z-50 bg-gray-800 shadow-2xl ">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between ">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<button
						type="button"
						class="max-w-xs  rounded-full flex items-center text-sm focus:outline-none  "
						id="user-menu-button"
						aria-expanded="false"
						aria-haspopup="true"
						on:click={handleClick}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 68 68"
							fill="black"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M27.0001 5.99992L21.0001 7.99992L16.0001 11.4999L11 16.4999L7.49999 22.4999L5.5 27.9999L5 32.4999V35.9999L5.5 38.9999L7.49999 45.4999L11 51.4999L16.0001 56.4999L20.5 59.4999L26 62L34 63.5H39.5L48.5 61L52.5 57L47 58.5L37.5 59.4999L30 59.1095L25.5 56.4999L20.5 52.5L16.0001 47.5L12.5 41.5L11 34L16.0001 27.9999L22 33L24.5 22L28 16.4999L34 11.4999L47.5 7.99992C45.8397 7.12303 39.5799 5.79794 34 4.99992H31.5001L27.0001 5.99992ZM42.5 30.9999L36 37.4999L42.5 43.9999L48.5 37.4999L42.5 30.9999ZM37.5 32.4999H47.5V42.4999H37.5V32.4999Z"
								stroke="white"
								stroke-width="9"
							/>
						</svg>
					</button>
				</div>
				<div class="hidden md:block">
					<div class="ml-10 flex items-baseline space-x-4">
						{#each links as link}
							<a href="/{link}" class=" text-white px-3 py-2 text-sm font-small">{link}</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>

{#if open}
	<div
		in:fly={{ x: -300, duration: 2000 }}
		out:fly={{ x: -300, duration: 2000 }}
		class="mt-6 fixed w-full h-full z-10 bg-gray-800"
		id="mobile-menu"
	>
		<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
			{#each links as link}
				<a
					href="/{link}"
					class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>{link}</a
				>
			{/each}
		</div>
		<div class="pt-4 pb-3 border-t border-gray-700">
			<div class="flex items-center px-5">
				<div class="flex-shrink-0" />
				<div class="ml-3" />
				<button
					class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
				>
					<span class="sr-only">View notifications</span>
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
						/>
					</svg>
				</button>
			</div>
			<div class="mt-3 px-2 space-y-1" />
		</div>
	</div>
{/if}
<div class="wall min-h-screen min-w-screen justify-center">
	<section class="text-gray-600 body-font">
		<div class="container mx-auto flex px-5 py-24 md:flex-row items-center">
			<div
				class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
			>
				<Typewriter>
					<h1 class="text-4xl text-pink-400 font-extrabold">No One Left Behind</h1>
				</Typewriter>
				<p class="mb-8 leading-relaxed text-black">
					Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed
					tacos poke beard tote bag.
				</p>
			</div>
			<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
				<img
					class="object-cover object-center rounded invisible md:visible "
					alt="hero"
					src="https://dummyimage.com/720x600"
				/>
			</div>
		</div>
	</section>
</div>

<div class="relative min-h-screen flex items-center justify-center bg-gray-900">
	<!-- grid background -->
	<Typewriter cascade>
		<h1>Testing the typewriter effect</h1>
		<h2>The typewriter effect cascades by default</h2>
		<p>Lorem ipsum dolor sit amet consectetur</p>
	</Typewriter>

	<!-- content -->
</div>

<div class="wall relative min-h-screen flex items-center justify-center">
	<div class="relative">
		<section class="text-gray-600 body-font">
			<div class="container px-5 py-24 mx-auto flex flex-wrap">
				<div class="flex w-full mb-20 flex-wrap">
					<h1
						class="sm:text-3xl text-2xl font-medium title-font text-pink-400  lg:w-1/3 lg:mb-0 mb-4"
					>
						Order custom function based websites And Utilies
					</h1>
					<p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-yellow-400">
						Pricing will vary depending on the complxity of the request or you can pick out one of
						my premaid listing you can use them as a poing of refrancee for pricing
					</p>
				</div>
				<div class="flex flex-wrap md:-m-2 -m-1">
					<div class="flex flex-wrap w-1/2">
						<div class="md:p-2 p-1 w-1/2">
							<img
								alt="gallery"
								class="w-full object-cover h-full object-center block"
								src="https://dummyimage.com/500x300"
							/>
						</div>
						<div class="md:p-2 p-1 w-1/2">
							<img
								alt="gallery"
								class="w-full object-cover h-full object-center block"
								src="https://dummyimage.com/501x301"
							/>
						</div>
						<div class="md:p-2 p-1 w-full">
							<img
								alt="gallery"
								class="w-full h-full object-cover object-center block"
								src="https://dummyimage.com/600x360"
							/>
						</div>
					</div>
					<div class="flex flex-wrap w-1/2">
						<div class="md:p-2 p-1 w-full">
							<img
								alt="gallery"
								class="w-full h-full object-cover object-center block"
								src="https://dummyimage.com/601x361"
							/>
						</div>
						<div class="md:p-2 p-1 w-1/2">
							<img
								alt="gallery"
								class="w-full object-cover h-full object-center block"
								src="https://dummyimage.com/502x302"
							/>
						</div>
						<div class="md:p-2 p-1 w-1/2">
							<img
								alt="gallery"
								class="w-full object-cover h-full object-center block"
								src="https://dummyimage.com/503x303"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>

<div class="bg-gray-800">
	<div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
		<p class="text-gray-500 text-sm text-center sm:text-left">
			© 2020 Tailblocks —
			<a
				href="https://twitter.com/knyttneve"
				rel="noopener noreferrer"
				class="text-gray-600 ml-1"
				target="_blank">@knyttneve</a
			>
		</p>
		<span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
			<a href="/" class="text-gray-500">
				<svg
					fill="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-5 h-5"
					viewBox="0 0 24 24"
				>
					<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
				</svg>
			</a>
			<a href="/" class="ml-3 text-gray-500">
				<svg
					fill="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-5 h-5"
					viewBox="0 0 24 24"
				>
					<path
						d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
					/>
				</svg>
			</a>
			<a href="/" class="ml-3 text-gray-500">
				<svg
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-5 h-5"
					viewBox="0 0 24 24"
				>
					<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
					<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
				</svg>
			</a>
			<a href="/" class="ml-3 text-gray-500">
				<svg
					fill="currentColor"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="0"
					class="w-5 h-5"
					viewBox="0 0 24 24"
				>
					<path
						stroke="none"
						d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
					/>
					<circle cx="4" cy="4" r="2" stroke="none" />
				</svg>
			</a>
		</span>
	</div>
</div>

<style>
	h1 {
		text-transform: uppercase;
	}

	span {
		border-right: 0.05em solid;
		animation: caret 1s steps(1) infinite;
	}
	.wall {
		background-image: url('images/wall2.jpg');
		background-size: cover;
		background-attachment: fixed;
	}
</style>
