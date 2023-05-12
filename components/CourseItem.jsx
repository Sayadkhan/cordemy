import Image from "next/image";
import React from "react";

const CourseItem = ({ course }) => {
  return (
    <div>
      <div>
        <Image
          src={course.cover}
          alt={course.title}
          width={640}
          height={360}
          priority
        />
      </div>
    </div>
  );
};

export default CourseItem;
