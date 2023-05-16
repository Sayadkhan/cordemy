import { getCourse } from "@/prisma/courses";
import React from "react";

const CourseDetail = ({ course }) => {
  return (
    <div className="wrapper py-10">
      <div style={{ backgroundImage: `url(${course.cover})` }}></div>
    </div>
  );
};

export default CourseDetail;

export const getServerSideProps = async ({ query }) => {
  const course = await getCourse(query.courseid);

  const updatedCourse = {
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  };

  return {
    props: {
      course: updatedCourse,
    },
  };
};
