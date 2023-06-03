import React from 'react'
import {createRoot} from 'react-dom/client'
import {createInertiaApp } from '@inertiajs/inertia-react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import './index.css'

createInertiaApp({
    // Below you can see that we are going to get all React components from resources/js/assets folder
    resolve: (name) => resolvePageComponent(`./assets/${name}.jsx`,import.meta.glob('./assets/**/*.jsx')),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})