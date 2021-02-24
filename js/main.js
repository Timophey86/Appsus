import appHeader from './main-cmps/main-header.cmps.js'
import { myRouter } from './routes.js'

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <app-header />
            <router-view />
        </section>
    `,
    components: {
        appHeader
    }
}

const app = new Vue(options)