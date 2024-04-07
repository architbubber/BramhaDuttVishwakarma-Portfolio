import { Component, TemplateRef} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  showModalmodalRef!: BsModalRef;
  modalRef: any;
  selectedBlogId:number = 0;


  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>, blogId:number) {
     this.modalRef = this.modalService.show(template, { class: 'modal-xl' });
    this.selectedBlogId = blogId;
  }

  data=[
    {
      id:1,
      date:'August 27, 2022',
      title:'Data-driven signal separation helps in identifying GIA signal in Alaska',
      imgSrc:'./assets/images/blogs/Illustration_GIA_method.png',
      description:"Our Earth is not rigid. In other words, it responds to surface mass load changes by deforming. During the last ice-age nearly 18000 yrs ago, most of the North America and Europe were under kilometers thick ice and this immense amount of load deformed the Earth. After the ice-age ended, these large ice-sheets melted and the load was lifted. The solid Earth surface is still responding to the change in load and this process is reffered to as the GIA or Glacial Isostatic Adjustment. Many regions in Canada and Europe are experiencing rapid uplift with respect to the Geocentre. This signal has a strong gravitational  component and is observed by GRACE. Hence to study hydrology this signal must be removed. The most common method to do that is to use GIA models that have huge uncertainties. Several researchers have thus tried to obtain data-driven estimates of GIA. Ina  recent work from th egroup, Bramha developed a data-driven method that uses data from GPS stations and GRACE in a novel mathematical framework that uses the geophysical relations to disentangle GIA and Surface mass change signal. The estimates from this work were significantly different from models over Alaska and Greenland. Many reesearchers have claimed that Alaska has a strong Visco-elastic signal that was missing from global GIA models. The results from this study have significant implications for studies focusing on sea level budget and Greenland ice-mass balance. You may read more about the work at: <https://academic.oup.com/gji/article/232/1/537/6674208>\n\n \n"
    },
    {
      id:2,
      date:'January 30, 2022',
      title:'Interpreting water storage trends from GRACE',
      imgSrc:'./assets/images/blogs/Fig3_blogTVR-page-001.jpg',
      description:'GRACE data has been abundantly used in research studies that want to capture a long-term water mass change, such as diminishing water bodies, droughts, and so on. The popular approach has been to first decompose the GRACE time series into seasonal signals and a linear trend, then by assuming that the magnitude of trend is directly proportional to the severity of water mass change, where regions with strong trends are investigated for the driving process (human-driven or climate change driven or extreme events). Since GRACE data covers less than two decades, any long term (multidecadal) natural hydrological variability would appear in the linear trend estimates. Furthermore, different regions have different natural variability cycles, for example, the ups and downs in water availability over a year in part of the Middle East (that is usually very arid) can be much smaller than in the Europe. This makes a comparison of trends between two regions very difficult. Hence, understanding the severity of linear trend obtained from a short time series, when the driving processes has a cyclic behaviour that lasts more than a decade can be challenging. This problem has been addressed in a recently published article ([https://doi.org/10.1088/1748-9326/abd4a9](https://iopscience.iop.org/article/10.1088/1748-9326/abd4a9)), where the authors propose a new metric to interpret the strength of trends with respect to long term natural spatiotemporal variability: Trend to variability ratio (TVR). It normalizes the total change in water mass in a region with the standard deviation of multidecadal natural hydrological variability obtained from simulations. TVR is an excellent tool for analysing the severity of short time series from other observational datasets.\n'

    },
    {
      id:3,
      date:'November 23, 2021',
      title:'Sea level rise is changing the sea floor',
      imgSrc:'./assets/images/blogs/Illust_Ocean_mass_OBD.png',
      description:'Sea level rise is one of most dreadful consequences of the anthropogenic (caused by humans) global warming. It is estimated that the loss of coastal infrastructure alone would cost the world economy more than 1 trillion dollars per year by 2100. Researchers are closely monitoring changes in the sea level and trying to understand the physical processes driving these changes. Many studies have been able to explain the physical processes hat drive the global mean sea level change over the last few decades. The major takeaway from these studies was that in the second half of the 20th Century, steric sea level change (thermal expansion of oceans and salinity changes) was the dominant driver but in the last two decades mass change (due to addition of water from melting glaciers and ice-sheets on land) has significantly increased and is now the dominant component .\n\nBut additionally our solid Earth is not as rigid as it may seem. It is visco-elastic, which means when subjected to external force, it deforms, and when this external force is removed it resumes its shape, like a tennis ball. Since ice sheets (Greenland and Antarctica) are losing mass and oceans are gaining mass, Earth surface beneath the ice-sheets are slowly moving upward and the ocean bottom is going down due to changes in the surface mass (load). This change in the shape of the ocean floor is usually an order of magnitude smaller than the rate of change in ocean mass. Since the mass component of sea level rise was relatively small in the last half of the 20th century, OBD was negligible, but not anymore. The rate of sea level rise in the last two decades in approximately 3 mm/yr, out of which mass change constitutes 1.8 mm/yr, steric is 1.1 mm/yr and OBD is 0.1 mm/yr (see <https://doi.org/10.1029/2019GL086492> for more details).\n'

    },
    {
      id:4,
      date:'October 17, 2021',
      title:'The spatial resolution of GRACE products',
      imgSrc:'./assets/images/blogs/GRACE_fil_fld.png',
      description:'GRACE is a unique mission with unique design. It is not similar to optical remote sensing mission where we know the resolution of onboard sensor (or camera), rather it relies on geophysical inversion of the geopotential from the satellite range rate data (rate of change in the along-track distance between the two satellites in the same orbit).  Its spatial resolution cannot be expressed in terms of pixel size, or bands. In an article, the concept of the spatial resolution for a GRACE like mission was explained in detail (follow <https://www.mdpi.com/2072-4292/10/6/852>). In short, GRACE resolution and accuracy have a tradeoff and we can  expect GRACE to capture mass changes in catchments larger than 63000 sq. km with an RMSE (Root mean square error) of 2 cm EWH (equivalent water height).\n'


    },
    {
      id:5,
      date:'September 14, 2021',
      title:'Filtering damages signal quality of GRACE products and we can counter it.',
      imgSrc:'./assets/images/blogs/DDC.jpeg',
      description:'GRACE data is noisy, which means filtering is essential to suppress noise. However, filtering also affects signal quality. In [https://doi.org/10.1002/2017WR021150,](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017WR021150,) authors describe a method that uses GRACE data only to estimate the signal loss due to filtering. They first describe the mathematical equations that define the signal loss due to filtering and then provide a neat data-driven method. This method is also compared with other signal restoration methods and was found to outperform them significantly.\n'




    },
    {
      id:6,
      date:'August 15, 2021',
      title:'GRACE satellite mission',
      imgSrc:'./assets/images/blogs/GRACE-920x450.jpg',
      description:'Availability of good quality data is essential to deduce meaningful information in all disciplines of science and technology. This statement is especially relevant in climate research, which is under constant scrutiny from sceptics. In order to better understand the Earth system response to the ongoing anthropogenic global warming, we require global observations of climate indicators at very high spatiotemporal resolutions. In a perfect world, every country provides a dense observation network and shares its data openly for research. Yet political and financial constraints prohibit this reality.\n\nHence, the era of satellite-based Earth observation has been a revolution for geosciences. The launch of satellites that observe our planet since the 1970s, such as optical remote sensing satellites, satellite altimetry launched in the early 1990s followed by the gravity recovery and climate research (GRACE) missions in 2002, provided a much needed momentum to climate change research. Most importantly, GRACE has been a game changer. It consists of two satellites, separated by 220 km with one behind the other in the same near-polar orbit, and by measuring changes in the distance between the two satellite with micro-meter precision, we are able to map the changes in the gravity field of the Earth from one month to the other. These very small changes in local gravity field are driven by mass redistribution in the Earth system. For example, if it rains heavily and the water is collected in an adjacent (sub-surface or on surface) water body, an increase in mass is recorded in the gravity data from the satellite.\xa0 Similarly, for droughts or ice-sheet melting, a mass loss perturbs the gravity field and will be recorded by the satellite mission. As a result, GRACE data has been used in nearly all the disciplines of Earth sciences where we are concerned with mass redistribution. However, the impact of GRACE on hydrology is unmatched.\n'

    }
  ];

}
