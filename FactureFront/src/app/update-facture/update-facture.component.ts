import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from '../model/Facture';
import { FactureService } from '../services/facture.service';
@Component({
  selector: 'app-update-facture',
  templateUrl: './update-facture.component.html'
})
export class UpdateFactureComponent implements OnInit {
  currentFacture = new Facture();
  constructor(private activatedRoute: ActivatedRoute
    , private factureService: FactureService, private router: Router) { }

  ngOnInit(): void {
    this.factureService.findFacture(this.activatedRoute.snapshot.params.id).
      subscribe(fact => { this.currentFacture = fact; });
  }
  updateFacture() {
    this.factureService.updateFacture(this.currentFacture).subscribe(fact => {
      this.router.navigate(['factures']);
    }, (error) => { alert("Problème lors de la modification !"); }
    );
  }

}
