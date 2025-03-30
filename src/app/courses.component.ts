import { Component } from "@angular/core";
import { NgForOf } from "@angular/common";
@Component({
    selector:"courses",
    template: `
    <h2>{{'Title: '+ getTitle()}}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>

    </ul>
    `,
    imports: [NgForOf],
    //standalone: true,
})

export class CoursesComponent{
    title = "List of Courses"
    courses = ["Angular", "Flutter", "Java", "Spring boot 6"];

    getTitle(){
        return this.title;
    }
}