<template>
	<div class="content__inner">
		<header class="content__title">
			<h1>Widgets</h1>

			<div class="actions">
				<a href="" class="actions__item zmdi zmdi-trending-up"></a>
				<a href="" class="actions__item zmdi zmdi-check-all"></a>

				<div class="dropdown actions__item">
					<i data-toggle="dropdown" class="zmdi zmdi-more-vert"></i>
					<div class="dropdown-menu dropdown-menu-right">
						<a href="" class="dropdown-item">Refresh</a>
						<a href="" class="dropdown-item">Manage Widgets</a>
						<a href="" class="dropdown-item">Settings</a>
					</div>
				</div>
			</div>
		</header>

		<div class="row quick-stats">
			<div class="col-sm-6 col-md-3">
				<div class="quick-stats__item bg-blue">
					<div class="quick-stats__info">
						<h2>987,459</h2>
						<small>Total Website Traffics</small>
					</div>

					<div class="quick-stats__chart sparkline-bar-stats">6,4,8,6,5,6,7,8,3,5,9,5</div>
				</div>
			</div>

			<div class="col-sm-6 col-md-3">
				<div class="quick-stats__item bg-amber">
					<div class="quick-stats__info">
						<h2>356,785K</h2>
						<small>Total Website Impressions</small>
					</div>

					<div class="quick-stats__chart sparkline-bar-stats">4,7,6,2,5,3,8,6,6,4,8,6</div>
				</div>
			</div>

			<div class="col-sm-6 col-md-3">
				<div class="quick-stats__item bg-purple">
					<div class="quick-stats__info">
						<h2>$58,778</h2>
						<small>Total Online Sales</small>
					</div>

					<div class="quick-stats__chart sparkline-bar-stats">9,4,6,5,6,4,5,7,9,3,6,5</div>
				</div>
			</div>

			<div class="col-sm-6 col-md-3">
				<div class="quick-stats__item bg-red">
					<div class="quick-stats__info">
						<h2>214</h2>
						<small>Total Support Tickets</small>
					</div>

					<div class="quick-stats__chart sparkline-bar-stats">5,6,3,9,7,5,4,6,5,6,4,9</div>
				</div>
			</div>
		</div>

		<hr>
		<br>

		<div class="row stats">
			<div class="col-sm-6 col-md-3">
				<div class="stats__item">
					<div class="stats__chart bg-lime">
						<div class="flot-chart flot-chart--xs stats-chart-1"></div>
					</div>

					<div class="stats__info">
						<div>
							<h2>987,459</h2>
							<small>Website Traffics</small>
						</div>
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-md-3">
				<div class="stats__item">
					<div class="stats__chart bg-cyan">
						<div class="flot-chart flot-chart--xs stats-chart-2"></div>
					</div>

					<div class="stats__info">
						<div>
							<h2>356,785K</h2>
							<small>Website Impressions</small>
						</div>
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-md-3">
				<div class="stats__item">
					<div class="stats__chart bg-blue-grey">
						<div class="flot-chart flot-chart--xs stats-chart-3"></div>
					</div>

					<div class="stats__info">
						<div>
							<h2>$8,778</h2>
							<small>Total Online Sales</small>
						</div>
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-md-3">
				<div class="stats__item">
					<div class="stats__chart bg-teal">
						<div class="flot-chart flot-chart--xs stats-chart-4"></div>
					</div>

					<div class="stats__info">
						<div>
							<h2>213</h2>
							<small>Support Tickets</small>
						</div>
					</div>
				</div>
			</div>
		</div>

		<hr>
		<br>
		<br>

		<div class="row">

			<div class="col-md-4">
				<div class="card widget-pictures">
					<div class="card-body">
						<h4 class="card-title">Augue laoreet rutrum</h4>
						<h6 class="card-subtitle">Cras congue nec lorem eget posuere</h6>
					</div>

					<div class="widget-pictures__body row">
						<a href="" class="col-4"><img src="assets/demo/img/widgets/headers/1.png" alt=""></a>
						<a href="" class="col-4"><img src="assets/demo/img/widgets/headers/2.png" alt=""></a>
						<a href="" class="col-4"><img src="assets/demo/img/widgets/headers/3.png" alt=""></a>
						<a href="" class="col-4"><img src="assets/demo/img/widgets/headers/4.png" alt=""></a>
						<a href="" class="col-4"><img src="assets/demo/img/widgets/headers/5.png" alt=""></a>
						<a href="" class="col-4"><img src="assets/demo/img/widgets/headers/6.png" alt=""></a>
						<a href="" class="col-4"><img src="assets/demo/img/widgets/headers/7.png" alt=""></a>
						<a href="" class="col-4"><img src="assets/demo/img/widgets/headers/8.png" alt=""></a>
						<a href="" class="col-4"><img src="assets/demo/img/widgets/headers/9.png" alt=""></a>
					</div>
				</div>

				<div class="card widget-ratings">
					<div class="card-body text-center">
						<h4 class="card-title">Average Rating 3.0</h4>

						<div class="widget-ratings__star">
							<i class="zmdi zmdi-star active"></i>
							<i class="zmdi zmdi-star active"></i>
							<i class="zmdi zmdi-star active"></i>
							<i class="zmdi zmdi-star"></i>
							<i class="zmdi zmdi-star"></i>
						</div>

						<div class="widget-ratings__item">
							<div class="float-left">1 <i class="zmdi zmdi-star"></i></div>
							<div class="float-right">20</div>

							<div class="widget-ratings__progress">
								<div class="progress">
									<div class="progress-bar bg-warning" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>

						<div class="widget-ratings__item">
							<div class="float-left">2 <i class="zmdi zmdi-star"></i></div>
							<div class="float-right">45</div>

							<div class="widget-ratings__progress">
								<div class="progress">
									<div class="progress-bar bg-warning" role="progressbar" style="width: 45%;" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>

						<div class="widget-ratings__item">
							<div class="float-left">3 <i class="zmdi zmdi-star"></i></div>
							<div class="float-right">60</div>

							<div class="widget-ratings__progress">
								<div class="progress">
									<div class="progress-bar bg-warning" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>

						<div class="widget-ratings__item">
							<div class="float-left">4 <i class="zmdi zmdi-star"></i></div>
							<div class="float-right">78</div>

							<div class="widget-ratings__progress">
								<div class="progress">
									<div class="progress-bar bg-warning" role="progressbar" style="width: 78%;" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>

						<div class="widget-ratings__item">
							<div class="float-left">5 <i class="zmdi zmdi-star"></i></div>
							<div class="float-right">22</div>

							<div class="widget-ratings__progress">
								<div class="progress">
									<div class="progress-bar bg-warning" role="progressbar" style="width: 22%;" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="card-body">
						<h4 class="card-title">Sales Statistics</h4>
						<h6 class="card-subtitle">Vestibulum purus quam scelerisque, mollis nonummy metus</h6>

						<div class="flot-chart flot-curved-line"></div>
						<div class="flot-chart-legends flot-chart-legends--curved"></div>
					</div>
				</div>

				<div class="card card--inverse widget-past-days">
					<div class="card-body">
						<h4 class="card-title">For the past 30 days</h4>
						<h6 class="card-subtitle">Pellentesque ornare sem lacinia quam</h6>
					</div>

					<div class="widget-past-days__main">
						<div class="flot-chart flot-chart--sm flot-past-days"></div>
					</div>

					<div class="listview listview--inverse listview--striped">
						<div class="listview__item">
							<div class="widget-past-days__info">
								<small>Page Views</small>
								<h3>47,896,536</h3>
							</div>

							<div class="widget-past-days__chart hidden-sm">
								<div class="sparkline-bar-stats">6,9,5,6,3,7,5,4,6,5,6,4,2,5,8,2,6,9</div>
							</div>
						</div>

						<div class="listview__item">
							<div class="widget-past-days__info">
								<small>Site Visitors</small>
								<h3>24,456,799</h3>
							</div>

							<div class="widget-past-days__chart hidden-sm">
								<div class="sparkline-bar-stats">5,7,2,5,2,8,6,7,6,5,3,1,9,3,5,8,2,4</div>
							</div>
						</div>

						<div class="listview__item">
							<div class="widget-past-days__info">
								<small>Total Clicks</small>
								<h3>13,965</h3>
							</div>

							<div class="widget-past-days__chart hidden-sm">
								<div class="sparkline-bar-stats">5,7,2,5,2,8,6,7,6,5,3,1,9,3,5,8,2,4</div>
							</div>
						</div>

						<div class="listview__item">
							<div class="widget-past-days__info">
								<small>Total Returns</small>
								<h3>198</h3>
							</div>

							<div class="widget-past-days__chart hidden-sm">
								<div class="sparkline-bar-stats">3,9,1,3,5,6,7,6,8,2,5,2,7,5,6,7,6,8</div>
							</div>
						</div>
					</div>
				</div>

				<div class="card todo">
					<div class="card-body">
						<h4 class="card-title">Todo lists</h4>
						<h6 class="card-subtitle">Venenatis portauam Inceptos ameteiam</h6>
					</div>

					<div class="listview">
						<div class="listview__item">
							<div class="checkbox checkbox--char todo__item">
								<input type="checkbox" id="todo-1">
								<label for="todo-1" class="bg-red checkbox__char">F</label>

								<div class="listview__content">
									<div class="listview__heading">Fivamus sagittis lacus vel augue laoreet rutrum faucibus dolor</div>
									<p>Today at 8.30 AM</p>
								</div>

								<div class="listview__attrs">
									<span>#Messages</span>
									<span>!!!</span>
								</div>
							</div>

							<div class="actions listview__actions">
								<div class="dropdown actions__item">
									<i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
									<div class="dropdown-menu dropdown-menu-right">
										<a class="dropdown-item" href="">Mark as completed</a>
										<a class="dropdown-item" href="">Delete</a>
									</div>
								</div>
							</div>
						</div>

						<div class="listview__item">
							<div class="checkbox checkbox--char todo__item">
								<input type="checkbox" id="todo-2">
								<label class="checkbox__char bg-light-blue" for="todo-2">N</label>

								<div class="listview__content">
									<div class="listview__heading">Nullam id dolor id nibh ultricies vehicula ut id elit</div>
									<p>Today at 12.30 PM</p>
								</div>

								<div class="listview__attrs">
									<span>#Clients</span>
									<span>!!</span>
								</div>
							</div>

							<div class="actions listview__actions">
								<div class="dropdown actions__item">
									<i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
									<div class="dropdown-menu dropdown-menu-right">
										<a class="dropdown-item" href="">Mark as completed</a>
										<a class="dropdown-item" href="">Delete</a>
									</div>
								</div>
							</div>
						</div>

						<div class="listview__item">
							<div class="checkbox checkbox--char todo__item">
								<input  type="checkbox" id="todo-3">
								<label class="checkbox__char bg-amber" for="todo-3">C</label>

								<div class="listview__content">
									<div class="listview__heading">Cras mattis consectetur purus sit amet fermentum</div>
									<p>Tomorrow at 10.30 AM</p>
								</div>

								<div class="listview__attrs">
									<span>#Clients</span>
									<span>!!</span>
								</div>
							</div>

							<div class="actions listview__actions">
								<div class="dropdown actions__item">
									<i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
									<div class="dropdown-menu dropdown-menu-right">
										<a class="dropdown-item" href="">Mark as completed</a>
										<a class="dropdown-item" href="">Delete</a>
									</div>
								</div>
							</div>
						</div>

						<div class="listview__item">
							<div class="checkbox checkbox--char todo__item">
								<input  type="checkbox" id="todo-4">
								<label class="checkbox__char bg-lime" for="todo-4">I</label>

								<div class="listview__content">
									<div class="listview__heading">Integer posuere erat a ante venenatis dapibus posuere velit aliquet</div>
									<small>05/08/2017 at 08.00 AM</small>
								</div>

								<div class="listview__attrs">
									<span>#Server</span>
									<span>!</span>
								</div>
							</div>

							<div class="actions listview__actions">
								<div class="dropdown actions__item">
									<i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
									<div class="dropdown-menu dropdown-menu-right">
										<a class="dropdown-item" href="">Mark as completed</a>
										<a class="dropdown-item" href="">Delete</a>
									</div>
								</div>
							</div>
						</div>

						<div class="listview__item">
							<div class="checkbox checkbox--char todo__item">
								<input  type="checkbox" id="todo-5">
								<label class="checkbox__char bg-purple" for="todo-5">P</label>

								<div class="listview__content">
									<div class="listview__heading">Praesent commodo cursus magnavel scelerisque nisl consectetur</div>
									<small>10/08/2016 at 04.00 AM</small>
								</div>

								<div class="listview__attrs">
									<span>#Server</span>
									<span>!!!</span>
								</div>
							</div>

							<div class="actions listview__actions">
								<div class="dropdown actions__item">
									<i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
									<div class="dropdown-menu dropdown-menu-right">
										<a class="dropdown-item" href="">Mark as completed</a>
										<a class="dropdown-item" href="">Delete</a>
									</div>
								</div>
							</div>
						</div>

						<a href="todo-lists.html" class="view-more">View More</a>
					</div>
				</div>

				<div>
					<div class="widget-time bg-light-blue">
						<div class="time">
							<span class="time__hours"></span>
							<span class="time__min"></span>
							<span class="time__sec"></span>
						</div>
					</div>

					<div class="widget-time bg-green">
						<div class="time">
							<span class="time__hours"></span>
							<span class="time__min"></span>
							<span class="time__sec"></span>
						</div>
					</div>

					<div class="widget-time bg-red">
						<div class="time">
							<span class="time__hours"></span>
							<span class="time__min"></span>
							<span class="time__sec"></span>
						</div>
					</div>

					<div class="widget-time bg-amber">
						<div class="time">
							<span class="time__hours"></span>
							<span class="time__min"></span>
							<span class="time__sec"></span>
						</div>
					</div>

					<div class="widget-time bg-teal">
						<div class="time">
							<span class="time__hours"></span>
							<span class="time__min"></span>
							<span class="time__sec"></span>
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-4">
				<div class="card widget-visitors">
					<div class="card-body">
						<h4 class="card-title">Realtime Visitors</h4>
						<h6 class="card-subtitle">Nullam dolor isnibh ultricies vehicula adipiscing</h6>

						<div class="widget-visitors__stats">
							<div>
								<strong>23528</strong>
								<small>Visitor for last 24 hours</small>
							</div>
							<div>
								<strong>746</strong>
								<small>Visitors last 30 minutes</small>
							</div>
						</div>

						<div class="widget-visitors__map map-visitors"></div>
					</div>

					<div class="listview listview--striped">
						<div class="listview__item">
							<div class="listview__content">
								<p>Sunday, September 4, 21:44:02 (2 Mins 56 Seconds)</p>

								<div class="listview__attrs">
									<span><img class="widget-visitors__country" src="assets/demo/img/flags/United_States_of_America.png" alt=""> United States</span>
									<span>Firefox</span>
									<span>Mac OSX</span>
								</div>
							</div>
						</div>

						<div class="listview__item">
							<div class="listview__content">
								<p>Sunday, September 4, 20:21:01 (5 Mins 12 Seconds)</p>

								<div class="listview__attrs">
									<span><img class="widget-visitors__country" src="assets/demo/img/flags/Australia.png" alt=""> Australia</span>
									<span>Chrome</span>
									<span>Android</span>
								</div>
							</div>
						</div>

						<div class="listview__item">
							<div class="listview__content">
								<p>Sunday, September 4, 20:21:10 (10 Mins 43 Seconds)</p>

								<div class="listview__attrs">
									<span><img class="widget-visitors__country" src="assets/demo/img/flags/Brazil.png" alt=""> Brazil</span>
									<span>Edge</span>
									<span>Windows</span>
								</div>
							</div>
						</div>

						<div class="listview__item">
							<div class="listview__content">
								<p>Sunday, September 4, 20:59:04 (1 Min 02 Seconds)</p>

								<div class="listview__attrs">
									<span><img class="widget-visitors__country" src="assets/demo/img/flags/South_Korea.png" alt=""> South Korea</span>
									<span>Chrome</span>
									<span>Android</span>
								</div>
							</div>
						</div>

						<div class="listview__item">
							<div class="listview__content">
								<p>Sunday, September 4, 20:58:12 (3 Min 44 Seconds)</p>

								<div class="listview__attrs">
									<span><img class="widget-visitors__country" src="assets/demo/img/flags/Japan.png" alt=""> Japan</span>
									<span>Chrome</span>
									<span>Windows</span>
								</div>
							</div>
						</div>

						<div class="p-2"></div>
					</div>
				</div>

				<div class="card">
					<div class="card-body">
						<h4 class="card-title">Ongoing Tasks</h4>
						<h6 class="card-subtitle">Maecenas seddiam eget risusvarius blandit</h6>

						<a href="" class="listview__item">
							<div class="listview__content">
								<div class="listview__heading mb-2">HTML5 Validation Report</div>

								<div class="progress">
									<div class="progress-bar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</a>

						<a href="" class="listview__item">
							<div class="listview__content">
								<div class="listview__heading mb-2">Google Chrome Extension</div>

								<div class="progress">
									<div class="progress-bar bg-warning" style="width: 43%" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</a>

						<a href="" class="listview__item">
							<div class="listview__content">
								<div class="listview__heading mb-2">Social Intranet Projects</div>

								<div class="progress">
									<div class="progress-bar bg-success" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</a>

						<a href="" class="listview__item">
							<div class="listview__content">
								<div class="listview__heading mb-2">Bootstrap Admin Template</div>

								<div class="progress">
									<div class="progress-bar bg-info" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</a>

						<a href="" class="listview__item">
							<div class="listview__content">
								<div class="listview__heading mb-2">Youtube Client App</div>

								<div class="progress">
									<div class="progress-bar bg-danger" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</a>

						<a href="" class="view-more">View All Tasks</a>
					</div>
				</div>

				<div class="card">
					<img class="card-img-top" src="assets/demo/img/widgets/note.png" alt="">
					<div class="card-body">
						<h4 class="card-title">Pellentesque Ligula Fringilla</h4>
						<h6 class="card-subtitle">by Malinda Hollaway on 19th June 2015 at 09:10 AM</h6>

						<p>Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra.</p>
						<a href="" class="view-more text-left">View Article...</a>
					</div>
				</div>

				<div class="card card--inverse widget-pie">
					<div class="col-6 col-sm-4 col-md-6 col-lg-4 widget-pie__item">
						<div class="easy-pie-chart" data-percent="50" data-size="80" data-track-color="rgba(0,0,0,0.08)" data-bar-color="#fff">
							<span class="easy-pie-chart__value">92</span>
						</div>
						<div class="widget-pie__title">Email<br> Scheduled</div>
					</div>

					<div class="col-6 col-sm-4 col-md-6 col-lg-4 widget-pie__item">
						<div class="easy-pie-chart" data-percent="11" data-size="80" data-track-color="rgba(0,0,0,0.08)" data-bar-color="#fff">
							<span class="easy-pie-chart__value">11</span>
						</div>
						<div class="widget-pie__title">Email<br> Bounced</div>
					</div>

					<div class="col-6 col-sm-4 col-md-6 col-lg-4 widget-pie__item">
						<div class="easy-pie-chart" data-percent="52" data-size="80" data-track-color="rgba(0,0,0,0.08)" data-bar-color="#fff">
							<span class="easy-pie-chart__value">52</span>
						</div>
						<div class="widget-pie__title">Email<br> Opened</div>
					</div>

					<div class="col-6 col-sm-4 col-md-6 col-lg-4 widget-pie__item">
						<div class="easy-pie-chart" data-percent="44" data-size="80" data-track-color="rgba(0,0,0,0.08)" data-bar-color="#fff">
							<span class="easy-pie-chart__value">44</span>
						</div>
						<div class="widget-pie__title">Storage<br>Remaining</div>
					</div>

					<div class="col-6 col-sm-4 col-md-6 col-lg-4 widget-pie__item">
						<div class="easy-pie-chart" data-percent="78" data-size="80" data-track-color="rgba(0,0,0,0.08)" data-bar-color="#fff">
							<span class="easy-pie-chart__value">78</span>
						</div>
						<div class="widget-pie__title">Web Page<br> Views</div>
					</div>

					<div class="col-6 col-sm-4 col-md-6 col-lg-4 widget-pie__item">
						<div class="easy-pie-chart" data-percent="32" data-size="80" data-track-color="rgba(0,0,0,0.08)" data-bar-color="#fff">
							<span class="easy-pie-chart__value">32</span>
						</div>
						<div class="widget-pie__title">Server<br> Processing</div>
					</div>
				</div>

				<div class="card widget-contacts">
					<div class="card-body">
						<h4 class="card-title">Contact Information</h4>
						<h6 class="card-subtitle">Fusce eget dolor id justo luctus commodo vel pharetra nisi</h6>

						<ul class="icon-list">
							<li><i class="zmdi zmdi-phone"></i> 00971123456789</li>
							<li><i class="zmdi zmdi-email"></i> malinda.h@gmail.com</li>
							<li><i class="zmdi zmdi-facebook-box"></i> malinda.hollaway</li>
							<li><i class="zmdi zmdi-twitter"></i> @malinda (twitter.com/malinda)</li>
							<li><i class="zmdi zmdi-pin"></i>
								<address>
									44-46 Morningside Road,
									Edinburgh,
									Scotland
								</address>
							</li>
						</ul>
					</div>

					<a class="widget-contacts__map" href="">
						<img src="assets/demo/img/widgets/map.png" alt="">
					</a>
				</div>
			</div>

			<div class="col-md-4">
				<div class="card card--inverse widget-signups">
					<div class="card-body">
						<h4 class="card-title">Most Recent Signups</h4>
						<h6 class="card-subtitle">Magna cursus malesuada lacinia</h6>

						<div class="actions actions--inverse">
							<div class="actions__item">
								<i data-toggle="dropdown" class="zmdi zmdi-more-vert"></i>
								<div class="dropdown-menu dropdown-menu-right">
									<a href="" class="dropdown-item">Refresh</a>
									<a href="" class="dropdown-item">Manage Widgets</a>
									<a href="" class="dropdown-item">Settings</a>
								</div>
							</div>
						</div>

						<div class="widget-signups__list">
							<a v-b-tooltip.hover title="Jani Popovich" href=""><img class="avatar-img" src="assets/demo/img/profile-pics/1.jpg" alt=""></a>
							<a v-b-tooltip.hover title="Rosina Lamont" href=""><div class="avatar-char">R</div></a>
							<a v-b-tooltip.hover title="Wava Vermeulen" href=""><div class="avatar-char">W</div></a>
							<a v-b-tooltip.hover title="Delisa Sheilds" href=""><img class="avatar-img" src="assets/demo/img/profile-pics/2.jpg" alt=""></a>
							<a v-b-tooltip.hover title="Elsy Wilhoit" href=""><img class="avatar-img" src="assets/demo/img/profile-pics/3.jpg" alt=""></a>
							<a v-b-tooltip.hover title="Deanne Jeffreys" href=""><div class="avatar-char">D</div></a>
							<a v-b-tooltip.hover title="ddsds" href=""><div class="avatar-char">F</div></a>
							<a v-b-tooltip.hover title="Shery Heredia" href=""><div class="avatar-char">S</div></a>
							<a v-b-tooltip.hover title="Gaylord Coolbaugh" href=""><div class="avatar-char">G</div></a>
							<a v-b-tooltip.hover title="Lyda Wortman" href=""><div class="avatar-char">L</div></a>
							<a v-b-tooltip.hover title="Corene Langstaff" href=""><img class="avatar-img" src="assets/demo/img/profile-pics/4.jpg" alt=""></a>
							<a v-b-tooltip.hover title="Aracely Goudeau" href=""><img class="avatar-img" src="assets/demo/img/profile-pics/5.jpg" alt=""></a>
							<a v-b-tooltip.hover title="Matilde Weibel" href=""><div class="avatar-char">M</div></a>
							<a v-b-tooltip.hover title="Clement Mayor" href=""><div class="avatar-char">C</div></a>
							<a v-b-tooltip.hover title="Phil Wyatt" href=""><div class="avatar-char">P</div></a>
							<a v-b-tooltip.hover title="Altagracia Manke" href=""><div class="avatar-char">A</div></a>
							<a v-b-tooltip.hover title="Siu Derosier" href=""><div class="avatar-char">S</div></a>
							<a v-b-tooltip.hover title="Nigel Shipe" href=""><img class="avatar-img" src="assets/demo/img/profile-pics/6.jpg" alt=""></a>
							<a v-b-tooltip.hover title="Bossman" href=""><div class="avatar-char">B</div></a>
							<a v-b-tooltip.hover title="Crystal Markel" href=""><div class="avatar-char">C</div></a>
							<a v-b-tooltip.hover title="Noman Nottage" href=""><div class="avatar-char">N</div></a>
							<a v-b-tooltip.hover title="Melonie Carreira" href=""><img class="avatar-img" src="assets/demo/img/profile-pics/7.jpg" alt=""></a>
							<a v-b-tooltip.hover title="Shaneka Hoyle" href=""><div class="avatar-char">S</div></a>
							<a v-b-tooltip.hover title="Milagro Evans" href=""><div class="avatar-char">M</div></a>
						</div>
					</div>
				</div>

				<div class="card card--inverse widget-profile">
					<div class="card-body text-center">
						<img src="assets/demo/img/profile-pics/profile-pic.jpg" class="widget-profile__img" alt="">

						<h4 class="card-title mb-0">Malinda Hollway</h4>

						<div class="actions actions--inverse">
							<div class="actions__item">
								<i data-toggle="dropdown" class="zmdi zmdi-more-vert"></i>
								<div class="dropdown-menu dropdown-menu-right">
									<a href="" class="dropdown-item">Refresh</a>
									<a href="" class="dropdown-item">Manage Widgets</a>
									<a href="" class="dropdown-item">Settings</a>
								</div>
							</div>
						</div>
					</div>

					<div class="widget-profile__list">
						<div class="media">
							<div class="avatar-char"><i class="zmdi zmdi-phone"></i></div>
							<div class="media-body">
								<strong>011 55694785</strong>
								<small>Home</small>
							</div>
						</div>

						<div class="media">
							<div class="avatar-char"><i class="zmdi zmdi-email"></i></div>
							<div class="media-body">
								<strong>m-hollaway@gmail.com</strong>
								<small>Email</small>
							</div>
						</div>

						<div class="media">
							<div class="avatar-char"><i class="zmdi zmdi-twitter"></i></div>
							<div class="media-body">
								<strong>@m-hollaway</strong>
								<small>Twitter</small>
							</div>
						</div>

						<div class="media">
							<div class="avatar-char"><i class="zmdi zmdi-facebook"></i></div>
							<div class="media-body">
								<strong>facebook/hollaway</strong>
								<small>Facebook</small>
							</div>
						</div>

						<div class="media">
							<div class="avatar-char"><i class="zmdi zmdi-github"></i></div>
							<div class="media-body">
								<strong>github.com/hollaway</strong>
								<small>Github</small>
							</div>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="card-body">
						<h4 class="card-title">Recent Posts</h4>
						<h6 class="card-subtitle">Venenatis portauam Inceptos ameteiam</h6>
					</div>

					<div class="listview listview--hover">
						<a class="listview__item">
							<img src="assets/demo/img/profile-pics/1.jpg" class="listview__img" alt="">

							<div class="listview__content">
								<div class="listview__heading">Jeannette Lawson</div>
								<p>Donec congue tempus ligula, varius hendrerit mi hendrerit sit amet. Duis ac quam sit amet leo feugiat iaculis</p>
							</div>
						</a>

						<a class="listview__item">
							<img src="assets/demo/img/profile-pics/2.jpg" class="listview__img" alt="">

							<div class="listview__content">
								<div class="listview__heading">David Villa Jacobs</div>
								<p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis lobortis sapien non posuere</p>
							</div>
						</a>

						<a class="listview__item">
							<img src="assets/demo/img/profile-pics/3.jpg" class="listview__img" alt="">

							<div class="listview__content">
								<div class="listview__heading">Candice Barnes</div>
								<p>Quisque non tortor ultricies, posuere elit id, lacinia purus curabitur</p>
							</div>
						</a>

						<a class="listview__item">
							<img src="assets/demo/img/profile-pics/4.jpg" class="listview__img" alt="">

							<div class="listview__content">
								<div class="listview__heading">Darla Mckinney</div>
								<p>Duis tincidunt augue nec sem dignissim scelerisque. Vestibulum rhoncus sapien sed nulla aliquam lacinia</p>
							</div>
						</a>

						<a class="listview__item">
							<img src="assets/demo/img/profile-pics/5.jpg" class="listview__img" alt="">

							<div class="listview__content">
								<div class="listview__heading">Rudolph Perez</div>
								<p>Phasellus a ullamcorper lectus, sit amet viverra quam. In luctus tortor vel nulla pharetra bibendum</p>
							</div>
						</a>

						<a href="" class="view-more">View All Posts</a>
					</div>
				</div>

				<div>
					<div class="widget-search">
						<i class="zmdi zmdi-search"></i>
						<input type="text" class="widget-search__input" placeholder="Search...">
					</div>

					<div class="widget-search widget-search--inverse bg-blue-grey">
						<i class="zmdi zmdi-search"></i>
						<input type="text" class="widget-search__input" placeholder="Search...">
					</div>

					<div class="widget-search widget-search--inverse bg-cyan">
						<i class="zmdi zmdi-search"></i>
						<input type="text" class="widget-search__input" placeholder="Search...">
					</div>

					<div class="widget-search widget-search--inverse bg-blue">
						<i class="zmdi zmdi-search"></i>
						<input type="text" class="widget-search__input" placeholder="Search...">
					</div>

					<div class="widget-search widget-search--inverse bg-purple">
						<i class="zmdi zmdi-search"></i>
						<input type="text" class="widget-search__input" placeholder="Search...">
					</div>

					<div class="widget-search widget-search--inverse bg-green">
						<i class="zmdi zmdi-search"></i>
						<input type="text" class="widget-search__input" placeholder="Search...">
					</div>

					<div class="widget-search widget-search--inverse bg-red">
						<i class="zmdi zmdi-search"></i>
						<input type="text" class="widget-search__input" placeholder="Search...">
					</div>
				</div>

				<div class="card">
					<div class="card-body">
						<h4 class="card-title">Categories</h4>
						<h6 class="card-subtitle">Etiam porta malesuada magna mollis</h6>

						<div class="tags">
							<a href="">#Messages</a>
							<a href="">#Clients</a>
							<a href="">#Server</a>
							<a href="">#Marketing</a>
							<a href="">#Work related</a>
							<a href="">#Website</a>
							<a href="">#Uncategorized</a>
							<a href="">#Collegues</a>
							<a href="">#Hosting</a>
							<a href="">#Design</a>
							<a href="">#To be addressed</a>
							<a href="">#Others</a>
						</div>
					</div>
				</div>

