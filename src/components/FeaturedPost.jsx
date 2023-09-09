import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles({
  cover: {
    backgroundImage: `url(https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80)`,
    backgroundPosition: "center",
    padding: "35px 25px",
  },
  title: {
    fontSize: 40,
    fontFamily: "Montserrat",
  },
  textContainer: {
    color: "white",
  },
  buttonflex: {
    flexGrow: 1,
  },
});

const FeaturedPost = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography variant="h5">Long Drive With Best Friend</Typography>
        <Typography>
          “Walking with a friend in the dark is better than walking alone in the
          light.” “As with any journey, whom you travel with is more important
          than the destination.” “Good company on a journey makes the way seem
          shorter.” “You can pack for every occasion but a good friend will
          always be the best thing you yould bring!”
        </Typography>
        <CardActions>
          <Button
            onClick={handleExpandClick}
            variant="outlined"
            color="primary"
          >
            Read More
          </Button>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              A couple of my friends, we’ve always dreamt about going to India
              to visit the Taj Mahal and explore the city around.
            </Typography>
            <Typography paragraph>
              Our destinations were a specific little town in India and not many
              people lived there, but we’d been stopping often in towns and
              small cities along the way. We spent as little days there,
              shopping for food at the markets and strolling around to see the
              sights, although there weren’t many. This was in the day of a hot
              summer, in July and all the grass on the hills and plains around
              the town were dead and brown. The overall feeling was that of the
              normal kind of any rural place has in the summer. But the
              overwhelming of happiness and joyous took over my body of being
              able to travel with my close friends. My feelings and attitude
              towards life had changed into positive, it was like I was a whole
              new different person. Every night I went to bed with a smile on my
              face.
            </Typography>
            <Typography paragraph>
              One night we decided to visit this abandoned fortress that stuck
              out in the middle of the desert. We heard a legend about that a
              sorcerer cast a curse on the area after being rejected by the
              local princes. Many people witnessed seeing ghost and paranormal
              activities there so we decided to give a try. At first, my
              thoughts were unclear and I was very unsure that I didn’t want to
              visit that place, but I overcame my fear and went with my friends,
              a as we were walking there, my heart tightened and fear grew
              within me. As we went inside the place, this stench smell took up
              my whole nose, it smelled like rotting flesh and decay and it made
              me sick to my stomach. We kept going around the place as we tried
              to ignore the smell even though it was hard. There were many
              statues there like Krishna and other religious statues, but this
              one particular statue caught my eye, as soon as I looked at it, it
              sent shivers all over my body. It was a small, hand-carved statue
              of a woman, with a stained noose hung around her neck and it was
              old and rusty. I tried to ignore what I had just seen and tried to
              keep the same pace as my friends. After a while, my friends and I
              got tired so we decided to rest for a couple of minutes outside.
              My mind was still thinking about that creepy statue that I’ve seen
              earlier so I got up and tried to go and take my mind off it but I
              was somewhat still attracted to that statue and something was
              pulling me to it. I went back to go examine the statue carefully
              one more, it still had that creepy feeling like the first time
              I’ve looked at it. I decided to pick it up and read what it had
              said. As soon as I picked it up, the lights started flickering and
              there was a harsh wind that came out of nowhere, it knocked me out
              of my feet and I dropped the statue. I could hear the shatter of
              the statue and a shadow of what seemed to be women came out it. I
              took a big gulp and watched the shadow gets bigger and bigger. I
              sat on the floor for a moment to try to recover from what I had
              just witnessed, but my heart began to throb as if was beating out
              of my throat. It was just my imagination, I whispered to myself.
              Trying to get myself together I began to feel these hot winds of
              air on the back of my neck and it sounded like the rasping tones
              of an old woman. “You have awakened my soul, now I will haunt you
              for the rest of your life”. I screamed as I quickly rose to my
              feet.
            </Typography>
            <Typography>
              My experience in that place was the most frightening and the
              scariest things that happened to me in my entire life. Some nights
              I would still have nightmares about that creepy statue. My friends
              still wonder about what I was actually doing in there by myself
              and the terror look I had on face when I came out. It’s been
              almost two years since our trip and I still haven’t told my
              friends about what happened to me in that place, and I don’t think
              I’ll ever have the guts to tell them that
            </Typography>
          </CardContent>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default FeaturedPost;
