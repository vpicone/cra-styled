import React from 'react';
import { withStyles } from 'material-ui/styles';
import styled from 'styled-components';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import ScrollableAnchor from 'react-scrollable-anchor';

import ST from './ST.png';
import FB from './FB.png';
import BB from './BB.png';
import AB from './AB.png';
import SU from './SU.png';

const Link = styled.a`
  text-decoration: none;
  color: #222;
`;

const styles = {
  card: {
    maxWidth: 400,
    minWidth: 340,
    margin: '10px',
    flex: '1',
    marginBottom: '20px'
  },
  media: {
    height: 150
  }
};

function ProjectContainer(props) {
  const classes = props.classes;
  return (
    <div style={{ margin: '5px' }}>
      <ScrollableAnchor id={'projects'}>
        <Typography style={{ margin: '15px' }} type="display3">
          <span style={{ color: '#222' }}>Projects</span>
        </Typography>
      </ScrollableAnchor>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          margin: '8px'
        }}
      >
        <div>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image={AB} title="Antibuddy" />
            <CardContent>
              <Typography type="headline" component="h2">
                Antibuddy
              </Typography>
              <Typography component="p">
                Antibuddy is a CRUD app with smart search powered by firebase.
                The app allows authorized users to submit new antigens and uses
                Chart.js to plot demographics. Utilizes React, Material.ui,
                Firebase, Now.sh under the hood.
              </Typography>
            </CardContent>
            <CardActions>
              <Button dense>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.antibuddy.com"
                >
                  Demo
                </Link>
              </Button>
              <Button dense>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/vpicone/Antibuddy"
                >
                  Github
                </Link>
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image={SU} title="Antibuddy" />
            <CardContent>
              <Typography type="headline" component="h2">
                Surveyvey
              </Typography>
              <Typography component="p">
                Surveyvey that allows users to create surveys and have them
                emailed out to users. Users purchase credits which fascilitate
                one survey creation each. The surveys are emailed out to
                user-defined email lists and the resutls are made available via
                a dashboard.
              </Typography>
            </CardContent>
            <CardActions>
              <Button dense>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://surveyvey.now.sh"
                >
                  Demo
                </Link>
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image={FB} title="Followbud" />
            <CardContent>
              <Typography type="headline" component="h2">
                Followbud
              </Typography>
              <Typography component="p">
                Spotify's follow feature allows you to receive notifications
                when your favorite artists release new music. Followbud allows
                you to easily follow all of the artists in your favorite Spotify
                playlists.
              </Typography>
            </CardContent>
            <CardActions>
              <Button dense>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://followbud.now.sh"
                >
                  Demo
                </Link>
              </Button>
              <Button dense>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/vpicone/Followbud"
                >
                  Github
                </Link>
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={BB}
              title="Blood Bank Pall"
            />
            <CardContent>
              <Typography type="headline" component="h2">
                BloodBankPal
              </Typography>
              <Typography component="p">
                The bloodbank courier schedule was outdated and difficult to
                read. The schedule updates in real time and implements Googles
                Material Design pattern for readability. Uses webpack, react,
                react-router, material-ui and Now.
              </Typography>
            </CardContent>
            <CardActions>
              <Button dense>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.bloodbankpal.com"
                >
                  Demo
                </Link>
              </Button>
              <Button dense>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/vpicone/BloodbankPal"
                >
                  Github
                </Link>
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={ST}
              title="Options splash page"
            />
            <CardContent>
              <Typography type="headline" component="h2">
                Sorry Tennessee
              </Typography>
              <Typography component="p">
                As seen in the Austin Statesman, my friend's text messages, and
                my Mom's refrigerator. Removes Tennessee from most drop down
                menus across the web for the greater good of Texans.
              </Typography>
            </CardContent>
            <CardActions>
              <Button dense>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://chrome.google.com/webstore/detail/sorry-tennessee/pnfibhfelcbokechjfmghnmgbchpijaj"
                >
                  Demo
                </Link>
              </Button>
              <Button dense>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/vpicone/SorryTennesee"
                >
                  Github
                </Link>
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(ProjectContainer);
