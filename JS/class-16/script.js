const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const textArea = document.querySelector(".modal-cont_textarea");
const mainCont = document.querySelector(".main-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");
const removeBtn = document.querySelector(".remove-btn");

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

  if (isDeleteTaskButtonOn) {
    window.alert("Delete Button Has Been Activated");
    removeBtn.style.color = "red";
  } else {
    removeBtn.style.color = "black";
  }
});

modalCont.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === "Shift") {
    const taskInfo = textArea.value;
    createTicket(taskInfo, modalPriorityColor);
    modalCont.style.display = "none";
    textArea.value = "";
  }
});

function createTicket(taskInfo, taskColorPrority) {
  const ticketId = shortid();
  const ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `<div class="${taskColorPrority} ticket-color"></div>
        <div class="ticket-id">TicketId : ${ticketId}</div>
        <div class="ticket-area">
          TaskInfo: ${taskInfo}
        </div>
        <div class="delete-task">
         <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <div class="ticket-lock">
          <i class="fa-solid fa-lock"></i>
        </div>
  `;
  mainCont.appendChild(ticketCont);
  handleDelete(ticketCont);
}

function handleDelete(container) {
  const deleteTask = container.querySelector(".delete-task");
  deleteTask.addEventListener("click", () => {
    if (isDeleteTaskButtonOn) {
      container.remove();
    }
  });
}
