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
import { InputFile } from "./InputFiles";
import { TimePicker } from "./TimePicker";
import AmountInput from "./AmountInput";
import { FaLocationDot } from "react-icons/fa6";
import { InfoCard } from "./InfoCard";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, ClockIcon } from "@radix-ui/react-icons";
import CurrencyInput from "react-currency-input-field";

const formSchema = z.object({
  description: z
    .string()
    .min(2, { message: "Description should not be that short!" })
    .max(100),
  venue: z
    .string()
    .min(2, { message: "Venue should not be that short!" })
    .max(50),
  compensation: z.string(),
  date: z.date(),
  time: z.string(),
});

const AddHelpForm = ({ setCurrPage }) => {
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

  const onSubmit = (data) => {
    console.log(data);

    form.reset();

    setCurrPage("homePage");
  };

  return (
    <>
      <div className="z-[60] rounded-m fixed w-full bg-blue-500 flex justify-center h-screen overflow-y-scroll">
        <div className="items-center justify-between p-1 pl-10 pr-10 pb-10 border-2 m-1 rounded-lg shadow-2xl shadow-indigo-500 bg-white h-[600px] relative">
          <div className="absolute top-1 right-1">
            <Button
              className="z-[80] bg-red-400 rounded-lg text-white font-bold text-2xl hover:bg-red-700 active:bg-black"
              onClick={() => setCurrPage("homePage")}
            >
              <IoClose />
            </Button>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-4 text-xl pt-5"
            >
              <FormField
                control={form.control}
                name="venue"
                label="venue"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="text-xl">Venue</FormLabel>
                      <FormControl>
                        <Input
                          icon={
                            <FaLocationDot className="ml-auto h-4 w-4 opacity-50" />
                          }
                          placeholder="Pickup request here"
                          type="text"
                          className="text-xl"
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
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="text-xl">Compensation</FormLabel>
                      <FormControl>
                        <Input
                          className="text-xl"
                          type="number"
                          min="0"
                          placeholder="Help compensation"
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
                name="date"
                label="date"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="text-xl">Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal text-xl",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="time"
                label="time"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="text-xl">Time</FormLabel>
                      <FormControl></FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal text-xl",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                <span>{field.value}</span>
                              ) : (
                                <span>Pick a time</span>
                              )}
                              <ClockIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Input
                            type="time"
                            selected={field.value}
                            onSelect={field.onChange}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="description"
                  label="description"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-xl">Description</FormLabel>
                        <FormControl className="h-full overflow-hidden relative">
                          <textarea
                            rows="4"
                            name="description"
                            placeholder="Description"
                            className="w-full h-full p-2 border-2 border-input bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent overflow-y-scroll overscroll-contain"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>

              <FormField
                control={form.control}
                name="documents"
                label="documents"
                render={({field}) => {
                  return (
                    <FormItem>
                      <div className="flex flex-row justify-between items-center">
                        <FormLabel className="text-xl">Documents</FormLabel>
                        <InfoCard />
                      </div>
                      <FormControl>
                        <div className="grid flex w-full items-center gap-1.5">
                          <Input type="file" id="file" name="file" multiple {...field}/>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name=""
                label=""
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="text-xl">Create Request</FormLabel>
                      <FormControl>
                        <Button
                          type="submit"
                          className="w-full  bg-purple-500 transition ease-in-out delay-150 hover:scale-105 hover:bg-green-500 duration-300 hover:origin-top"
                        >
                          Submit
                        </Button>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddHelpForm;
