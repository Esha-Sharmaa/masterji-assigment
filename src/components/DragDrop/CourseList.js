import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import courseData from "../../utils/coursedata";
import CourseCard from "./CourseCard";

const CourseList = () => {
  const [courses, setCourses] = useState(courseData);
  const [activeCourseId, setActiveCourseId] = useState(false);
  const toggleShowActions = (courseId) => {
    setActiveCourseId(activeCourseId === courseId ? null : courseId);
  };
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(courses);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCourses(items);
  };
  const handleMoveToTop = (id) => {
    let newArr = courses.filter((ele, index) => index + 1 !== id);
    newArr.unshift(courses[id - 1]);
    setCourses([...newArr]);
    setActiveCourseId(null);
  };
  const handleMoveToBottom = (id) => {
    let newArr = courses.filter((ele, index) => index + 1 !== id);
    newArr.push(courses[id - 1]);
    setCourses([...newArr]);
    setActiveCourseId(null);
  };
  const handleRemove = (id) => {
    const newArr = courses.filter((ele, index) => index + 1 !== id);
    setCourses([...newArr]);
    setActiveCourseId(null);
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="drag-drop-container">
        <h1 className="heading course-heading">Chai Aur Code</h1>
        <div className="course-container">
          <h2>Manage Bundle</h2>
          <p>Change orders of the products based on priority</p>
          <Droppable droppableId="courses">
            {(provided) => (
              <div
                className="course-list"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {courses.map((course, index) => (
                  <Draggable
                    key={course.id}
                    draggableId={course.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <CourseCard
                          id={course.id}
                          imageUrl={course.imageUrl}
                          name={course.name}
                          price={course.price}
                          type={course.type}
                          showActions={activeCourseId === course.id}
                          toggleShowActions={toggleShowActions}
                          handleMoveToTop={handleMoveToTop}
                          handleMoveToBottom={handleMoveToBottom}
                          handleRemove={handleRemove}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

export default CourseList;
