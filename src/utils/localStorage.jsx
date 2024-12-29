localStorage.clear(); // to clear the localstorage

const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Submit report",
        taskDescription: "Submit the quarterly report to the manager.",
        taskDate: "2024-12-31",
        category: "Work",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team meeting",
        taskDescription: "Attend the team meeting at 10 AM.",
        taskDate: "2024-12-25",
        category: "Meeting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update software",
        taskDescription: "Install the latest updates on office computer.",
        taskDate: "2024-12-15",
        category: "Maintenance",
      },
    ],
  },
  {
    id: 2,
    firstName: "Ayesha",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client call",
        taskDescription: "Call the client to discuss project updates.",
        taskDate: "2024-12-27",
        category: "Communication",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare presentation",
        taskDescription: "Create a PowerPoint for the upcoming seminar.",
        taskDate: "2024-12-20",
        category: "Work",
      },
    ],
  },
  {
    id: 3,
    firstName: "Zain",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Organize files",
        taskDescription: "Organize all documents into proper folders.",
        taskDate: "2024-12-26",
        category: "Organization",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Weekly meeting",
        taskDescription: "Attend the weekly team meeting.",
        taskDate: "2024-12-21",
        category: "Meeting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Submit expense report",
        taskDescription: "Submit the expense report for approval.",
        taskDate: "2024-12-18",
        category: "Finance",
      },
    ],
  },
  {
    id: 4,
    firstName: "Fatima",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Review project",
        taskDescription: "Review the project requirements document.",
        taskDate: "2024-12-23",
        category: "Review",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Setup equipment",
        taskDescription: "Setup new equipment in the lab.",
        taskDate: "2024-12-28",
        category: "Setup",
      },
    ],
  },
  {
    id: 5,
    firstName: "Ahmed",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Plan event",
        taskDescription: "Plan the team-building event for next month.",
        taskDate: "2024-12-30",
        category: "Planning",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Submit invoices",
        taskDescription: "Submit all invoices for payment processing.",
        taskDate: "2024-12-19",
        category: "Finance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Draft emails",
        taskDescription: "Draft emails for client communication.",
        taskDate: "2024-12-24",
        category: "Communication",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
