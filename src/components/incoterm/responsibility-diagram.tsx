"use client";

import { Incoterm } from "@/types";

interface ResponsibilityDiagramProps {
  incoterm: Incoterm;
}

export function ResponsibilityDiagram({ incoterm }: ResponsibilityDiagramProps) {
  const stages = [
    { label: "Packaging", position: 0 },
    { label: "Loading", position: 15 },
    { label: "Export", position: 25 },
    { label: "Carriage", position: 50 },
    { label: "Import", position: 65 },
    { label: "Delivery", position: 85 },
    { label: "Unloading", position: 100 },
  ];

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-6 text-lg font-semibold">
        Risk & Cost Transfer Points
      </h3>

      {/* Diagram */}
      {/* Diagram */}
      <div className="relative mb-8 mx-4">
        {/* Background bar */}
        <div className="h-12 rounded-full bg-muted" />

        {/* Seller portion (blue) */}
        <div
          className="absolute left-0 top-0 h-12 rounded-l-full bg-blue-500"
          style={{ width: `${incoterm.riskTransferPoint}%` }}
        />

        {/* Buyer portion (orange) */}
        <div
          className="absolute right-0 top-0 h-12 rounded-r-full bg-orange-500"
          style={{ width: `${100 - incoterm.riskTransferPoint}%` }}
        />

        {/* Cost transfer marker */}
        <div
          className="absolute top-0 flex h-12 items-center"
          style={{ left: `${incoterm.costTransferPoint}%` }}
        >
          <div className="h-14 w-1 -translate-y-1 bg-foreground" />
        </div>

        {/* Risk transfer marker */}
        <div
          className="absolute top-0 flex h-12 items-center"
          style={{ left: `${incoterm.riskTransferPoint}%` }}
        >
          <div className="h-16 w-1 -translate-y-2 bg-destructive" />
        </div>

        {/* Stage markers */}
        <div className="absolute -bottom-8 left-0 right-0 h-6 text-xs text-muted-foreground font-medium select-none">
          {stages.map((stage) => (
            <div
              key={stage.label}
              className="absolute flex flex-col items-center"
              style={{
                left: `${stage.position}%`,
                transform:
                  stage.position === 0
                    ? "translateX(0%)" /* Start: Align Left */
                    : stage.position === 100
                      ? "translateX(-100%)" /* End: Align Right */
                      : "translateX(-50%)", /* Middle: Center */
                alignItems:
                  stage.position === 0
                    ? "flex-start"
                    : stage.position === 100
                      ? "flex-end"
                      : "center"
              }}
            >
              {/* Tick Mark */}
              <div className="h-1.5 w-px bg-border mb-1" />

              {/* Label */}
              <span className="whitespace-nowrap leading-none">
                {stage.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      {/* Legend & Definitions */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Category 1: Responsibilities */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Operational Responsibility
          </h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 rounded bg-blue-500 shadow-sm ring-1 ring-white/20" />
              <span className="text-sm font-medium">Seller Responsibility</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 rounded bg-orange-500 shadow-sm ring-1 ring-white/20" />
              <span className="text-sm font-medium">Buyer Responsibility</span>
            </div>
          </div>
        </div>

        {/* Category 2: Transfer Points */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Critical Transfer Points
          </h4>
          <div className="space-y-4">
            <div className="group">
              <div className="flex items-center gap-3 mb-1">
                <div className="h-5 w-1.5 bg-destructive rounded-full" />
                <span className="text-sm font-medium">Risk Transfer Point</span>
              </div>
              <p className="pl-4.5 text-xs text-muted-foreground border-l border-border ml-0.5">
                Who bears the loss/damage if something happens
              </p>
            </div>

            <div className="group">
              <div className="flex items-center gap-3 mb-1">
                <div className="h-5 w-1.5 bg-foreground rounded-full" />
                <span className="text-sm font-medium">Cost Transfer Point</span>
              </div>
              <p className="pl-4.5 text-xs text-muted-foreground border-l border-border ml-0.5">
                Who pays for the logistics activities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transfer Points Info */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-muted p-4">
          <p className="text-sm font-medium">Risk Transfers at</p>
          <p className="text-2xl font-bold text-destructive">
            {incoterm.riskTransferPoint}%
          </p>
          <p className="text-xs text-muted-foreground">of the delivery journey</p>
        </div>
        <div className="rounded-lg bg-muted p-4">
          <p className="text-sm font-medium">Cost Transfers at</p>
          <p className="text-2xl font-bold">{incoterm.costTransferPoint}%</p>
          <p className="text-xs text-muted-foreground">of the delivery journey</p>
        </div>
      </div>
    </div>
  );
}
