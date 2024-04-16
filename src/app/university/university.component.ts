import { Component, OnInit } from '@angular/core';
import { AudiencesService } from '../audiences.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrl: './university.component.css'
})
export class UniversityComponent implements OnInit {
  audiences: any[] = [];
  faculties: any[] = [];
  groups: any[] = [];
  sortFunc: (a: any, b: any) => any = (a, b) => 0;
  selectedFacultyIndex: number = -1;

  constructor(private audiencesService: AudiencesService) {
    this.faculties = audiencesService.faculties;
    this.groups = audiencesService.groups;
  }

  ngOnInit(): void {
    this.audiences = this.audiencesService.audiences;
  }

  sortByCapacity() {
    this.audiences.sort((a, b) => a.capacity - b.capacity);
  }

  sortByName() {
    this.audiences.sort((a, b) => a.title.localeCompare(b.title));
  }

  filterByGroup(event: any) {
    const index = Number(event.target.value);
    this.selectedFacultyIndex = index !== -1 ? this.groups[index].facultyId : -1;
  }

  filterByFaculty(event: any) {
    const index = Number(event.target.value);
    this.selectedFacultyIndex = index !== -1 ? index + 1 : -1;
  }

  getFacultyById(id: number): string {
    return this.audiencesService.getFacultyById(id);
  }
}
