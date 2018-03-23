import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-email',
  templateUrl: './new-email.component.html',
  styleUrls: ['./new-email.component.css']
})
export class NewEmailComponent implements OnInit {
  selectFolder = [];
  attachments = [];

  popupShow = false;
  folderType = 'my';

  folders = [
    {
      name: 'General Folder',
      templates: [
        { name: '王诩', description: '鬼谷子，姓王名诩，又名王禅，号玄微子。' },
        { name: '纵横家创始人', description: '战国显赫人物，华夏族，额前四颗肉痣，成鬼宿之象。一说春秋战国卫国朝歌（河南淇县）人；一说是战国魏国邺地（河北临漳）人；一说陈国郸城（河南郸城县）人。' },
        { name: '王禅老祖', description: '他通天彻地，智慧卓绝，人不能及。一曰数学，日星象纬，在其掌中，占往察来，言无不验；二曰兵学，六韬三略，变化无穷，布阵行兵，鬼神不测；三曰言学，广记多闻，明理审势，出词吐辩，万口莫当；四曰出世，修真养性，祛病延年，服食导引，平地飞升。' },
      ]
    },
    {
      name: 'General Folder',
      templates: [
        { name: 'ACY FX - 感谢注册交易宝典', description: '澳洲电子图书' },
        { name: 'ACY FX - 感谢注册网络讲座', description: '澳洲模拟帐户' }
      ]
    },
  ];
  sharedFolders = [
    {
      name: 'Shared Folder',
      by: 'Li Li',
      templates: [
        { name: '王诩', description: '鬼谷子，姓王名诩，又名王禅，号玄微子。' },
        { name: '纵横家创始人', description: '战国显赫人物，华夏族，额前四颗肉痣，成鬼宿之象。一说春秋战国卫国朝歌（河南淇县）人；一说是战国魏国邺地（河北临漳）人；一说陈国郸城（河南郸城县）人。' },
        { name: '王禅老祖', description: '他通天彻地，智慧卓绝，人不能及。一曰数学，二曰兵学，三曰言学，四曰出世。' },
      ]
    },
    {
      name: 'Shared Folder',
      by: 'Will',
      templates: [
        { name: 'ACY FX - 感谢注册交易宝典', description: '澳洲电子图书' },
        { name: 'ACY FX - 感谢注册网络讲座', description: '澳洲模拟帐户' }
      ]
    },
  ];

  attach(e) {
    const files = [].slice.call(e.target.files);
    this.attachments = files.map(f => f.name);
    console.log(files);
  }

  deleteAttachment(i) {
    this.attachments.splice(i, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
