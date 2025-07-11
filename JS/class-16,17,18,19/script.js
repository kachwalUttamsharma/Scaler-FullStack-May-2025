const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const textArea = document.querySelector(".modal-cont_textarea");
const mainCont = document.querySelector(".main-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");
const removeBtn = document.querySelector(".remove-btn");
const toolBoxColors = document.querySelectorAll(".color");
const pendingContainer = document.querySelector(".pending-cont");
const finishedContainer = document.querySelector(".finished-cont");

let allTickets = [];

window.addEventListener("load", () => {
  const tasks = JSON.parse(localStorage.getItem("kanbanboardTask"));
  tasks.forEach((ticket) =>
    createTicket(ticket.content, ticket.color, ticket.id, ticket.isPending)
  );
});

toolBoxColors.forEach((colorElem) => {
  colorElem.addEventListener("click", () => {
    const selectedToolBoxColor = colorElem.classList[0];
    // fetching all tickets
    const allTickets = document.querySelectorAll(".ticket-cont");
    // iterate over each ticket and compare color
    allTickets.forEach((ticket) => {
      const ticketColorBand = ticket?.children[0];
      let currentColor = "";
      for (let i = 0; i < ticketColorBand.classList.length; i++) {
        if (ticketColorBand.classList[i] != "ticket-color") {
          currentColor = ticketColorBand.classList[i];
          break;
        }
      }
      if (currentColor !== selectedToolBoxColor) {
        ticket.style.display = "none";
      } else {
        ticket.style.display = "block";
      }
    });
  });

  colorElem.addEventListener("dblclick", () => {
    const allTickets = document.querySelectorAll(".ticket-cont");
    allTickets.forEach((ticket) => {
      ticket.style.display = "block";
    });
  });
});

let modalPriorityColor = "pink";
let isModalOpen = false;
let isDeleteTaskButtonOn = false;

allPriorityColors.forEach((node) => {
  node.addEventListener("click", (event) => {
    allPriorityColors.forEach((node) => {
      node.classList.remove("active");
    });
    const targetNode = event.target;
    targetNode.classList.add("active");
    modalPriorityColor = targetNode.classList[1];
  });
});

addBtn.addEventListener("click", () => {
  isModalOpen = !isModalOpen;
  if (isModalOpen) {
    modalCont.style.display = "none";
  } else {
    modalCont.style.display = "flex";
  }
});

removeBtn.addEventListener("click", () => {
  isDeleteTaskButtonOn = !isDeleteTaskButtonOn;
  const allTickets = document.querySelectorAll(".delete-task");
  if (isDeleteTaskButtonOn) {
    window.alert("Delete Button Has Been Activated");
    removeBtn.style.color = "red";
    allTickets?.forEach((ticket) => {
      ticket.disabled = false;
    });
  } else {
    removeBtn.style.color = "black";
    allTickets?.forEach((ticket) => {
      ticket.disabled = true;
    });
  }
});

modalCont.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === "Shift") {
    const taskInfo = textArea.value;
    const ticketId = shortid();
    createTicket(taskInfo, modalPriorityColor, ticketId);
    modalCont.style.display = "none";
    textArea.value = "";
  }
});

function createTicket(taskInfo, taskColorPrority, ticketId, isPending = true) {
  const ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.setAttribute("draggable", "true");
  ticketCont.innerHTML = `<div class="${taskColorPrority} ticket-color"></div>
        <div class="ticket-id">${ticketId}</div>
        <div class="ticket-area">
          ${taskInfo}
        </div>
        <button class="delete-task" disabled=true>
         <i class="fa-solid fa-circle-xmark"></i>
        </button>
        <button class="ticket-lock">
          <i class="fa-solid fa-lock"></i>
        </button>
  `;
  if (isPending) {
    pendingContainer.appendChild(ticketCont);
  } else {
    finishedContainer.appendChild(ticketCont);
  }
  handleDelete(ticketCont, ticketId);
  handleLock(ticketCont, ticketId);
  handleColor(ticketCont, ticketId);
  const ticketObj = {
    id: ticketId,
    content: taskInfo,
    color: taskColorPrority,
    isPending: isPending,
  };
  allTickets.push(ticketObj);
  updateLocalStorage();
}

function handleDelete(ticket, ticketId) {
  const deleteTask = ticket.querySelector(".delete-task");
  deleteTask.addEventListener("click", () => {
    if (isDeleteTaskButtonOn) {
      ticket.remove();
      allTickets = allTickets.filter((ticketObj) => {
        return ticketObj.id !== ticketId;
      });
      updateLocalStorage();
    }
  });
}

function handleLock(ticket, ticketId) {
  const ticketLock = ticket.querySelector(".ticket-lock");
  const ticketLockIcon = ticketLock.children[0];
  const ticketArea = ticket.querySelector(".ticket-area");
  const lockClass = "fa-lock";
  const unlockClass = "fa-unlock";
  ticketLock.addEventListener("click", () => {
    if (ticketLockIcon.classList.contains(lockClass)) {
      ticketLockIcon.classList.remove(lockClass);
      ticketLockIcon.classList.add(unlockClass);
      ticketArea.setAttribute("contenteditable", "true");
      ticketArea.style.cssText = `border: 1px solid gray; 
      border-radius: 8px;
      margin: 2px`;
    } else {
      ticketLockIcon.classList.remove(unlockClass);
      ticketLockIcon.classList.add(lockClass);
      ticketArea.setAttribute("contenteditable", "false");
      ticketArea.style.cssText = "";
    }
    const ticketObj = allTickets.find((ticketObj) => {
      return ticketObj.id === ticketId;
    });
    ticketObj.content = ticketArea.textContent;
    updateLocalStorage();
  });
}

function handleColor(ticket, ticketId) {
  const ticketColorBand = ticket.querySelector(".ticket-color");
  const colors = ["pink", "green", "blue", "purple"];
  ticketColorBand.addEventListener("click", () => {
    let currentColor = "";
    for (let i = 0; i < ticketColorBand.classList.length; i++) {
      if (ticketColorBand.classList[i] != "ticket-color") {
        currentColor = ticketColorBand.classList[i];
        break;
      }
    }
    const currentIndex = colors.findIndex((c) => c === currentColor);
    const nextTicketColor = colors[(currentIndex + 1) % colors.length];
    ticketColorBand.classList.remove(currentColor);
    ticketColorBand.classList.add(nextTicketColor);
    const ticketObj = allTickets.find((ticketObj) => {
      return ticketObj.id === ticketId;
    });
    ticketObj.color = nextTicketColor;
    updateLocalStorage();
  });
}

function updateLocalStorage() {
  localStorage.setItem("kanbanboardTask", JSON.stringify(allTickets));
}

const containers = document.querySelectorAll(".container");
let draggedElement;
containers.forEach((container) => {
  container.addEventListener("dragstart", (event) => {
    console.log("dragStart : ", event);
    draggedElement = event.target;
  });
  container.addEventListener("dragover", (event) => {
    event.preventDefault();
    console.log("dragover : ", event);
  });
  container.addEventListener("drop", (event) => {
    event.preventDefault();
    if (draggedElement) {
      container.appendChild(draggedElement);
      const isPendingTask =
        container.classList[0] === "pending-cont" ? true : false;
      const ticketId = draggedElement.querySelector(".ticket-id").innerText;
      const ticketObj = allTickets.find((ticketObj) => {
        return ticketObj.id === ticketId;
      });
      ticketObj.isPending = isPendingTask;
      updateLocalStorage();
    }
    console.log("drop : ", event);
  });
  container.addEventListener("dragend", (event) => {
    console.log("dragend : ", event);
  });
});
