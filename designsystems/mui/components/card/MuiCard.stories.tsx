import React from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MuiCard from './MuiCard';
import { Grid } from '@mui/material';

export default {
  title: 'MaterialUI/Components/MuiCard',
  component: MuiCard,
} as ComponentMeta<typeof MuiCard>;

const Template: ComponentStory<typeof MuiCard> = (args) => {
  return <MuiCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  href: '/home',
  title: 'title',
  svgIconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
  children: 'description',
};

export const SvgIconPath: ComponentStory<typeof MuiCard> = () => (
  <Grid container spacing={4} justifyContent="center">
    <Grid item>
      <MuiCard
        href="/"
        title="title"
        svgIconPath="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
      >
        description
      </MuiCard>
    </Grid>
    <Grid item>
      <MuiCard
        href="/"
        title="title"
        svgIconPath="M17.498,11.697c-0.453-0.453-0.704-1.055-0.704-1.697c0-0.642,0.251-1.244,0.704-1.697c0.069-0.071,0.15-0.141,0.257-0.22c0.127-0.097,0.181-0.262,0.137-0.417c-0.164-0.558-0.388-1.093-0.662-1.597c-0.075-0.141-0.231-0.22-0.391-0.199c-0.13,0.02-0.238,0.027-0.336,0.027c-1.325,0-2.401-1.076-2.401-2.4c0-0.099,0.008-0.207,0.027-0.336c0.021-0.158-0.059-0.316-0.199-0.391c-0.503-0.274-1.039-0.498-1.597-0.662c-0.154-0.044-0.32,0.01-0.416,0.137c-0.079,0.106-0.148,0.188-0.22,0.257C11.244,2.956,10.643,3.207,10,3.207c-0.642,0-1.244-0.25-1.697-0.704c-0.071-0.069-0.141-0.15-0.22-0.257C7.987,2.119,7.821,2.065,7.667,2.109C7.109,2.275,6.571,2.497,6.07,2.771C5.929,2.846,5.85,3.004,5.871,3.162c0.02,0.129,0.027,0.237,0.027,0.336c0,1.325-1.076,2.4-2.401,2.4c-0.098,0-0.206-0.007-0.335-0.027C3.001,5.851,2.845,5.929,2.77,6.07C2.496,6.572,2.274,7.109,2.108,7.667c-0.044,0.154,0.01,0.32,0.137,0.417c0.106,0.079,0.187,0.148,0.256,0.22c0.938,0.936,0.938,2.458,0,3.394c-0.069,0.072-0.15,0.141-0.256,0.221c-0.127,0.096-0.181,0.262-0.137,0.416c0.166,0.557,0.388,1.096,0.662,1.596c0.075,0.143,0.231,0.221,0.392,0.199c0.129-0.02,0.237-0.027,0.335-0.027c1.325,0,2.401,1.076,2.401,2.402c0,0.098-0.007,0.205-0.027,0.334C5.85,16.996,5.929,17.154,6.07,17.23c0.501,0.273,1.04,0.496,1.597,0.66c0.154,0.047,0.32-0.008,0.417-0.137c0.079-0.105,0.148-0.186,0.22-0.256c0.454-0.453,1.055-0.703,1.697-0.703c0.643,0,1.244,0.25,1.697,0.703c0.071,0.07,0.141,0.15,0.22,0.256c0.073,0.098,0.188,0.152,0.307,0.152c0.036,0,0.073-0.004,0.109-0.016c0.558-0.164,1.096-0.387,1.597-0.66c0.141-0.076,0.22-0.234,0.199-0.393c-0.02-0.129-0.027-0.236-0.027-0.334c0-1.326,1.076-2.402,2.401-2.402c0.098,0,0.206,0.008,0.336,0.027c0.159,0.021,0.315-0.057,0.391-0.199c0.274-0.5,0.496-1.039,0.662-1.596c0.044-0.154-0.01-0.32-0.137-0.416C17.648,11.838,17.567,11.77,17.498,11.697 M16.671,13.334c-0.059-0.002-0.114-0.002-0.168-0.002c-1.749,0-3.173,1.422-3.173,3.172c0,0.053,0.002,0.109,0.004,0.166c-0.312,0.158-0.64,0.295-0.976,0.406c-0.039-0.045-0.077-0.086-0.115-0.123c-0.601-0.6-1.396-0.93-2.243-0.93s-1.643,0.33-2.243,0.93c-0.039,0.037-0.077,0.078-0.116,0.123c-0.336-0.111-0.664-0.248-0.976-0.406c0.002-0.057,0.004-0.113,0.004-0.166c0-1.75-1.423-3.172-3.172-3.172c-0.054,0-0.11,0-0.168,0.002c-0.158-0.312-0.293-0.639-0.405-0.975c0.044-0.039,0.085-0.078,0.124-0.115c1.236-1.236,1.236-3.25,0-4.486C3.009,7.719,2.969,7.68,2.924,7.642c0.112-0.336,0.247-0.664,0.405-0.976C3.387,6.668,3.443,6.67,3.497,6.67c1.75,0,3.172-1.423,3.172-3.172c0-0.054-0.002-0.11-0.004-0.168c0.312-0.158,0.64-0.293,0.976-0.405C7.68,2.969,7.719,3.01,7.757,3.048c0.6,0.6,1.396,0.93,2.243,0.93s1.643-0.33,2.243-0.93c0.038-0.039,0.076-0.079,0.115-0.123c0.336,0.112,0.663,0.247,0.976,0.405c-0.002,0.058-0.004,0.114-0.004,0.168c0,1.749,1.424,3.172,3.173,3.172c0.054,0,0.109-0.002,0.168-0.004c0.158,0.312,0.293,0.64,0.405,0.976c-0.045,0.038-0.086,0.077-0.124,0.116c-0.6,0.6-0.93,1.396-0.93,2.242c0,0.847,0.33,1.645,0.93,2.244c0.038,0.037,0.079,0.076,0.124,0.115C16.964,12.695,16.829,13.021,16.671,13.334 M10,5.417c-2.528,0-4.584,2.056-4.584,4.583c0,2.529,2.056,4.584,4.584,4.584s4.584-2.055,4.584-4.584C14.584,7.472,12.528,5.417,10,5.417 M10,13.812c-2.102,0-3.812-1.709-3.812-3.812c0-2.102,1.71-3.812,3.812-3.812c2.102,0,3.812,1.71,3.812,3.812C13.812,12.104,12.102,13.812,10,13.812"
      >
        description
      </MuiCard>
    </Grid>
    <Grid item>
      <MuiCard
        href="/"
        title="title"
        svgIconPath="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
      >
        description
      </MuiCard>
    </Grid>
  </Grid>
);

