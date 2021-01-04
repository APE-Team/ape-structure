import { EntityModel } from '../../entity';

export interface PatientModel extends EntityModel {
    abxScore: number;
    address: string;
    admitDate: string;
    age: number;
    aspNotifications: string;
    bed: string;
    currentAntibiotics: string;
    daysOnAntibiotics: number;
    email: string;
    guid: string;
    index: number;
    name: any;
    nextReview: string;
    phone: string;
    room: number;
    unit: string;
    userIds: string[];
    weight: number;
    workingDiagnose: string;
}
