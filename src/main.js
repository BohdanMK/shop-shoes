import { createPinia } from 'pinia';

import { createApp } from 'vue'
import './index.css'
import App from './App.vue'

import ButtonItem from '@/ui/button/ButtonItem.vue';
import InputGroup from '@/ui/input/InputGroup.vue';
import RadioGroup from '@/ui/input/RadioGroup.vue';
import TextAreaGroup from '@/ui/input/TextAreaGroup.vue';
import EmptyLayout from '@/layouts/EmptyLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import ContainerBlock from '@/components/ContainerBlock.vue';
import SuccessPopUp from '@/components/popup/SuccessPopUp.vue';
import ErrorPopUp from '@/components/popup/ErrorPopUp.vue';

import router from './router';

// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faBars)


const app = createApp(App);

app.component('empty-layout', EmptyLayout);
app.component('main-layout', MainLayout);
app.component('ContainerBlock', ContainerBlock);
app.component('ButtonItem', ButtonItem);
app.component('InputGroup', InputGroup);
app.component('RadioGroup', RadioGroup);
app.component('TextAreaGroup', TextAreaGroup);
app.component('SuccessPopUp', SuccessPopUp);
app.component('ErrorPopUp', ErrorPopUp);
app.component('font-awesome-icon', FontAwesomeIcon);




app.use(router).use(createPinia()).mount('#app');



