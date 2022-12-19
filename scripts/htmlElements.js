import Element from "./Element.js";

const toDoApp = document.querySelector("#toDoApp");

const header = new Element(
  {
    tag: `header`,
    text: "TASK MANAGER",
    attributes: { class: "header" },
  }
);

const aside = new Element(
  {
    tag: `aside`,
    attributes: { class: "aside" },
    nested: [
      {
        tag: `div`,
        attributes: { class: "controlPanel" },
        nested: [
          {
            tag: `h2`,
            text: `Create Your To-Do List`,
            attributes: { class: "controlPanel_heading" },
          },
          {
            tag: `form`,
            attributes: { id: "formTasks" },
            nested: [
              {
                tag: `div`,
                attributes: { class: "inputNewTaskDiv" },
                nested: [
                  {
                    tag: `label`,
                    text: `Enter a new task: `,
                    attributes: { for: "inputNewTask" },
                  },
                  {
                    tag: `input`,
                    attributes: { id: "inputNewTask", name: "inputNewTask", type: "text", maxlength: 40 },
                  }
                ]
              },
              {
                tag: `div`,
                attributes: { class: "btnAddTaskDiv" },
                nested: [
                  {
                    tag: `button`,
                    text: `Add Task`,
                    attributes: { class: "btnAddTask" }
                  }
                ]
              }
            ]
          },
          {
            tag: `p`,
            attributes: { class: "errorOutput" },
          }
        ]
      }
    ]
  }
);

const main = new Element(
  {
    tag: `main`,
    attributes: { class: "main" },
    nested: [
      {
        tag: `section`,
        attributes: { class: "taskManagement" },
        nested: [
          {
            tag: `h2`,
            text: `Manage Your Tasks`,
            attributes: { class: "taskManagement_heading" },
          },
          {
            tag: `div`,
            attributes: { class: "taskDisplay" },
          }
        ]
      }
    ]
  }
);


export let createTaskCard = (task) => {
  const taskCard = new Element(
    {
      tag: `div`,
      attributes: { class: `taskCard`, id: `id${task.id}` },
      nested: [
        { //text div
          tag: `div`,
          attributes: { class: "textArea" },
          nested: [
            {
              tag: `h4`,
              text: task.title,
              attributes: { class: "taskCard_heading" },
            }
          ]
        },
        { //button div
          tag: `div`,
          attributes: { class: "buttonArea" },
          nested: [
            { //Mark complete form
              tag: `form`,
              attributes: { class: "markCompleteForm" },
              nested: [
                {//label
                  tag: `label`,
                  text: `Completed`,
                  attributes: { for: "markComplete" },
                },
                {//checkbox
                  tag: `input`,
                  attributes: { type: "checkbox", id: "markComplete", name: "markComplete" },
                }
              ]
            },
            { //edit button
              tag: `button`,
              attributes: { type: "button", class: "btnEditTask", value: task.id },
              nested: [
                {
                  tag: `img`,
                  attributes: { src: "./images//edit_document_FILL0_wght400_GRAD0_opsz48.svg", width: "20", height: "20" }
                }
              ]

            },
            { //delete button
              tag: `button`,
              // text: `Del`,
              attributes: { type: "button", class: "btnDeleteTask", value: task.id },
              nested: [
                {
                  tag: `img`,
                  attributes: { src: "./images/delete_FILL0_wght400_GRAD0_opsz48.svg", width: "20", height: "20" }
                }
              ]
            }
          ]
        }
      ]
    }
  );
  // Change style if task completed
  taskCard.querySelector("#markComplete").checked = task.isCompleted;
  const taskHeading = taskCard.querySelector(".taskCard_heading");
  if (task.isCompleted) {
    const taskHeading = taskCard.querySelector(".taskCard_heading");
    const buttons = taskCard.querySelectorAll(".buttonArea button");
    buttons.forEach(btn => btn.style.background = "#fcd2d2");
    taskHeading.classList.add("text-stroked");
    taskCard.classList.add("background-pink");
  } else {
    taskHeading.style.textDecoration = "none";
  }

  return taskCard;
};

export let createTaskTitleForm = () => {
  return new Element(
    {
      tag: `form`,
      attributes: { id: "titleEditForm" },
      nested: [
        {
          tag: `input`,
          attributes: { type: "type", id: "inputEditTitle", name: "inputEditTitle", required: "required" },
          nested: []
        },
        {
          tag: `button`,
          text: `Save`,
          attributes: { type: "submit" },
        },
        {
          tag: `div`,
          attributes: { id: "btnCancelEdit" },
          nested: [
            {
              tag: `img`,
              attributes: { src: "./images/remove_FILL0_wght400_GRAD0_opsz48.svg", width: "12", height: "auto" },
            }
          ]
        }

      ]
    }
  );
};




toDoApp.append(header, aside, main);
