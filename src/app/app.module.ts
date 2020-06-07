/* Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

/* Local Components */
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';
import { StatsComponent } from './components/stats/stats.component';
import { DonationComponent } from './components/donation/donation.component';

/* Material Modules */
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBarModule } from '@angular/material/snack-bar';

/*HighCharts Modules */
import { HighchartsChartModule } from 'highcharts-angular';
import { PiechartComponent } from './widgets/piechart/piechart.component';
import { DonationcardsComponent } from './components/donationcards/donationcards.component';
import { VideoComponent } from './components/video/video.component';




@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderComponent,
    StatsComponent,
    DonationComponent,
    PiechartComponent,
    DonationcardsComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTabsModule,
    NgbModule,
    MatSnackBarModule,
    HighchartsChartModule

  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTabsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
