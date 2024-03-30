import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  data=[
    {
      date:'August 27, 2022',
      title:'Data-driven signal separation helps in identifying GIA signal in Alaska',
      imgSrc:'https://ultra-pluto-7f6d1.stackbit.app/images/Illustration_GIA_method.png',
      description:''
    },
    {
      date:'January 30, 2022',
      title:'Interpreting water storage trends from GRACE',
      imgSrc:'https://ultra-pluto-7f6d1.stackbit.app/images/Fig3_blogTVR-page-001.jpg',
      description:''
    },
    {
      date:'November 23, 2021',
      title:'Sea level rise is changing the sea floor',
      imgSrc:'https://ultra-pluto-7f6d1.stackbit.app/images/Illust_Ocean_mass_OBD.png',
      description:''
    },
    {
      date:'October 17, 2021',
      title:'The spatial resolution of GRACE products',
      imgSrc:'https://ultra-pluto-7f6d1.stackbit.app/images/GRACE_fil_fld.png',
      description:''
    },
    {
      date:'September 14, 2021',
      title:'Filtering damages signal quality of GRACE products and we can counter it.',
      imgSrc:'https://ultra-pluto-7f6d1.stackbit.app/images/DDC.jpeg',
      description:''
    },
    {
      date:'August 15, 2021',
      title:'GRACE satellite mission',
      imgSrc:'https://ultra-pluto-7f6d1.stackbit.app/images/GRACE-920x450.jpg',
      description:''
    }
  ]
}
