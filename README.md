# BREATHE WITH ME - BREATHING MONKEY

Following on from the [Medi-Mate](https://github.com/SchoolOfCode/medi-mate-front-end) project undertaken while studying at the [School of Code](https://www.schoolofcode.co.uk/), we never had time to get our animated character to breathe. I wanted to continue to try and get this working on my own after the main project ended.

This app is to help people with asthma and anxiety to manage their breathing. It is common to breathe in too much or over breathe while having an asthma or anxiety attack. Breathing along with the monkey should help to regulate your breath.

I particularly enjoyed working on the logic of getting the monkey to breathe at the correct times depending on the user's selection of the drop-down menus. This project also gave me the opportunity to try out sprite sheets and creating my own.

[Live Site](https://breathe-with-me.netlify.app/)

## Features
- Select your own breathe in, hold breath and breathe out times from the drop-down menus (0-9 seconds available for each).
- Top tip modal pop-up describes alternative breathing techniques.
- Monkey will breathe to the times selected with an additional banner above prompting when to breathe in, hold and breathe out.

## Installation
```bash
  git clone https://github.com/Elkennard/Breathing-Monkey.git
  
  open with live server
```
## Known Issues
Although the animation is designed to be pixelated for a retro feel, with the addition of extra sprite frames, the breathing would be smoother.

The breathing times are set using a setTimeout function. This can be unreliable, depending on the browser being used times can vary slightly.

## Roadmap
### Next Steps
- Possibly convert the programme to a react app
- Further investigation into how to set more accurate times is required with an alternative to the setTimeout function
- Create additional sprite frames to make the breathing process smoother.

## Tech Stack
<div align="left">
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank"><img style="margin: 10px" src="https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png" alt="HTML5" height="50"/></a>
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>
<a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>
<a href="https://github.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" /></a>
<a href="https://www.netlify.com/" target="_blank"><img style="margin: 10px" src="https://www.vectorlogo.zone/logos/netlify/netlify-ar21.svg" alt="Netlify" height="50"/></a>
</div>