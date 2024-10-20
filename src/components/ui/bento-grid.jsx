import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { icons } from "lucide-react";

const BentoGrid = ({
  children,
  className
}) => {
  return (
    (<div
      className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)}>
      {children}
    </div>)
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta
}) => (
  <div
    key={name}
    className={cn(
      "group relative h-full col-span-3 flex flex-col justify-between overflow-hidden rounded-xl ",
      // light styles
      "bg-black  [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}>
    <div className="h-full">{background}</div>
    {Icon  !== false && <div className="pointer-events-none z-10 flex transform-gpu flex-row gap-1 items-center p-12 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-100 transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-bold text-neutral-100 dark:text-neutral-300">
        {name}
      </h3>
      
      {/* <p className="max-w-lg text-neutral-400">{description}</p> */}
    </div>}
    

    {cta !== false && (
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center  p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        <Button variant="secondary" asChild size="sm" className="pointer-events-auto">
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    )}
    
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };

