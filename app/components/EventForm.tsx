"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Etkinlik formu için doğrulama şeması
const eventSchema = yup
  .object({
    eventName: yup.string().required(),
    description: yup.string().required(),
    location: yup.string().required(),
    date: yup.date().required(),
    time: yup.string().required(),
  })
  .required();

// Etkinlik formu veri tipi
type EventFormData = {
  eventName: string;
  description: string;
  location: string;
  date: string;
  time: string;
};

export default function EventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: yupResolver(eventSchema) as any,
  });

  const onSubmit: SubmitHandler<EventFormData> = (data) => {
    console.log(data);
  };

  return (
    <div id="event-form">
      <h2 className="text-xl my-4">Event Create</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 border border-gray-500">
        <div className="flex flex-col">
          <label
            htmlFor="eventName"
            className="text-sm font-medium text-gray-700"
          >
            Etkinlik Adı
          </label>
          <input
            type="text"
            {...register("eventName")}
            className="form-input rounded"
          />
          <p className="text-red-500 text-xs mt-1">
            {errors.eventName?.message}
          </p>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-700"
          >
            Açıklama
          </label>
          <textarea
            {...register("description")}
            className="form-input rounded"
          />
          <p className="text-red-500 text-xs mt-1">
            {errors.description?.message}
          </p>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="location"
            className="text-sm font-medium text-gray-700"
          >
            Yer
          </label>
          <input
            type="text"
            {...register("location")}
            className="form-input rounded"
          />
          <p className="text-red-500 text-xs mt-1">
            {errors.location?.message}
          </p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="date" className="text-sm font-medium text-gray-700">
            Tarih
          </label>
          <input
            type="date"
            {...register("date")}
            className="form-date rounded"
          />
          <p className="text-red-500 text-xs mt-1">{errors.date?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="time" className="text-sm font-medium text-gray-700">
            Zaman
          </label>
          <input
            type="time"
            {...register("time")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <p className="text-red-500 text-xs mt-1">{errors.time?.message}</p>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded"
          >
            Etkinlik Oluştur
          </button>
        </div>
      </form>
    </div>
  );
}
