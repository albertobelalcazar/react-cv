import React from 'react';
import { LinkedIn, YouTube, Facebook } from '@material-ui/icons';

const Footer = () => {
    return (
        <div className="footer">
            <LinkedIn style={{ fontSize: 50 }} />
            <YouTube style={{ fontSize: 50 }} />
            <Facebook style={{ fontSize: 50 }} />
        </div>
    );
};

export default Footer;