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
import emailjs from "emailjs-com";
import { Checkbox } from "@/components/ui/checkbox"; // Import the Checkbox component

// Form Schema
const FormSchema = z.object({
  name: z.string().min(2, { message: "sim en az 2 karakter olmalıdır." }),
  phone: z
    .string()
    .min(10, { message: "Telefon numarası en az 10 karakter olmalıdır." }),
  email: z.string().email({ message: "Lütfen geçerli bir e-posta adresi girin." }),
  message: z.string(),
  residenceName: z.string().min(2, "Site adı gereklidir."),
  numberOfBuilding: z.coerce.number().min(1, "En az 1 olmalıdır."),
  numberOfApartments: z.coerce.number().min(1, "En az 1 olmalıdır."),
  pool: z.boolean(), // Updated to boolean
  landscapeMaintenance: z.boolean(), // Updated to boolean
  personnel: z.boolean(),
  address: z.string().min(5, "Adres en az 5 karakter olmalıdır."),
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
      personnel: false,
      address: "",
    },
  });

  // Handle submission of the final form
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    try {
      const response = await emailjs.send(
        "service_1hlr54d",
        "template_pcmca2n",
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message,
          residenceName: data.residenceName,
          numberOfBuilding: data.numberOfBuilding,
          numberOfApartments: data.numberOfApartments,
          pool: data.pool ? "Yes" : "No",
          landscapeMaintenance: data.landscapeMaintenance ? "Yes" : "No",
          personnel: data.personnel,
          address: data.address,
        },
        "AQNVZMaEpWDR4VhZ2"
      );

      if (response.status === 200) {
        toast.success("Mesajınız başarıyla gönderildi!");
      } else {
        toast.error("Mesaj gönderilirken bir hata oluştu.");
      }
    } catch (error: any) {
      toast.error(
        "Bir hata oluştu: " +
          (error?.text || error?.message || "Tanımlanamayan hata")
      );
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
        return [
          "residenceName",
          "numberOfBuilding",
          "numberOfApartments",
          "pool",
          "landscapeMaintenance",
        ];
      case 3:
        return ["address", "message"];
      default:
        return [];
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 text-mh-white md:w-[50%] space-y-6"
      >
        {/* Step 1: General Info */}
        {step === 1 && (
          <>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>İsim</FormLabel>
                  <FormControl>
                    <Input placeholder="İsim" {...field} />
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
                  <FormLabel>Telefon Numarası</FormLabel>
                  <FormControl>
                    <Input placeholder="Telefon Numarası" {...field} />
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
                  <FormLabel>E-posta</FormLabel>
                  <FormControl>
                    <Input placeholder="E-posta" {...field} />
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
                  <FormLabel>Site Adi</FormLabel>
                  <FormControl>
                    <Input placeholder="Site Adi" {...field} />
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
                    <FormLabel>Blok Sayısı</FormLabel>
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
                    <FormLabel>Daire Sayısı</FormLabel>
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
                    <FormLabel>Havuz</FormLabel>
                    <FormDescription className="text-zinc-200">
                    Havuz varsa işaretleyin.
                    </FormDescription>
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
                    <FormLabel>Peyzaj Bakımı</FormLabel>
                    <FormDescription className="text-zinc-200">
                      Rezidans için peyzaj bakımı gerekiyor mu? İşaretleyin.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="personnel"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value} // Bind the checkbox state to the form value
                      onCheckedChange={(checked) => field.onChange(!!checked)} // Update the form state
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>persenel</FormLabel>
                    <FormDescription className="text-zinc-200">
                      Daimi personal var mı?
                    </FormDescription>
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
                  <FormLabel>Adres</FormLabel>
                  <FormControl>
                    <Input placeholder="Adres" {...field} />
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
                  <FormLabel>Mesaj</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Mesajınızı buraya yazın.."
                      {...field}
                    />
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
            <Button variant="outline" onClick={handleBack}>
              Geri
            </Button>
          )}
          {step < 3 ? (
            <Button type="button" variant="outline" onClick={handleNext}>
              İleri
            </Button>
          ) : (
            <Button
              type="submit"
              className="border text-mh-mainBlue border-mh-gold bg-mh-gold hover:bg-transparent  hover:text-mh-gold"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" /> Lütfen bekleyin
                </>
              ) : (
                "Gönder"
              )}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
