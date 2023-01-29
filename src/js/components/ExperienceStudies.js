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
        margin: '50px auto 0 auto',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    h1: {
        fontSize: "50px",
        '@media (max-width:500px)': {
            fontSize: '30px',
        },
        margin: "50px 0 3px 0",
        padding: "20px 0",
        color: "#356277",
        textAlign: "left",
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    imageES: {
        display: "block",
        width: "100%",
    },
    accordion: {
        '&:hover, &[aria-expanded="true"]': {
            background: "#073b4c",
            transition: ".4s",
            color: "#fff",
            '& p,svg': {
                color: "#fff",
            }
        }
    },
    expanded: {
        '&$expanded': {
            margin: "0",
        }
    },
}));

const ExperienceStudies = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className={classes.root} id="ExperienceStudies">
            <Grid container spacing={0} alignItems="stretch" justify="center">
                <Grid item xs={12} sm={6} md={6} style={{ padding: 10 }}>
                    <h1 className={classes.h1} id="studies">Utbildning</h1>
                    <Accordion className={classes.expanded} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            elevation={0}
                            className={classes.accordion}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>Fullföljda kurser via E-Learning</Typography>
                            <Typography className={classes.secondaryHeading}>LinkedIn (FRÅN 2015 - NUTID)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <span className="list_ExperienceStudies">
                                    <span>Agile Development Practices</span>
                                    <span>CSS Essential Training 3</span>
                                    <span>CSS Essential Training 2</span>
                                    <span>CSS Essential Training 1</span>
                                    <span>HTML Essential Training</span>
                                    <span>Programming Foundations: Fundamentals</span>
                                    <span>UX Foundations: Accessibispanty</span>
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
                    <Accordion className={classes.expanded} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            className={classes.accordion}
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
                                <span className="list_ExperienceStudies">
                                    <span>Google Analytics del 1 +2 Introduktions- samt fördjupningskurs av Outfox/Google, Januari 2015.</span>
                                    <span>AdWords Advertising Fundamentals, en tredagars kurs hos Google, Mars, 2015.</span>
                                </span>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.expanded} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            className={classes.accordion}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography className={classes.heading}>Cirkelledare - ABF</Typography>
                            <Typography className={classes.secondaryHeading}>
                                Arbetanas Bildningsförbund
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <span className="list_ExperienceStudies">
                                    <span>
                                        Certifierad cirkelledare för ABF (Arbetanas Bildningsförbund) 2014
                                    </span>
                                </span>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.expanded} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            className={classes.accordion}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Webbutvecklare med RIA • 2009 - 2010</Typography>
                            <Typography className={classes.secondaryHeading}>
                                C3L
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <span className="list_ExperienceStudies">
                                    <span>
                                        Yrkesutbildning, Läste till webbutvecklare med RIA, utveckling av bokningssystem med Java, Actionscript 2.0 med mera.
                                    </span>
                                </span>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.expanded} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary
                            className={classes.accordion}
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
                                <span className="list_ExperienceStudies">
                                    <span>
                                        Kompleterande kurser inför framtida studier
                                    </span>
                                </span>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* <Accordion className={classes.expanded} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary
                            className={classes.accordion}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel6bh-content"
                            id="panel6bh-header"
                        >
                            <Typography className={classes.heading}>ABF</Typography>
                            <Typography className={classes.secondaryHeading}>
                                Arbetanas Bildningsförbund
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <span className="list_ExperienceStudies">
                                    <span>
                                        Certifierad cirkelledare för ABF (Arbetanas Bildningsförbund) 2014
                                    </span>
                                </span>
                            </Typography>
                        </AccordionDetails>
                    </Accordion> */}
                </Grid>

                <Grid item xs={12} sm={6} md={6} style={{ padding: 10 }}>
                    <h1 className={classes.h1} id="experience">Erfarenhet</h1>
                    <Accordion className={classes.expanded} expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                        <AccordionSummary
                            className={classes.accordion}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel13bh-content"
                            id="panel13bh-header"
                        >
                            <Typography className={classes.heading}>Lexly</Typography>
                            <Typography className={classes.secondaryHeading}>Webutvecklare / FrontEnd utvecklare</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <span className="list_ExperienceStudies">
                                    <span>
                                        <span>Ledande roll som Front-End utvecklare for hela Lexly.se Lexly.com Lexly.fi Lexly.com.br</span>
                                        <span>Jag har jobbat med react, umbraco, figma</span>
                                        <a href="https://lexly.se/" target="_blank" rel="noopener noreferrer">https://lexly.se/</a>
                                        <span>FrontEnd utvecklare</span>
                                    </span>
                                </span>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.expanded} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                        <AccordionSummary
                            className={classes.accordion}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel7bh-content"
                            id="panel7bh-header"
                        >
                            <Typography className={classes.heading}>Svedea</Typography>
                            <Typography className={classes.secondaryHeading}>Webutvecklare / FrontEnd utvecklare</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <span className="list_ExperienceStudies">
                                    <span>
                                        <span>Ledande roll som Front-End utvecklare for hela Svedea.se</span>
                                        <span>Varit drivande i utvecklingen av företagsförsäkring som är React-baserad.</span>
                                        <a href="https://www.svedea.se/foretagsforsakring" target="_blank" rel="noopener noreferrer">https://www.svedea.se/foretagsforsakring</a>
                                        <span>På Svedea hade vi WebTalks, på fredagar där jag hållit i föreläsningar för mina kollegor inom Git/Github på nybörjarnivå samt Css/Sass.</span>
                                    </span>
                                </span>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.expanded} expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                        <AccordionSummary
                            className={classes.accordion}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel8bh-content"
                            id="panel8bh-header"
                        >
                            <Typography className={classes.heading}>Widespace - Premium Mobile Advertising</Typography>
                            <Typography className={classes.secondaryHeading}>
                                FrontEnd utvecklare
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <span className="list_ExperienceStudies">
                                    <span>
                                        Arbetade som front-end utvecklare med GreenSock JS, Photoshop samt Adobe Illustrator bland annat.
                                    </span>
                                </span>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.expanded} expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                        <AccordionSummary
                            className={classes.accordion}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel9bh-content"
                            id="panel9bh-header"
                        >
                            <Typography className={classes.heading}>Cirkelledare på ABF</Typography>
                            <Typography className={classes.secondaryHeading}>
                                Arbetanas Bildningsförbund
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <span className="list_ExperienceStudies">
                                    <span>
                                        Uppskattad och efterfrågad cirkelledare för flertalet kurser inom webbutveckling, grundkurs i dator samt E-Commerce.
                                    </span>
                                </span>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.expanded} expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                        <AccordionSummary
                            className={classes.accordion}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel10bh-content"
                            id="panel10bh-header"
                        >
                            <Typography className={classes.heading}>KreaMegas</Typography>
                            <Typography className={classes.secondaryHeading}>
                                Egenföretagare
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <span className="list_ExperienceStudies">
                                    <span>
                                        <span>Drev eget företag inom webbdesign.</span>
                                        <span>Utveckling av hemsidor, planering och genomförande av projekten, kontakt med samt samarbete med kunderna. Utveckling av många olika typer av hemsidor.</span>
                                    </span>
                                </span>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.expanded} expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                        <AccordionSummary
                            className={classes.accordion}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel11bh-content"
                            id="panel11bh-header"
                        >
                            <Typography className={classes.heading}>Yrkeshögskola C3L</Typography>
                            <Typography className={classes.secondaryHeading}>
                                Webdesigner, Front-End utvecklare
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <span className="list_ExperienceStudies">
                                    <span>
                                        Projektanställning inom webbutveckling avseende deras hemsida.
                                    </span>
                                </span>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.expanded} expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                        <AccordionSummary
                            className={classes.accordion}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel12bh-content"
                            id="panel12bh-header"
                        >
                            <Typography className={classes.heading}>Extern-IT</Typography>
                            <Typography className={classes.secondaryHeading}>
                                Webbutvecklare
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <span className="list_ExperienceStudies">
                                    <span>
                                        Projektanställning inom webbutveckling för tre olika hemsidor (Tre olika företag inom samma koncern).
                                    </span>
                                </span>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </div>
    );
};

export default ExperienceStudies;