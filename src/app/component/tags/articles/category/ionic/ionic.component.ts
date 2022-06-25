import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'articles-ionic',
  templateUrl: './ionic.component.html',
  styleUrls: ['./ionic.component.scss'],
})
export class IonicarticleComponent implements OnInit {
  public ionArticle = [
    {
      path: '4',
      title: 'ionicでwebアプリを作る',
      content: 'webアプリを作る'
    },
    {
      path: '3',
      title: 'ionicをスタート',
      content: 'ionicのプロジェクトを作成'
    },
    {
      path: '2',
      title: 'ionicの準備',
      content: 'ionicを始めるには、'
    },
    {
      path: '1',
      title: 'ionicとはなんだー',
      content: 'ionicとは、webサイトを作れる人はアプリも作れてしまうとい...'
    },
    ]
  constructor() { }

  ngOnInit() {}

}
