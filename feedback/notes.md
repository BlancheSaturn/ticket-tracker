# Feedback

Hey Charlie here, feel free to message me on Slack if you want any clarification on the points below. I will give you both positive and constructive feedback on your project.

---

## Requirements

- Should be built in React - DONE
- Each component should mange is own state - DONE
- The components should be generated using `.map()` - DONE
- At least an employee component - DONE
- Pass data into them via props - DONE
- Don't leave it blank - DONE

---

## The App

### Positive

- The app looks good on a large desktop.
- I am able to increment each employee's tickets, Great!
- The counter will not go below 0, Good catch!
- I like that you have brought in images into the project and are using them.
  - It is great you put them in your assets folder and kept the project organized.
- I like that you have added some color, it is good to see you have a `_variables.scss` to store them in.
  - I don't think you are using them though ;)
  - Have a look at [Colooors](https://coloooors.designsupply-web.com/), you are able to colors that work well together quickly.
- You are displaying all of the employee's, Brilliant!

### Constructive

- You need to work on the smaller device styles, it is responsive to a certain degree.
  - When it goes below a certain width the tickets get squished which you will need to resolve.
  - The text also goes off center on smaller screens
- It was great to include images, try and look for square and centered images. It will make your life easier.
  - With figma you are able to use icons and export them if you need them. 
- Add a little spiel to the read me to introduce the project, it doesn't have to be much.
  - What was the brief?
  - Who worked on it?
  - Once we have it hosted, a link to the live site

---

## The Code

### Positive

- I can see both commits from both of you, it is great you worked on it collaboratively.

- The code looks good, in terms of what we have learned you have managed to apply all of it.
  - You have created a component. Nice!
  - You have imported the data and you are mapping over it, you are using props to give the component the data it needs! :D
  - When you are mapping over the data you are giving each component the key prop, Sweet!!
    - You are the only ones to do so. It is easy to forget so make a note. When making multiples you need a key.
  - You have introduced State, and are able to interact with it. Awesome!

- I can see you updated the `index.html` Brilliant :).

### Constructive

- The `Components` folder should be `components`
- Moni try and give your commits a more meaningful message, what did you do? what did you work on?
  - e.g. "Add styles to button" rather then "final" or "final2"
  - You will thank me in the future.
- With the `useState()` you are using in your `<Employee/>` component. You are accidentally changing the state, `setCounter((counter = 0))`. The `counter = 0` is what you want to avoid as you are directly setting the state rather then using the function to do so. So `setCounter(0)` would be the correct way to do it. I do not think you need to though.
- When you change state you cause the component to refresh / reload. Generally you don't want to cause any unnecessary refresh's. Below if it is 0 you are setting it to 0.

```jsx
// Employee.jsx
const handleDecrement = () => {
  if (counter === 0) {
    setCounter((counter = 0));
  } else {
    setCounter(counter - 1);
  }
};

// COULD BE SOMETHING LIKE

const handleDecrement = () => {
  // IF IT IS NOT 0 THEN I WANT TO DECREMENT
  if () {
    setCounter(counter - 1);
  }
  // DO NOTHING OTHERWISE -> DON'T DECREMENT
};
```

- I think you could make the counter part of your `<Employee/>` its own component. It manages its own state and is something that could be re used else where. It would be good practice for you both.

```jsx
// Counter.jsx

import React, { useState } from "react";
import "./Counter.scss";

import addition from "../../asset/images/addition.png";
import subtraction from "../../asset/images/subtraction.png";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter">
      <p className="counter__count">Counter</p>
      <p className="counter__count">{counter}</p>
      <div className="counter__buttons">
        <img src={subtraction} alt="" onClick={handleDecrement} className="counter__sign--sub" />
        <img src={addition} alt="" onClick={handleIncrement} className="counter__sign--add" />
      </div>
    </div>
  );
};
export default Employee;
```

- Then in your `<Employee/>` you could import it and use it in the return

```jsx
// Employee.jsx
return (
  <section>
    <div className="employee-content">
      <p>
        {name} <br /> {role}
      </p>
      <Counter />
    </div>
  </section>
);
```

- You could do the same thing and create a `<EmployeeList>` and make that responsible to mapping over the data and creating employees. This would be instead of doing it in the App.
  - Why? it would be good practice as you would need to give it props.

---
