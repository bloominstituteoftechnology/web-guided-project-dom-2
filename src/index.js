console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector("#launchButton"); 
const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton');

// B- MESSAGES
const successMessage = document.querySelector('.success')
const failureMessage = document.querySelector('.failure')

// C- MODAL
const modal = document.querySelector('.modal')


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
//  B- The DOM's element.onclick attribute
// launchButton.onclick = function (event) {
// 	console.log('a better way to handle events!')
// }
// // launchButton.onmouseover = 
//  C- element.addEventListener('click', callback)

// launchButton.addEventListener('click', function(event) {
// 	console.log('the best way to handle events!')
// })
// launchButton.addEventListener('click', e => {
// 	alert('this is better')
//     });

document.addEventListener('click', function(event) {
	if (event.target === launchButton) {
		console.log('I AM THE LAUNCH BUTTON')
	} else {
	        console.log("I listen on the document")
	}
})

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.

launchButton.addEventListener('click', function(event) {
	openModal()
	killReports()
})


// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
confirmButton.addEventListener('click', function(event) {
	closeModal()
	successMessage.classList.remove('off')
})

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
cancelButton.addEventListener('click', event => {
	closeModal()
	failureMessage.classList.remove('off');
    })

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
document.addEventListener('keydown', function(event) {
	if (event.keyCode === 27) {
		closeModal()
	}
})



// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.
const allElementsArray = Array.from(document.all)

allElementsArray.forEach(element => {
	element.addEventListener('click', function(event) {
		console.log("original target 🎯 ", event.target)
		console.log("CURRENT target 🧭 ", event.currentTarget)
		console.log('\n')
	})

})


// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {
	modal.classList.remove('off') // a handy knob to flip, from the DOM
}

function closeModal() {
	modal.classList.add('off')
}

function killReports() {
	successMessage.classList.add('off');
	failureMessage.classList.add('off');
}


// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
