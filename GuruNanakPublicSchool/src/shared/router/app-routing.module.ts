import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../app/header/header.component';
import { HomeComponent } from '../../app/home/home.component';
import { FooterComponent } from '../../app/footer/footer.component';
import { PageNotFoundComponent } from '../../app/page-not-found/page-not-found.component';
import { NewsComponent } from '../../app/news/news.component';
import { LinksComponent } from '../../app/links/links.component';
import { AboutComponent } from '../../app/about/about.component';
import { TourComponent } from '../../app/tour/tour.component';
import { EventsComponent } from '../../app/events/events.component';
import { GalleryComponent } from '../../app/gallery/gallery.component';
import { FacilitiesComponent } from '../../app/facilities/facilities.component';
import { DownloadsComponent } from '../../app/downloads/downloads.component';
import { BlogComponent } from '../../app/blog/blog.component';
import { AlbumImagesComponent } from '../../app/album-images/album-images.component';
import { ContactUsComponent } from '../../app/contact-us/contact-us.component';
import { ReachUsComponent } from '../../app/reach-us/reach-us.component';
import { AchievementsComponent } from '../../app/achievements/achievements.component';
import { BirthdayComponent } from '../../app/birthday/birthday.component';
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'header', component: HeaderComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: 'newsnotice', component: NewsComponent },
    { path: 'achievements', component: AchievementsComponent },
    { path: 'birthday', component: BirthdayComponent },
    { path: 'reachtus', component: ReachUsComponent },
    { path: 'albumimages/:id', component: AlbumImagesComponent },
    { path: 'footer', component: FooterComponent },
    { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [
      CommonModule,      
      RouterModule.forRoot(routes)
    ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const AppRoutingComponent = [
    HeaderComponent,HomeComponent,FooterComponent,PageNotFoundComponent,NewsComponent,LinksComponent,AboutComponent,
    TourComponent, EventsComponent, GalleryComponent, FacilitiesComponent, DownloadsComponent, BlogComponent,
    AlbumImagesComponent, ContactUsComponent, ReachUsComponent, AchievementsComponent, BirthdayComponent
]