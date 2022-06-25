import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  public articlePage = [
    {
      title: '静的サイトホスティングサービスを羅列。',
      path: '5',
      content: '今回は、主にionicを使っている人のために、ionicのコードをホスティングして、デプロイまでやってくれる',
    },
    {
      title: 'ionicでwebアプリを作る',
      path: '4',
      content: 'webアプリを作成...',
    },
    {
      title: 'ionicをスタート',
      path: '3',
      content: 'ionicのプロジェクトを作成...'
    },
    {
      title: 'ionicの準備',
      path: '2',
      content: 'ionicを始めるには...',
    },
    {
      title: 'ionicとはなんだー',
      path: '1',
      content: 'ionicとは、webサイトを作れる人はアプリも作れてしまうといった、HTMLやJavascript(正確にはJavascriptの拡張言語)が基本となっているアプリ開………',
    },
  ]
  constructor() { }

  ngOnInit() {}

}
