import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facture } from '../model/Facture';
import { FactureService } from '../services/facture.service';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent implements OnInit {

  newFacture = new Facture();

  constructor(private factureService: FactureService, private router: Router) {

  }

  ngOnInit(): void {
  }

  addFacture() {
    this.factureService.createFacture(this.newFacture)
      .subscribe(fact => {
        console.log(fact);
      });
    this.router.navigate(['factures']).then(() => {
      window.location.reload();
    });
  }
}
