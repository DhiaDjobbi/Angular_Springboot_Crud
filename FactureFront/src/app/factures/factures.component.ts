import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facture } from '../model/Facture';
import { FactureService } from '../services/facture.service';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit {

  factures: Facture[];
  constructor(private factureService: FactureService, private router: Router) {
    this.factureService.getFactures().subscribe(facts => {
      this.factures = facts;
    });
  }

  ngOnInit(): void {

  }

  deleteFactureFromTable(fact: Facture) {
    this.factures.forEach((cur, index) => {
      if (fact.idFacture === cur.idFacture) {
        this.factures.splice(index, 1);
      }
    });
  }



  supprimerFacture(f: Facture) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.factureService.deleteFacture(f.idFacture).subscribe(() => {
        this.deleteFactureFromTable(f);
      });
}
}
