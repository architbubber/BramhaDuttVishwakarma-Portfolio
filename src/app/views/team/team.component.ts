import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  data=[
    {
      designation:"Assistant Professor",
     name:"Bramha DuttVishwakarma",
     bio:"I have a bachelors degree in Electronics and Communication Engineering, a masters in Geomatics Engineering, and a PhD in Geodesy. In my masters thesis I worked on analyzing GRACE timeseries and in my PhD I developed data-driven methods to process level 2 GRACE data at catchment scale. I work with multiple Earth observation datasets to estimate various surface processes that are related to ongoing climate change. In my free time I like to play outdoor sports.",
     imageSrc:"../../../assets/images/team/bdv_snowdonia (2).jpg"
     },
     {
      designation:"PhD student",
     name:"Vivek Yadav",
     bio:"Hello, I am a PhD student in the GESS group at ICWaR, IISc. I am from the Ghazipur district of eastern Uttar Pradesh. I completed my bachelor’s in civil engineering from BIET, Jhansi. In my B. Tech project I designed a Raw Water Treatment Plant for the Institute. As a seminar project, I looked into the impacts of Farakka Barrage & Institutional decisions on annual flooding in the Bihar state. Besides, I like reading non-fiction books and all outdoor sports. My research interests are Hydro-Climatology, Hydrology, and Remote Sensing. You can reach me at viveky&#64;iisc.ac.in.",
     imageSrc:"../../../assets/images/team/Photo (1).jpg"
     },
     {
      designation:"PhD Student",
     name:"Balaram Shaw",
     bio:"I have completed BTech (2020) in Civil Engineering and MTech (2022) from NIT Calicut in Water Resources Engineering, and currently a PhD student at ICWaR,  IISc. During my master's degree, I worked on “Drought Analysis using multiple drought index and Copula theory for semi-arid region in India.” When I don’t study, I observe nature and try to be better. My research interest includes but is not limited to Stochastic Hydrology, Hydrological Extremes, and Surface Water Hydrology. Please reach out to me at balaramshaw&#64;iisc.ac.in.",
     imageSrc:"../../../assets/images/team/balaram-a36af553.JPG"
     },
     {
      designation:"Postdoc",
     name:"Arindan Mandal",
     bio:"Hi, I am a Postdoctoral Fellow at ICWaR since March 2022. I received my PhD from Jawaharlal Nehru University, New Delhi in January, 2022. My interest lies in studying the interaction between glaciers and climate in the Himalayan region. As part of my postdoctoral project, I plan to conduct physically-based mass balance modelling of the Ladakh and Karakoram glaciers. To know more about me, please visit: <https://arindan.github.io>. You can contact me at :arindanm&#64;iisc.ac.in",
     imageSrc:"../../../assets/images/team/Mandal-removebg-preview.jpg"
     },
     {
      designation:"Postdoc",
     name:"Pushkar Sharma",
     bio:"Hi, I have been a Postdoctoral Fellow at ICWaR, IISc, since November 2022. I completed my bachelor�s in Civil Engineering from SCET, Surat. Further, I did M.E. in Hydraulic Structures from MSU, Vadodara, and PhD from IIT Bombay. In my master's, I worked on Dam break analysis and flood plain map generation; in PhD, I worked on quantifying climate and catchment effects on streamflow using the Budyko framework. I like playing Table Tennis.     My research interests include hydraulic engineering and Budyko framework for estimation of evapotranspiration.",
     imageSrc:"../../../assets/images/team/pushkar-0f59f95a.JPG"
     },
     {
      designation:"C V Raman postdoctoral fellow",
     name:"Abhishek",
     bio:"I have a B. Tech (2017) and M. Tech (2019) in Civil Engineering and Groundwater Hydrology, respectively, from IIT Roorkee, and Ph.D. (2022) in Water Resources Engineering from TokyoTech, Japan. I work on the global and regional hydrological cycle, groundwater and sustainability, GRACE terrestrial water storage, remote sensing and machine learning methods, and identification of hydro-climatic extremes. To know more, please visit https://www.researchgate.net/profile/Abhishek-12. To have a chat, feel free to write to me at abhishekiit95&#64;gmail.com",
     imageSrc:"../../../assets/images/team/Photo_Abhishek.jpg"
     },
     {
      designation:"Project Associate",
     name:"Vandana S",
     bio:"I have a bachelor's degree in Applied Electronics and Instrumentation Engineering, and I have a masters in Geoinformatics from TERISAS, New Delhi. At ICWaR, I am working on understanding the coastal sea level. I am mainly interested in the application of remote sensing in atmospheric and oceanographic sciences. I love to read books and sing in my free time. You can write to me at svandana&#64;iisc.ac.in",
     imageSrc:"../../../assets/images/team/Image.jpeg"
     },
     {
      designation:"Senior Project Associate",
     name:"Amin Shakya",
     bio:"I have a bachelor’s degree in Civil Engineering, and a double master's degree in Water Science and Engineering from the IHE Delft Institute for Water Education, the Netherlands, and TU Dresden, Germany. My research interests lie around hydroinformatics, disaster risk management, and sociotechnical innovation. Currently, I am working at the Geodesy for Earth System Science lab at the ICWaR, IISc on the downscaling of GRACE gravimetric satellite hydrological product for the Indian region, as a part of the ISRO-IISc Space Technologies Cell project.",
     imageSrc:"../../../assets/images/team/Amin_Shakya-91d57738.JPG"
     },
     {
      designation:"Postdoctoral researcher",
     name:"Retinder Kour",
     bio:"I have a PhD in remote sensing from Birla Institute of Technology Mesra, Jharkhand and a master's in remote sensing and GIS from University of Jammu, J\&K. For both my master and PhD thesis, I worked on snow cover dynamics and climate change impact on the hydrological regime of Chenab basin, western Himalayas. My research areas include snow/glacier dynamics and characterization using optical and thermal remote sensing datasets, future projections of climate variables using empirical‐statistical downscaling methods, and hydrological modelling. I enjoy painting in my spare time.",
     imageSrc:"../../../assets/images/team/Retinder Kour.jpg"
     }
  ]
}
