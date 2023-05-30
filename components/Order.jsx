import Image from "next/image";
import React from "react";
import Button from "./Button";

const Order = ({ course }) => {
  return (
    <div className="course p-5 shadow-lg rounded-xl">
      <h2 className="text-2xl">{course.courseTitle}</h2>
      <p className="text-lg">Amount: {course.amountTotal}</p>
      <Button
        href={`/users/dashboard/courses/${course.courseId}`}
        placeholder={"Study Now"}
      />
    </div>
  );
};

export default Order;
