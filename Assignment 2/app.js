/*1. Write a function that creates a closure and returns a function that can add
a specific number to any number passed to it. For example, if the closure is
created with 5, the returned function should add 5 to any number passed
to it.*/

function AdditionNumber(AddNumber) {
    return function(num) {
      return num + AddNumber;
    }
  }
  const addFive = AdditionNumber(5);
  const result1= addFive(10);
  console.log(result1); 
/*2. Write a recursive function that searches an array for a specific value. The
function should return true if the value is found, and false if it is not. You
can assume that the array is not nested.
  */
function searchArray(arr, value) {
    if (arr.length === 0) {
      return false;
    }
    if (arr[0] === value) {
      return true;
    }
    return searchArray(arr.slice(1), value);
  }
  const myArray = [1, 2, 3, 4, 5];
  const valueToSearch = 5;
  const result = searchArray(myArray, valueToSearch);
  console.log(result);
/*3. Write a function that adds a new paragraph element to the bottom of an
HTML document. The function should take a string argument that will be
used as the text content of the new paragraph element.
  */
function addParagraphToDocument(text) {
    const newParagraph = `<p>${text}</p>`;
    document.body.innerHTML += newParagraph;
  }
  addParagraphToDocument('HI! This is Asad Kazmi');
/*4.  Write a function that adds a new list item to an unordered list in an HTML
document. The function should take a string argument that will be used as
the text content of the new list item.
 */
function addListItemToUnorderedList(text) {
    const unorderedList = document.querySelector('ul');
    const newListItem = `<li>${text}</li>`;
    unorderedList.innerHTML += newListItem;
  }
  addListItemToUnorderedList('Item 03');
/* 5. Write a function that changes the background color of an HTML element.
The function should take two arguments: the first argument is a reference
to the HTML element, and the second argument is a string representing
the new background color.
 */
function changeBackgroundColor(element, color) {
    const targetElement = document.querySelector(element);
    if (targetElement) {
      targetElement.style.backgroundColor = color;
    } else {
      console.error('Element not found:', element);
    }
  }
/* 6. Write a function that saves an object to localStorage. The function should
take two arguments: the first argument is a string representing the key to
use for storing the object, and the second argument is the object to store.
 */
function objectSavetoLocalStorage(key, object) {
    const jsonString = JSON.stringify(object);
    localStorage.setItem(key, jsonString);
  }
  const myObject = {
    name: "Syed Muhammad Asad Kazmi",
    City: "Hyderabad",
    age: 24,
    rollNum:124595 
  };
  /*7. Write a function that retrieves an object from localStorage. The function
should take one argument, which is a string representing the key used to
store the object. The function should return the object.

  */
  objectSavetoLocalStorage("myObject", myObject);
function ObjectFromLocalStorage(key) {
    const jsonString = localStorage.getItem(key);
    const object = JSON.parse(jsonString);
    return object;
  }
const myObject1 = ObjectFromLocalStorage("myObject");
console.log(myObject.name); 
console.log(myObject.City);
console.log(myObject.rollNum) 
console.log(myObject.age); 

/*8. Write a function that takes an object and saves each property to
localStorage using the property name as the key and the property value as
the value. The function should also retrieve the object from localStorage
and return it as a new object.
  */
function saveObjectToLocalStorage(obj) {
    
    for (let property in obj) {
      localStorage.setItem(property, JSON.stringify(obj[property]));
    }
  
    
    for (let property in obj) {
      const val = localStorage.getItem(property);
      newObj[property] = val ? JSON.parse(val) : null;
    }
  
    return newObj;
  }
  const myObj = { name: "Asad Kazmi", age: 24, city: "Hyderabad", country: "Pakistan"};
  const savedObj = saveObjectToLocalStorage(myObj);
  console.log(savedObj);