import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { SimpleComponent } from './simple.component'
import { TimeComponent } from './time.component'
import { ProductComponent } from './product.component'

const routes: Routes = [
    { path: 'time', component: TimeComponent },
    { path: 'product', component: ProductComponent },
    { path: '**', component: SimpleComponent }

]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);