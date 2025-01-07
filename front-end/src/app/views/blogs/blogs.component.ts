import { Component, TemplateRef, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as $ from 'jquery'
import {data} from '../../../assets/data/blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  @ViewChild('#selectedBlogDisplay')
  editModal!: TemplateRef<any>;
  showModalmodalRef!: BsModalRef;
  modalRef: any;
  selectedBlogId:number = 0;
  data= data;


  constructor(private modalService: BsModalService,private route:ActivatedRoute) {}

  ngAfterViewInit(): void {
    if(this.route.snapshot.queryParamMap.keys.includes('viewBlogId')){
      let blogId = this.route.snapshot.queryParamMap.get('viewBlogId');
      $('#blog-'+blogId).trigger('click');
    }
  }

  openModal(template: TemplateRef<any>, blogId:number) {
    this.modalRef = this.modalService.show(template, { class: 'modal-xl' });
    this.selectedBlogId = blogId;
  }
}
