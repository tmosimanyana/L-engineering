import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number must be valid"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Submitted:", values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting Lush Engineering. We will get back to you shortly.",
      duration: 5000,
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div>
              <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Get In Touch</h2>
              <h3 className="text-4xl font-bold mb-6">Contact Us</h3>
              <p className="text-muted-foreground text-lg">
                Ready to start your project or need emergency repairs? Reach out to our team today.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-muted-foreground">+267 74689754</p>
                  <p className="text-muted-foreground text-sm mt-1">Mon-Fri, 8am - 5pm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-muted-foreground">lushengineering20@gmail.com</p>
                  <p className="text-muted-foreground text-sm mt-1">Online Support</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-muted-foreground">Plot 8555, Kgaphamadi</p>
                  <p className="text-muted-foreground">Francistown, Botswana</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Emergency</h4>
                  <p className="text-muted-foreground">Available for urgent</p>
                  <p className="text-muted-foreground">breakdown repairs</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-[300px] rounded-xl overflow-hidden border border-border bg-card relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.502909476054!2d27.5!3d-21.166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCভাবেইMTAnMDAuMCJTIDI3wrAzMCcwMC4wIkU!5e0!3m2!1sen!2sbw!4v1620000000000!5m2!1sen!2sbw" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              {/* Note: Coordinates are approximate for Francistown as specific plot isn't on public API without API key */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
            <h4 className="font-display font-bold text-2xl mb-6">Send a Message</h4>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" {...field} />
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
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+267..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Required</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="repair">Electrical Repair</SelectItem>
                          <SelectItem value="rewind">Motor Rewinding</SelectItem>
                          <SelectItem value="transformer">Transformer Service</SelectItem>
                          <SelectItem value="pump">Pump Repair</SelectItem>
                          <SelectItem value="other">Other / General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
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
                        <Textarea 
                          placeholder="Please describe your requirements..." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full text-lg font-bold h-12">Send Message</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
