import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule, MatChipsModule, MatGridListModule, MatListModule} from "@angular/material";
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {RouterModule} from "@angular/router";
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatChipsModule,
    InfiniteScrollModule
  ]
})
export class PokemonsModule { }
