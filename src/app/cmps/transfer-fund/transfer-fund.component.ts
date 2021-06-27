
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactService } from 'src/app/services/contactService';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  constructor(private userService: UserService, private contactService: ContactService) { }
  @Input() contact
  @Output() onTransferCoins = new EventEmitter()
  @Input() amount
  
  // amount: number
  ngOnInit(): void {
  }

  onSetTransferCoins() {
    this.onTransferCoins.emit(this.amount)
    
    // this.userService.transferCoins(this.contact, this.amount)
    // this.amount = 0
  }
}
