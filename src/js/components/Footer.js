import React from 'react';
import { LinkedIn, YouTube, Facebook } from '@material-ui/icons';

const Footer = () => {
    return (
        <div className="footer">
            <LinkedIn style={{ fontSize: 70 }} />
            <YouTube style={{ fontSize: 70 }} />
            <Facebook style={{ fontSize: 70 }} />
        </div>
    );
};

export default Footer;