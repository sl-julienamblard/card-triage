export type CardStatus = "DONE" | "REJECTED" | "PENDING";
export type Arrhythmias = "PVC" | "PSVC" | "AFib" | "AV Block" | "Pause";

export type CardData = {
  arrhythmias: Arrhythmias[];
  created_date: string;
  id: number;
  patient_name: string;
  status: CardStatus;
};
