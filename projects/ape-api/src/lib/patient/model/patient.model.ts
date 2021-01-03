import { EntityModel } from '../../entity';

export interface PatientModel extends EntityModel {
    admitDate: number;
    bed: string;
    birthdate: number;
    firstName: string;
    gender: string;
    lastName: string;
    mrn: number;
    room: string;
    unit: string;
    userIds: string[];
    weight: number;
    workingDiagnoses: string[];
}
