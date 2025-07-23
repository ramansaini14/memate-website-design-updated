// import { name } from "file-loader";
import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { usePathname } from "next/navigation";
import { Link } from "react-scroll";
// import SVGDocument from "../../../svg/SVGDocument";

const knowledgeData = [
  {
    id: 1,
    name: "Branding",
    description: `
    <div class="subHead">Warm  Intellectual and Friendly </div> 
      `,
    children: [
      {
        id: 11,
        name: "Logo Usage",

        description: `
        <p>The primary MeMate logo features a modern and vibrant gradient, transitioning from blue to orange. This gradient reflects the brand's dynamic and versatile nature. The logo's clean, lowercase typography emphasizes approachability and friendliness, aligning with MeMate's mission to simplify business management.
    </p>
      <ul class="logBrand">
        <li class="brandLogo01"><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" ></li>
        <li class="brandLogo02"><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" ></li>
        <li class="brandLogo03"><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" ></li>
        <li class="brandLogo04"><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" ></li>
      </ul>
      <ul class="logBrand">
      <h4>The logo</h4>
       <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/the-logo-scale.png" width="100%" alt="The logo" >
      </ul>
      <ul class="logBrand">
      <h4>Logo safezone</h4>
       <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/logo-safezone.png" width="100%" alt="The logo" >
      </ul>
      <div class="logBrandHori">
      <h4>Brand mark</h4>
      <ul>
        <li class="brandLogo01">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" >
        </li>
        <li class="brandLogo02">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" >
        </li>
        <li class="brandLogo03">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" >
        </li>
    </ul>
      </div>
      <div class="doesandDont">
        <h4>Dos and Don'ts</h4>
        <div class="listing">
          <ol>
            <strong>Dos</strong>
            <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle.svg" alt="icon"> Use the logo consistently across all media and materials.</li>
            <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle.svg" alt="icon"> Ensure the logo is always clearly visible against its background.</li>
            <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle.svg" alt="icon"> Maintain the logo's aspect ratio when resizing to prevent distortion.</li>
          </ol>
          <ol>
            <strong>Don'ts</strong>
            <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle-icon.svg" alt="icon"> Do not alter the colors or gradient of the logo.</li>
            <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle-icon.svg" alt="icon"> Avoid using the logo on backgrounds that do not provide sufficient contrast.</li>
            <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle-icon.svg" alt="icon"> Do not add effects such as shadows, glows, or patterns to the logo.</li>
          </ol>
        </div>
      </div>
       
       `,
      },

      {
        id: 12,
        name: "Typography",

        description: `
        <p>The typography for MeMate utilizes the Sequel typeface, which is chosen for its modern, clean lines and versatility. The typeface comes in three primary weights: Light, Roman, and Bold, each serving distinct purposes within the brand's visual language.</p>
       <div class="fonts-sec">
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/fonts-sec01.png" width="100%" alt="fonts 01" >
       </div>
        <p class='paragraphTextM'>The MeMate typography system leverages the Sequel typeface to create a clean, modern, and accessible design. This typeface, with its varying weights, provides a versatile and cohesive visual language across all brand communications.</p>
       <div class="fonts-sec">
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/font-sec02.png" width="100%" alt="fonts 02" >
       </div>
       
        `,
      },
      {
        id: 13,
        name: "Color Palette",
        description: `
       <p>The gradient transition from blue to orange in our brand palette symbolizes a journey from stability and trust to energy and innovation. The blue tones represent reliability and professionalism, while the warm orange hues convey enthusiasm and creativity. This gradient reflects MeMate's commitment to providing dependable business management solutions while embracing forward-thinking and dynamic approaches. </p>
        <img class='colorPalleteImageBottomMargin' src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/color-palette.png" width="100%" alt="Logo Brand 01" >
        
       
       `,
      },
      {
        id: 14,
        name: "Brand Message",

        description: `
        <p>MeMate is dedicated to simplifying business management through intuitive and innovative solutions. Our platform empowers businesses by streamlining operations, enhancing productivity, and providing tools that are both powerful and easy to use. We prioritize user-centric design, ensuring that our solutions are accessible and effective for all users.</p>
       <div class="brandSec">
        <ol class="marginImp">
          <li>
            <div class="in">
          <h6>Tone of Voice</h6>
          <p>Our tone is professional yet approachable, balancing clarity with warmth. We communicate in a friendly and supportive manner, ensuring that our messages are easy to understand and resonate with our audience.</p>
          </div>
          </li>
          <li>
            <div class="in">
          <h6>"Down to Business"</h6>
          <p>"MeMate: Down to Business" encapsulates our core message of simplifying and streamlining business operations, making it easier for companies to focus on what they do best.</p>
          </div>
          </li>
          <li>
            <div class="in">
          <h6>Key Themes</h6>
          <p>Our brand focuses on innovation, trust, and accessibility. We are committed to providing cutting-edge solutions that are reliable and user-friendly, ensuring that our clients can trust our products to meet their needs.</p>
          </div>
          </li>
          <li>
          <div class="in">
          <h6>Audience Connection</h6>
          <p>We connect with our audience by understanding their needs and providing tailored solutions. Our emphasis on user experience and customer support ensures that our clients feel valued and supported throughout their journey with us.</p>
          </div>
          </li>
        </ol>
       </div>
        `,
      },
      {
        id: 15,
        name: "Feel Examples",

        description: `
       <p>The typography for MeMate utilizes the Sequel typeface, which is chosen for its modern, clean lines and versatility. The typeface comes in three primary weights: Light, Roman, and Bold, each serving distinct purposes within the brand's visual language.</p>
       <div class="feel-example">
       <p><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/feel-example01.png" width="100%" alt="Feel Examples 01" ></p>
       <p><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/feel-example02.png" width="100%" alt="Feel Examples 02" ></p>
       <p><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/feel-example03.png" width="100%" alt="Feel Examples 03" ></p>
    
       </div>
       
        `,
      },
    ],
  },
  {
    id: 2,
    name: "Desktop Application",
    children: [
      {
        id: 21,
        name: "Design Principles",

        description: `
      <div class="designGeidFlex">
      <ul>
         <li><h3>Simplicity</h3>
         <p> We prioritize a clean and intuitive design that makes it easy for users to navigate and manage their tasks efficiently.</p>
         </li>
         <li><h3>Consistency</h3>
         <p>Our design language is consistent across all platforms, ensuring a seamless user experience and reinforcing brand recognition.</p>
         </li>
         <li><h3>Accessibility</h3>
         <p>We are committed to making our software accessible to all users, including those with disabilities, by adhering to best practices in design.</p>
         </li>
         <li><h3>User-Centricity</h3>
         <p>Our design choices are driven by user feedback and needs, focusing on enhancing usability and functionality.</p>
         </li>
         <li><h3>Modern Aesthetic</h3>
         <p>We employ a modern, professional aesthetic that reflects our forward-thinking and innovative approach to business management.</p>
         </li>
  
      </ul>
     </div>
      <div class="designFlexGeid">
      <ul>
         <li>
          <div class="gridImage">
          <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744183752/8_xy3kus.png" width="100%" alt="frame39531">
          </div>
          <h5>Logo Usagee</h5>
         </li>
         <li>
          <div class="gridImage">
          <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744184307/9_xnppkn.png" width="100%" alt="frame39531">
          </div>
          <h5>Color Palette</h5>
         </li>
         <li>
          <div class="gridImage">
          <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744184890/8_1_io088z.png" width="100%" alt="frame39531">
          </div>
          <h5>Typography</h5>
         </li>
         <li>
          <div class="gridImage">
          <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744184973/8_2_bej9en.png" width="100%" alt="frame39531">
          </div>
          <h5>Buttons</h5>
         </li>
         <li>
          <div class="gridImage">
          <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744184973/8_3_n8mfor.png" width="100%" alt="frame39531">
          </div>
          <h5>Input Fields</h5>
         </li>
         <li>
          <div class="gridImage">
          <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744184973/8_4_ktozau.png" width="100%" alt="frame39531">
          </div>
          <h5>Dropdowns</h5>
         </li>
         <li>
          <div class="gridImage">
          <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744185097/8_5_mqkfdx.png" width="100%" alt="frame39531">
          </div>
          <h5>Textarea</h5>
         </li>
         <li>
          <div class="gridImage">
          <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744185097/8_6_b9lfha.png" width="100%" alt="frame39531">
          </div>
          <h5>Toggle</h5>
         </li>
         <li>
          <div class="gridImage">
          <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744185097/8_7_odj2hs.png" width="100%" alt="frame39531">
          </div>
          <h5>Shadows</h5>
         </li>
         <li>
          <div class="gridImage">
          <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744191031/8_lzht73.png" width="100%" alt="frame39531">
          </div>
          <h5>Alerts and Notifications</h5>
         </li>
         <li>
          <div class="gridImage">
          <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744191031/8_1_tucsnf.png" width="100%" alt="frame39531">
          </div>
          <h5>Tooltips</h5>
         </li>
         <li>
          <div class="gridImage">
          <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744191031/8_2_fyjnkc.png" width="100%" alt="frame39531">
          </div>
          <h5>Upload</h5>
         </li>
         <li>
          <div class="gridImage">
          <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744191031/8_3_h2rtqw.png" width="100%" alt="frame39531">
          </div>
          <h5>Progress Bar</h5>
         </li>
         <li>
          <div class="gridImage">
          <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744191031/8_4_u1zvb6.png" width="100%" alt="frame39531">
          </div>
          <h5>Checkboxes</h5>
         </li>
        
      </ul>
     </div>
     
      `,
      },
      {
        id: 22,
        name: "Logo Usage",

        description: `
      <p>The primary MeMate logo features a modern and vibrant gradient, transitioning from blue to orange. This gradient reflects the brand's dynamic and versatile nature. The logo's clean, lowercase typography emphasizes approachability and friendliness, aligning with MeMate's mission to simplify business management.
  </p>
    <ul class="logBrand">
      <li class="brandLogo01"><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" ></li>
      <li class="brandLogo02"><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" ></li>
      <li class="brandLogo03"><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" ></li>
      <li class="brandLogo04"><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" ></li>
    </ul>
    <ul class="logBrand">
    <h4>Logo safezone</h4>
     <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/logo-safezone.png" width="100%" alt="The logo" >
    </ul>
    <div class="logBrandHori">
    <ul class="containerBoxM">
      <li class="brandLogo01">
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/Group+39529.png" alt="Logo Brand 01" >
       <div>
          <h1 class="HeadingFormats">Clear Space & Sizing</h1>
          <p class="ParagraphFormats">To maintain the logo's visual integrity, ensure a minimum clear space around the logo equal to the height of the letter 'm' in "me." This space prevents any other elements from encroaching on the logo's area, ensuring it remains prominent and uncluttered.</p>
        </div>
      </li>
      <li id="brandLogoNewSecion">
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/Notification.png" alt="Logo Brand 01" >
      <div>
          <h1 class="HeadingFormats">Minimum Size</h1>
          <p class="ParagraphFormats">For digital applications, the logo should not be displayed smaller than 40px in height. For print materials, the minimum size is 10mm in height. This ensures legibility and brand recognition across various mediums.</p>
          </div>
      </li>
  </ul>
    </div>
    <div class="doesandDont doesandDontt">
      <h4>Dos and Don'ts</h4>
      <div class="listing">
        <ol>
          <strong>Dos</strong>
          <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle.svg" alt="icon"> Use the logo consistently across all media and materials.</li>
          <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle.svg" alt="icon"> Ensure the logo is always clearly visible against its background.</li>
          <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle.svg" alt="icon"> Maintain the logo's aspect ratio when resizing to prevent distortion.</li>
        </ol>
        <ol>
          <strong>Don'ts</strong>
          <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle-icon.svg" alt="icon"> Do not alter the colors or gradient of the logo.</li>
          <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle-icon.svg" alt="icon"> Avoid using the logo on backgrounds that do not provide sufficient contrast.</li>
          <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle-icon.svg" alt="icon"> Do not add effects such as shadows, glows, or patterns to the logo.</li>
        </ol>
      </div>
    </div>
     
     `,
      },
      {
        id: 23,
        name: "Color Palette",
        description: `
     <div class="dColorPlate">
     <div class="dColorPlateWrap">
     <div class="lSide">
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo">
     </div>
     <div class="RSide">
      <p>The gradient transition from blue to orange in our brand palette symbolizes a journey from stability and trust to energy and innovation. The blue tones represent reliability and professionalism, while the warm orange hues convey enthusiasm and creativity. This gradient reflects MeMate's commitment to providing dependable business management solutions while embracing forward-thinking and dynamic approaches. </p>
      <p>The blend of these colors visually narrates our brand's mission to empower businesses with both confidence and innovative tools. This color choice embodies our values and appeals to a broad audience, ensuring a modern and approachable brand presence.</p>
     </div>
     </div>
     <div class="dColorPlatebox">
    <h4>Base</h4>
    <p class="para">These are base black and white color styles to<br/> quickly swap out if you need to.</p>
        <div class="dColorgridWrapper">
            <div class="dColorgrid">
            <span style="background: #fff; color: #000">AAA 21.1</span>
            <em>White</em>
            <p>#FFFFFF</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #000; color: #fff">AAA 21.1</span>
            <em>Black</em>
            <p>#000000</p>
            </div>
        </div>
     </div>

     <div class="dColorPlatebox">
    <h4>Gray</h4>
    <p class="para">Gray is a neutral color and is the foundation of the color system. Almost everything in UI design — text, form fields, backgrounds, dividers — are usually gray.</p>
        <div class="dColorgridWrapper">
            <div class="dColorgrid">
            <span style="background: #fff; color: #667085">AA 4.84</span>
            <em>25</em>
            <p>#FCFCFD</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #F9FAFB; color: #667085">AA 4.73</span>
            <em>50</em>
            <p>#F9FAFB</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #F2F4F7; color: #667085">AA 4.49</span>
            <em>100</em>
            <p>#F2F4F7</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #EAECF0; color: #667085">4.19</span>
            <em>200</em>
            <p>#EAECF0</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #D0D5DD; color: #fff">1.48</span>
            <em>300</em>
            <p>#D0D5DD</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #98A2B3; color: #fff">2.58</span>
            <em>400</em>
            <p>#98A2B3</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #667085; color: #fff">AA 4.95</span>
            <em>500</em>
            <p>#667085</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #475467; color: #fff">AAA 7.65</span>
            <em>600</em>
            <p>#475467</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #344054; color: #fff">AAA 10.41</span>
            <em>700</em>
            <p>#344054</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #1D2939; color: #fff">AAA 14.74</span>
            <em>800</em>
            <p>#1D2939</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #101828; color: #fff">AAA 17.79</span>
            <em>900</em>
            <p>#101828</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #0C111D; color: #fff">AAA 18.84</span>
            <em>950</em>
            <p>#0C111D</p> 
            </div>
        </div>
     </div>


     <div class="dColorPlatebox">
    <h4>Primary</h4>
    <p class="para">The primary color is your "brand" color, and is used across all interactive elements such as buttons, links, inputs, etc. This color can define the overall feel and can elicit emotion.</p>
        <div class="dColorgridWrapper">
            <div class="dColorgrid">
            <span style="background: #F2FAFF; color: #0A4766">AA 6.39</span>
            <em>25</em>
            <p>#F2FAFF</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #EBF8FF; color: #0A4766">AA 6.16</span>
            <em>50</em>
            <p>#EBF8FF</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #BAE8FF; color: #0A4766">AA 5.74</span>
            <em>100</em>
            <p>#BAE8FF</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #A3E0FF; color: #0A4766">AA 4.93</span>
            <em>200</em>
            <p>#A3E0FF</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #76D1FF; color: #fff">1.70</span>
            <em>300</em>
            <p>#76D1FF</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #48C1FF; color: #fff">2.49</span>
            <em>400</em>
            <p>#48C1FF</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #1AB2FF; color: #fff">3.33</span>
            <em>500</em>
            <p>#1AB2FF</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #158ECC; color: #fff">AA 4.96</span>
            <em>600</em>
            <p>#158ECC</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #106B99; color: #fff">AAA 10.41</span>
            <em>700</em>
            <p>#344054</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #0A4766; color: #fff">AAA 8.67</span>
            <em>800</em>
            <p>#0A4766</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #0A4766; color: #fff">AAA 10.78</span>
            <em>900</em>
            <p>#0A4766</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #052433; color: #fff">AAA 14.66</span>
            <em>950</em>
            <p>#052433</p> 
            </div>
        </div>
     </div>


     <div class="dColorPlatebox">
    <h4>Secondary</h4>
    <p class="para">Secondary colors complement the primary palette, adding depth and variety to our visual identity. They are used for backgrounds, secondary buttons, and accents, enhancing the design while supporting the primary colors.</p>
        <div class="dColorgridWrapper">
            <div class="dColorgrid">
            <span style="background: #FFF7EE; color: #B93815">AA 5.53</span>
            <em>25</em>
            <p>#FFF7EE</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #FFF0DE; color: #B93815">AA 5.36</span>
            <em>50</em>
            <p>#FFF0DE</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #FFE8CD; color: #B93815">AA 4.90</span>
            <em>100</em>
            <p>#FFE8CD</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #FFE0BC; color: #B93815">4.33</span>
            <em>200</em>
            <p>#FFE0BC</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #FFD19B; color: #B93815">3.18</span>
            <em>300</em>
            <p>#FFD19B</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #FFC179; color: #fff">2.51</span>
            <em>400</em>
            <p>#FFC179</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #FFB258; color: #fff">3.13</span>
            <em>500</em>
            <p>#FFB258</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #D59346; color: #fff">3.96</span>
            <em>600</em>
            <p>#D59346</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #AC7535; color: #fff">AA 5.75</span>
            <em>700</em>
            <p>#AC7535</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #6D471A; color: #fff">AAA 7.87</span>
            <em>800</em>
            <p>#6D471A</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #593812; color: #fff">AAA 9.97</span>
            <em>900</em>
            <p>#593812</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #442809; color: #fff">AAA 13.80</span>
            <em>950</em>
            <p>#442809</p> 
            </div>
        </div>
     </div>



     <div class="dColorPlatebox">
    <h4>Error</h4>
    <p class="para">Error colors are used across error states and in "destructive" actions. They communicate a destructive/negative action, such as removing a user from your team.</p>
        <div class="dColorgridWrapper">
            <div class="dColorgrid">
            <span style="background: #FFFBFA; color: #B42318">AA 6.4</span>
            <em>25</em>
            <p>#FFFBFA</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #FEF3F2; color: #B42318">AA 6.06</span>
            <em>50</em>
            <p>#FEF3F2</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #FEE4E2; color: #B42318">AA 5.4</span>
            <em>100</em>
            <p>#FEE4E2</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #FECDCA; color: #B42318">AA 4.56</span>
            <em>200</em>
            <p>#FECDCA</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #FDA29B; color: #fff">1.95</span>
            <em>300</em>
            <p>#FDA29B</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #F97066; color: #fff">2.78</span>
            <em>400</em>
            <p>#F97066</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #F04438; color: #fff">3.76</span>
            <em>500</em>
            <p>#F04438</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #D92D20; color: #fff">AA 4.82</span>
            <em>600</em>
            <p>#D92D20</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #B42318; color: #fff">AA 6.60</span>
            <em>700</em>
            <p>#B42318</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #912018; color: #fff">AAA 8.70</span>
            <em>800</em>
            <p>#912018</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #7A271A; color: #fff">AAA 9.86</span>
            <em>900</em>
            <p>#7A271A</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #55160C; color: #fff">AAA 13.97</span>
            <em>950</em>
            <p>#55160C</p> 
            </div>
        </div>
     </div>


  <div class="dColorPlatebox">
    <h4>Warning</h4>
    <p class="para">Warning colors can communicate that an action is potentially destructive or "on-hold". These colors are commonly used in confirmations to grab the users' attention.</p>
        <div class="dColorgridWrapper">
            <div class="dColorgrid">
            <span style="background: #FFFCF5; color: #B54708">AA 5.28</span>
            <em>25</em>
            <p>#FFFCF5</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #FFFAEB; color: #B54708">AA 5.17</span>
            <em>50</em>
            <p>#FFFAEB</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #FEF0C7; color: #B54708">AA 4.75</span>
            <em>100</em>
            <p>#FEF0C7</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #FEDF89; color: #B54708">4.15</span>
            <em>200</em>
            <p>#FEDF89</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #FEC84B; color: #fff">1.54</span>
            <em>300</em>
            <p>#FEC84B</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #FDB022; color: #fff">1.84</span>
            <em>400</em>
            <p>#FDB022</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #F79009; color: #fff">2.34</span>
            <em>500</em>
            <p>#F79009</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #DC6803; color: #fff">3.49</span>
            <em>600</em>
            <p>#DC6803</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #B54708; color: #fff">AA 5.40</span>
            <em>700</em>
            <p>#B54708</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #93370D; color: #fff">AAA 7.49</span>
            <em>800</em>
            <p>#93370D</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #7A2E0E; color: #fff">AAA 9.48</span>
            <em>900</em>
            <p>#7A2E0E</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #4E1D09; color: #fff">AAA 13.92</span>
            <em>950</em>
            <p>#4E1D09</p> 
            </div>
        </div>
     </div>

     <div class="dColorPlatebox">
    <h4>Success</h4>
    <p class="para">Success colors communicate a positive action, positive trend, or a successful confirmation. If you're using green as your primary color, it can be helpful to introduce a different hue for your success green.</p>
        <div class="dColorgridWrapper">
            <div class="dColorgrid">
            <span style="background: #F6FEF9; color: #067647">AA 5.51</span>
            <em>25</em>
            <p>#F6FEF9</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #ECFDF3; color: #067647">AA 5.36</span>
            <em>50</em>
            <p>#ECFDF3</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #DCFAE6; color: #067647">AA 5.07</span>
            <em>100</em>
            <p>#DCFAE6</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #ABEFC6; color: #067647">4.27</span>
            <em>200</em>
            <p>#ABEFC6</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #75E0A7; color: #fff">1.62</span>
            <em>300</em>
            <p>#75E0A7</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #47CD89; color: #fff">2.03</span>
            <em>400</em>
            <p>#47CD89</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #17B26A; color: #fff">2.76</span>
            <em>500</em>
            <p>#17B26A</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #079455; color: #fff">3.91</span>
            <em>600</em>
            <p>#079455</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #067647; color: #fff">AA 5.66</span>
            <em>700</em>
            <p>#067647</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #085D3A; color: #fff">AAA 7.92</span>
            <em>800</em>
            <p>#085D3A</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #074D31; color: #fff">AAA 9.95</span>
            <em>900</em>
            <p>#074D31</p>
            </div>
            <div class="dColorgrid">
           <span style="background: #053321; color: #fff">AAA 13.93</span>
            <em>950</em>
            <p>#053321</p> 
            </div>
        </div>
     </div>

     </div>
      
     
     `,
      },
      {
        id: 24,
        name: "Typography",
        description: `
        <div class="fontsGridWrap">
            <div class="fontsLeft">
            <h6>Inter</h6>
            <h6>Semi bold 30px</h6>
            <p>Line height 34px</p>
            <p>Letter Spacing -2.5%</p>
            <p>Paragraph Spacing 8px</p>
            </div>
            <div class="fontsRight">
            <h2 class="font1">Title Screen</h2>
            <p>Used for the main screen title, should be used only once per screen. It pairs with large body.</p>
            </div>
         </div>

        <div class="fontsGridWrap">
            <div class="fontsLeft">
            <h6>Inter</h6>
            <h6>Semi bold 26px</h6>
            <p>Line height 32px</p>
            <p>Letter spacing -1.5%</p>
            <p>Paragraph Spacing 8px</p>
            </div>
            <div class="fontsRight">
            <h2 class="font2">Title section</h2>
            <p>Handy for dividing your screen into sections. It pairs perfectly with large body.</p>
            </div>
         </div>


        <div class="fontsGridWrap">
            <div class="fontsLeft">
            <h6>Inter</h6>
            <h6>Semi bold 22px</h6>
            <p>Line height 28px</p>
            <p>Letter spacing -1.5%</p>
            <p>Paragraph Spacing 8px</p>
            </div>
            <div class="fontsRight">
            <h2 class="font3">Title subsection</h2>
            <p>Designed for sections within sections to increase the information hierarchy.</p>
            </div>
         </div>


        <div class="fontsGridWrap">
            <div class="fontsLeft">
            <h6>Inter</h6>
            <h6>Semi bold 18px</h6>
            <p>Line height 24px</p>
            <p>Letter spacing -1%</p>
            <p>Paragraph Spacing 8px</p>
            </div>
            <div class="fontsRight">
            <h2 class="font4">Title body</h2>
            <p>Perfect for large amounts of content. Pairs with large body and default body.</p>
            </div>
         </div>


        <div class="fontsGridWrap">
            <div class="fontsLeft">
            <h6>Inter</h6>
            <h6>Medium 14px</h6>
            <p>Line height 20px</p>
            <p>Letter spacing 1.5%</p>
            </div>
            <div class="fontsRight">
            <h2 class="font5">Title group</h2>
            <p>Handy for dividing your screen into sections. It pairs perfectly with large body.</p>
            </div>
         </div>


        <div class="fontsGridWrap">
            <div class="fontsLeft">
            <h6>Inter</h6>
            <h6>Regular 16px</h6>
            <p>Line height 24px</p>
            <p>Letter spacing 1.5%</p>
            <p>Paragraph Spacing 8px</p>
            </div>
            <div class="fontsRight">
            <h2 class="font6">Body large</h2>
            <p>Used for for paragraphs. Pairs with screen title and section title.</p>
            </div>
         </div>


        <div class="fontsGridWrap">
            <div class="fontsLeft">
            <h6>Inter</h6>
            <h6>Semi bold 16px</h6>
            <p>Line height 24px</p>
            <p>Letter spacing 0.5%</p>
            <p>Paragraph Spacing 8px</p>
            </div>
            <div class="fontsRight">
            <h2 class="font7">Body large bold</h2>
            <p>Emphasises and highlights important words or small titles. It's used in expressive components, such as buttons and links.</p>
            </div>
         </div>


        <div class="fontsGridWrap">
            <div class="fontsLeft">
            <h6>Inter</h6>
            <h6>Regular 14px</h6>
            <p>Line height 22px</p>
            <p>Letter spacing 1%</p>
            <p>Paragraph Spacing 8px</p>
            </div>
            <div class="fontsRight">
            <h2 class="font8">Body default</h2>
            <p>When you need something a little smaller than large, or to compliment large body.</p>
            </div>
         </div>


        <div class="fontsGridWrap">
            <div class="fontsLeft">
            <h6>Inter</h6>
            <h6>Semi bold 14px</h6>
            <p>Line height 22px</p>
            <p>Letter spacing 1.25% </p>
            <p>Paragraph Spacing 8px</p>
            </div>
            <div class="fontsRight">
            <h2 class="font9">Body default bold</h2>
            <p>Emphasises and highlights important words or small titles. It's used in expressive components, such as buttons and links.</p>
            </div>
         </div>


        <div class="fontsGridWrap">
            <div class="fontsLeft">
            <h6>Inter</h6>
            <h6>Regular 12px</h6>
            <p>Line height 22px</p>
            <p>Letter spacing 1%</p>
            <p>Paragraph Spacing 8px</p>
            </div>
            <div class="fontsRight">
            <h2 class="font10">Body small</h2>
            <p>When you need something a little smaller than large, or to compliment large body.</p>
            </div>
         </div>


        <div class="fontsGridWrap">
            <div class="fontsLeft">
            <h6>Inter</h6>
            <h6>Semi bold 12px</h6>
            <p>Line height 22px</p>
            <p>Letter spacing 1.25%</p>
            <p>Paragraph Spacing 8px</p>
            </div>
            <div class="fontsRight">
            <h2 class="font11">Body small default bold</h2>
            <p>Emphasises and highlights important words or small titles. It's used in expressive components, such as buttons and links.</p>
            </div>
         </div>


        <div class="fontsGridWrap">
            <div class="fontsLeft">
            <h6>Inter</h6>
            <h6>Regular 10px</h6>
            <p>Line height 22px</p>
            <p>Letter spacing 1%</p>
            <p>Paragraph Spacing 8px</p>
            </div>
            <div class="fontsRight">
            <h2 class="font12">Body super small</h2>
            <p>When you need something a little smaller than large, or to compliment large body.</p>
            </div>
         </div>


        <div class="fontsGridWrap">
            <div class="fontsLeft">
            <h6>Inter</h6>
            <h6>Semi bold 10px</h6>
            <p>Line height 22px</p>
            <p>Letter spacing 1.25%</p>
            <p>Paragraph Spacing 8px</p>
            </div>
            <div class="fontsRight">
            <h2 class="font13">Body super small bold</h2>
            <p>Emphasises and highlights important words or small titles. It's used in expressive components, such as buttons and links.</p>
            </div>
         </div>


        <div class="fontsGridWrap">
            <div class="fontsLeft">
            <h6>Inter</h6>
            <h6>Semi bold underlined 16px</h6>
            <p>Line height 24px</p>
            <p>Letter spacing 1%</p>
            <p>Paragraph Spacing 8px</p>
            </div>
            <div class="fontsRight">
            <h2 class="font14">Link large</h2>
            <p>Used in line with large body, or when you need a large link.</p>
            </div>
         </div>


        <div class="fontsGridWrap">
            <div class="fontsLeft">
            <h6>Inter</h6>
            <h6>Semi bold underlined 14px</h6>
            <p>Line height 22px</p>
            <p>Letter spacing 1.25%</p>
            <p>Underlined</p>
            </div>
            <div class="fontsRight">
            <h2 class="font15">Link default</h2>
            <p>Used in line with default body, or when you need a smaller link.</p>
            </div>
         </div>
      `,
      },
      {
        id: 25,
        name: "Buttons",
        description: `
         <p>The primary MeMate logo features a modern and vibrant gradient, transitioning from blue to orange. This gradient reflects the brand's dynamic and versatile nature. The logo's clean, lowercase typography emphasizes approachability and friendliness, aligning with MeMate's mission to simplify business management.</p>
      <div class="btnGroupData">
         <div class="button-grid">
    <!-- Row 1 -->
    <button class="cta-button variant1 size1"><span class="circle"></span> Button CTA<span class="circle"></span></button>
    <button class="cta-button variant1 size2"><span class="circle"></span> Button CTA<span class="circle"></span></button>
    <button class="cta-button variant1 size3"><span class="circle"></span> Button CTA<span class="circle"></span></button>
    <button class="cta-button variant1 size4"><span class="circle"></span> Button CTA<span class="circle"></span></button>

    <!-- Row 2 -->
    <button class="cta-button variant2 size1"><span class="circle"></span> Button CTA<span class="circle"></span></button>
    <button class="cta-button variant2 size2"><span class="circle"></span> Button CTA<span class="circle"></span></button>
    <button class="cta-button variant2 size3"><span class="circle"></span> Button CTA<span class="circle"></span></button>
    <button class="cta-button variant2 size4"><span class="circle"></span> Button CTA<span class="circle"></span></button>

    <!-- Row 3 -->
    <button class="cta-button variant3 size1"><span class="circle"></span> Button CTA<span class="circle"></span></button>
    <button class="cta-button variant3 size2"><span class="circle"></span> Button CTA<span class="circle"></span></button>
    <button class="cta-button variant3 size3"><span class="circle"></span> Button CTA<span class="circle"></span></button>
    <button class="cta-button variant3 size4"><span class="circle"></span> Button CTA<span class="circle"></span></button>

    <!-- Row 4 -->
    <button class="cta-button variant4 size1"><span class="circle"></span> Button CTA<span class="circle"></span></button>
    <button class="cta-button variant4 size2"><span class="circle"></span> Button CTA<span class="circle"></span></button>
    <button class="cta-button variant4 size3"><span class="circle"></span> Button CTA<span class="circle"></span></button>
    <button class="cta-button variant4 size4"><span class="circle"></span> Button CTA<span class="circle"></span></button>
  </div>
      </div>
      
      
       <div class="button-grid">
    <!-- Row 1 -->
    <button class="cta-button variant11 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant11 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant11 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant11 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 2 -->
    <button class="cta-button variant21 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant21 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant21 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant21 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 3 -->
    <button class="cta-button variant31 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant31 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant31 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant31 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 4 (Disabled / Faded) -->
    <button class="cta-button variant41 size1" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant41 size2" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant41 size3" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant41 size4" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
  </div>


  <div class="button-grid">
    <!-- Row 1 -->
    <button class="cta-button variant12 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant12 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant12 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant12 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 2 -->
    <button class="cta-button variant22 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant22 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant22 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant22 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 3 -->
    <button class="cta-button variant32 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant32 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant32 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant32 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 4 (Disabled / Faded) -->
    <button class="cta-button variant42 size1" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant42 size2" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant42 size3" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant42 size4" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
  </div>

   <div class="button-grid">
    <!-- Row 1 -->
    <button class="cta-button variant13 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant13 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant13 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant13 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 2 -->
    <button class="cta-button variant23 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant23 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant23 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant23 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 3 -->
    <button class="cta-button variant33 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant33 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant33 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant33 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 4 (Disabled / Faded) -->
    <button class="cta-button variant43 size1" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant43 size2" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant43 size3" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant43 size4" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
  </div>

    <div class="button-grid">
    <!-- Row 1 -->
    <button class="cta-button variant12 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant12 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant12 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant12 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 2 -->
    <button class="cta-button variant22 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant22 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant22 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant22 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 3 -->
    <button class="cta-button variant32 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant32 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant32 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant32 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 4 (Disabled / Faded) -->
    <button class="cta-button variant42 size1" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant42 size2" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant42 size3" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant42 size4" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
  </div>

     <div class="button-grid">
    <!-- Row 1 -->
    <button class="cta-button variant13 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant13 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant13 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant13 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 2 -->
    <button class="cta-button variant23 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant23 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant23 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant23 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 3 -->
    <button class="cta-button variant33 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant33 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant33 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant33 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 4 (Disabled / Faded) -->
    <button class="cta-button variant43 size1" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant43 size2" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant43 size3" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant43 size4" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
  </div>


      <div class="button-grid">
    <!-- Row 1 -->
    <button class="cta-button variant15 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant15 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant15 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant15 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 2 -->
    <button class="cta-button variant25 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant25 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant25 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant25 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 3 -->
    <button class="cta-button variant35 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant35 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant35 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant35 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 4 (Disabled / Faded) -->
    <button class="cta-button variant45 size1" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant45 size2" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant45 size3" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant45 size4" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
  </div>

  <div class="button-grid">
    <!-- Row 1 -->
    <button class="cta-button variant16 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant16 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant16 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant16 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 2 -->
    <button class="cta-button variant26 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant26 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant26 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant26 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 3 -->
    <button class="cta-button variant36 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant36 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant36 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant36 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 4 (Disabled / Faded) -->
    <button class="cta-button variant46 size1" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant46 size2" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant46 size3" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant46 size4" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
  </div>

    <div class="button-grid">
    <!-- Row 1 -->
    <button class="cta-button variant17 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant17 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant17 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant17 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 2 -->
    <button class="cta-button variant27 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant27 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant27 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant27 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 3 -->
    <button class="cta-button variant37 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant37 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant37 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant37 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 4 (Disabled / Faded) -->
    <button class="cta-button variant47 size1" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant47 size2" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant47 size3" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant47 size4" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
  </div>
  <div class="button-grid">
    <!-- Row 1 -->
    <button class="cta-button variant18 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant18 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant18 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant18 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 2 -->
    <button class="cta-button variant28 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant28 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant28 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant28 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 3 -->
    <button class="cta-button variant38 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant38 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant38 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant38 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 4 (Disabled / Faded) -->
    <button class="cta-button variant48 size1" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant48 size2" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant48 size3" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant48 size4" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
  </div>

    <div class="button-grid">
    <!-- Row 1 -->
    <button class="cta-button variant19 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant19 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant19 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant19 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 2 -->
    <button class="cta-button variant29 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant29 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant29 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant29 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 3 -->
    <button class="cta-button variant39 size1"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant39 size2"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant39 size3"><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant39 size4"><span class="circle"></span> Button CTA<span class="circle"></button>

    <!-- Row 4 (Disabled / Faded) -->
    <button class="cta-button variant49 size1" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant49 size2" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant49 size3" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
    <button class="cta-button variant49 size4" disabled><span class="circle"></span> Button CTA<span class="circle"></button>
  </div>

         `,
      },
      {
        id: 26,
        name: "Input Fields",
        description: `
        <p>The primary MeMate logo features a modern and vibrant gradient, transitioning from blue to orange. This gradient reflects the brand's dynamic and versatile nature. The logo's clean, lowercase typography emphasizes approachability and friendliness, aligning with MeMate's mission to simplify business management.</p>
      <div class="inputBrandStyle">
       
<div class="form-grid-brand">
    <!-- Email Input -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <input type="email" disabled  placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input with Icon -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <span class="icon">📧</span>
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Phone Number -->
    <div class="form-group">
      <label>Phone number</label>
      <div class="input-wrapper">
        <select>
          <option value="AU">AU</option>
          <option value="US">US</option>
        </select>
        <input type="tel" disabled placeholder="+1 (555) 000-0000" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Sale Amount -->
    <div class="form-group">
      <label>Sale amount</label>
      <div class="input-wrapper">
        <span class="currency-symbol">$</span>
        <input type="text" disabled placeholder="1,000.00" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>
  </div>



   
<div class="form-grid-brand box-input-top-sace">

    <!-- Email Input -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input with Icon -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <span class="icon">📧</span>
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Phone Number -->
    <div class="form-group">
      <label>Phone number</label>
      <div class="input-wrapper">
        <select>
          <option value="AU">AU</option>
          <option value="US">US</option>
        </select>
        <input type="tel" disabled placeholder="+1 (555) 000-0000" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Sale Amount -->
    <div class="form-group">
      <label>Sale amount</label>
      <div class="input-wrapper">
        <span class="currency-symbol">$</span>
        <input type="text" disabled placeholder="1,000.00" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input with Icon -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <span class="icon">📧</span>
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Phone Number -->
    <div class="form-group">
      <label>Phone number</label>
      <div class="input-wrapper">
        <select>
          <option value="AU">AU</option>
          <option value="US">US</option>
        </select>
        <input type="tel" disabled placeholder="+1 (555) 000-0000" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Sale Amount -->
    <div class="form-group">
      <label>Sale amount</label>
      <div class="input-wrapper">
        <span class="currency-symbol">$</span>
        <input type="text" disabled placeholder="1,000.00" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>
    <!-- Email Input -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input with Icon -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <span class="icon">📧</span>
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Phone Number -->
    <div class="form-group">
      <label>Phone number</label>
      <div class="input-wrapper">
        <select>
          <option value="AU">AU</option>
          <option value="US">US</option>
        </select>
        <input type="tel" disabled placeholder="+1 (555) 000-0000" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Sale Amount -->
    <div class="form-group">
      <label>Sale amount</label>
      <div class="input-wrapper">
        <span class="currency-symbol">$</span>
        <input type="text" disabled placeholder="1,000.00" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>
    <!-- Email Input -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input with Icon -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <span class="icon">📧</span>
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Phone Number -->
    <div class="form-group">
      <label>Phone number</label>
      <div class="input-wrapper">
        <select>
          <option value="AU">AU</option>
          <option value="US">US</option>
        </select>
        <input type="tel" disabled placeholder="+1 (555) 000-0000" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Sale Amount -->
    <div class="form-group">
      <label>Sale amount</label>
      <div class="input-wrapper">
        <span class="currency-symbol">$</span>
        <input type="text" disabled placeholder="1,000.00" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>
    <!-- Email Input -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input with Icon -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <span class="icon">📧</span>
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Phone Number -->
    <div class="form-group">
      <label>Phone number</label>
      <div class="input-wrapper">
        <select>
          <option value="AU">AU</option>
          <option value="US">US</option>
        </select>
        <input type="tel" disabled placeholder="+1 (555) 000-0000" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Sale Amount -->
    <div class="form-group">
      <label>Sale amount</label>
      <div class="input-wrapper">
        <span class="currency-symbol">$</span>
        <input type="text" disabled placeholder="1,000.00" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>
    <!-- Email Input -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input with Icon -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <span class="icon">📧</span>
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Phone Number -->
    <div class="form-group">
      <label>Phone number</label>
      <div class="input-wrapper">
        <select>
          <option value="AU">AU</option>
          <option value="US">US</option>
        </select>
        <input type="tel" disabled placeholder="+1 (555) 000-0000" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Sale Amount -->
    <div class="form-group">
      <label>Sale amount</label>
      <div class="input-wrapper">
        <span class="currency-symbol">$</span>
        <input type="text" disabled placeholder="1,000.00" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>
    <!-- Email Input -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input with Icon -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <span class="icon">📧</span>
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Phone Number -->
    <div class="form-group">
      <label>Phone number</label>
      <div class="input-wrapper">
        <select>
          <option value="AU">AU</option>
          <option value="US">US</option>
        </select>
        <input type="tel" disabled placeholder="+1 (555) 000-0000" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Sale Amount -->
    <div class="form-group">
      <label>Sale amount</label>
      <div class="input-wrapper">
        <span class="currency-symbol">$</span>
        <input type="text" disabled placeholder="1,000.00" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>
    <!-- Email Input -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input with Icon -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <span class="icon">📧</span>
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Phone Number -->
    <div class="form-group">
      <label>Phone number</label>
      <div class="input-wrapper">
        <select>
          <option value="AU">AU</option>
          <option value="US">US</option>
        </select>
        <input type="tel" disabled placeholder="+1 (555) 000-0000" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Sale Amount -->
    <div class="form-group">
      <label>Sale amount</label>
      <div class="input-wrapper">
        <span class="currency-symbol">$</span>
        <input type="text" disabled placeholder="1,000.00" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>  




  </div>


  
<div class="form-grid-brand box-input-top-sace box-input-top-error">

    <!-- Email Input -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input with Icon -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <span class="icon">📧</span>
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Phone Number -->
    <div class="form-group">
      <label>Phone number</label>
      <div class="input-wrapper">
        <select>
          <option value="AU">AU</option>
          <option value="US">US</option>
        </select>
        <input type="tel" disabled placeholder="+1 (555) 000-0000" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Sale Amount -->
    <div class="form-group">
      <label>Sale amount</label>
      <div class="input-wrapper">
        <span class="currency-symbol">$</span>
        <input type="text" disabled placeholder="1,000.00" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input with Icon -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <span class="icon">📧</span>
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Phone Number -->
    <div class="form-group">
      <label>Phone number</label>
      <div class="input-wrapper">
        <select>
          <option value="AU">AU</option>
          <option value="US">US</option>
        </select>
        <input type="tel" disabled placeholder="+1 (555) 000-0000" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Sale Amount -->
    <div class="form-group">
      <label>Sale amount</label>
      <div class="input-wrapper">
        <span class="currency-symbol">$</span>
        <input type="text" disabled placeholder="1,000.00" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>
    <!-- Email Input -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input with Icon -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <span class="icon">📧</span>
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Phone Number -->
    <div class="form-group">
      <label>Phone number</label>
      <div class="input-wrapper">
        <select>
          <option value="AU">AU</option>
          <option value="US">US</option>
        </select>
        <input type="tel" disabled placeholder="+1 (555) 000-0000" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Sale Amount -->
    <div class="form-group">
      <label>Sale amount</label>
      <div class="input-wrapper">
        <span class="currency-symbol">$</span>
        <input type="text" disabled placeholder="1,000.00" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>
    <!-- Email Input -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input with Icon -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <span class="icon">📧</span>
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Phone Number -->
    <div class="form-group">
      <label>Phone number</label>
      <div class="input-wrapper">
        <select>
          <option value="AU">AU</option>
          <option value="US">US</option>
        </select>
        <input type="tel" disabled placeholder="+1 (555) 000-0000" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Sale Amount -->
    <div class="form-group">
      <label>Sale amount</label>
      <div class="input-wrapper">
        <span class="currency-symbol">$</span>
        <input type="text" disabled placeholder="1,000.00" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>
    <!-- Email Input -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input with Icon -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <span class="icon">📧</span>
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Phone Number -->
    <div class="form-group">
      <label>Phone number</label>
      <div class="input-wrapper">
        <select>
          <option value="AU">AU</option>
          <option value="US">US</option>
        </select>
        <input type="tel" disabled placeholder="+1 (555) 000-0000" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Sale Amount -->
    <div class="form-group">
      <label>Sale amount</label>
      <div class="input-wrapper">
        <span class="currency-symbol">$</span>
        <input type="text" disabled placeholder="1,000.00" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>
    <!-- Email Input -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input with Icon -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <span class="icon">📧</span>
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Phone Number -->
    <div class="form-group">
      <label>Phone number</label>
      <div class="input-wrapper">
        <select>
          <option value="AU">AU</option>
          <option value="US">US</option>
        </select>
        <input type="tel" disabled placeholder="+1 (555) 000-0000" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Sale Amount -->
    <div class="form-group">
      <label>Sale amount</label>
      <div class="input-wrapper">
        <span class="currency-symbol">$</span>
        <input type="text" disabled placeholder="1,000.00" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>
    <!-- Email Input -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input with Icon -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <span class="icon">📧</span>
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Phone Number -->
    <div class="form-group">
      <label>Phone number</label>
      <div class="input-wrapper">
        <select>
          <option value="AU">AU</option>
          <option value="US">US</option>
        </select>
        <input type="tel" disabled placeholder="+1 (555) 000-0000" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Sale Amount -->
    <div class="form-group">
      <label>Sale amount</label>
      <div class="input-wrapper">
        <span class="currency-symbol">$</span>
        <input type="text" disabled placeholder="1,000.00" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>
    <!-- Email Input -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Email Input with Icon -->
    <div class="form-group">
      <label>Email</label>
      <div class="input-wrapper">
        <span class="icon">📧</span>
        <input type="email" disabled placeholder="olivia@memate.com" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Phone Number -->
    <div class="form-group">
      <label>Phone number</label>
      <div class="input-wrapper">
        <select>
          <option value="AU">AU</option>
          <option value="US">US</option>
        </select>
        <input type="tel" disabled placeholder="+1 (555) 000-0000" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>

    <!-- Sale Amount -->
    <div class="form-group">
      <label>Sale amount</label>
      <div class="input-wrapper">
        <span class="currency-symbol">$</span>
        <input type="text" disabled placeholder="1,000.00" />
      </div>
      <div class="hint">This is a hint text to help user.</div>
    </div>  




  </div>




      </div>
      
      
        `,
      },
      {
        id: 27,
        name: "Dropdowns",
        description: `
       <p>The primary MeMate logo features a modern and vibrant gradient, transitioning from blue to orange. This gradient reflects the brand's dynamic and versatile nature. The logo's clean, lowercase typography emphasizes approachability and friendliness, aligning with MeMate's mission to simplify business management.</p>
         <div class="inputBrandStyle">
          <div class="inputBrandStylegrid">
               <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/dropdowninput01.png" type="image/svg+xml"  alt="frame39531">
               <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/dropdowninput02.png" type="image/svg+xml"  alt="frame39531">
               <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/dropdowninput03.png" type="image/svg+xml"  alt="frame39531">
               <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/dropdowninput04.png" type="image/svg+xml"  alt="frame39531">
            </div>
         </div>
        `},
      
     
      {
        id: 28,
        name: "Textarea",
        description: `
       <p>The primary MeMate logo features a modern and vibrant gradient, transitioning from blue to orange. This gradient reflects the brand's dynamic and versatile nature. The logo's clean, lowercase typography emphasizes approachability and friendliness, aligning with MeMate's mission to simplify business management.</p>
      <div class="inputBrandStyle">
<div class="form-grid-brand-textarea">

  <!-- Empty Field -->
  <div class="form-group">
    <label>Description</label>
    <textarea disabled placeholder="Enter a description..."></textarea>
    <span class="hint-text">This is a hint text to help user.</span>
  </div>

  <!-- Empty Field with Error -->
  <div class="form-group error">
    <label>Description</label>
    <textarea disabled placeholder="Enter a description..."></textarea>
    <span class="hint-text error-message">This is an error message.</span>
  </div>

  <!-- Tags Input -->
  <div class="form-group">
    <label>Description</label>
    <div class="tags-input">
      <div class="tag">Design</div>
      <div class="tag">Software</div>
    </div>
    <span class="hint-text">This is a hint text to help user.</span>
  </div>

  <!-- Filled Field -->
  <div class="form-group">
    <label>Description</label>
    <textarea disabled class="filled">A little about the company and the team that you'll be working with.</textarea>
    <span class="hint-text">This is a hint text to help user.</span>
  </div>

  <!-- Filled Field with Error -->
  <div class="form-group error">
    <label>Description</label>
    <textarea disabled class="filled">A little about the company and the team that you'll be working with.</textarea>
    <span class="hint-text error-message">This is an error message.</span>
  </div>

  <!-- Tags Input Filled -->
  <div class="form-group">
    <label>Description</label>
    <div class="tags-input">
      <div class="tag">Design</div>
      <div class="tag">Software</div>
    </div>
    <span class="hint-text">This is a hint text to help user.</span>
  </div>

  <!-- Blue Border -->
  <div class="form-group">
    <label>Description</label>
    <textarea disabled class="filled border-blue">A little about the company and the team that you'll be working with.</textarea>
    <span class="hint-text">This is a hint text to help user.</span>
  </div>

  <!-- Blue Border with Error -->
  <div class="form-group error">
    <label>Description</label>
    <textarea disabled class="filled border-blue">A little about the company and the team that you'll be working with.</textarea>
    <span class="hint-text error-message">This is an error message.</span>
  </div>

  <!-- Tags Input Blue Border -->
  <div class="form-group">
    <label>Description</label>
    <div class="tags-input" style="border-color: #007bff;">
      <div class="tag">Design</div>
      <div class="tag">Software</div>
    </div>
    <span class="hint-text">This is a hint text to help user.</span>
  </div>

</div>

      </div>
        `},
        {
          id: 271,
          name: "Toggle",
          description: `
         <p>The primary MeMate logo features a modern and vibrant gradient, transitioning from blue to orange. This gradient reflects the brand's dynamic and versatile nature. The logo's clean, lowercase typography emphasizes approachability and friendliness, aligning with MeMate's mission to simplify business management.</p>
           <div class="inputBrandStyle">
            <div class="inputBrandStylegrid">
                 <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/brandtoggle01.png" type="image/svg+xml"  alt="frame39531">
                 <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/brandtoggle02.png" type="image/svg+xml"  alt="frame39531">
                 <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/brandtoggle03.png" type="image/svg+xml"  alt="frame39531">
                 <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/brandtoggle04.png" type="image/svg+xml"  alt="frame39531">
              </div>
           </div>
          `},
       
        {
          id: 272,
          name: "Alerts and Notifications",
          description: `
         <p>The primary MeMate logo features a modern and vibrant gradient, transitioning from blue to orange. This gradient reflects the brand's dynamic and versatile nature. The logo's clean, lowercase typography emphasizes approachability and friendliness, aligning with MeMate's mission to simplify business management.</p>
           <div class="inputBrandStyle">
            <div class="inputBrandStylegridalert">
                 <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/alertbrand01.png" type="image/svg+xml"  alt="frame39531">
                 <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/alertbrand02.png" type="image/svg+xml"  alt="frame39531">
              </div>
           </div>
          `},
        {
          id: 273,
          name: "Tooltips",
          description: `
         <p>The primary MeMate logo features a modern and vibrant gradient, transitioning from blue to orange. This gradient reflects the brand's dynamic and versatile nature. The logo's clean, lowercase typography emphasizes approachability and friendliness, aligning with MeMate's mission to simplify business management.</p>
           <div class="inputBrandStyle">
            <div class="inputBrandStylegridalert">
                 <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/brandtooltip01.png" type="image/svg+xml"  alt="frame39531">
                 <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/brandtooltip02.png" type="image/svg+xml"  alt="frame39531">
              </div>
           </div>
          `},
          {
            id: 274,
            name: "Upload",
            description: `
           <p>The primary MeMate logo features a modern and vibrant gradient, transitioning from blue to orange. This gradient reflects the brand's dynamic and versatile nature. The logo's clean, lowercase typography emphasizes approachability and friendliness, aligning with MeMate's mission to simplify business management.</p>
             <div class="inputBrandStyle">
              <div class="inputBrandStylegrid">
                   <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/brandupload01.png" type="image/svg+xml"  alt="frame39531">
                   <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/brandupload02.png" type="image/svg+xml"  alt="frame39531">
                   <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/brandupload03.png" type="image/svg+xml"  alt="frame39531">
                   <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/brandupload04.png" type="image/svg+xml"  alt="frame39531">
                </div>
             </div>
            `},
          {
            id: 275,
            name: "Progress Bar",
            description: `
           <p>The primary MeMate logo features a modern and vibrant gradient, transitioning from blue to orange. This gradient reflects the brand's dynamic and versatile nature. The logo's clean, lowercase typography emphasizes approachability and friendliness, aligning with MeMate's mission to simplify business management.</p>
             <div class="inputBrandStyle">
              <div class="inputBrandStylegridprogress">
                   <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/brandprogress01.png" type="image/svg+xml"  alt="frame39531">
                   <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/brandprogress02.png" type="image/svg+xml"  alt="frame39531">
                   <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/brandprogress03.png" type="image/svg+xml"  alt="frame39531">
                   <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/brandprogress04.png" type="image/svg+xml"  alt="frame39531">
                   <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/brandprogress05.png" type="image/svg+xml"  alt="frame39531">
                </div>
             </div>
            `},
            {
              id: 276,
              name: "Checkbox",
              description: `
             <p>The primary MeMate logo features a modern and vibrant gradient, transitioning from blue to orange. This gradient reflects the brand's dynamic and versatile nature. The logo's clean, lowercase typography emphasizes approachability and friendliness, aligning with MeMate's mission to simplify business management.
</p>
               <div class="inputBrandStyle">
                <div class="inputBrandStylegrid">
                     <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/checkboxbrand01.png" type="image/svg+xml"  alt="frame39531">
                     <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/New+Projcheckboxbrand02ect.png" type="image/svg+xml"  alt="frame39531">
                     <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/checkboxbrand03.png" type="image/svg+xml"  alt="frame39531">
                     <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/checkboxbrand04.png" type="image/svg+xml"  alt="frame39531">
                  </div>
               </div>
              `},
        {
          id: 29,
          name: "Shadows",
          description: `
         <p>The primary MeMate logo features a modern and vibrant gradient, transitioning from blue to orange. This gradient reflects the brand's dynamic and versatile nature. The logo's clean, lowercase typography emphasizes approachability and friendliness, aligning with MeMate's mission to simplify business management.</p>
         <div class="inputBrandStyle">
<div class="shadows-container-brand">
    <div class="column">
      <div class="label">xs</div>
      <div class="shadow-box shadow-xs"></div>
    </div>
    <div class="column">
      <div class="label">sm</div>
      <div class="shadow-box shadow-sm"></div>
    </div>
    <div class="column">
      <div class="label">md</div>
      <div class="shadow-box shadow-md"></div>
    </div>
    <div class="column">
      <div class="label">lg</div>
      <div class="shadow-box shadow-lg"></div>
    </div>
    <div class="column">
      <div class="label">xl</div>
      <div class="shadow-box shadow-xl"></div>
    </div>
    <div class="column">
      <div class="label">2xl</div>
      <div class="shadow-box shadow-2xl"></div>
    </div>
    <div class="column">
      <div class="label">3xl</div>
      <div class="shadow-box shadow-3xl"></div>
    </div>
  </div>

         </div>
          `},
    ],
  },

  {
    id: 9,
    name: "Brand Files",
    children: [
      {
        id: 91,
        name: "Logo files",
        description: `
     <ul class="brandFileGrid">
       <li>
       <span><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/Frame+39531.png" width="100%" alt="frame39531"></span>
       <span class="downloadFileGrid">
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/MeMateLogoColourVersionSVG.zip" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/FileType.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/MeMateLogoColourVersionPDF.zip" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/FileType+%281%29.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/MeMateLogoColourVersionJPG.zip" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/FileType+%282%29.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Logo+Colour+Version.ai" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/FileType+%283%29.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/MeMateLogoColourVersionPNG.zip" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/PNG.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Logo+Colour+Version.zip" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/FileType+%284%29.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
       </span>
       </li>
       <li>
       <span><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/frame427317985.png" width="100%" alt="frame427317985"></span>
       <span class="downloadFileGrid">
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/MeMateLogoMonochromeWhiteSVG.zip" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/FileType.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/MeMateLogoMonochromeWhitePDF.zip" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/FileType+%281%29.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/MeMateLogoMonochromeWhiteJPG.zip" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/FileType+%282%29.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Logo+Monochrome+White.ai" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/FileType+%283%29.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/MeMateLogoMonochromeWhitePNG.zip" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/PNG.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Logo+Monochrome+White.zip" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/FileType+%284%29.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
       </span>
       </li>
       <li>
       <span><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/group309.png" width="100%" alt="group309"></span>
       <span class="downloadFileGrid">
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/MeMateLogoMonochromeBlackSVG.zip" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/FileType.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/MeMateLogoMonochromeBlackPDF.zip" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/FileType+%281%29.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/MeMateLogoMonochromeBlackJPG.zip" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/FileType+%282%29.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Logo+Monochrome+Black.ai" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/FileType+%283%29.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/MeMateLogoMonochromeBlackPNG.zip" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/PNG.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Logo+Monochrome+Black.zip" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/FileType+%284%29.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
       </span>
       </li>
     </ul>
     `,
      },
      {
        id: 92,
        name: "Typography",
        description: `
 <div class="logofile-fonts">
      <h2>Sequel</h2>
      </br></br></br></br>
      <div class="logofile-fonts-img">
        <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/logofilefonts-3x.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/logofilefonts-2x.png 1200w,
             https://memate-website.s3.ap-southeast-2.amazonaws.com/media/logofilefonts-1x.png 1800w    
          "
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/logofilefonts-3x.png"
          alt="zeroScreenShot" />
          <div class="downloadFileGrid">
           <div class="DownloadFileList">
           <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Font.zip" download target="_blank">
           <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/FileType+%284%29.svg" type="image/svg+xml"  width="75%" alt="frame39531">
           <p>Download</p>
           </a>
           </div>
      
       </div>
        
   </div>

        `},
      {
        id: 93,
        name: "Banners",
        description: `
  <div class="logofile-fonts">
      <div class="logofile-fonts-img logofile-fonts-imgWrap">
        <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/banners-logo-brand3x.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/banners-logo-brand2x.png 1200w,
             https://memate-website.s3.ap-southeast-2.amazonaws.com/media/banners-logo-brand1x.png 1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/banners-logo-brand3x.png"
            alt="zeroScreenShot" />
            <div class="downloadFileGrid">
            <div class="DownloadFileList">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Banner+01.fig" download target="_blank">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
       </div>
   </div>

  <div class="logofile-fonts">
      <div class="logofile-fonts-img logofile-fonts-imgWrap">
        <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/allinoneplateformbrand3x.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/allinoneplateformbrand2x.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/allinoneplateformbrand1x.png 1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/allinoneplateformbrand3x.png"
            alt="zeroScreenShot" />
            <div class="downloadFileGrid">
            <div class="DownloadFileList">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Banner+02.fig" download target="_blank">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
       </div>
   </div>

     <div class="logofile-fonts">
      <div class="logofile-fonts-img logofile-fonts-imgWrap">
        <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark3x-1.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark2x-1.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark1x-1.png 1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark3x-1.png"
            alt="zeroScreenShot" />
            <div class="downloadFileGrid">
            <div class="DownloadFileList">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Banner+03.fig" download target="_blank">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
       </div>
   </div>

        <div class="logofile-fonts">
      <div class="logofile-fonts-img logofile-fonts-imgWrap">
        <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark3x-2.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark2x-2.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark1x-2.png 1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark3x-2.png"
            alt="zeroScreenShot" />
            <div class="downloadFileGrid">
            <div class="DownloadFileList">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Banner+04.fig" download target="_blank">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
       </div>
   </div>

    <div class="logofile-fonts">
      <div class="logofile-fonts-img logofile-fonts-imgWrap">
        <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark3x-3.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark2x-3.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark1x-3.png 1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark3x-3.png"
            alt="zeroScreenShot" />
            <div class="downloadFileGrid">
            <div class="DownloadFileList">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Banner+05.fig" download target="_blank">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
       </div>
   </div>

   <div class="logofile-fonts">
      <div class="logofile-fonts-img logofile-fonts-imgWrap">
        <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark3x-4.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark2x-4.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark1x-4.png 1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark3x-4.png"
            alt="zeroScreenShot" />
            <div class="downloadFileGrid">
            <div class="DownloadFileList">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Banner+06.fig" download target="_blank">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
       </div>
   </div>

    <div class="logofile-fonts">
      <div class="logofile-fonts-img logofile-fonts-imgWrap">
        <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark3x-5.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark2x-5.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark1x-5.png  1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark3x-4.png"
            alt="zeroScreenShot" />
            <div class="downloadFileGrid">
            <div class="DownloadFileList">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Banner+07.fig" download target="_blank">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
       </div>
   </div>

   <div class="logofile-fonts">
      <div class="logofile-fonts-img logofile-fonts-imgWrap">
        <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark3x-6.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark2x-6.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark1x-6.png  1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark3x-6.png"
            alt="zeroScreenShot" />
            <div class="downloadFileGrid">
            <div class="DownloadFileList">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Banner+08.fig" download target="_blank">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
       </div>
   </div>

   <div class="logofile-fonts">
      <div class="logofile-fonts-img logofile-fonts-imgWrap">
        <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark3x-7.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark2x-7.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark1x-7.png  1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/bannerdark3x-7.png"
            alt="zeroScreenShot" />
            <div class="downloadFileGrid">
            <div class="DownloadFileList">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Banner+09.fig" download target="_blank">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
       </div>
   </div>

        `},
        {
          id: 94,
          name: "Social Templates",
          description: `
<div class="logofile-fonts">
      <div class="logofile-fonts-img logofile-fonts-imgWrap">
         <div class="socialWrapperBrand">
         <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand2x-1.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand2x-1.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand1x-1.png  1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand2x-1.png"
            alt="zeroScreenShot" />
         <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand3x-2.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand2x-2.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand1x-2.png  1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand3x-2.png"
            alt="zeroScreenShot" />
         <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand3x-3.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand2x-3.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand1x-3.png  1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand3x-3.png"
            alt="zeroScreenShot" />
         <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand3x-4.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand2x-4.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand1x-4.png  1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand3x-4.png"
            alt="zeroScreenShot" />
         <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand3x-5.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand2x-5.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand1x-5.png  1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand3x-5.png"
            alt="zeroScreenShot" />
         <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand2x-6.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand2x-6.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand1x-6.png 1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand2x-6.png"
            alt="zeroScreenShot" />
         <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand3x-7.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand2x-7.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand1x-7.png 1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand3x-7.png"
            alt="zeroScreenShot" />
         <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand3x-8.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand2x-8.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand1x-8.png 1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediabrand3x-8.png"
            alt="zeroScreenShot" />
         
         </div>

            <div class="downloadFileGrid">
            <div class="DownloadFileList">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Social+Media.fig" download target="_blank">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
       </div>
   </div>
          `
        },
        {
          id: 95,
          name: "Email Signature",
          description: `
    <div class="logofile-fonts logofile-fontsemailS">
      <div class="logofile-fonts-img logofile-fonts-imgWrap">
        <img
          srcSet="
            https://res.cloudinary.com/dn0jqjad3/image/upload/v1744970050/emailsignature3x_a003sz.png 600w,
            https://res.cloudinary.com/dn0jqjad3/image/upload/v1744970050/emailsignature2x_dpx6h5.png 1200w,
            https://res.cloudinary.com/dn0jqjad3/image/upload/v1744970049/emailsignature1x_wk4llu.png 1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744970050/emailsignature3x_a003sz.png"
            alt="zeroScreenShot" />
            <div class="downloadFileGrid">
            <div class="DownloadFileList">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/MeMate+Email+Signature.fig" download target="_blank">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
       </div>
   </div>
          `
        },
        {
          id: 96,
          name: "Letterhead",
          description: `
 <div class="logofile-fonts logofile-fontscom letterheadG">
      <div class="logofile-fonts-img logofile-fonts-imgWrap">
        <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/companyletterhead3x.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/companyletterhead2x.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/companyletterhead1x.png 1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/companyletterhead3x.png"
            alt="zeroScreenShot" />
            <div class="downloadFileGrid">
            <div class="DownloadFileList DownloadFileList1">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/letterheadFIG.zip" download target="_blank"> 
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg"  type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/letterheadPDF.zip" download target="_blank">
            <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/FileType+%281%29.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
       </div>
   </div>
          `
        },
        {
          id: 97,
          name: "LinkedIn",
          description: `
  <div class="logofile-fonts logofile-fontscom linkedInG">
      <div class="logofile-fonts-img logofile-fonts-imgWrap">
        <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmedialinkdin3x.png 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmedialinkdin1x.png 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmedialinkdin1x.png 1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmedialinkdin3x.png"
            alt="zeroScreenShot" />
            <div class="downloadFileGrid">
            <div class="DownloadFileList DownloadFileList1">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/linkedin-coverFIG.zip" download target="_blank">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a> 
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/linkedin-coverPNG.zip" download target="_blank">
            <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/PNG.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
       </div>
   </div>
     <div class="logofile-fonts logofile-fontscom">
      <div class="logofile-fonts-img logofile-fonts-imgWrap">
        <div class="bg">
         <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/mematedarklogo.svg 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/mematedarklogo.svg 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/mematedarklogo.svg  1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/mematedarklogo.svg"
            alt="zeroScreenShot" />
        </div>
            <div class="downloadFileGrid">
            <div class="DownloadFileList DownloadFileList1">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/linkedin-profileFIG.zip" download target="_blank">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </a>
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/linkedin-profilePNG.zip" download target="_blank">
            <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/PNG.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
       </div>
   </div>
          `
        },
        {
          id: 98,
          name: "Facebook",
          description: `
          <div class="logofile-fonts logofile-fontscom facebookG">
          <div class="logofile-fonts-img logofile-fonts-imgWrap">
            <img
              srcSet="
                https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediafacebook3x.png 600w,
                https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediafacebook2x.png 1200w,
                https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediafacebook1x.png 1800w"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/socialmediafacebook3x.png"
                alt="zeroScreenShot" />
                <div class="downloadFileGrid">
                <div class="DownloadFileList DownloadFileList1">
                <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/facebookFIG.zip" download target="_blank">
                <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
                <p>Download</p>
                </a>
                <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/facebookPNG.zip" download target="_blank">
                <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/PNG.svg" type="image/svg+xml"  width="75%" alt="frame39531">
                <p>Download</p>
                </a>
                </div>
           </div>
       </div>
         <div class="logofile-fonts logofile-fontscom">
      <div class="logofile-fonts-img logofile-fonts-imgWrap">
        <div class="bg">
         <img
          srcSet="
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/mematedarklogo.svg 600w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/mematedarklogo.svg 1200w,
            https://memate-website.s3.ap-southeast-2.amazonaws.com/media/mematedarklogo.svg  1800w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/mematedarklogo.svg"
            alt="zeroScreenShot" />
        </div>
            <div class="downloadFileGrid">
            <div class="DownloadFileList DownloadFileList1">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/facebook-profileFIG.zip" download target="_blank">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </a>
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/facebook-profilePNG.zip" download="facebook-profile.png" target="_blank">
            <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/PNG.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
       </div>
   </div>
          `
        },
        {
          id: 99,
          name: "Icons",
          description: `
          <div class="logofile-fonts logofile-fontscom facebookG">
          <div class="logofile-fonts-img logofile-fonts-imgWrap">
            <img
              srcSet="
                 https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/icon1x.png 600w,
                https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/icons2x.png 1200w,
                https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/icon1x.png  1800w"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/icon1x.png"
                alt="Memate Icons" />
                <div class="downloadFileGrid">
              
                <div class="downloadFileGrid">
            <div class="DownloadFileList">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/memate-brand-icons.fig" download target="_blank">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
              </div> 
           </div>
       </div>

          <div class="logofile-fonts logofile-fontscom facebookG">
          <div class="logofile-fonts-img logofile-fonts-imgWrap">
            <img
              srcSet="
                https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/iconsdark1x.png 600w,
                https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/iconsdark2x.png 1200w,
                https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/iconsdark3x.png  1800w"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/iconsdark1x.png"
                alt="Memate Icons" />
                <div class="downloadFileGrid">
              
                <div class="downloadFileGrid">
            <div class="DownloadFileList">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/memate-brand-icons-dark.fig" download target="_blank">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
              </div> 
           </div>
       </div>

          <div class="logofile-fonts logofile-fontscom facebookG">
          <div class="logofile-fonts-img logofile-fonts-imgWrap">
            <img
              srcSet="
                https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/iconslight1x.png 600w,
                https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/iconsligh2x.png 1200w,
                hhttps://memate-website.s3.ap-southeast-2.amazonaws.com/assets/iconslight3x.png  1800w"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/iconslight1x.png"
                alt="Memate Icons" />
                <div class="downloadFileGrid">
              
                <div class="downloadFileGrid">
            <div class="DownloadFileList">
            <a href="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/memate-brand-icons-light.fig" download target="_blank">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1744963180/PDF_ln4p1m.svg" type="image/svg+xml"  width="75%" alt="frame39531">
            <p>Download</p>
            </a>
            </div>
              </div> 
           </div>
       </div>
      
          `
        },
      
     
    ],
  },
];

