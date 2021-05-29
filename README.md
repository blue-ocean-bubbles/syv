
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    //put image asset here for SYV
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Secure Your Vote</h3>

  <p align="center">
    Voting has never been more accessible or more secure than with Secure Your Vote!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
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

[![Product Name Screen Shot][product-screenshot]](https://example.com)

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

//Do we need a config.js file for the app

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


