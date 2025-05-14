import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../model/job.model';
@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html'
})
export class ApplyFormComponent implements OnInit {
  companyId: string | null = '';

  // ✅ Properly inject ActivatedRoute
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.companyId = this.route.snapshot.paramMap.get('id');
  }
}
