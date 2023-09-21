<script>
	let resultMessage = '';
	let resultColor = 'text-gray-500';

	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const object = {};

		formData.forEach((value, key) => {
			object[key] = value;
		});

		const json = JSON.stringify(object);
		resultMessage = 'Please wait...';

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: json
			});

			const jsonResponse = await response.json();

			if (response.status === 200) {
				resultMessage = jsonResponse.message;
				resultColor = 'text-green-500';
			} else {
				console.log(response);
				resultMessage = jsonResponse.message;
				resultColor = 'text-red-500';
			}
		} catch (error) {
			console.error(error);
			resultMessage = 'Something went wrong!';
			resultColor = 'text-red-500';
		}

		event.target.reset();

		setTimeout(() => {
			resultMessage = '';
		}, 5000);
	}
</script>

<div class="flex items-center justify-center gap-2 mb-10">
	<span class="w-10 h-0.5 bg-indigo-700" />
	<p class="font-medium text-indigo-700 text-xl">Contact me</p>
</div>

<div class="max-w-xl mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
	<div class="text-center">
		<h1 class="my-3 text-3xl font-semibold text-gray-700">Contact Us</h1>
		<p class="text-gray-400">Fill up the form below to send us a message.</p>
	</div>
	<div class="m-7">
		<form action="https://api.web3forms.com/submit" method="POST" on:submit={handleSubmit}>
			<input type="hidden" name="access_key" value="4a43f2c0-0a55-4906-93dd-9b4336a61f60" />
			<input type="hidden" name="subject" value="New submission from your contact form" />
			<input type="checkbox" name="botcheck" style="display: none;" />

			<div class="flex mb-6 space-x-4">
				<div class="w-full md:w-1/2">
					<label for="fname" class="block mb-2 text-sm text-gray-600">First Name</label>
					<input
						type="text"
						name="name"
						id="first_name"
						placeholder="John"
						required
						class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
					/>
				</div>
				<div class="w-full md:w-1/2">
					<label for="lname" class="block mb-2 text-sm text-gray-600">Last Name</label>
					<input
						type="text"
						name="last_name"
						id="lname"
						placeholder="Doe"
						required
						class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300-900-500"
					/>
				</div>
			</div>

			<div class="flex mb-6 space-x-4">
				<div class="w-full md:w-1/2">
					<label for="email" class="block mb-2 text-sm text-gray-600">Email Address</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="you@company.com"
						required
						class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300-900-500"
					/>
				</div>

				<div class="w-full md:w-1/2">
					<label for="phone" class="block text-sm mb-2 text-gray-600">Phone Number</label>
					<input
						type="text"
						name="phone"
						id="phone"
						placeholder="+1 (555) 1234-567"
						required
						class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300-900-500"
					/>
				</div>
			</div>

			<div class="mb-6">
				<label for="message" class="block mb-2 text-sm text-gray-600">Your Message</label>
				<textarea
					rows="5"
					name="message"
					id="message"
					placeholder="Your Message"
					class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300-900-500"
					required
				/>
			</div>

			<div class="mb-6">
				<button
					type="submit"
					class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
				>
					Send Message
				</button>
			</div>
			<p class={`text-base text-center ${resultColor}`} id="result">{resultMessage}</p>
		</form>
	</div>
</div>
