"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TEvent } from "@/app/types/Event";
import { useEvents } from "@/app/hooks/useEvent";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  location: yup.string().required("Location is required"),
  date: yup
    .date()
    .min(new Date(), "Date must be after today")
    .required("Date is required"),
  time: yup.string().required("Time is required"),
});

const CreateFrom = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEvent>({
    resolver: yupResolver(schema),
  });
  const { loading, createEvent } = useEvents();

  const onSubmit: SubmitHandler<TEvent> = async (data: TEvent) => {
    await createEvent(data);
    router.replace("/events");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-slate-600 shadow-md rounded-md p-10 lg:w-1/2 md:w-full"
    >
      <label htmlFor="name" className="block mb-2">
        Name
      </label>
      <input
        type="text"
        id="username"
        className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
        placeholder="Event Name"
        {...register("name")}
      />
      <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
      <label htmlFor="description" className="block mb-2">
        Description
      </label>
      <input
        type="text"
        id="description"
        className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
        placeholder="Event Description"
        {...register("description")}
      />
      <p className="text-red-500 text-sm mt-1">{errors.description?.message}</p>

      <label htmlFor="location" className="block mb-2">
        Location
      </label>
      <input
        type="text"
        id="location"
        className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
        placeholder="Event Location"
        {...register("location")}
      />
      <p className="text-red-500 text-sm mt-1">{errors.location?.message}</p>
      <label htmlFor="date" className="block mb-2">
        Date
      </label>
      <input
        type="date"
        id="date"
        className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
        placeholder="Event Date"
        {...register("date")}
      />
      <p className="text-red-500 text-sm mt-1">{errors.date?.message}</p>
      <label htmlFor="time" className="block mb-2">
        Time
      </label>
      <input
        type="time"
        id="time"
        className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
        placeholder="Event Time"
        {...register("time")}
      />
      <p className="text-red-500 text-sm mt-1">{errors.time?.message}</p>
      <button
        className={`mt-4 bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded w-full ${
          loading ? "animate-pulse" : ""
        }`}
        type="submit"
        disabled={loading}
      >
        {loading ? "Creating..." : "Create Event"}
      </button>
    </form>
  );
};

export default CreateFrom;
