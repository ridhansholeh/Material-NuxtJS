<template>
	<div class="content__inner">
		<header class="content__title">
			<h1>Maps</h1>

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

		<div class="card">
			<div class="card-header">
				<h2 class="card-title">Google Maps</h2>
				<small class="card-subtitle">API Google Maps</small>
			</div>

			<div class="card-block">
				<div class="card-body">
					<gmap-map :center="center" :map-type-id="mapTypeId" :zoom="5">
						<gmap-marker
								v-for="(item, index) in markers"
								:key="index"
								:position="item"
								@click="toggleInfoWindow(item,index)"
						/>
						<gmap-info-window
								:options="infoOptions"
								:position="infoWindowPos"
								:opened="infoWinOpen"
								@closeclick="infoWinOpen=false"
						>
							<div v-html="infoContent"></div>
						</gmap-info-window>
					</gmap-map>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: "maps",
		data() {
			return {
				center: { lat: -2.2145852388265177, lng: 117.104081069627 },
				mapTypeId: "roadmap",
				markers: [
					// { position: { lat: -0.48585, lng: 117.1466 }, id: 'OA1' },
					// { lat: -0.48585, lng: 117.1466, id: 'OA1' },
					// { position: { lat: -6.9127778, lng: 107.6205556 }, id: 'OA2' }
					// { lat: -6.9127778, lng: 107.6205556, id: 'OA2' }
				],
				infoContent: '',
				infoWindowPos: {
					lat: 0,
					lng: 0
				},
				infoWinOpen: false,
				currentMidx: null,
				//optional: offset infowindow so it visually sits nicely on top of our marker
				infoOptions: {
					pixelOffset: {
						width: 0,
						height: -35
					}
				},
				// formatedAddresses: '',
			};
		},
		mounted () {
			axios('http://server.getsensync.com/sensyncapps/main', {
				crossDomain: true
			}).then( ({ data }) => {
				// data.airquality.map((item, key) => {
				// 	this.markers.push(item)
				// });

				this.markers = data.airquality.map((e) => {
					return {
						id: e.id,
						lat: parseFloat(e.lat),
						lng: parseFloat(e.long),
						pm10: e.pm10,
						so2: e.so2,
						o3: e.o3,
						co: e.co,
						no2: e.no2,
						ispu: e.ispu,
						timestamp: e.timestamp,
						status_quality: e.status_quality,
						status_site: e.status_site,
					}
				})
			});
		},
		methods: {
			toggleInfoWindow: function (marker, idx) {
				this.infoWindowPos = { lat: marker.lat, lng: marker.lng };
				// this.getTown(marker.lat, marker.lng);
				axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + marker.lat + "," + marker.lng + "&key=AIzaSyCBkW3l4xJIvrDcLskksqmaJ8g1oZZBKLQ")
					.then((response) => {
						this.formatedAddresses = response.data.results[0].formatted_address
						console.log(this.formatedAddresses);
						this.infoContent = this.getInfoWindowContent(marker, this.formatedAddresses);
					})

				//check if its the same marker that was selected if yes toggle
				if (this.currentMidx == idx) {
					this.infoWinOpen = !this.infoWinOpen;
				}
				//if different marker set infowindow to open and reset current marker index
				else {
					this.infoWinOpen = true;
					this.currentMidx = idx;
				}
			},
			getInfoWindowContent: function (marker, address) {
				return ('<div class="card" style="margin-bottom: 0px;">' +
					'	<div class="card-block">' +
					'		<div class="card-body">' +
					'			<strong>Neosense</strong>' +
					'			<p>Pengguna : SITE Admin</p>' +
					'			<p>Data terakhir diterima : ' + marker.timestamp + '</p>' +
					'			<p>' + address + '</p>' +
					'			<p>' + marker.status_quality + '</p>' +
					'			<p>' + marker.status_site + '</p>' +
					'		</div>' +
					'	</div>' +
					'</div>');
			},
			getTown: function (lat, lng) {
				axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyCBkW3l4xJIvrDcLskksqmaJ8g1oZZBKLQ")
					.then((response) => {
// Ideally you'd search for the index with type = sublocality in address_components
// 						this.town = response.data.results[0].address_components[1].long_name
						this.formatedAddresses = response.data.results[0].formatted_address
// 						console.log("The town is " + this.town);
						console.log(this.formatedAddresses);
					})
			}
		}
	}
</script>

<style scoped>
	.vue-map-container {
		height: 500px;
		width: 100%;
	}
</style>