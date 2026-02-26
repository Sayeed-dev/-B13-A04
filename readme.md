1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: "getElementById", selects one element by its unique id. It returns only one element on the other hand "getElementsByClassName", selects elements by class name. It returns a list of many elements, finally "querySelector / querySelectorAll" use CSS selectors. querySelector gives first match, querySelectorAll gives all matches.

2. How do you create and insert a new element into the DOM?

Answer: First, document.createElement()` to create a new element. Then have to add text or content to it by a property name called innerText/innerHTML then appendChild() or append() to insert it into the DOM inside a parent element.

3. What is Event Bubbling? And how does it work?

Answer: Event bubbling means an event starts from the target element and goes up to parent elements.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event delegation means adding one event listener to a parent element instead of many child elements.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() stops the browser’s default action, like stopping a link from opening, stopPropagation() stops the event from moving to parent elements, no bubbling.
