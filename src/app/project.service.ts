import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  loadProjects(): Project[] {
    return [
      {
        name: "DMS Einführung",
        startDate: "01.10.2022",
        endDate: "03.10.2022",
        owner: "Christian",
        details: {
          employees: {
            name: "John Herter"
          }
        },
      },
      {
        name: "DMS Durchführung",
        startDate: "01.10.2022",
        endDate: "03.10.2022",
        owner: "Christian",
        details: {
          employees: {
            name: "Markus Menrath"
          }
        },
      },
      {
        name: "DMS Abschluss",
        startDate: "01.10.2022",
        endDate: "03.10.2022",
        owner: "Christian",
        details: {
          employees: {
            name: "Emanuel Puscas"
          }
        },
      }
    ]
  }
}

export interface Project {
  name: string;
  startDate: string;
  endDate: string;
  owner: string;
  details: {
    employees: {
      name: string;
    }
  }
}
