import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { DatePicker } from "./DatePicker";
import { InputFile } from "./InputFiles";
import { TimePicker } from "./TimePicker";
import AmountInput from "./AmountInput";
import { FaLocationDot } from "react-icons/fa6";
import { MdNotes } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { InfoCard } from "./InfoCard";

const formSchema = z.object({
  description: z
    .string()
    .min(2)
    .max(100)
    .refine((value) => value.trim() !== "", {
      message: "Description is required",
    }),
  venue: z
    .string()
    .min(2)
    .max(50)
    .refine((value) => value.trim() !== "", {
      message: "Venue is required",
    }),
  compensation: z.string().refine((value) => value.trim() !== "", {
    message: "Compensation is required",
  }),
  date: z.string().refine((value) => value.trim() !== "", {
    message: "Date is required",
  }),
  time: z.string().refine((value) => value.trim() !== "", {
    message: "Time is required",
  }),
});

const AddHelpForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      venue: "",
      compensation: "",
      date: "",
      time: "",
      documents: "",
    },
  });

  const handleSubmit = () => {};

  return (
    <div className="z-0 p-3 bg-red-100 border-2 m-3 rounded-md">
      <div className="flex flex-col items-center justify-between p-10 border-2 m-10 rounded-lg shadow-2xl shadow-indigo-500 bg-white drop-shadow-2xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="max-w-md w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="description"
              label="description"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl className="hover:shadow-md">
                      <Input
                        icon={<MdNotes />}
                        placeholder="To help us spread the word"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="venue"
              label="venue"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Venue</FormLabel>
                    <FormControl>
                      <Input
                        icon={<FaLocationDot />}
                        placeholder="Where you'd recieve your order"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="compensation"
              label="compensation"
              render={() => {
                return (
                  <FormItem>
                    <FormLabel>Compensation</FormLabel>
                    <FormControl>
                      <AmountInput />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="date"
              label="date"
              render={() => {
                return (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <DatePicker />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="time"
              label="time"
              render={() => {
                return (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <FormControl>
                      {/* <Input type="time" icon={<IoTimeOutline />}/> */}
                      <TimePicker />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="documents"
              label="documents"
              render={() => {
                return (
                  <FormItem>
                    <div className="flex flex-row justify-between items-center">
                      <FormLabel>Documents</FormLabel>
                      <InfoCard />
                    </div>
                    <FormControl>
                      <InputFile />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <Button
              type="submit"
              className="w-full transition ease-in-out delay-150 hover:scale-110 hover:bg-purple-500 duration-300 hover:origin-top"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddHelpForm;
