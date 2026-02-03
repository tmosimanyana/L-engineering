import { ShieldCheck, Calendar, FileCheck } from "lucide-react";

export function Compliance() {
  const capabilities = [
    "Electrical Installations",
    "High Voltage Reticulation",
    "Fire Detection Systems",
    "Automated Machinery & Control",
    "Security Systems (CCTV/Access)",
    "Photovoltaic Systems",
    "Airfield Lighting",
    "Civil Works (Road Surfacing)",
    "Air Conditioning & Refrigeration"
  ];

  return (
    <section id="compliance" className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Trust & Safety</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Registered & Compliant</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Lush Engineering operates with full compliance to Botswana's engineering and contracting regulations. 
              We prioritize safety and legality in every project.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Registered Contractor</h4>
                  <p className="text-muted-foreground text-sm">Officially recognized contractor for government and private tenders.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <Calendar className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Active Registration</h4>
                  <p className="text-muted-foreground text-sm">
                    Registration Valid Until: <span className="text-white font-mono bg-white/10 px-2 py-0.5 rounded">20 November 2026</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-8">
             <h4 className="font-display font-bold text-xl mb-6 flex items-center gap-2">
               <FileCheck className="w-5 h-5 text-primary" />
               Approved Disciplines
             </h4>
             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
               {capabilities.map((item, i) => (
                 <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                   <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                   {item}
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
