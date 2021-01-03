import { EntityModel } from '../../entity';

export interface PatientModel extends EntityModel {
    admitDate: number;
    bed: string;
    birthDate: number;
    firstName: string;
    gender: string;
    lastName: string;
    mrn: number;
    room: number;
    unit: string;
    weight: number;
    workingDiagnoses: string[];
}
