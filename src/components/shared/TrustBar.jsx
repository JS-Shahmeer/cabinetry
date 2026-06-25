import React from "react";
import { Shield, Award, Hammer, Star } from "lucide-react";

const items = [
  { icon: Award, label: "40+ Years Experience" },
  { icon: Hammer, label: "All-Wood Construction" },
  { icon: Shield, label: "No Particle Board" },
  { icon: Star, label: "Locally Trusted Since 1984" },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-border">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-3 px-5 py-5">
            <Icon className="h-5 w-5 text-[#8C6A43]" />
            <span className="text-sm font-medium text-primary">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}