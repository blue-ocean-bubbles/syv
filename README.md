<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://github.com/blue-ocean-bubbles/syv/blob/main/public/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Secure Your Vote</h3>

  <p align="center">
    Voting has never been more accessible or more secure than with Secure Your Vote!
    <br />
    <a href="https://github.com/blue-ocean-bubbles/syv"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://13.90.213.141/">View Demo</a>
    ·
    <a href="https://github.com/blue-ocean-bubbles/syv/issues">Report Bug</a>
    ·
    <a href="https://github.com/blue-ocean-bubbles/syv/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#getting-started">Getting Started</a> </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#summary">Summary</a></li>
        <li><a href="#walkthrough">Walkthrough</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

![image](https://user-images.githubusercontent.com/73206753/120080209-ac9e7980-c06c-11eb-95c0-140fec9f7617.png)

The aim of this project was to create a secure and easy-to-use voting app that also showed election information catered to the user's location. Our team of highly skilled engineers envisioned a method that accomplished a high level of security while also offering many user focused experiences that create a sticky user experience while also being aesthetically pleasing and accessible. We have incorporated many features that allow customization based on user specific information that is securely stored and offer features that guide the user to having all the election information at their fingertips.   
 
Our App gives users the ability to sign-up and sign-in securely, get polling info, register to vote with the US government and be able to view specific election information for elections in their area. Then if a user has been validated living in the United States, they will be able to vote directly in the app securely.

### Contributors
* [Jason Bhatti](https://github.com/bhattibytes)
* [Marco Canchola](https://github.com/marcoantonio224)
* [Andrew Lee](https://github.com/TurkeyFats)
* [De'Markus Matthews](https://github.com/DManthonyx)
* [Cody Mumford](https://github.com/codymumford)
* [Dom Stepek](https://github.com/domstepek)
* [Roy Xue](https://github.com/mooseygoose)

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Next.js](https://getbootstrap.com)
* [React](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com)
* [Mongodb](https://www.mongodb.com/)
* [Passport](http://www.passportjs.org/)

## Getting Started

First, install the dependencies:

```bash
npm install
```

To start a development server:

```bash
npm run dev
# or
yarn dev
```

Or for production:

```bash
npm run build
# and
npm start
```

You will need the following API keys in a .env.local file for authentication:
* Facebook civics API key (https://developers.facebook.com/docs/)
* Google civics API key(https://developers.google.com/civic-information/docs/using_api)


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<!-- USAGE EXAMPLES -->
## Usage

### Summary
Our App gives users the ability to sign-up and sign-in securely, get polling info, register to vote with the US government and be able to view specific election information for elections in their area. Then if a user has been validated living in the United States, they will be able to vote directly in the app securely.     

### Walkthrough
![image](https://user-images.githubusercontent.com/73206753/120080209-ac9e7980-c06c-11eb-95c0-140fec9f7617.png)
* Starting at the home page, there are three links that--even if a user doesn't have an account can register to vote, check registration status, and get election information based on state.
* Upon clicking Get Information By State, an interactive map will be displayed. When a user clicks on a state, the user will be redirected to a state specific page with that state's election information.
![image](https://user-images.githubusercontent.com/73206753/120081774-1ec68c80-c074-11eb-865f-397055c74434.png)
* To sign-up, click the sign-up button on the top right of the homepage. Then, the user enters the requisite information: first name, last name, email, and password. Both email and password have validations that will check if they are properly formatted: the password be between 8 - 13 characters and that also contain at least one uppercase, one lowercase, and one special character.
* We’ve also implemented single sign on for both Google and Facebook. We’ll circle back to this and have the backend team explain their process. 
![image](https://user-images.githubusercontent.com/73206753/120082373-79adb300-c077-11eb-8b4c-dd9c8161e219.png)
* Next we come to the Address Validation where first you can search for an address then once it is found populate the rest of the fields and validate the address is in the United States with a special confetti animation on the inserting a valid address. 
![image](https://user-images.githubusercontent.com/73206753/120082435-f3de3780-c077-11eb-8c4a-1b8c21c76a42.png)
* Now that the user is Authenticated and Validated they are now able to see a user specific dashboard with several tabs with information tailored to the user’s specific location. 
<h4>Dashboard with tabbed side navigation bar you will notice has:</h4>
<ol>
  <li><p>Voter Registration - passes user info to a government secured website embedded in our application by use of an iFrame
</p></li>
  <li><p>Voter Check Registration</p></li>
  <li><p>Sign-up For Reminders on elections happening in your area
</p></li>
  <li><p>Request Absentee Ballot
</p></li>
  <li><p>Pledge to Vote - if user is not old enough to vote, sends a reminder to vote once eligible</p></li>
  <li><p>Ability to Vote - user sees voter ballot specific to the users address</p></li>
</ol>

