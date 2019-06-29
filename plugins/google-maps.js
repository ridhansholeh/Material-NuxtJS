import Vue from "vue";

import * as VueGoogleMaps from "~/node_modules/vue2-google-maps";

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyCBkW3l4xJIvrDcLskksqmaJ8g1oZZBKLQ',
		libraries: 'places',
	}
});