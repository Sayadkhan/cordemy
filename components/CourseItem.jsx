import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AiOutlineStar } from "react-icons/ai";
import Button from "./Button";
import { motion } from "framer-motion";
import { getTransition, shutterUp } from "@/utils/motion";

const CourseItem = ({ course }) => {
  return (
    <motion.div
      variants={shutterUp()}
      initial="from"
      whileInView="to"
      transition={getTransition(0, 1)}
      className="w-full lg:w-[30rem] shadow-md rounded-md overflow-hidden"
    >
      <div className="w-full h-[28rem]  lg:h-[20rem]overflow-hidden">
        <Image
          src={course.cover}
          alt={course.title}
          width={640}
          height={360}
          priority
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5 space-y-5">
        <h3 className="text-3xl font-medium">{course.title}</h3>
        <p className="flex justify-between text-gray-500">
          <span>
            by{" "}
            <span className="text-black font-semibold">
              {course.instructor}
            </span>
          </span>
          <span>
            <span className="text-black font-semibold">{course.duration}</span>
          </span>
        </p>

        <p className="flex justify-between text-gray-500">
          <span>
            Enrolled students:{" "}
            <span className="text-black font-semibold">{course.students}</span>{" "}
          </span>
          <span className="flex items-center gap-1">
            {" "}
            <AiOutlineStar />{" "}
            <span className="text-black font-semibold">{course.rating}</span>
          </span>
        </p>
        <p className="text-gray-500  h-22">{course.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">{course.price}</p>
          <Button
            href={`/courses/${course.id}`}
            placeholder="view Details"
            color=""
            size="default"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CourseItem;
