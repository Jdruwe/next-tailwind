import '../styles.css'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
import { config, library } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

library.add(
    faHeart,
    faTwitter,
    faGithub,
    faLinkedin,
);

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}
