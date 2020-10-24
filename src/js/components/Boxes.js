import React from 'react';
import Grid from '@material-ui/core/Grid';

const Boxes = () => {
    return (
        <div>
            <Grid container alignItems="center" justify="center">
                <Grid item xs={12} sm={6} md={4}>
                    <h2>HTML 5</h2>
                    <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <h2>CSS3</h2>
                    <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <h2>Javascript</h2>
                    <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                </Grid>

            </Grid>
        </div>
    );
};

export default Boxes;