const MiddleSection = () => {
  const pathname = usePathname();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [knowledge, setKnowledge] = useState([]);
  const [activeItem, setActiveItem] = useState(knowledgeData[0]?.id);
  const [activeChild, setActiveChild] = useState(null);

  const observerRef = useRef(null);
  const initialized = useRef(false);
  useEffect(() => {
    setKnowledge(knowledgeData);
    // setActiveItem(0);
    // setKnowledge(0);
  }, []);

  useEffect(() => {
    if (knowledge.length === 0) return;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id.split("-")[1];
          const ids = entry.target.id.split("-");
          const childId = Number(ids[3]);
          setActiveChild(childId);
          setActiveItem(Number(id));

          if (initialized.current) {
            // window.history.replaceState(null, null, `#section-${id}`);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-14% 0px -40% 0px",
      threshold: 0.2,
    });

    const headings = document.querySelectorAll(".b-section-heading");
    headings.forEach((heading) => observerRef.current.observe(heading));

    requestAnimationFrame(() => {
      const firstVisible = Array.from(headings).find((heading) => {
        const rect = heading.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.5;
      });

      setActiveItem(
        firstVisible
          ? Number(firstVisible.id.split("-")[1])
          : knowledgeData[0].id
      );
      initialized.current = true;
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [knowledge]);

  // const handleClick = (id) => {
  //   setActiveItem(id);
  // };
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Helmet>
        <title>Brand</title>
        <meta property="og:title" content="brand" />
        <meta property="og:description" content="" />
      </Helmet>
      <div className="kb-wrapper memate-brand-wrap">
  <div className="mobileSideBarAction">
  <button onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? "Hide Sections" : "Show Sections"}
</button>

{isOpen && (
  <div className="kb-left-wrapper1 kb-tos-wrapper1 heightProvier">
    {knowledge.map((item) => (
      <ul className="kb-list" key={item.id}>
        <li
          className={`kb-list-item1 ${
            activeItem === item.id ? "kb-list-item-active1" : ""
          }`}
        >
          <Link
            to={`section-${item.id}`}
            smooth={true}
            offset={-100}
            duration={500}
            onSetActive={() => {
              setActiveItem(item.id);
              setActiveChild(null);
            }}
            className="ssSBDisFont fontSize16"
          >
            {item.name}
          </Link>
        </li>

        {activeItem === item.id && item.children && (
          <ul className="nested-tabs">
            {item.children.map((child) => (
              <li
                key={child.id}
                className={`nested-tab ${
                  activeChild === child.id ? "active" : ""
                }`}
              >
                <Link
                  to={`section-${item.id}-child-${child.id}`}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => {
                    setActiveChild(child.id);
                  }}
                >
                  {child.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </ul>
    ))}
  </div>
)}
  </div>

<div className="kb-left-wrapper1 desktopSideBarAction kb-tos-wrapper1 heightProvier">
    {knowledge.map((item) => (
      <ul className="kb-list" key={item.id}>
        <li
          className={`kb-list-item1 ${
            activeItem === item.id ? "kb-list-item-active1" : ""
          }`}
        >
          <Link
            to={`section-${item.id}`}
            smooth={true}
            offset={-100}
            duration={500}
            onSetActive={() => {
              setActiveItem(item.id);
              setActiveChild(null);
            }}
            className="ssSBDisFont fontSize16"
          >
            {item.name}
          </Link>
        </li>

        {activeItem === item.id && item.children && (
          <ul className={`nested-tabs nested-tabs${item.id}`}>
            {item.children.map((child) => (
              <li
                key={child.id}
                className={`nested-tab ${
                  activeChild === child.id ? "active" : ""
                }`}
              >
                <Link
                  to={`section-${item.id}-child-${child.id}`}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => {
                    setActiveChild(child.id);
                  }}
                >
                  {child.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </ul>
    ))}
  </div>

        <div className="kb-right-wrapper memate-brand-right">
          {knowledge.map((item) => (
            <div className="kb-right-section" key={item.id}>
              <h1
                className="ssSBDisFont fontSize42 b-section-headingMain"
                id={`section-${item.id}`}
              >
                {item.name}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
              {/* Nested tabs content */}
              {item.children &&
                item.children.map((child) => (
                  <div key={child.id}>
                    <h2
                      className="fontSize24 b-section-heading"
                      id={`section-${item.id}-child-${child.id}`}
                    >
                      {child.name}
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{ __html: child.description }}
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MiddleSection;
