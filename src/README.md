|| Name of my project:

DevStack Builder


|| Description : 
A modern and interactive DevStack Builder website where users can explore different technologies and build their own custom tech stack. Users can add technologies to their stack, remove them, and manage their selected technologies easi



|| Technology :

React
TypeScript
Tailwind CSS
React Toastify
HTML
CSS
JSON
Vite




|| Features: 

1. Build Your Own Tech Stack

Users can explore different technologies and add their favorite technologies to their personal stack.

2. Manage Selected Technologies

Users can remove individual technologies or remove all selected technologies from the stack.

3. Interactive User Experience

The project includes loading states, selected states, responsive design, and toast notifications for user actions.




|| React Questions & Answers


1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code in JavaScript or TypeScript. It makes React code easy to write and understand.

2. What is the difference between props and state?

Props are used to send data from a parent component to a child component.

State is used to store data inside a component. When state changes, the UI also changes.

3. What does the useState hook do, and where did you use it in this project?

useState is used to store and change data in a component.

In this project, I used it for the technology list, selected technologies, and loading state.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to run some code after the component loads.

I used it to get the technology data from the JSON file.

5. Why does every item in a .map() list need a unique key prop?

The key helps React know which item is which.

It helps React update the list correctly.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition.

I used it to show a message when the stack is empty:

{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackList />
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.

The child can send something back by calling a function from the parent.

For example:

<TechnologyCard
  technology={technology}
  onAddToStack={onAddToStack}
/>

Here, the parent sends technology and onAddToStack to the child.

When the user clicks Add to Stack, the child calls onAddToStack().