import React from "react";
import { Deck, Heading, ListItem, List, Slide, Text } from "spectacle";

import createTheme from "spectacle/lib/themes/default";
import "tachyons/css/tachyons.min.css";

require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#ff00ac",
    quartenary: "#00dade",
    cinquo: "#ffe400"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const cssWithAnimations = `#reactive-button-with-animations {
  transition: transform 0.5s ease, color 0.5s ease, background-color 0.5s ease;
}
#reactive-button-with-animations:hover {
  transform: scale(1.1);
  color: #333333;
  background-color: #dddddd;
}
`;

const keyframesDemo = `.pyro >.before,
.pyro>.after {
  position: absolute;
  z-index: 10;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  box-shadow: 0 0 #f442d9, 0 0 #eef442, 0 0 #f442d9, 0 0 #eef442, 0 0 #f442d9, 0 0 #eef442, 0 0 #f442d9, 0 0 #eef442, 0 0 #f442d9, 0 0 #2ddce5, 0 0 #f442d9, 0 0 #2ddce5, 0 0 #f442d9, 0 0 #2ddce5, 0 0 #f442d9, 0 0 #2ddce5, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #f24330, 0 0 #f442d9, 0 0 #f24330, 0 0 #f442d9, 0 0 #f24330, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9;
  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
}

.pyro>.after {
  animation-delay: 1.25s, 1.25s, 1.25s;
  animation-duration: 1.25s, 1.25s, 6.25s;
}

@keyframes bang {
  to {
    box-shadow: 65px -166.66667px #f2ff00, -66px -110.66667px #b300ff, -195px -12.66667px #a6ff00, -229px -141.66667px #0009ff, 191px 80.33333px #55ff00, -188px -415.66667px #00aaff, -194px -276.66667px #c800ff, 39px -175.66667px #ff9900, 110px -64.66667px #ff6200, 202px -297.66667px #ff0026, -203px -28.66667px #00c4ff, 233px -63.66667px #00ddff, -128px -145.66667px #00fff7, -216px -386.66667px #00d0ff, -152px -372.66667px #ff8000, 8px 61.33333px #2bff00, 49px -388.66667px #0066ff, 114px -243.66667px #00e6ff, -224px -382.66667px #003cff, -101px -224.66667px #00d0ff, 92px -255.66667px #51ff00, 207px -272.66667px #2bff00, 225px -244.66667px #00d0ff, -13px -189.66667px #33ff00, 200px -278.66667px #3c00ff, -225px -101.66667px #f700ff, 53px -292.66667px #000dff, 84px -340.66667px #ff1a00, -72px -72.66667px #ff5500, 111px 9.33333px #00ff6a, -206px -74.66667px #04ff00, 98px -14.66667px #77ff00, 241px -106.66667px #00ffa6, 69px -361.66667px #4400ff, 242px 7.33333px #00ff40, -102px -76.66667px #7700ff, 11px -84.66667px #44ff00, -104px -128.66667px #ff7700, -244px -223.66667px #ff00e6, 97px -127.66667px #88ff00, -115px -272.66667px #ff006f, -66px 74.33333px #aa00ff, 125px 65.33333px #00ffee, -202px -239.66667px #bf00ff, -25px -242.66667px #ff2600, -144px -177.66667px #0055ff, 215px -152.66667px #ffb700, 132px -66.66667px #5900ff, 135px -241.66667px #00ff33, -236px 55.33333px #ff5e00, 73px -30.66667px #6fff00;
  }
}

@keyframes gravity {
  to {
    transform: translateY(200px);
    opacity: 0;
  }
}

@keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={["zoom"]}
          bgColor="primary"
          progressColor="secondary"
          controlColor="secondary"
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Design Systems
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            With the help of Figma
          </Text>
          <Text margin="10px 0 0" textColor="quartenary" size={0.5} fit>
            from my work on Teamstarter
          </Text>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          progressColor="secondary"
          controlColor="secondary"
        >
          <Heading size={3} textColor="secondary" caps>
            Design & Programming in 2018
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={0.5}>
            <List>
              <ListItem>Iterate fast</ListItem>
              <ListItem>Do not repeat yourself</ListItem>
              <ListItem>Trends are passing fast</ListItem>
              <ListItem>Few can only do one of them</ListItem>
              <ListItem>Teams change fast</ListItem>
            </List>
          </Text>
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="cinquo"
          progressColor="secondary"
          controlColor="secondary"
        >
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Design system?
          </Heading>
          <Text margin="10px 0 0" textColor="secondary">
            A design system is a series of components that can be reused in
            different combinations. Design systems allow you to manage design at
            scale
          </Text>
          <Text margin="50px 0 0" textColor="quartenary" fit bold>
            https://forumone.com/ideas/what-is-design-system
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>
            Why Figma?
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={0.5}>
            <List>
              <ListItem>+ Components</ListItem>
              <ListItem>+ Live collaboration</ListItem>
              <ListItem>+ Live demo/share</ListItem>
              <ListItem>+ Available on any (decent) browser</ListItem>
              <ListItem>- Can be slow to load</ListItem>
              <ListItem>- Lack of polish</ListItem>
            </List>
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="cinquo">
          <Heading size={6} textColor="tertiary" caps fit>
            DEMO TIME
          </Heading>
          <Text size={6} textColor="quartenary" margin="20px 0" bold>
            Let's make a simple form
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={6} textColor="tertiary" caps fit>
            Making things that last
          </Heading>
          <Text size={6} textColor="primary" margin="20px 0">
            <List>
              <ListItem>Keep the business terms</ListItem>
              <ListItem>Name your groups</ListItem>
              <ListItem>Use as much global styles as possible</ListItem>
              <ListItem>Split your files</ListItem>
              <ListItem>Lock what you like</ListItem>
            </List>
          </Text>

          <Text textColor="primary">Checkout https://help.figma.com/</Text>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          progressColor="secondary"
          controlColor="secondary"
        >
          <Heading size={6} textColor="tertiary" caps>
            UX tips
          </Heading>
          <List>
            <ListItem>Know your users (and personas)</ListItem>
            <ListItem>Work one use case at a time</ListItem>
            <ListItem>Am I doing something without use case? => DROP</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="cinquo" textColor="secondary">
          <Heading size={2} textColor="quartenary" caps>
            UI tips
          </Heading>
          <List>
            <ListItem>Do 3 simple versions</ListItem>
            <ListItem>Challenge, pick one, iterate</ListItem>
            <ListItem>STEAL</ListItem>
            <ListItem>
              Doing UI requires a lof of exploration. Try try try.
            </ListItem>
            <ListItem>Do not design a system first</ListItem>
            <ListItem>Assign meaning to your colors and fonts</ListItem>
            <ListItem>You are either Picaso or consistent</ListItem>
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          progressColor="secondary"
          controlColor="secondary"
        >
          <Heading size={6} textColor="tertiary" caps fit>
            DEMO TIME (again)
          </Heading>
          <Text size={6} textColor="quartenary" margin="20px 0" bold>
            Teamstarter design system
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          progressColor="secondary"
          controlColor="secondary"
        >
          <style>{keyframesDemo}</style>
          <div className="pyro">
            <div className="before" />
            <div className="after" />
            <Heading size={2} textColor="tertiary" caps>
              We're done!
            </Heading>
            <style>{cssWithAnimations}</style>

            <Text margin="10px 0 0" textColor="secondary" size={0.5}>
              Merci :)
            </Text>
          </div>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="quartenary"
            caps
            fit
            margin="100px 0 0 0"
          >
            Questions?
          </Heading>
          <Text>
            Repo:{" "}
            <a
              className="dib"
              style={{ margin: 30 }}
              href="https://github.com/vincentdesmares/design-system-with-figma"
            >
              https://github.com/vincentdesmares/design-system-with-figma
            </a>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
