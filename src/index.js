import './styles.scss'

const listContainer = document.querySelector('.container-list');

const toDoTasks = [
  {
    description: 'Wash utensils',
    completed: false,
    index: 0,
  },
  {
    description: 'Go to the gym',
    completed: true,
    index: 1,
  },
  {
    description: 'Watch a movie',
    completed: false,
    index: 2,
  },
];

const createItemTask = (task) => {
  if (task.completed === false) {
    listContainer.insertAdjacentHTML('beforeend',
      `<li>
    <input type="checkbox" name="task${task.index}" value="task${task.index}">
    <label class="text-task">${task.description}</label><br>
    <i class="fas fa-ellipsis-v icon-item"></i>
    </li>
    `);
  } else {
    listContainer.insertAdjacentHTML(
      'beforeend',
      `<li>
    <input type="checkbox" name="task${task.index}" value="task${task.index}" checked>
    <label class="text-task">${task.description}</label><br>
    <i class="fas fa-ellipsis-v icon-item"></i>
    </li>
    `,
    );
  }
};

const displayTasks = () => {
  listContainer.innerHTML = '';
  toDoTasks.forEach((task) => createItemTask(task));
};

document.addEventListener('DOMContentLoaded', () => {
  displayTasks();
});