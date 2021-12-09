import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Tasks from "@/pages/Tasks.vue";
import TaskForm from "@/pages/TaskForm.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "tasks",
        name: "Tarefas",
        component: Tasks,
      },
      {
        path: "taskAdd",
        name: "Cadastrar",
        component: TaskForm,
      },
      {
        path: "taskEdit/:id",
        name: "Editar",
        component: TaskForm,
      }

    ],
  },
];

export default routes;
