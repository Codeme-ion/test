import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from '../component/tags/header/header.component';
import { IonicModule } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { ListPage } from '../list/list.page';
import { AboutPage } from '../about/about/about.page';
import { PolicyPage } from '../policy/policy.page';
import { QuestionPage } from '../question/question.page';
import { IonicPage } from '../category/ionic/ionic.page';
import { PcPage } from '../category/pc/pc.page';
import { SitePage } from '../category/site/site.page';
import { No1Page } from '../article/no1/no1.page';
import { No2Page } from '../article/no2/no2.page';
import { MontspComponent } from '../component/tags/writer/montsp/montsp.component';
import { MontspPage } from '../about/writer/montsp/montsp.page';
import { IonicComponent } from '../component/tags/category/ionic/ionic.component';
import { ArticlesComponent } from '../component/tags/articles/articles/articles.component';
import { IonicarticleComponent } from '../component/tags/articles/category/ionic/ionic.component';

  const routes: Routes = [
    //system
    {
      path: '',
      component: HomePage
    },
    {
      path: 'list',
      component: ListPage
    },
    {
      path: 'about/about',
      component: AboutPage
    },
    {
      path: 'policy',
      component: PolicyPage
    },
    {
      path: 'question',
      component: QuestionPage
    },
    //category
    {
      path: 'category/ionic',
      component: IonicPage
    },
    {
      path: 'category/pc',
      component: PcPage
    },
    {
      path: 'category/site',
      component: SitePage
    },
    //writer
    {
      path: 'about/writer/montsp',
      component: MontspPage
    },
    //article
    {
      path: 'article/no1',
      component: No1Page
    },
    {
      path: 'article/no2',
      component: No2Page
    },
  ];

@NgModule({
  declarations: [ 
    //↓ページ系
    HomePage,
    ListPage,
    AboutPage,
    PolicyPage,
    QuestionPage,
    IonicPage,
    PcPage,
    SitePage,
    No1Page,
    No2Page,
    MontspPage,
    //↓タグ系
    HeaderComponent,
    //↓ライターWriter
    MontspComponent,
    //↓カテゴリー
    IonicComponent,
    //↓記事系
    ArticlesComponent,
    IonicarticleComponent,
   ],
  exports: [ 
    HeaderComponent,
    MontspComponent,
    IonicComponent,
    ArticlesComponent,
    IonicarticleComponent,
   ],
  
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
  ]
})
export class SharedModule { }
