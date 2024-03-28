// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export type ReData = {
  status: string;
  jobParams: any;
  physicalCounts: any;
  physicalCountsFormatted: any;
  logicalQubit: any;
  tfactory: any;
  errorBudget: any;
  logicalCounts: any;
  frontierEntries: FrontierEntry[];
};

export type SingleEstimateResult = {
  status: string;
  jobParams: any;
  physicalCounts: any;
  physicalCountsFormatted: any;
  logicalQubit: any;
  tfactory: any;
  errorBudget: any;
  logicalCounts: any;
};

export type FrontierEntry = {
  logicalQubit: any;
  tfactory: any;
  errorBudget: any;
  physicalCounts: any;
  physicalCountsFormatted: any;
};

export function CreateSingleEstimateResult(
  input: ReData,
  frontierEntryIndex?: number,
): SingleEstimateResult {
  if (
    frontierEntryIndex == undefined ||
    input.frontierEntries == null ||
    input.frontierEntries.length === 0
  ) {
    return input;
  } else {
    if (
      frontierEntryIndex < 0 ||
      frontierEntryIndex >= input.frontierEntries.length
    ) {
      frontierEntryIndex = 0;
    }

    const entry = input.frontierEntries[frontierEntryIndex];
    return {
      status: input.status,
      jobParams: input.jobParams,
      physicalCounts: entry.physicalCounts,
      physicalCountsFormatted: entry.physicalCountsFormatted,
      logicalQubit: entry.logicalQubit,
      tfactory: entry.tfactory,
      errorBudget: entry.errorBudget,
      logicalCounts: input.logicalCounts,
    };
  }
}

export type CircuitProps = {
  title: string;
  circuit?: CircuitData;
  errorHtml?: string;
  targetProfile: string;
  simulating: boolean;
};

export type CircuitData = import("@microsoft/quantum-viz.js/lib").Circuit;
