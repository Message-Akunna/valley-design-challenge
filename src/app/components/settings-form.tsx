"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
  FormControl,
  FormDescription,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/src/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/src/components/ui/toggle-group";
// import { Textarea } from "@/src/components/ui/textarea";
import { toast } from "@/src/components/ui/use-toast";

const settingsFormSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Company's name must be at least 1 character long.",
    })
    .max(50, {
      message: "Company's name must not be longer than 50 characters.",
    }),
  website: z.string().url({ message: "Please enter a valid URL." }),
  linkedin: z.string().url({ message: "Please enter a valid URL." }),
  industry: z.string({ required_error: "Please select a valid Industry." }),
  employee_count: z.string({
    required_error: "Please select a valid employee count",
  }),
  description: z.string({
    required_error: "Please provide company's description.",
  }),
  goals: z.string({ required_error: "Please provide company's goals" }),
  headquarters: z.string({
    required_error: "Please provide company's headquarters",
  }),
  funding_round: z.string({
    required_error: "Please select a valid funding round",
  }),
  faqs: z.string().url({ message: "Please enter a valid URL." }),
});

type SettingsFormValues = z.infer<typeof settingsFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<SettingsFormValues> = {
  name: "Sixteen Inc.",
  website: "https://sixteen.life/",
  linkedin: "https://www.linkedin.com/company/sixteenlife",
  industry: "Digital Wellbeing",
  employee_count: "1-10",
  description: "Redesign your digital life, reduce your screen time",
  goals:
    "Help everyone to be more conscious of where they are spending their time",
  headquarters: "Delhi, India",
  funding_round: "seed",
  faqs: "https://sixteen.life/faq",
};

export function SettingsForm() {
  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: SettingsFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        id="settings-form"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal">
                    Company&apos;s Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal">
                    Company&apos;s Website
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-6 ">
            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal">
                    Company&apos;s Linkedin
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-6 ">
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal">
                    Company&apos;s Industry
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="employee_count"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal">Employee Count</FormLabel>
              <ToggleGroup
                type="single"
                variant="outline"
                className=" justify-start"
                onValueChange={field.onChange}
              >
                <ToggleGroupItem
                  value="1-10"
                  aria-label="1-10"
                  className="rounded-full data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                >
                  1-10
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="10-100"
                  aria-label="10-100"
                  className="rounded-full data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                >
                  10-100
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="100-500"
                  aria-label="100-500"
                  className="rounded-full data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                >
                  100-500
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="1000+"
                  aria-label="1000+"
                  className="rounded-full data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                >
                  1000+
                </ToggleGroupItem>
              </ToggleGroup>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal">
                Company&apos;s Description
              </FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                Your detailed company description
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="goals"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal">
                What are your company goals?
              </FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="headquarters"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal">Headquarters</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          <div className="col-span-6 ">
            <FormField
              control={form.control}
              name="funding_round"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal">Funding Round</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company funding round" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="seed">Seed</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-6 ">
            <FormField
              control={form.control}
              name={"faqs"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal">FAQs</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
}