export const MuiIcon: ComponentStory<typeof MuiCard> = () => (
  <Grid container spacing={4} justifyContent="center">
    <Grid item>
      <MuiCard
        href="/"
        title="Home"
        MaterialIcon={<HomeOutlinedIcon color="primary" />}
      >
        this is home card
      </MuiCard>
    </Grid>
    <Grid item>
      <MuiCard
        href="/"
        title="Setting"
        MaterialIcon={<SettingsIcon color="primary" />}
      >
        this is setting card
      </MuiCard>
    </Grid>
    <Grid item>
      <MuiCard
        href="/register"
        title="Register"
        MaterialIcon={<PersonAddIcon color="primary" />}
      >
        this is register card
      </MuiCard>
    </Grid>
    <Grid item>
      <MuiCard
        href="/contact"
        title="Contact"
        MaterialIcon={<EmailOutlinedIcon color="primary" />}
      >
        this is register card
      </MuiCard>
    </Grid>
    <Grid item>
      <MuiCard
        href="/register"
        title="Register"
        MaterialIcon={<PersonAddIcon color="primary" />}
      >
        this is contact card
      </MuiCard>
    </Grid>
    <Grid item>
      <MuiCard
        href="/login"
        title="Login"
        MaterialIcon={<LoginIcon color="primary" />}
      >
        this is login card
      </MuiCard>
    </Grid>
  </Grid>
);