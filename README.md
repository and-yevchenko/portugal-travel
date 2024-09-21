# Travel Portugal with Horizon

This project is a fully responsive travel company landing page built using React, developed as a pet project for educational purposes. The site demonstrates modern web development techniques and interactive UI/UX components to enhance user engagement and provide a visually appealing experience across all devices.
As a pet project, this landing page was created to learn and practice front-end development using React. It demonstrates a range of modern web development skills, including responsive design, interactive components, and advanced UI effects, providing a solid foundation for further exploration and learning in front-end technologies.

## 🪓 Features & Process

**Parallax Effect**: A dynamic parallax effect on the landing page's hero section creates a sense of depth and visual interest as users scroll, making the first impression highly engaging.
It is implemented using several images of the same size, each containing different fragments, layered on top of each other. The effect is achieved by applying `transform: translate` to each image based on the value of `window.scrollY`.

**Navigation Menu**: An intuitive navigation menu allows users to smoothly transition between different sections of the site, providing a clear and accessible browsing experience.
The menu functionality is implemented using the `useMenu.jsx` hook. Meanwhile, smooth scrolling for all links on the site is achieved with the `useSmoothScroll.jsx` hook. This hook collects the necessary refs of the links and includes a function that, when a link is clicked, takes the relevant ref and applies `scrollIntoView({ behavior: 'smooth' })`. Besides the menu, additional features have been added, such as direct navigation to the contact form and a button that allows users to scroll back to the top of the page from anywhere.

**Sticky Slider for Destinations**: A sticky slider showcases key travel destinations, remaining fixed as the user scrolls.
Achieved with `position: sticky`.

**Stepper with Route Plan and Map**: The site includes a stepper component that outlines the travel route plan, highlighting each step of the journey with map visualization.
The idea behind the stepper is to display the sequence of stops on the travel route while also marking the exact locations on a small SVG map of Portugal.

**Accordion for FAQs Section**: The FAQs section is enhanced with an accordion component, allowing users to expand and collapse questions for a more organized and digestible presentation of information.

**Customer Reviews with Automatic Spinning Slider**: A spinning automatic slider effect is implemented for the customer reviews section, rotating through testimonials to highlight positive feedback and build trust.
One of the most challenging aspects of implementation and responsiveness on this site is this effect. It is achieved by repositioning the last card in the DOM tree:

```javascript
const clients = useRef();
useEffect(() => {
    const interval = setInterval(() => {
        const lastCard = clients.current.lastChild;
        clients.current.prepend(lastCard);
    }, 5000);

    return () => clearInterval(interval);
}, []);
```

However, it’s worth noting that it can also work well by swapping classes or attributes and using `order`. The main to this slider is the `absolute` positioning of the cards and moving them with `top`, `left`, `bottom`, `right`, and/or `transform`.

**Feedback Form**: A user-friendly feedback form is included for visitors to easily contact the company, featuring input validation and error handling to ensure a smooth experience.
The form does not use any third-party libraries and was given limited development time, so the validation is basic and only checks for required fields being filled in.

**Adaptive Design**: The landing page is fully adaptive, ensuring that it is responsive and optimized for viewing on all devices, from desktops to tablets and smartphones.

## 📚 What I Learned?

I worked with **React** and styling, and discovered some UI solutions to enhance the usability of the website.
**`useState, useEffect, useContext, useRef`:** I got experience in using the most popular hooks, understood the logic of work and the potential for their use, I found some life hacks for myself when working with them. I also wrote several custom hooks.

## 📈 Overall Growth:

This project sharpened my ability to tackle complex challenges, introduced me to new tools and techniques, and significantly enhanced my skills for future work. It provided me with valuable hands-on experience in programming, allowing me to grow as a developer.

## ⭐ How can it be improved?

-   Improve form validation
-   Change the initial parallax image to a more attractive one
-   Make the sticky slider scroll through one full slide at a time

## 🏃‍♂️ Running the Project

1. Clone the repository to your local machine.
2. Run `npm install` or `yarn` in the project directory to install the required dependencies.
3. Run `npm run dev` or `yarn dev` to get the project started.

## 😍 Performance

![preview](public/preview/full-website.jpeg)
