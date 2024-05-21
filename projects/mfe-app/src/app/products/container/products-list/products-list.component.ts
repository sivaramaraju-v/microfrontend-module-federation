import { Component } from '@angular/core';
interface Product {
  productId: string;
  contractId: string;
  entityName: string;
  price: string;
  startDate: string;
  endDate: string;
  term: string;
  dateMatch: boolean;
}
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  productList: Product[] = [
    {
      productId: '01XXXXXXXXXX',
      contractId: '0-XXXXXXX',
      entityName: 'Arlington Heights Animal Hospital',
      price: '53.27 $/Mwh',
      startDate: '05/09/2023',
      endDate: '05/09/2024',
      term: '12 Months',
      dateMatch: true,
    },
    {
      productId: '02XXXXXXXXXX',
      contractId: '0-XXXXXXX',
      entityName: 'Arlington Heights Pet Boarding',
      price: '53.27 $/Mwh',
      startDate: '05/09/2023',
      endDate: '05/12/2024',
      term: '3 Months',
      dateMatch: true,
    },
    {
      productId: '03XXXXXXXXXX',
      contractId: '0-XXXXXXX',
      entityName: 'Arlington Heights Animal Food Store',
      price: '53.27 $/Mwh',
      startDate: '05/09/2023',
      endDate: '05/10/2023',
      term: '1Months',
      dateMatch: true,
    },
    {
      productId: '04XXXXXXXXXX',
      contractId: '0-XXXXXXX',
      entityName: 'Arlington Heights Pet Spa',
      price: '53.27 $/Mwh',
      startDate: '05/09/2023',
      endDate: '05/09/2024',
      term: '12 Months',
      dateMatch: true,
    },
    {
      productId: '05sXXXXXXXXXX',
      contractId: '0-XXXXXXX',
      entityName: 'Arlington Heights Animal Hospital',
      price: '40.27 $/Mwh',
      startDate: '05/09/2024',
      endDate: '05/10/2024',
      term: '12 Months',
      dateMatch: true,
    },
  ];
}
