import SectionHeader from "@/components/SectionHeader";
import { getCourse } from "@/prisma/courses";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Checkout = ({ course }) => {
  const { data: session } = useSession();

  const [fromData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",

    courseTitle: course.title,
    price: course.price,
  });

  useEffect(() => {
    if (session) {
      setFormData((prev) => ({
        ...prev,

        name: session.user.name,
        email: session.user.email,
      }));
    }
  }, [session]);

  const handleCheckout = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper py-10 min-h-screen">
      <SectionHeader
        span={"Checkout"}
        h2={"Please provider your details"}
        p={"Fill up"}
      />

      <div className="flex justify-center">
        <form
          onSubmit={handleCheckout}
          className="flex flex-col gap-5 mt-10 w-full lg:w[35rem]"
        >
          <div className="form-control flex flex-col gap-2">
            <label className="cursor-pointer" htmlFor="name">
              Name
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
              type="text"
              id="name"
              placeholder="abdullah"
              readOnly
              value={fromData.name}
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label className="cursor-pointer" htmlFor="email">
              email
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
              type="email"
              id="email"
              placeholder="abc@gmail.com"
              readOnly
              value={fromData.email}
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label className="cursor-pointer" htmlFor="mobile">
              Phone number
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
              type="tel"
              id="mobile"
              placeholder="+880171555555"
              value={fromData.mobile}
              onChange={(e) =>
                setFormData({ ...FormData, mobile: e.target.value })
              }
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label className="cursor-pointer" htmlFor="address">
              address
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
              type="text"
              id="address"
              placeholder="abc"
              value={fromData.address}
              onChange={(e) =>
                setFormData({ ...FormData, address: e.target.value })
              }
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label className="cursor-pointer" htmlFor="courseTitle">
              Course Title
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
              type="text"
              id="courseTitle"
              placeholder="Advanced javascript"
              readOnly
              value={fromData.courseTitle}
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label className="cursor-pointer" htmlFor="price">
              Price
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
              type="number"
              id="price"
              placeholder="$100"
              readOnly
              value={fromData.price}
            />
          </div>

          <button
            className="bg-black py-4 rounded-lg text-white hover:bg-gray-700 duration-300 uppercase"
            type="submit"
            role="link"
          >
            Proceed to Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

export const getServerSideProps = async ({ query }) => {
  const course = await getCourse(query.courseId);

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
