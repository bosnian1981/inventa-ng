import { Injectable } from '@angular/core';

@Injectable()
export class AuditLogsService {
  private auditList = [
    { time: '1 hrs', title: 'Users', info: '8 new users' },
    { time: '3 hrs', title: 'Error', info: 'System error' },
    { time: '4 hrs', title: 'Users', info: '12 new users' },
    { time: '8 hrs', title: 'Order', info: 'New order received' },
  ];

  getAuditList() {
    return this.auditList;
  }
}
