import React from 'react';
import Link from '@material-ui/core/Link';
import { LinkedIn } from '@material-ui/icons';

const Footer = () => {

    return (
        <div className="footer" id="contact">

            <Link href="https://www.linkedin.com/in/albertobelalcazar/" target="_blank" rel="noopener" color="inherit">
                <LinkedIn style={{ fontSize: 70 }} />
            </Link>

        </div>
    );
};

export default Footer;