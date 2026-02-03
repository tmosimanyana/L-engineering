import { 
  Zap, 
  Settings, 
  Wrench, 
  Activity, 
  RotateCw, 
  Hammer,
  ArrowRight
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const services = [
  {
    title: "Electrical Transformer Repairs",
    icon: Zap,
    description: "Comprehensive diagnostics and repair for all types of electrical transformers.",
    details: "We offer oil purification, bushing replacement, gasket sealing, and core coil repairs to extend the lifespan of your transformers."
  },
  {
    title: "Electrical Motor Rewinding",
    icon: RotateCw,
    description: "Professional rewinding services for AC/DC motors to restore original efficiency.",
    details: "Using high-grade insulation and precision winding techniques, we ensure your motors perform like new. Includes varnish treatment and bake curing."
  },
  {
    title: "Electrical Repairs",
    icon: Activity,
    description: "General electrical troubleshooting and fixes for industrial systems.",
    details: "Fault finding, panel wiring, switchgear maintenance, and circuit breaker repairs for industrial facilities."
  },
  {
    title: "Heavy Duty Pump Repairs",
    icon: Settings,
    description: "Overhaul and maintenance of industrial submersible and centrifugal pumps.",
    details: "Impeller balancing, seal replacement, bearing upgrades, and flow testing for heavy-duty water and slurry pumps."
  },
  {
    title: "Repairs And Maintenance",
    icon: Wrench,
    description: "Scheduled preventative maintenance to avoid costly breakdowns.",
    details: "Customized maintenance contracts including thermal imaging, vibration analysis, and regular servicing of critical plant equipment."
  },
  {
    title: "Civil & Mechanical Works",
    icon: Hammer,
    description: "Air conditioning, refrigeration, and light civil engineering works.",
    details: "We also handle road surfacing, air conditioning installation, and low-pressure water systems to provide a turnkey solution."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Our Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Industrial Grade Services</h3>
          <p className="text-muted-foreground">
            We provide specialized engineering solutions tailored to the needs of Botswana's industrial sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Dialog key={index}>
              <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300 group h-full flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between hover:text-primary group-hover:translate-x-1 transition-transform p-0 hover:bg-transparent">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </DialogTrigger>
                </CardFooter>
              </Card>

              <DialogContent className="sm:max-w-[425px] bg-card border-border">
                <DialogHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <DialogTitle className="text-2xl font-display uppercase tracking-wide">{service.title}</DialogTitle>
                  <DialogDescription className="text-base pt-4">
                    {service.details}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                   <Button className="w-full" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                     Request Quote for this Service
                   </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
