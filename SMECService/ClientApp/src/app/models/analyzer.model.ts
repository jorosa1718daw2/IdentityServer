import { Sensor } from './sensor.model';


export interface Analyzer {
  analyzerId: number;
  focusId: number
  manufacturer: string;
  model: string;
  serialNumber: string;
  sensors: Sensor[];
}
