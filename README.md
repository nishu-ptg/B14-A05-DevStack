# 🧱 Dev Stack Builder

### Build your stack. Explore your tools. 🚀

**Dev Stack Builder** is a responsive React web application that helps developers explore modern development technologies and build their own technology stack. Browse technologies, check their details, and add your favorites to your personal stack.

## ✨ Features

- 🔍 **Explore Technologies** — Browse technologies by category with descriptions, ratings, difficulty levels, and badges.
- 🧰 **Build Your Own Stack** — Add technologies to your stack, remove individual items, or clear the entire stack.
- 📱 **Responsive & Interactive** — Designed for mobile, tablet, and desktop with responsive navigation, toast notifications, loading states, and a shared gradient theme.

## 🛠️ Technologies Used

- **React.js**
- **TypeScript**
- **Tailwind CSS**
- **DaisyUI**
- **React-Toastify**
- **Vite**
- **JSON**

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX is a syntax which is a fusion of JavaScipt and XML (X for XML). It helps writing react components easier. It's very close to HTML, most common differences are that `class` becomes `className` and dashed attributes (-) becomes camelCased.

### 2. What is the difference between props and state?
Props are data passed from parent to child components. States are also data, but they might change over time, so it's important that react manages it and can automatically update in UI when needed. Props don't need to change like that and don't have that dependency (kinda like static data, compared to state).

### 3. What does the `useState` hook do, and where did you use it in this project?
useState is a react hook (we will learn about it later). It is used for managing data that might change over time. In this project, I used it to keep track of selecting/removing technology items. I also used to show color in the nav menu (kinda like active menu item), although we don't have any 'pages' here, it's just a simulation, as the figma design has different color for first menu item (active). So i decided to implement that, and useState is needed to track which menu is clicked.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
useEffect is also a react hook, while useState is in reacts control, useEffect is needed for things that is from outside, so beyond reacts control. Hence we need to pass an array of dependency with it. I didn't use it in here, instead used `use` and Suspense to load json data, as shown in class. `use` hook is a newer addition in react. before that (and without suspense), it was a lot of code to get the result. 

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React needs a unique key to evaluate each item, without an unique identification, it'd be diffcult to track and item properly/exactly. so it's UI update may be buggy without it. For example, we could use index, but index could change if we insert/remove anything. So key should be really unique/unchangable. 

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering is showing different UI based on condition. In this project, apart from the heading, everything in the the added stack listing sidebar (StackSidebar.tsx) is conditional, if it's empty, we're showing "no technology selected..." text vs count. the listing box is also different. And finally, there's a remove all button at the end if there's any item. It's all conditional rendering.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
React is uni-directional. Parent can pass data easily with props. But child can't directly pass. In order to do so, the parent must pass a callback function, child can pass data through it.




