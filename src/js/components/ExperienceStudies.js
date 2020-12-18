import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '1200px',
        margin: '50px auto 0 auto'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

const ExperienceStudies = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className={classes.root} id="#ExperienceStudies">
            <Grid container spacing={0} alignItems="center" justify="center">
                <Grid item xs={12} sm={6} md={6} style={{ padding: 10 }}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>LinkedIn Learning</Typography>
                            <Typography className={classes.secondaryHeading}>Övriga professionella kurser</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <span>
                                    <span>Agile Development Practices</span>
                                    <span>CSS Essential Training 3</span>
                                    <span>CSS Essential Training 2</span>
                                    <span>CSS Essential Training 1</span>
                                    <span>HTML Essential Training</span>
                                    <span>Programming Foundations: Fundamentals</span>
                                    <span>UX Foundations: Accessibility</span>
                                    <span>User Experience for Web Designers</span>
                                    <span>HTML & CSS: Creating Forms</span>
                                    <span>Web Development Foundations: Full-Stack vs Front-End</span>
                                    <span>Ionic 2 and AngularFire2: Building Mobile Apps</span>
                                    <span>Cirkelledare - ABF</span>
                                    <span>JavaScript and JSON</span>
                                    <span>Up and Running with AngularJS 1</span>
                                    <span>Bootstrap 3: Advanced Web Development</span>
                                    <span>WordPress Developer Tips: Information Architecture and the Template Hierarchy</span>
                                </span>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography className={classes.heading}>Google Analytics / Google Adwords</Typography>
                            <Typography className={classes.secondaryHeading}>
                                2 dagars kurs från Google
          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Google Analytics del 1 +2 Introduktions- samt fördjupningskurs av Outfox/Google, Januari 2015.<br />
                    AdWords Advertising Fundamentals, en tredagars kurs hos Google, Mars, 2015.
          </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography className={classes.heading}>ABF</Typography>
                            <Typography className={classes.secondaryHeading}>
                                Arbetanas Bildningsförbund
          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Certifierad cirkelledare för ABF (Arbetanas Bildningsförbund) 2014
          </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Yrkeshögskola</Typography>
                            <Typography className={classes.secondaryHeading}>
                                C3L
          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Utbildningen Webbutvecklare med RIA
          </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5bh-content"
                            id="panel5bh-header"
                        >
                            <Typography className={classes.heading}>Norrtälje Kommunala Vuxenutbildning</Typography>
                            <Typography className={classes.secondaryHeading}>
                                NKV
          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Kompleterande kurser inför framtida studier
          </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={12} sm={6} md={6} style={{ padding: 10 }}>
                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel6bh-content"
                            id="panel6bh-header"
                        >
                            <Typography className={classes.heading}>Svedea</Typography>
                            <Typography className={classes.secondaryHeading}>Webutvecklare / FrontEnd utvecklare</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Förvaltning - Ny utveckling på alla produkter som finns på Webben
                    </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel7bh-content"
                            id="panel7bh-header"
                        >
                            <Typography className={classes.heading}>Widespace - Premium Mobile Advertising</Typography>
                            <Typography className={classes.secondaryHeading}>
                                FrontEnd utvecklare
          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                FrontEnd utvecklare av mobil annonser till olika stora internationella företag
          </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel8bh-content"
                            id="panel8bh-header"
                        >
                            <Typography className={classes.heading}>Cirkelledare på ABF</Typography>
                            <Typography className={classes.secondaryHeading}>
                                Arbetanas Bildningsförbund
          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Jag har drivit några kurser på ABF, som cirkelledare hjälpe jag folk t.ex. att skapa och driva en hemsida samt olika data kurser för nybörjare och avancerat nivå
          </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel9bh-content"
                            id="panel9bh-header"
                        >
                            <Typography className={classes.heading}>KreaMegas</Typography>
                            <Typography className={classes.secondaryHeading}>
                                Egenföretagare
          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Webbyrå / utvecklare av Hemsidor åt olika små och medelstora företag
          </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel10bh-content"
                            id="panel10bh-header"
                        >
                            <Typography className={classes.heading}>Yrkeshögskola C3L</Typography>
                            <Typography className={classes.secondaryHeading}>
                                Webbutvecklare
          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Webbutvecklare av yhc3l.se
          </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel10bh-content"
                            id="panel10bh-header"
                        >
                            <Typography className={classes.heading}>Extern-IT</Typography>
                            <Typography className={classes.secondaryHeading}>
                                Webbutvecklare
          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Webbutvecklare av externit.se fireconsultancy.se
          </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>






        </div>
    );
};

export default ExperienceStudies;