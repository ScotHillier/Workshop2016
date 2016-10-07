import { Component, AfterViewChecked } from '@angular/core'
import { ProductService } from './product.service';

@Component({
    selector: 'word-app',
    templateUrl: "/app/taskpane.html",
    providers: [ProductService]
})

export class WordComponent implements AfterViewChecked {

    products: Array<any>;
    message: string;
    productService: ProductService;

    constructor(ps: ProductService) {
        this.productService = ps;
    }

    ngAfterViewChecked() {
        this.products = this.productService.getProducts();
    }

    insertHTML() {

        let that = this;

        Word.run(function (context) {

            var html: string = `

                <style>
                #productsTable
                {
	                font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
	                font-size: 12px;
	                background: #fff;
	                width: 480px;
	                border-collapse: collapse;
	                text-align: left;
                }
                #productsTable th
                {
	                font-size: 18pt;
	                font-weight: normal;
	                color: #039;
	                border-bottom: 2px solid #6678b1;
                }
                #productsTable td
                {
	                color: #669;
                }
                #productsTable tbody tr:hover td
                {
	                color: #009;
                }
                </style>

                <table id='productsTable'>
                <thead><tr><th>Product Name</td><th>Unit Cost</td></tr></thead>
                <tbody>`;


            for (let x: number = 0; x < that.products.length - 1; x++) {
                html += `<tr><td>${that.products[x].ProductName}</td><td>${that.products[x].UnitPrice}</td></tr>`;
            }
            html += '</tbody></table>';

            var range = context.document.getSelection();
            range.insertHtml(html, Word.InsertLocation.end);

            return context.sync().then(function () {
                that.message = 'Inserted the HTML!';
            });
        })
        .catch(function (error) {
            that.message = 'Error: ' + JSON.stringify(error);
        });
    }
}