<!--				<div class="card">-->
<!--					<div class="card-body">-->
<!--						<h4 class="card-title">Tree view</h4>-->
<!--						<h6 class="card-subtitle">Maecenas seddiam eget risusvarius blandit</h6>-->

<!--						<div class="treeview"></div>-->
<!--					</div>-->
<!--				</div>-->
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		name: "index",
		head: {
			link: [
				// { rel: 'stylesheet', type: 'css', href: '/assets/vendors/jqTree/jqtree.css' }
			],
			script: [
				{ src: 'assets/vendors/flot/jquery.flot.js', type: 'text/javascript', body: true },
				{ src: 'assets/vendors/flot/jquery.flot.resize.js', type: 'text/javascript', body: true },
				{ src: 'assets/vendors/flot.curvedlines/curvedLines.js', type: 'text/javascript', body: true },
				{ src: 'assets/vendors/jqvmap/jquery.vmap.min.js', type: 'text/javascript', body: true },
				{ src: 'assets/vendors/jqvmap/maps/jquery.vmap.world.js', type: 'text/javascript', body: true },
				{ src: 'assets/vendors/easy-pie-chart/jquery.easypiechart.min.js', type: 'text/javascript', body: true },
				{ src: 'assets/vendors/sparkline/jquery.sparkline.min.js', type: 'text/javascript', body: true },
				{ src: 'assets/vendors/moment/moment.min.js', type: 'text/javascript', body: true },
				// { src: '/assets/vendors/jqTree/tree.jquery.js', type: 'text/javascript' },

				{ src: 'assets/demo/js/flot-charts/curved-line.js', type: 'text/javascript', body: true },
				{ src: 'assets/demo/js/flot-charts/chart-tooltips.js', type: 'text/javascript', body: true },
				{ src: 'assets/demo/js/other-charts.js', type: 'text/javascript', body: true },
				{ src: 'assets/demo/js/jqvmap.js', type: 'text/javascript', body: true },
			]
		}
	}
</script>

<style lang="scss">
</style>