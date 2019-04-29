import { Component, OnInit  } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})




export class HomeComponent implements OnInit  {

 

quantidade:number;
valor:number;
public row: any = [{}];


public ngOnInit() {

}

addRow() {
  this.row.push({});
}


getRowValue() {
  console.log(this.row);
}


  teste(){
   
    if(this.quantidade >= 1 && this.quantidade < 10 )
    {
      this.valor = this.quantidade * 1.50;
      this.row.push({});
    }
    else if (this.quantidade >= 10 && this.quantidade < 50 )
    {
      this.valor = this.quantidade * 1.30;
      this.row.push({});
    }
    else if (this.quantidade >= 50 && this.quantidade < 100)
    {
      this.valor = this.quantidade * 1.10;
      this.row.push({});
    }
    else if (this.quantidade >= 100 && this.quantidade < 200)
    {
      this.valor = this.quantidade * 0.90;
      this.row.push({});
    }
    else if (this.quantidade >= 200 && this.quantidade < 500)
    {
      this.valor = this.quantidade * 0.75;
      this.row.push({});
    }
    else if (this.quantidade >= 500)
    {
      this.valor = this.quantidade * 0.50;
      this.row.push({});
    }
    else
    {
      alert("Por favor insira um valor maior que 1")



}




  }
}
