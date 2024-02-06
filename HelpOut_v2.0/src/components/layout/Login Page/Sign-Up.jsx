import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Button } from "../../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { set } from "date-fns";
import { useToast } from "@/components/ui/use-toast";

export const registerSchema = z.object({
  email: z.string().email(),
  name: z
    .string()
    .min(2, { message: "Your name should not be that short!" })
    .max(100),
  college: z.string().min(2).max(100),
  password: z.string().min(8).max(100),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

const SignUp = () => {
  const [formStep, setFormStep] = useState(0);
  const { toast } = useToast();
  
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      name: "",
      college: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    form.reset();

    alert(JSON.stringify(data, null, 4));
    console.log(data);
  };


  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription> Welcome to HelpOut! </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="max-w-md w-full flex flex-col gap-4"
            >
              <div
                className={cn("", {
                  hidden: formStep === 1,
                })}
              >
                {/* email */}
                <FormField
                  control={form.control}
                  name="email"
                  label="email"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>E-Mail</FormLabel>
                        <FormControl className="">
                          <Input
                            placeholder="To help us spread the word"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                {/* name */}
                <FormField
                  control={form.control}
                  name="name"
                  label="name"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                {/* college */}
                <FormField
                  control={form.control}
                  name="college"
                  label="college"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>College</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your college"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>

              <div
                className={cn("", {
                  hidden: formStep === 0,
                })}
              >
                {/* password */}
                <FormField
                  control={form.control}
                  name="password"
                  label="password"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Where you'd recieve your order"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                {/* confirm-password */}
                <FormField
                  control={form.control}
                  name="confirm-password"
                  label="confirm-password"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Where you'd recieve your order"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2 w-full">
            <Button
              className={cn(
                "w-full transition ease-in-out delay-150 hover:bg-purple-500 duration-300 hover:origin-top",
                {
                  hidden: formStep === 0,
                }
              )}
              type="submit"
            >
              Create An Account
            </Button>
            <Button
              type="button"
              className={cn("w-full hover:bg-green-500", {
                hidden: formStep === 1,
              })}
              variant="ghost"
              onClick={() => {
                //validation
                form.trigger(["email", "name", "college"]);
                const emailState = form.getFieldState("email");
                const nameState = form.getFieldState("name");
                const collegeState = form.getFieldState("college");

                if (emailState.invalid || !emailState.isDirty) return;
                if (nameState.invalid || !nameState.isDirty) return;
                if (collegeState.invalid || !collegeState.isDirty) return;

                setFormStep(1);
              }}
            >
              Next Step
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              className={cn(
                "w-full flex items-center justify- center hover:bg-green-500",
                {
                  hidden: formStep === 0,
                }
              )}
              onClick={() => {
                setFormStep(0);
              }}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default SignUp;

// export default SignUp;

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  //   reset,
  //   control,
  // } = useForm({
  //   resolver: zodResolver(SignUpSchema),
  // });

  // const onSubmit = async (data) => {
  //   //Submit to server
  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  //   reset();
  // };

  // return (
  //   <>
  //     <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
  //       <input
  //         {...register("email")}
  //         type="email"
  //         placeholder="Email"
  //       />
  //       {errors.email && <p>{errors.email.message}</p>}
  //       <input
  //         {...register("password")}
  //         type="password"
  //         placeholder="Password"
  //       />
  //       {errors.password && <p>{errors.password.message}</p>}

  //       <input
  //         {...register("confirmPassword")}
  //         type="password"
  //         placeholder="Confirm Password"
  //       />
  //       {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
  //       <button
  //         type="submit"
  //         disabled={isSubmitting}
  //         className="bg-blue-500 odapcoaslmc"
  //       >
  //         submit
  //       </button>
  //     </form>