import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export const registerSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(100),
  college: z.string().min(2).max(100),
  password: z.string().min(8).max(100),
  confirmPassword: z.string().min(8).max(100),
});

const SignUp = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

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

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <CardContent className="space-y-2">
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
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full transition ease-in-out delay-150 hover:bg-purple-500 duration-300 hover:origin-top"
            >
              Create An Account
            </Button>
          </CardFooter>
        </form>
      </Form>
    </>
  );
};

export default SignUp;
