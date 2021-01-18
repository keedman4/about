import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './AboutUsWebPart.module.scss';
import * as strings from 'AboutUsWebPartStrings';

import * as $ from "jquery";
import * as bootstrap from "bootstrap";
import * as  jQuery from 'jquery';

require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');
//require('../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css');


export interface IAboutUsWebPartProps {
  description: string;
}

export default class AboutUsWebPart extends BaseClientSideWebPart<IAboutUsWebPartProps> {

  public render(): void {

    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");

    this.domElement.innerHTML = `
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
<style>
h1{
 padding-top: 170px;
Color: white;
font-family: Arial, Helvetica, sans-serif;
font-size:50px;
padding-bottom: 0px
margin-bottom: 0px
}
h2 {
    font-size: 24px;
    text-transform: uppercase;
    color: #303030;
    font-weight: 600;
    margin-bottom: 30px;
  }

  h4 {
    font-size: 19px;
    line-height: 1.375em;
    color: #303030;
    font-weight: 400;
    margin-bottom: 30px;



    #lcorner{
      background: #00005b;
       width: 400px;
       height: 50px; 
       float: right;
     color: white;
     text-align: center;
     padding: 5px;
     border-radius: 40px 0px 0px 0px;
     font-size: 24px;
     font-family: "Segoe UI";
     }
     
     #icover{
       width: 450px;
       height: 50px; 
       float: right;
     border-radius: 40px 0px 0px 0px;
     background-image: linear-gradient(#0c0c59, #1c1c6b, #5a5a64);
     }
     /*SmartPhones potrait Screen Css goes here*/
     @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
     .container-fluid{width: 100%;height: 100%;display: block;overflow: auto;}
     
     
     
     
     }
     
     
     
     /* iPhone 6+ ----------- */
     @media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2) {
     
     .container-fluid{width: 100%;height: 100%;display: block;overflow: auto;}
     
     
     
     
     }
     
     @media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2) {
     
     .container-fluid{width: 100%;height: 100%;display: block;overflow: auto;}
     
     
     
     
     }
     
     
     @media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3) {
     
     
     .container-fluid{width: 100%;height: 100%;display: block;overflow: auto;}
     
     
     
     }
     
     
     /* iPads Potrait ----------- */
     @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
     
     .container-fluid{width: 100%;height: 100%;display: block;overflow: auto;}
     
     }
  }  


.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://axamansard.sharepoint.com/SiteAssets/Group 1.png");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
 </style>

<div class="hero-image text-center" style="height: 400px;">
  <h1>About Us</h1><hr style="height:2px;border-width:0; width:7%; background-color:white;  margin-top:0px;  padding-top:0px;"></span>
</div>
  
<div class="container-fluid">
<div id="icover"><div id=lcorner>
    The AXA Mansard Brand
<div></div>
</div>
    
    `;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
