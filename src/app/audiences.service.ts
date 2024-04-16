import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudiencesService {

  audiences: any[] = [
    {
      title: "Auditorium 102",
      capacity: 40,
      facultyId: 2
    },
    {
      title: "Auditorium 103",
      capacity: 35,
      facultyId: 3
    },
    {
      title: "Auditorium 106",
      capacity: 30,
      facultyId: 1
    },
    {
      title: "Auditorium 105",
      capacity: 25,
      facultyId: 5
    },
    {
      title: "Auditorium 107",
      capacity: 40,
      facultyId: 2
    },
    {
      title: "Auditorium 108",
      capacity: 45,
      facultyId: 4
    },
    {
      title: "Auditorium 101",
      capacity: 50,
      facultyId: 1
    },
    {
      title: "Auditorium 104",
      capacity: 30,
      facultyId: 4
    }
  ];

  groups: any[] = [
    {
      title: "Group 4",
      amountStud: 14,
      facultyId: 2
    },
    {
      title: "Group 2",
      amountStud: 15,
      facultyId: 1
    },
    {
      title: "Group 1",
      amountStud: 12,
      facultyId: 3
    },
    {
      title: "Group 3",
      amountStud: 10,
      facultyId: 1
    },
    {
      title: "Group 5",
      amountStud: 20,
      facultyId: 2
    }
  ];

  faculties: any[] = [
    {
      id: 3,
      title: "Physics Faculty"
    },
    {
      id: 2,
      title: "Computer Science Faculty"
    },
    {
      id: 5,
      title: "Biology Faculty"
    },
    {
      id: 1,
      title: "Engineering Faculty"
    },
    {
      id: 4,
      title: "Mathematics Faculty"
    }
  ];

  getFacultyById(id: number): string {
    return this.faculties[id - 1].title;
  }
}
