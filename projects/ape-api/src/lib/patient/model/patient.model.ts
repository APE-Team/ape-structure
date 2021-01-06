import { EntityModel } from '../../entity';

export interface PatientModel extends EntityModel {
    abxScore: number;
    address: string;
    admitDate: string;
    aspNotifications: string;
    bed: string;
    birthDate: string;
    currentAntibiotics: string;
    daysOnAntibiotics: number;
    email: string;
    firstName: string;
    index: number;
    lastName: string;
    nextReview: string;
    phone: string;
    room: number;
    unit: string;
    userIds: string[];
    weight: number;
    workingDiagnose: string;
}
