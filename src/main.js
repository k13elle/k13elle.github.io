import 'normalize.css/normalize.css';

import { createApp } from 'vue';
import { CarbonIconsVue } from '@carbon/icons-vue';

import LogoFlickr32 from '@carbon/icons-vue/es/logo--flickr/32';
import LogoGithub32 from '@carbon/icons-vue/es/logo--github/32';
import LogoTwitter32 from '@carbon/icons-vue/es/logo--twitter/32';

import App from './App.vue';

const XApp = createApp(App);

XApp.use(CarbonIconsVue, {
	components: {
		LogoFlickr32,
		LogoGithub32,
		LogoTwitter32
	},
});

XApp.mount('#app');