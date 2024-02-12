let injectToDo = document.getElementById("injectToDo")
let injectInProgress = document.getElementById("injectInProgress")
let injectCompleted = document.getElementById("injectCompleted")

let nameInput = document.getElementById("nameInput")
let description = document.getElementById("description")
let priority = document.getElementById("priority")
let date = document.getElementById("date")
let makeCard = document.getElementById("makeCard")

let nameInputAgain = document.getElementById("nameInputAgain")
let descriptionAgain = document.getElementById("descriptionAgain")
let priorityAgain = document.getElementById("priorityAgain")
let dateAgain = document.getElementById("dateAgain")
let statusAgain = document.getElementById("statusAgain")
let makeCardAgain = document.getElementById("makeCardAgain")

let view1 = document.getElementById("view1")
let view2 = document.getElementById("view2")
let view3 = document.getElementById("view3")
let view4 = document.getElementById("view4")


let name1 = ""
let description1 = ""
let priority1 = ""
let date1 = ""
let statusAgain1 = ""

makeCard.addEventListener('click', function (e) {
    name1 = nameInput.value
    description1 = description.value
    priority1 = priority.value
    date1 = date.value
    statusAgain1 = "To-Do"

    createCard()


})

makeCardAgain.addEventListener('click', function (e) {
    name1 = nameInputAgain.value
    description1 = descriptionAgain.value
    priority1 = priorityAgain.value
    date1 = dateAgain.value
    statusAgain1 = statusAgain.value
    console.log(statusAgain1)
    createCard()
})



function createCard() {
    let div = document.createElement('div')

    let one = name1
    let two = description1
    let three = priority1
    let four = date1

    if (priority1 === 'Urgent') {
        div.className = "createBody1"
    } else if (priority1 === 'Medium') {
        div.className = "createBody2"
    } else if (priority1 === 'Low') {
        div.className = "createBody3"
    }


    let p = document.createElement('p')
    p.className = 'createTitle'
    p.textContent = name1
    let button = document.createElement('button')
    button.className = 'createOptions'
    button.textContent = 'Text Options'
    button.setAttribute('data-bs-target', '#exampleModal3');
    button.setAttribute('data-bs-toggle', 'modal');
    button.addEventListener('click', () => {
        nameInputAgain.value = one
        descriptionAgain.value = two
        priorityAgain.value = three
        dateAgain.value = four
        div.remove()
    })


    let button2 = document.createElement('button')
    button2.className = 'createView'
    button2.textContent = 'View Task';
    button2.setAttribute('data-bs-target', '#exampleModal2');
    button2.setAttribute('data-bs-toggle', 'modal');
    button2.addEventListener('click', () => {
        view1.textContent = one
        view2.textContent = two
        view3.textContent = three
        view4.textContent = four

    })

    let button3 = document.createElement('button')
    button3.className = 'createView'
    button3.textContent = 'Delete'
    button3.addEventListener('click', function () {
        div.remove()
    })

    // data-bs-toggle="modal" data-bs-target="#exampleModal2"
    div.appendChild(p)
    div.appendChild(button)
    div.appendChild(button2)
    div.appendChild(button3)



    const lastChild1 = injectToDo.lastElementChild;
    const lastChild2 = injectInProgress.lastElementChild;
    const lastChild3 = injectCompleted.lastElementChild;

    if (statusAgain1 === 'To-Do') {




        injectToDo.appendChild(div)
    } else if (statusAgain1 === 'In Progress') {

        injectInProgress.appendChild(div)
    } else if (statusAgain1 === 'Completed') {


        injectCompleted.appendChild(div)
    }

    // <div class="createBody">
    //     <p class="createTitle">sdgsdfg</p>
    //     <button class="createOptions">Task Options</button>
    //     <button class="createView">View Task</button>
    // </div>
}

