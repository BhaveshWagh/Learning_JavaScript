
let taskBtn = document.getElementById('addTask');
let toDoContainer = document.getElementById('todo');


let count = 1
taskBtn.addEventListener("click", ()=>{
    
    let card = document.createElement('div');
    card.setAttribute("class", "card");
    card.setAttribute("id", `card-${count++}`);
    card.setAttribute("contenteditable", true)
    // lets make the card draggable
    card.setAttribute("draggable", true);
    card.innerHTML = "Default Card"
    toDoContainer.append(card);


    card.addEventListener("click", (events)=>{
    
       if(card.innerHTML === "Default Card"){
                card.innerHTML = "";
       }
    })


    card.addEventListener("blur", ()=>{
         
        if(card.innerHTML === ""){
            card.remove();
        }
    })


    // step 1: events to be added on the card

    // dragstart 
    // dragend

    card.addEventListener("dragstart", (event)=>{
        // console.log("drag started")
        let selectedCardId = event.target.id;
        event.dataTransfer.setData("text", selectedCardId);
        card.style.opacity = 0.2;
    })


    card.addEventListener("dragend", ()=>{
        console.log("drag ended")
        card.style.opacity = 1;
    })

    // step 2: events on columns - area on which card will be dragged
    // dragover dragenter drop

    // todo ,  progress, done

    // toDo.addEventListener("dragover", (event)=>{
    //     event.preventDefault();
    //     // console.log("drag over")
    // })

    // toDo.addEventListener("dragenter", (event)=>{
    //     event.preventDefault();
    //     // console.log("drag enter")
    // })

    // toDo.addEventListener("drop", (event)=>{
    //     // console.log("drop")
    //     toDo.append(card);
    // })


    let dragEvents = ['dragover', 'dragenter', 'drop']; 

    dragEvents.forEach((value)=>{
       let cols = document.getElementsByClassName('column');

       for(let t of cols){
        // t = todo, progress, done
        t.addEventListener(value, (event)=>{
             event.preventDefault();

                if(value == "drop"){
                     let selectedCardId = event.dataTransfer.getData("text"); // id
                     let selectedCard = document.getElementById(selectedCardId); // 
                     t.append(selectedCard);
                }


        })

       }
    })

    

    




})