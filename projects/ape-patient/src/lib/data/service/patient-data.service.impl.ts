import { PatientDataService } from 'projects/ape-api/src/lib/patient/service/patient-data.service';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { EntityModel, PatientModel } from '@ape-api';

@Injectable()
export class PatientDataServiceImpl extends PatientDataService {
    private patientMap = new Map();
    private patients: PatientModel[] = [];

    public constructor() {
        super();

        this.initPatients();

        this.patients.forEach((patient) =>
            this.patientMap.set(patient.uid, patient)
        );
    }

    public list$(): Observable<EntityModel[]> {
        return of([]);
    }

    public listPatientsByUserId$(): Observable<PatientModel[]> {
        return of(this.patients);
    }

    public load$(uid: string): Observable<EntityModel> {
        return this.patientMap.get(uid);
    }

    private initPatients(): void {
        this.patients = [
          {
            "uid": "5ff2e5baeec65d43df95e036",
            "index": 0,
            "guid": "c0eebd8b-3b92-4e8e-8843-42b9bf63aacf",
            "age": 39,
            "name": {
              "first": "Mueller",
              "last": "Santiago"
            },
            "email": "mueller.santiago@undefined.tv",
            "phone": "+1 (810) 414-3892",
            "unit": "MICU",
            "room": 544,
            "bed": "A",
            "address": "599 Tudor Terrace, Tyro, Guam, 6039",
            "weight": 51,
            "admitDate": "Wednesday, July 23, 2014 5:46 PM",
            "workingDiagnose": "Perforated appendicitis",
            "abxScore": 32,
            "daysOnAntibiotics": 16,
            "aspNotifications": "IV to PO",
            "nextReview": "Sunday, February 14, 2021 3:13 PM",
            "currentAntibiotics": "Daptomycin",
            "userIds": ['10101010']
          },
          {
            "uid": "5ff2e5ba97871823a24e371e",
            "index": 1,
            "guid": "3d1fe106-5333-44f2-983a-871449fd84ce",
            "age": 38,
            "name": {
              "first": "Casey",
              "last": "Lowe"
            },
            "email": "casey.lowe@undefined.org",
            "phone": "+1 (803) 468-3539",
            "unit": "LTAC",
            "room": 3091,
            "bed": "C",
            "address": "939 Lawrence Street, Flintville, Maine, 1910",
            "weight": 59,
            "admitDate": "Thursday, August 14, 2014 11:24 PM",
            "workingDiagnose": "UTI",
            "abxScore": 45,
            "daysOnAntibiotics": 9,
            "aspNotifications": "Drug != Lab: vancoycin",
            "nextReview": "Tuesday, February 16, 2021 11:39 PM",
            "currentAntibiotics": "Omadacycline",
            "userIds": ['10101010']
          },
          {
            "uid": "5ff2e5ba4d4425284386d114",
            "index": 2,
            "guid": "624e1529-0e9f-49f9-9dec-50ee90453f82",
            "age": 31,
            "name": {
              "first": "Eliza",
              "last": "Dillard"
            },
            "email": "eliza.dillard@undefined.io",
            "phone": "+1 (928) 548-2600",
            "unit": "5 Surgical",
            "room": 1707,
            "bed": "A",
            "address": "411 Richards Street, Cascades, Utah, 5858",
            "weight": 69,
            "admitDate": "Friday, March 6, 2020 11:53 PM",
            "workingDiagnose": "Cellulitis",
            "abxScore": 45,
            "daysOnAntibiotics": 8,
            "aspNotifications": "Drug != Lab: vancoycin",
            "nextReview": "Tuesday, February 23, 2021 8:50 AM",
            "currentAntibiotics": "Mupirocin",
            "userIds": ['10101010']
          },
          {
            "uid": "5ff2e5ba506121df5c4725b5",
            "index": 3,
            "guid": "d3ce9095-0ce0-4df9-8582-cf618764f7ad",
            "age": 20,
            "name": {
              "first": "Marisol",
              "last": "Hess"
            },
            "email": "marisol.hess@undefined.biz",
            "phone": "+1 (890) 549-3812",
            "unit": "5 Surgical",
            "room": 3912,
            "bed": "A",
            "address": "384 Plymouth Street, Waukeenah, Idaho, 1104",
            "weight": 82,
            "admitDate": "Monday, July 8, 2019 7:54 PM",
            "workingDiagnose": "COVID-19",
            "abxScore": 17,
            "daysOnAntibiotics": 14,
            "aspNotifications": "De-escalation",
            "nextReview": "Sunday, January 17, 2021 12:23 AM",
            "currentAntibiotics": "Clindamycin",
            "userIds": ['10101010']
          },
          {
            "uid": "5ff2e5ba686724a43d10e9aa",
            "index": 4,
            "guid": "1b49c40f-0b1a-4375-9969-d2a288f21668",
            "age": 23,
            "name": {
              "first": "Karla",
              "last": "Peters"
            },
            "email": "karla.peters@undefined.ca",
            "phone": "+1 (981) 409-2400",
            "unit": "LTAC",
            "room": 1443,
            "bed": "B",
            "address": "841 Graham Avenue, Vivian, Washington, 7807",
            "weight": 84,
            "admitDate": "Thursday, June 19, 2014 1:45 AM",
            "workingDiagnose": "UTI",
            "abxScore": 52,
            "daysOnAntibiotics": 5,
            "aspNotifications": "IV to PO",
            "nextReview": "Friday, April 2, 2021 9:29 PM",
            "currentAntibiotics": "Trimethoprim",
            "userIds": ['10101010']
          },
          {
            "uid": "5ff2e5ba79289334382bd74c",
            "index": 5,
            "guid": "8d414168-fe4e-4bcb-b230-da02ac49be33",
            "age": 29,
            "name": {
              "first": "Brown",
              "last": "Long"
            },
            "email": "brown.long@undefined.me",
            "phone": "+1 (846) 578-2331",
            "unit": "Burn",
            "room": 1031,
            "bed": "F",
            "address": "119 Cypress Court, Marshall, Ohio, 7149",
            "weight": 118,
            "admitDate": "Wednesday, May 20, 2020 8:18 PM",
            "workingDiagnose": "COVID-19",
            "abxScore": 51,
            "daysOnAntibiotics": 11,
            "aspNotifications": "Positive culture",
            "nextReview": "Wednesday, February 17, 2021 10:45 AM",
            "currentAntibiotics": "Ceftaroline",
            "userIds": ['10101010']
          },
          {
            "uid": "5ff2e5baca84096b31dd0948",
            "index": 6,
            "guid": "a37fed42-9179-4001-b875-5249323fda7d",
            "age": 35,
            "name": {
              "first": "Clare",
              "last": "Phillips"
            },
            "email": "clare.phillips@undefined.net",
            "phone": "+1 (959) 438-3979",
            "unit": "5 Surgical",
            "room": 3778,
            "bed": "B",
            "address": "275 Mill Street, Wescosville, Illinois, 4567",
            "weight": 121,
            "admitDate": "Sunday, April 5, 2015 12:32 AM",
            "workingDiagnose": "Cellulitis",
            "abxScore": 27,
            "daysOnAntibiotics": 20,
            "aspNotifications": "IV to PO",
            "nextReview": "Wednesday, May 26, 2021 12:23 AM",
            "currentAntibiotics": "Clindamycin",
            "userIds": ['10101010']
          },
          {
            "uid": "5ff2e5ba6d2dfd3da69136fe",
            "index": 7,
            "guid": "42b790bb-13f5-4e52-b2b3-171bd5277344",
            "age": 28,
            "name": {
              "first": "Helene",
              "last": "Padilla"
            },
            "email": "helene.padilla@undefined.info",
            "phone": "+1 (910) 450-2830",
            "unit": "Burn",
            "room": 150,
            "bed": "F",
            "address": "427 Lake Place, Allendale, Federated States Of Micronesia, 8262",
            "weight": 91,
            "admitDate": "Saturday, August 16, 2014 9:17 AM",
            "workingDiagnose": "MRSA Cenral line infection",
            "abxScore": 27,
            "daysOnAntibiotics": 20,
            "aspNotifications": "De-escalation",
            "nextReview": "Saturday, April 10, 2021 1:03 AM",
            "currentAntibiotics": "Fusidic acid",
            "userIds": ['10101010']
          },
          {
            "uid": "5ff2e5ba22f200dcc0f027b1",
            "index": 8,
            "guid": "74b9a346-c6bd-45b8-966f-c05b4569cbf5",
            "age": 23,
            "name": {
              "first": "Ayers",
              "last": "Goodman"
            },
            "email": "ayers.goodman@undefined.co.uk",
            "phone": "+1 (992) 465-3837",
            "unit": "LTAC",
            "room": 1136,
            "bed": "H",
            "address": "909 Reed Street, Otranto, Rhode Island, 6754",
            "weight": 111,
            "admitDate": "Saturday, August 24, 2019 10:47 AM",
            "workingDiagnose": "Ventilator-asociated pneumonia",
            "abxScore": 29,
            "daysOnAntibiotics": 20,
            "aspNotifications": "Drug != Lab: vancoycin",
            "nextReview": "Wednesday, April 28, 2021 8:52 AM",
            "currentAntibiotics": "Linezolid",
            "userIds": ['10101010']
          },
          {
            "uid": "5ff2e5ba63b89c7430f0373c",
            "index": 9,
            "guid": "12df55ea-66fd-4386-90ee-13f104074e83",
            "age": 20,
            "name": {
              "first": "Mcclain",
              "last": "Stafford"
            },
            "email": "mcclain.stafford@undefined.us",
            "phone": "+1 (944) 455-2815",
            "unit": "Burn",
            "room": 1655,
            "bed": "A",
            "address": "383 Montrose Avenue, Hoagland, Virginia, 5068",
            "weight": 105,
            "admitDate": "Friday, October 7, 2016 2:53 AM",
            "workingDiagnose": "Pneumonia",
            "abxScore": 15,
            "daysOnAntibiotics": 15,
            "aspNotifications": "De-escalation",
            "nextReview": "Monday, January 25, 2021 6:18 PM",
            "currentAntibiotics": "Fusidic acid",
            "userIds": ['10101010']
          },
          {
            "uid": "5ff2e5ba692473ebfceb5502",
            "index": 10,
            "guid": "c8b62ec3-0cfe-4b9a-a114-5e784de98ac7",
            "age": 34,
            "name": {
              "first": "Franks",
              "last": "Joyner"
            },
            "email": "franks.joyner@undefined.biz",
            "phone": "+1 (846) 409-3203",
            "unit": "Pediatric",
            "room": 878,
            "bed": "B",
            "address": "244 Hendrickson Place, Roulette, South Carolina, 7016",
            "weight": 80,
            "admitDate": "Tuesday, December 31, 2019 3:09 PM",
            "workingDiagnose": "Pneumonia",
            "abxScore": 43,
            "daysOnAntibiotics": 2,
            "aspNotifications": "Positive culture",
            "nextReview": "Friday, May 21, 2021 12:36 AM",
            "currentAntibiotics": "Telavancin",
            "userIds": ['10101010']
          },
          {
            "uid": "5ff2e5baa72fb369ddb777a2",
            "index": 11,
            "guid": "22aef654-3739-4e86-ba84-a7763fb61edf",
            "age": 27,
            "name": {
              "first": "Lee",
              "last": "Smith"
            },
            "email": "lee.smith@undefined.com",
            "phone": "+1 (849) 438-3892",
            "unit": "LTAC",
            "room": 3287,
            "bed": "D",
            "address": "730 College Place, Kingstowne, Marshall Islands, 3859",
            "weight": 68,
            "admitDate": "Sunday, July 9, 2017 10:04 PM",
            "workingDiagnose": "Ventilator-asociated pneumonia",
            "abxScore": 45,
            "daysOnAntibiotics": 14,
            "aspNotifications": "De-escalation",
            "nextReview": "Tuesday, April 20, 2021 9:41 PM",
            "currentAntibiotics": "Omadacycline",
            "userIds": ['10101010']
          },
          {
            "uid": "5ff2e5bad44ee9622d986331",
            "index": 12,
            "guid": "109962b6-bb6d-4ae6-8ade-dfbb7c5f562d",
            "age": 35,
            "name": {
              "first": "Cameron",
              "last": "Hale"
            },
            "email": "cameron.hale@undefined.tv",
            "phone": "+1 (823) 525-2511",
            "unit": "5 Surgical",
            "room": 1158,
            "bed": "H",
            "address": "938 Whitney Avenue, Hayden, Alaska, 7464",
            "weight": 79,
            "admitDate": "Friday, September 28, 2018 9:31 AM",
            "workingDiagnose": "COVID-19",
            "abxScore": 51,
            "daysOnAntibiotics": 18,
            "aspNotifications": "Positive culture",
            "nextReview": "Saturday, May 29, 2021 5:28 PM",
            "currentAntibiotics": "Doxycycline",
            "userIds": ['10101010']
          },
          {
            "uid": "5ff2e5ba50ae7421d85d17b5",
            "index": 13,
            "guid": "d111bd22-3f2e-4c68-9904-1609638e988c",
            "age": 38,
            "name": {
              "first": "Valdez",
              "last": "Villarreal"
            },
            "email": "valdez.villarreal@undefined.org",
            "phone": "+1 (988) 549-2499",
            "unit": "LTAC",
            "room": 2907,
            "bed": "E",
            "address": "909 Plaza Street, Manchester, Massachusetts, 853",
            "weight": 106,
            "admitDate": "Thursday, May 19, 2016 11:42 PM",
            "workingDiagnose": "COVID-19",
            "abxScore": 44,
            "daysOnAntibiotics": 9,
            "aspNotifications": "Drug != Lab: vancoycin",
            "nextReview": "Thursday, January 21, 2021 12:19 AM",
            "currentAntibiotics": "Doxycycline",
            "userIds": ['10101010']
          }
        ]
    }
}
