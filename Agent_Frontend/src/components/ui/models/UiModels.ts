export type ErrorPayload = {
  statusCode: number;
  message: string;
};

export interface GreetingProps {
  username: string;
}

export type TimePeriod = "weekly" | "monthly" | "3months" | "6months";

export type ReportPeriod = "all" | "new" | "archived";

export interface TimeFilterProps {
  value: TimePeriod;
  onChange: (val: TimePeriod) => void;
}

export interface ReportFilterProps {
  value: ReportPeriod;
  onChange: (val: ReportPeriod) => void;
}
