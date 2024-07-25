import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FromContainer from "./components/otp/FormContainer";
import CourseList from "./components/DragDrop/CourseList";
import BatchesList from "./components/Batches/BatchesList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FromContainer />,
  },
  {
    path: "/course-list",
    element: <CourseList />,
  },
  {
    path: "/batches",
    element: <BatchesList />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
