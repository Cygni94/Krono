import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-checklist",
  templateUrl: "./checklist.component.html",
  styleUrls: ["./checklist.component.scss"]
})
export class ChecklistComponent implements OnInit {
  label: "Tarefa 1";

  constructor() {}

  ngOnInit() {}
}