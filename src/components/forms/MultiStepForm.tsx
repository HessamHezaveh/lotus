"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox"; // Import the Checkbox component

// Form Schema
const FormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string(),
  residenceName: z.string().min(2, "Residence name is required."),
  numberOfBuilding: z.coerce.number().min(1, "Must be at least 1."),
  numberOfApartments: z.coerce.number().min(1, "Must be at least 1."),
  pool: z.boolean(), // Updated to boolean
  landscapeMaintenance: z.boolean(), // Updated to boolean
  personnel: z.coerce.number().min(0, "Must be at least 0."),
  address: z.string().min(5, "Address must be at least 5 characters."),
});
export type FormType = z.infer<typeof FormSchema>;

export function MultiStepForm1() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // Tracks the current step (1, 2, or 3)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      residenceName: "",
      numberOfBuilding: 1,
      numberOfApartments: 1,
      pool: false, // Default to unchecked
      landscapeMaintenance: false, // Default to unchecked
      personnel: 0,
      address: "",
    },
  });

  // Handle submission of the final form
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        toast.error("Something went wrong!");
      } else {
        toast.success("Your message has been sent!");
      }
    } catch (error: any) {
      toast.error("Something went wrong: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  // Move to the next step after validating the current step
  const handleNext = () => {
    const fieldsToValidate = getFieldsForStep(step); // Get fields for the current step
    form.trigger(fieldsToValidate).then((isValid) => {
      if (isValid) {
        setStep((prevStep) => prevStep + 1); // Move to the next step only if valid
      }
    });
  };

  // Move to the previous step
  const handleBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  // Get fields to validate for the current step
  const getFieldsForStep = (currentStep: number): (keyof FormType)[] => {
    switch (currentStep) {
      case 1:
        return ["name", "phone", "email"];
      case 2:
        return ["residenceName", "numberOfBuilding", "numberOfApartments", "pool", "landscapeMaintenance"];
      case 3:
        return ["address", "message"];
      default:
        return [];
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 text-mh-white md:w-[50%] space-y-6">
        {/* Step 1: General Info */}
        {step === 1 && (
          <>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {/* Step 2: Residence Info */}
        {step === 2 && (
          <>
            <FormField
              control={form.control}
              name="residenceName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Residence Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Residence Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full justify-between gap-7">
              <FormField
                control={form.control}
                name="numberOfBuilding"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Number of Buildings</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberOfApartments"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Number of Apartments</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
                control={form.control}
                name="pool"
                render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                        <Checkbox
                        checked={field.value} // Bind the checkbox state to the form value
                        onCheckedChange={(checked) => field.onChange(!!checked)} // Update the form state
                        />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        <FormLabel>Pool</FormLabel>
                        <FormDescription className="text-zinc-200">Check if the residence has a pool.</FormDescription>
                    </div>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="landscapeMaintenance"
                render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                        <Checkbox 
                        checked={field.value} // Bind the checkbox state to the form value
                        onCheckedChange={(checked) => field.onChange(!!checked)} // Update the form state

                        />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        <FormLabel>Landscape Maintenance</FormLabel>
                        <FormDescription className="text-zinc-200">Check if the residence requires landscape maintenance.</FormDescription>
                    </div>
                    </FormItem>
                )}
                />
          </>
        )}

        {/* Step 3: Address and Message */}
        {step === 3 && (
          <>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type your message here." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          {step > 1 && (
            <Button variant="outline"  onClick={handleBack}>
              Back
            </Button>
          )}
          {step < 3 ? (
            <Button type="button" variant="outline"  onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button type="submit" className="border text-mh-mainBlue border-mh-gold bg-mh-gold hover:bg-transparent  hover:text-mh-gold" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="animate-spin" /> Please wait
                </>
              ) : (
                "Submit"
              )}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}