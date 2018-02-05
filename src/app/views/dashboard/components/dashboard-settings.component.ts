import { Component } from '@angular/core';

import { select } from '@angular-redux/store';
import { DashboardActions } from '../api/actions';
import { id } from '../dashboard.module';

@Component({
  selector: 'app-dashboard-settings',
  templateUrl: './dashboard-settings.component.html',
  styleUrls: ['./dashboard-settings.component.scss']
})
export class DashboardSettingsComponent {

  @select([id]) public data; // select data from store

  constructor(private dispatcher: DashboardActions) {}

  settingsModified(settings) {
    this.dispatcher.settingsModified();
  }

}
