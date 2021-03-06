

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<!-- Bootstrap CSS -->
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
			crossorigin="anonymous"
		/>

		<!-- CSS only -->
		<link rel="stylesheet" href="/css/styles.css" />

		<title>Manpower Requisition Form</title>

		<style>
			.footer {
				position: fixed;
				left: 0;
				bottom: 0;
				width: 100%;
				background-color: #f8f9fa;
				color: white;
				text-align: center;
				padding-top: 14px;
			}
		</style>
		<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
	</head>
	<body>
		<!-- Mobile and tablet responsiveness message -->
		<div class="container mobile-tablet-responsiveness-message">
			<div class="row d-flex justify-content-center">
				<div class="col-md-10" style="border-bottom: 4px solid lightgray;">
					<h4 style="margin-top: 10rem;">
						We're working our best to make this website readable on mobile and tablet
						devices.
					</h4>
				</div>
			</div>
		</div>
		<!-- End mobile and tablet responsiveness messages -->

		<!-- hide-me -->
		<div class="hide-me">
			<!-- <div class="landing-box shadow">
				<div class="landing-logo-box">
					<img class="landing-logo" src="/images/HRC-logo.jpg" alt="HRC cover" />
				</div>
				<h1 class="mt-5">Manpower Requisition Form</h1>

				<div class="mb-3" onclick="location.href='/login';" style="cursor: pointer;">
					<div class="mt-5 landing-go-request">
						<h6 class="landing-go-request-h6 text-center">
							Go to Request
						</h6>
					</div>
				</div>
			</div> -->

			<!-- changes -->
			<div class="container">
				<div class="row">
					<div class="col-md-5" style="margin-top: 70px;" >
						<lottie-player
							src="https://assets3.lottiefiles.com/packages/lf20_2LMpmD.json"
							background="transparent"
							speed="1"
							style="width: 400px; height: 400px;"
							loop
							autoplay
						></lottie-player>
					</div>

					<div class="col-md-6">
						<!-- <img class="img-fluid" style="width: 300px; height: 300px;" src="/images/HRC-logo.jpg" alt="HRC cover" /> -->

						<h1 class="mt-5" style="font-size: 100px;">Manpower Requisition Form</h1>

						<div
							class="d-flex justify-content-center"
							
						>
							<p class="go-to-request" onclick="location.href='/login';">
								Go to Request
								<span class="ms-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                   <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
								</span>	
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="footer">
				<p class="text-secondary">Designed and built with all the love by the Research and Development team with the help of contributors.</p>
			</div>

			
			<!-- end changes -->
		</div>
		<!-- hide-me    -->
	</body>
</html>