import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {
  //copiados de por regionalbloc
  regiones:string[] =["EU","EFTA","CARICOM","PA","AU","USAN","EEU","AL","ASEAN","CAIS","CEFTA","NAFTA","SAARC"]
  regionActiva:string=''
  paises:Country[] = []


  constructor(private paisService:PaisService) { }


  getClaseCSS(region:string):string{
    return(this.regionActiva===region) 
      ? 'btn btn-success' 
      : 'btn btn-outline-success'
  }

  activarRegion(region:string){
    if(region ===this.regionActiva) return;
    this.regionActiva=region
    this.paises = [];
    //TODO: hacer el llamado al servicio
    this.paisService.buscarRegion(this.regionActiva)
      .subscribe((paises)=>{this.paises = paises}
      //,
      // (err)=>{
      //   this.paises = []
      // }
      )
    
  }


}
