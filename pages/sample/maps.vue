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
								@click="toggleInfoWindow(item,index), center = {lat: item.lat, lng: item.lng}"
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
				// navParent: "sample",
				center: { lat: -2.2145852388265177, lng: 117.104081069627 },
				mapTypeId: "roadmap",
				markers: [
					// { position: { lat: -0.48585, lng: 117.1466 }, id: 'OA1' },
					{ lat: -0.48585, lng: 117.1466, id: '1' },
					// { position: { lat: -6.9127778, lng: 107.6205556 }, id: 'OA2' }
					{ lat: -6.9127778, lng: 107.6205556, id: '2' }
				],
				infoContent: '',
				infoWindowPos: {
					lat: 0,
					lng: 0
				},
				infoWinOpen: false,
				currentMidx: null,
				infoOptions: {
					pixelOffset: {
						width: 0,
						height: -35
					}
				},
			};
		},
		mounted () {

		},
		methods: {
			toggleInfoWindow: function (marker, idx) {
				this.infoWindowPos = { lat: marker.lat, lng: marker.lng };
				this.infoContent = this.getInfoWindowContent(marker);

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
			getInfoWindowContent: function (marker) {
				return ('<div class="card" style="margin-bottom: 0px;">' +
					'	<div class="card-block">' +
					'		<div class="card-body">' +
					'			<strong>Info</strong>' +
					'			<p>ID : ' + marker.id + '</p>' +
					'			<p>Latitude : ' + marker.lat + '</p>' +
					'			<p>Longitude : ' + marker.lng + '</p>' +
					'		</div>' +
					'	</div>' +
					'</div>');
			},
		}
	}
</script>

<style scoped>
	.vue-map-container {
		height: 500px;
		width: 100%;
	}
</style>