import React from 'react';
import Link from '@material-ui/core/Link';
import { LinkedIn } from '@material-ui/icons';

const Footer = () => {

    return (
        <div className="footer" id="contact">
            <Link href="https://www.linkedin.com/in/albertobelalcazar/" target="_blank" rel="noopener" color="inherit">
                <LinkedIn style={{ fontSize: 70 }} />
            </Link>
            {/* <Link href="https://www.youtube.com/c/KreaMegas/about" target="_blank" rel="noopener" color="inherit">
                <YouTube style={{ fontSize: 70 }} />
            </Link>
            <Link href="mailto:info@alberto.codes" target="_blank" rel="noopener" color="inherit">
                <Email style={{ fontSize: 70 }} />
            </Link> */}
        </div>
    );
};

export default Footer;