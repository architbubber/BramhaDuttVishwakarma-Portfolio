import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  data =[
    {
      title:'TERRESTRIAL WATER CYCLE',
      heading:'Accounting and auditing every drop',
      imgSrc:'https://ultra-pluto-7f6d1.stackbit.app/images/MScR_illust_fig.png',
      text:'It is accepted that the water cycle will intensify as the globe warms, however how this will change locally is still under debate. One of the major drawbacks in all the traditional approaches/methods that model the water cycle or study water-energy partioning, is that they assume water storage changes to be zero. It was an assumption to counter the fact that no data was available on water storage prior to 2002. However, since the launch of GRACE satellite mission in 2002, we can now measure the terrestrial water storage changes and it can help us better understand the changes in water cycle. We are using GRACE data for: estimating one of the water budget component when all others are known, validating model simulations of a budget component, estimating groundwater changes, and for understanding the impact of climate and human intervention. Vivek, Balaram, Pushkar and Abhishek are working on various topics related to this theme.'
    },
    {
      title:'SATELLITE DATA PROCESSING & DATA ASSIMILATION',
      heading:'Improving Earth observation data',
      imgSrc:'https://ultra-pluto-7f6d1.stackbit.app/images/AMZ_fig.png',
      text:'Different datasets have different strengths. For example, in-situ point data have excellent resolution but are sparse and costly to maintain, thus cannot provide a consistent large scale overview. On the other hand, satellite remote sensing are excellent in terms of their spatial coverage but have poor spatiotemporal resolution. In addition, they require explicit postprocessing and calibration. Geo-physical or Hydrological models on the other hand can have high resolution but with large uncertainties. Therefore, merging them can help us obtain optimal products that may benefit policy and research. With this motivation, we also employ satistical downscaling techniques, Kalman filtering, and machine learning to solve problems of scale in Earth observation. Amin, Vasaw (an exchange student from IIT B) and Vivek are working in this domain.\
      We also have expertise in processing Geodetic observations to derive meaningful Earth observation variables and are interested in developing algorithms for satellite data processing.'
    },
    {
      title:'SEA LEVEL RISE',
      heading:'Coastal sea level changes',
      imgSrc:'https://ultra-pluto-7f6d1.stackbit.app/images/sea_level_review_fig.png',
      text:'Our knowledge and understanding of global mean sea level rise is excellent. However the sea level rise in not uniform and can vary from place to place. This spatial variability makes a few costal regions more vulnerable to climate-driven sea level rise than others. The coastal sea level rise is traditionally monitored with tide-gauges that are sparse and not of consistent quality. Therefore, relying on remote sensing is the only viable option but their performance over coastal oceans is also not great. Recent developments have helped scientists to produce satellite-altimetery based coatsl sea level products. However, their validation is still an ongoing task and we are trying to contribute in that direction. Vandana is working on this project.      Additionally, we also study the sea level budget componenets and we are currently investigating the drivers of sea level in various ocean basins.'
    },
    {
      title:'THE CRYOSPHERE',
      heading:'Shrinking glaciers and ice-sheet',
      imgSrc:'https://ultra-pluto-7f6d1.stackbit.app/images/Fig1.jpg',
      text:'Changes in frozen water is an excellent indicator of global warming. We are currently focusing on understanding the spatiotemporal behaviour of glaciers in the LAdhak region in the Indian Himalayas. We collect data in-situ as well as we employ remote sensing. In the past, we have used GRACE data to obtain mass change time-series for Greenland and Antractica. The glaciological part is led by Arindan.'
    }
  ]
}
