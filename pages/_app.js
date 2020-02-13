import { config, library } from '@fortawesome/fontawesome-svg-core'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles.css'

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

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
