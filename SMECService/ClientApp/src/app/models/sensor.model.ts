import { MeasuringComponentModel } from './measuringcomponent.model';
import { Unit } from './unit.model';

export interface Sensor {
  sensorId: number;
  analyzerId: number;
  focusId: number;
  measuringComponentId: number;
  unitId: number;
  measuringComponent: MeasuringComponentModel;
  unit: Unit;
}
