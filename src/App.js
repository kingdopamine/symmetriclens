import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './components/Nav/Nav'
import ArticleGallery from './components/ArticleGallery/ArticleGallery'
import SearchPage from './components/SearchPage/SearchPage'
import Clothing from './components/Clothing/Clothing'
import Footwear from './components/Footwear/Footwear'
import Accessories from './components/Accessories/Accessories'

import SL2005008 from './components/Articles/2020/05/008/SL2005008'
import img055 from './components/Articles/2020/05/008/symmetriclens-end-clarks-wallabee-collaboration-1.jpg'
import SL2001013 from './components/Articles/2020/01/013/SL2001013'
import img054 from './components/Articles/2020/01/013/symmetriclens-reebok-kenzo-minami-zig-kinetica-r58-2020-1.jpg'
import SL2001012 from './components/Articles/2020/01/012/SL2001012'
import img053 from './components/Articles/2020/01/012/symmetriclens-browns-stone-island-1.jpg'
import SL2001011 from './components/Articles/2020/01/011/SL2001011'
import img052 from './components/Articles/2020/01/011/symmetriclens-ambush-matchesfashion-ss20-1.jpg'
import SL2001010 from './components/Articles/2020/01/010/SL2001010'
import img051 from './components/Articles/2020/01/010/symmetriclens-end-converse-chuck-70-hi-jack-purcell-1.jpg'
import SL2001009 from './components/Articles/2020/01/009/SL2001009'
import img050 from './components/Articles/2020/01/009/symmetriclens-reebok-kenzo-minami-instapump-fury-2020-1.jpg'
import SL2001008 from './components/Articles/2020/01/008/SL2001008'
import img049 from './components/Articles/2020/01/008/symmetriclens-ymc-asics-tarther-og-1.jpg'
import SL2001007 from './components/Articles/2020/01/007/SL2001007'
import img048 from './components/Articles/2020/01/007/symmetriclens-ymc-you-must-create-ss20-1.jpg'
import SL2001006 from './components/Articles/2020/01/006/SL2001006'
import img047 from './components/Articles/2020/01/006/symmetriclens-sunspel-beams-45r-n-hoolywood-1.jpg'
import SL2001005 from './components/Articles/2020/01/005/SL2001005'
import img046 from './components/Articles/2020/01/005/symmetriclens-maharishi-year-of-the-rat-1.jpg'
import SL2001004 from './components/Articles/2020/01/004/SL2001004'
import img045 from './components/Articles/2020/01/004/symmetriclens-maharishi-nike-air-max-720-1.jpg'
import SL2001003 from './components/Articles/2020/01/003/SL2001003'
import img044 from './components/Articles/2020/01/003/symmetriclens-alxander-mcqueen-chelsea-boots-1.jpg'
import SL2001002 from './components/Articles/2020/01/002/SL2001002'
import img043 from './components/Articles/2020/01/002/symmetriclens-alexander-mcqueen-fw20-fall-winter-2020-1.jpg'
import SL2001001 from './components/Articles/2020/01/001/SL2001001'
import img042 from './components/Articles/2020/01/001/symmetriclens-alexander-mcqueen-3d-ss20-trainers-1.jpg'
import SL2002013 from './components/Articles/2020/02/013/SL2002013'
import img041 from './components/Articles/2020/02/013/symmetriclens-a-cold-wall-ss20-trainers-1.jpg'
import SL2002012 from './components/Articles/2020/02/012/SL2002012'
import img040 from './components/Articles/2020/02/012/symmetriclens-vivienne-westwood-orb-pendant-1.jpg'
import SL2002011 from './components/Articles/2020/02/011/SL2002011'
import img039 from './components/Articles/2020/02/011/symmetriclens-browns-the-dan-life-squirtle-1.jpg'
import SL2002010 from './components/Articles/2020/02/010/SL2002010'
import img038 from './components/Articles/2020/02/010/symmetriclens-reebok-end-mercury-1.jpg'
import SL2002009 from './components/Articles/2020/02/009/SL2002009'
import img037 from './components/Articles/2020/02/009/symmetriclens-maharishi-ss20-1.jpg'
import SL2002008 from './components/Articles/2020/02/008/SL2002008'
import img036 from './components/Articles/2020/02/008/symmetriclens-mackintosh-jil-sander-1.jpg'
import SL2002007 from './components/Articles/2020/02/007/SL2002007'
import img035 from './components/Articles/2020/02/007/symmetriclens-craig-green-ssense-capsule-1.jpg'
import SL2002006 from './components/Articles/2020/02/006/SL2002006'
import img034 from './components/Articles/2020/02/006/symmetriclens-adidas-craig-green-polta-akh-ii-1.jpg'
import SL2002005 from './components/Articles/2020/02/005/SL2002005'
import img033 from './components/Articles/2020/02/005/symmetriclens-garbstore-nanamica-gor-tex-coat-1.jpg'
import SL2002004 from './components/Articles/2020/02/004/SL2002004'
import img032 from './components/Articles/2020/02/004/symmetric-lens-garbstore-ss20-1.jpg'
import SL2002003 from './components/Articles/2020/02/003/SL2002003'
import img031 from './components/Articles/2020/02/003/symmetriclens-barbour-kaptain-sunshine-1.jpg'
import SL2002002 from './components/Articles/2020/02/002/SL2002002'
import img030 from './components/Articles/2020/02/002/symmetriclens-barbour-engineered-garment-ss20-1.jpg'
import SL2002001 from './components/Articles/2020/02/001/SL2002001'
import img029 from './components/Articles/2020/02/001/symmetriclens-a-cold-wall-tote-bag-1.jpg'
import SL2003010 from './components/Articles/2020/03/010/SL2003010'
import img028 from './components/Articles/2020/03/010/symmetriclens-craig-green-adidas-graddfa-akh-kamanda-1.jpg'
import SL2003009 from './components/Articles/2020/03/009/SL2003009'
import img027 from './components/Articles/2020/03/009/symmetriclens-raf-simons-fred-perry-ss20-1.jpg'
import SL2003008 from './components/Articles/2020/03/008/SL2003008'
import img026 from './components/Articles/2020/03/008/symmetriclens-reebok-eastlogue-dmx-trail-shadow-1.jpg'
import SL2003007 from './components/Articles/2020/03/007/SL2003007'
import img025 from './components/Articles/2020/03/007/symmetriclens-vivienne-westwood-penis-carabiner.jpg'
import SL2003006 from './components/Articles/2020/03/006/SL2003006'
import img024 from './components/Articles/2020/03/006/symmetriclens-paul-smith-red-ear-ss20-1.jpg'
import SL2003005 from './components/Articles/2020/03/005/SL2003005'
import img023 from './components/Articles/2020/03/005/symmetriclens-nigel-cabourn-mihara-yasuhiro-M-47-french-military-army-combat-shoe-1.jpg'
import SL2003004 from './components/Articles/2020/03/004/SL2003004'
import img022 from './components/Articles/2020/03/004/symmetriclens-maharishi-andy-warhol-foundation-tate-modern-1.jpg'
import SL2003003 from './components/Articles/2020/03/003/SL2003003'
import img021 from './components/Articles/2020/03/003/symmetriclens-john-smedley-fragment-desgin-sea-island-cotton-1.jpg'
import SL2003002 from './components/Articles/2020/03/002/SL2003002'
import img020 from './components/Articles/2020/03/002/symmetriclens-reebok-cottweiler-zig-3d-storm-5.jpg'
import SL2003001 from './components/Articles/2020/03/001/SL2003001'
import img019 from './components/Articles/2020/03/001/symmetriclens-a-cold-wall-retrosuperfuture-sunglasses-1.jpg'
import SL2004009 from './components/Articles/2020/04/009/SL2004009'
import img018 from './components/Articles/2020/04/009/symmetriclens-asymmetric-hoodie-jersey-collection-0.jpg'
import SL2004008 from './components/Articles/2020/04/008/SL2004008'
import img017 from './components/Articles/2020/04/008/symmetriclens-a-cold-wall-shirting-1.jpg'
import SL2004007 from './components/Articles/2020/04/007/SL2004007'
import img016 from './components/Articles/2020/04/007/symmetriclens-vivienne-westwood-engraved-ring-1.jpg'
import SL2004006 from './components/Articles/2020/04/006/SL2004006'
import img015 from './components/Articles/2020/04/006/symmetriclens-ahluwalia-matchesfashion-capsule-collection-1.jpg'
import SL2004005 from './components/Articles/2020/04/005/SL2004005'
import img014 from './components/Articles/2020/04/005/symmetriclens-reebok-mountain-research-dmx-trail-shadow-6.jpg'
import SL2004004 from './components/Articles/2020/04/004/SL2004004'
import img013 from './components/Articles/2020/04/004/symmetriclens-nigel-cabour-element-cricket-collaboration-1.jpg'
import SL2004003 from './components/Articles/2020/04/003/SL2004003'
import img012 from './components/Articles/2020/04/003/symmetriclens-maharishi-spring-summer-2020-lookbook-3.jpg'
import SL2004002 from './components/Articles/2020/04/002/SL2004002'
import img011 from './components/Articles/2020/04/002/symmetriclens-a-cold-wall-loungewear-1.jpg'
//import SL2005007 from './components/Articles/2020/05/007/SL2005007'
//import img010 from './components/Articles/2020/05/007/symmetriclens-maharishi-teach-yeah-year-of-the-rat-10.jpg'
import SL2005006 from './components/Articles/2020/05/006/SL2005006'
import img009 from './components/Articles/2020/05/006/symmetriclens-reebok-kohei-okita-eightyone-4.jpg'
import SL2005005 from './components/Articles/2020/05/005/SL2005005'
import img008 from './components/Articles/2020/05/005/symmetriclens-vetements-reebok-spike-runner-2-1.jpg'
import SL2005003 from './components/Articles/2020/05/003/SL2005003'
import img006 from './components/Articles/2020/05/003/symmetriclens-reebok-classics-victoria-beckham-1.jpg'
import SL2005002 from './components/Articles/2020/05/002/SL2005002'
import img005 from './components/Articles/2020/05/002/symmetriclens-jw-anderson-tubular-knitwear-1.jpg'
import SL2005001 from './components/Articles/2020/05/001/SL2005001'
import img004 from './components/Articles/2020/05/001/symmetriclens-supreme-barbour-1.jpg'
import SL2004001 from './components/Articles/2020/04/001/SL2004001'
import img003 from './components/Articles/2020/04/001/symmetriclens-burberry-reburberry-2.jpg'
import SL1812001 from './components/Articles/2018/12/001/SL1812001'
import img002 from './components/Articles/2018/12/001/symmetriclens-vivienne-westwood-burberry-capsule-collection-1.jpg'
import SL1807001 from './components/Articles/2018/07/001/SL1807001'
import img001 from './components/Articles/2018/07/001/symmetriclens-vivienne-westwood-riccardo-tisci-2.jpg'



class App extends React.Component{

  

  constructor(props){
    
    super(props)
    //URL should just be keywords
    this.state={
      articles:[
        {   
          id:SL2005008,
          title:`END. x Clarks: new Wallabees`,
          subtitle:`Native-American inspired`,
          image:img055,
          URL:`/article/end-clarks-wallabees-20200525`,
          brands:['END','END.','Clarks'],
          category:['Footwear'],
          date: new Date("2020-05-25").toDateString()
        },
        {   
          id:SL2005006,
          title:`Reebok x Kohei Okita, second drop for the "Reebok eightyone" collection`,
          subtitle:`Distintcly urban aesthetic`,
          image:img009,
          URL:`/article/reebok-kohei-okita-eightyone-20200522`,
          brands:['Reebok','Kohei Okita'],
          category:['clothing', 'Footwear'],
          date: new Date("2020-05-22").toDateString()
        },
        {   
          id:SL2005001,
          title:`Barbour x Supreme Spring 2020 capsule collection`,
          subtitle:`Featuring barbour's iconic waxed cotton jackets`,
          image:img004,
          URL:`/article/burberry-reburberry-sustainable-ecological-20200522`,
          brands:['Barbour','Supreme'],
          category:['clothing'],
          date: new Date("2020-05-22").toDateString()
        },
        {   
          id:SL2005005,
          title:`Vetements x Reebok is back, this time with the Spike Runner 2 silhouette`,
          subtitle:`The latest in an ongoing collaboration`,
          image:img008,
          URL:`/article/vetements-reebok-sprint-runner-2-20200522`,
          brands:['Vetements','Reebok'],
          category:['footwear'],
          date: new Date("2020-05-22").toDateString()
        },
        {   
          id:SL2005002,
          title:`JW Anderson's SS20 experimental cut-out knitwear is now available`,
          subtitle:`A multi-coloured statement piece`,
          image:img005,
          URL:`/article/jw-anderson-tubular-knitwear-20200514`,
          brands:['JW Anderson'],
          category:['clothing'],
          date: new Date("2020-05-14").toDateString()
        },
        {   
          id:SL2005003,
          title:`A new Reebok Classic inspired release in collaboration with Victoria Beckham`,
          subtitle:`Premium leather uppers`,
          image:img006,
          URL:`/article/reebok-classics-victoria-beckham-20200505`,
          brands:['Reebok','Victoria Beckham'],
          category:['footwear'],
          date: new Date("2020-05-05").toDateString()
        },
        {   
          id:SL2004001,
          title:`Burberry launches a collection of sustainably produced products called "ReBurberry"`,
          subtitle:`Nylon from recycled fishing nets`,
          image:img003,
          URL:`/article/burberry-reburberry-sustainable-ecological-20200422`,
          brands:['Burberry'],
          category:['clothing'],
          date: new Date("2020-04-22").toDateString()
        },
        {   
          id:SL2004006,
          title:`Ahluwalia drops collection exclusive to MATCHESFASHION`,
          subtitle:`Made from reclaimed fabrics`,
          image:img015,
          URL:`/article/ahluwalia-matchesfashion-exclusive-capsule-collection-20200422`,
          brands:['Ahluwalia','MATCHESFASHION'],
          category:['clothing'],
          date: new Date("2020-04-22").toDateString()
        },
        {   
          id:SL2004009,
          title:`A-COLD-WALL* Asymmetric hoodie and jersey collection`,
          subtitle:`Hand-applied brush stroke bleach effect`,
          image:img018,
          URL:`/article/a-cold-wall-asymmetric-hoodie-jersey-collection-20200421`,
          brands:['A COLD WALL'],
          category:['clothing'],
          date: new Date("2020-04-21").toDateString()
        },
        {   
          id:SL2004002,
          title:`A-COLD-WALL*’s new loungewear collection release`,
          subtitle:`Solarised Rust and Onyx Black`,
          image:img011,
          URL:`/article/a-cold-wall-loungewear-20200414`,
          brands:['A Cold Wall'],
          category:['clothing'],
          date: new Date("2020-04-14").toDateString()
        },
        {   
          id:SL2004005,
          title:`Reebok x Mountain Research, together again`,
          subtitle:`Anarchy in the mountains`,
          image:img014,
          URL:`/article/reebok-mountain-research-dmx-trail-shadow-20200410`,
          brands:['Reebok', 'Mountain Research'],
          category:['footwear'],
          date: new Date("2020-04-10").toDateString()
        },
        {   
          id:SL2004003,
          title:`Maharishi Spring Summer 2020 lookbook release`,
          subtitle:`Shot in Miami`,
          image:img012,
          URL:`/article/maharishi-summer-lookbook-2020-20200409`,
          brands:['Maharishi'],
          category:['clothing'],
          date: new Date("2020-04-09").toDateString()
        },
        {   
          id:SL2004007,
          title:`Vivienne Westwood releases new ring design`,
          subtitle:`Gold-tone and Gunmetal`,
          image:img016,
          URL:`/article/vivienne-westwood-new ring-20200408`,
          brands:['Vivienne Westwood'],
          category:['accessories'],
          date: new Date("2020-04-08").toDateString()
        },
        {   
          id:SL2004008,
          title:`A-COLD-WALL* Shirting collection`,
          subtitle:`Features a metal-hardware rhombus shaped badge`,
          image:img017,
          URL:`/article/a-cold-wall-shirting-collection-20200402`,
          brands:['A COLD WALL'],
          category:['clothing'],
          date: new Date("2020-04-02").toDateString()
        },
        {   
          id:SL2004004,
          title:`Nigel Cabourn and Element come together to create a cricket inspired collection`,
          subtitle:`Reversible argyle`,
          image:img013,
          URL:`/article/nigel-cabourn-element-skateboards-cricket-collection-20200401`,
          brands:['Nigel Cabourn', 'Element'],
          category:['clothing'],
          date: new Date("2020-04-01").toDateString()
        },
        {   
          id:SL2003002,
          title:`Reebok and Cottweiler ‘Zig 3D Storm’ collaboration`,
          subtitle:`Two British heavy-weights`,
          image:img020,
          URL:`/article/reebok-cottweiler-zig-3d-storm-20200321`,
          brands:['Reebok', 'Cottweiler'],
          category:['footwear'],
          date: new Date("2020-03-21").toDateString()
        },
        {   
          id:SL2003001,
          title:`A-COLD-WALL* x RETROSUPERFUTURE Sunglasses collaboration`,
          subtitle:`Marble and pebble matte Italian acetate`,
          image:img019,
          URL:`/article/a-cold-wall-retrosuperfuture-collaboration-sunglasses-20200320`,
          brands:['A COLD WALL', 'RETROSUPERFUTURE'],
          category:['accessories'],
          date: new Date("2020-03-20").toDateString()
        },
        {   
          id:SL2003009,
          title:`Raf Simons x Fred Perry SS20 collection`,
          subtitle:`Inspired by Gavin Watson`,
          image:img027,
          URL:`/article/raf-simons-fred-prerry-ss20-20200319`,
          brands:['Raf Simons', 'Fred Perry'],
          category:['clothing'],
          date: new Date("2020-03-19").toDateString()
        },
        {   
          id:SL2003003,
          title:`John Smedley and Fragment design collaborate of a Sea Island Cotton t-shirt pack`,
          subtitle:`Made in England`,
          image:img021,
          URL:`/article/john-smedley-fragment-design-sea-island-cotton-20200319`,
          brands:['A COLD WALL', 'RETROSUPERFUTURE'],
          category:['clothing'],
          date: new Date("2020-03-19").toDateString()
        },
        {   
          id:SL2003004,
          title:`Maharishi x Andy Warhol Foundation x Tate Modern`,
          subtitle:`Focusing on Warhols 1976 Skull series`,
          image:img022,
          URL:`/article/maharishi-andy-warhol-foundation-tate-modern-20200318`,
          brands:['Maharishi', 'Andy Warhol', 'Tate Modern'],
          category:['clothing'],
          date: new Date("2020-03-18").toDateString()
        },
        {   
          id:SL2003006,
          title:`Paul Smith Red Ear SS20 collection release`,
          subtitle:`Japanese craftsmanship`,
          image:img024,
          URL:`/article/paul-smith-red-ear-ss20-20200316`,
          brands:['Paul Smith'],
          category:['clothing'],
          date: new Date("2020-03-16").toDateString()
        },
        {   
          id:SL2003008,
          title:`Reebok first collaboration with Eastlogue; the DMX Trail Shadow`,
          subtitle:`Inspired by the MA-1 bomber jacket`,
          image:img026,
          URL:`/article/reebok-eastlogue-dmx-trail-shadow-20200314`,
          brands:['Reebok','Eastlogue'],
          category:['footwear'],
          date: new Date("2020-03-14").toDateString()
        },
        {   
          id:SL2003007,
          title:`Vivienne Westwood’s phallic key-ring carabiner`,
          subtitle:`Features the iconic orb`,
          image:img025,
          URL:`/article/vivienne-westwood-penis-carabiner-20200311`,
          brands:['Vivienne Westwood'],
          category:['accessories'],
          date: new Date("2020-03-11").toDateString()
        },
        {   
          id:SL2003005,
          title:`Nigel Cabourn x Mihara Yasuhiro, Army Combat Shoe release`,
          subtitle:`Inspired by the French military M-47`,
          image:img023,
          URL:`/article/nigel-cabourn-mihara-yasuhiro-20200310`,
          brands:['Nigel Cabourn', 'Mihara Yasuhiro'],
          category:['footwear'],
          date: new Date("2020-03-10").toDateString()
        },
        {   
          id:SL2003010,
          title:`Craig Green x Adidas Graddfa AKH SS20`,
          subtitle:`Based on the Kamanda silhouette`,
          image:img028,
          URL:`/article/craig-green-adidas-20200302`,
          brands:['Craig Green', 'Adidas'],
          category:['footwear'],
          date: new Date("2020-03-02").toDateString()
        },
        {   
          id:SL2002001,
          title:`A-COLD-WALL* pipe wrapped tote bag`,
          subtitle:`A very modernist aesthetic`,
          image:img029,
          URL:`/article/a-cold-wall-tote-bag-20200227`,
          brands:['A COLD WALL'],
          category:['accessories'],
          date: new Date("2020-02-27").toDateString()
        },
        {   
          id:SL2002004,
          title:`Garbstore Spring Summer 2020 collection`,
          subtitle:`Japanese Cordura`,
          image:img032,
          URL:`/article/garbstore-ss20-collection-20200225`,
          brands:['Garbstore'],
          category:['clothing'],
          date: new Date("2020-02-25").toDateString()
        },
        {   
          id:SL2002012,
          title:`3 new Vivienne Westwood orb logo pendants`,
          subtitle:`Featuring Swarvoski crystals`,
          image:img040,
          URL:`/article/vivienne-westwood-orb-pendant-20200225`,
          brands:['Vivienne Westwood'],
          category:['accessories'],
          date: new Date("2020-02-25").toDateString()
        },
        {   
          id:SL2002013,
          title:`A-COLD-WALL* SS20 Trainers`,
          subtitle:`Named after the french architect Charles-Édouard Jeanneret`,
          image:img041,
          URL:`/article/a-cold-wall-ss20-trainers-20200225`,
          brands:['A-Cold-Wall'],
          category:['footwear'],
          date: new Date("2020-02-25").toDateString()
        },
        {   
          id:SL2002006,
          title:`Craig Green x Adidas; Polta Akh II`,
          subtitle:`Exclusive to Dover Street Market`,
          image:img034,
          URL:`/article/craig-green-adidas-polta-akh-ii-20200224`,
          brands:['Craig Green', 'Adidas'],
          category:['footwear'],
          date: new Date("2020-02-24").toDateString()
        },
        {   
          id:SL2002005,
          title:`Garbstore x Nanamica GOR-TEX coat`,
          subtitle:`A-line cut`,
          image:img033,
          URL:`/article/garbstore-nanamica-gor-tex-coat-20200219`,
          brands:['Garbstore','Nanamica'],
          category:['clothing'],
          date: new Date("2020-02-19").toDateString()
        },
        {   
          id:SL2002011,
          title:`Browns x The Dan Life Squirtle Necklace`,
          subtitle:`Hand-set Swarovski crystals`,
          image:img039,
          URL:`/article/browns-the-dan-life-20200218`,
          brands:['Browns','The Dan Life'],
          category:['accessories'],
          date: new Date("2020-02-18").toDateString()
        },
        {   
          id:SL2002009,
          title:`Maharishi Spring Summer 2020`,
          subtitle:`2020 viewed from the 90’s`,
          image:img037,
          URL:`/article/maharishi-spring-summer-2020-20200217`,
          brands:['Maharishi'],
          category:['clothing'],
          date: new Date("2020-02-17").toDateString()
        },
        {   
          id:SL2002010,
          title:`Reebok x END. Mercury Trainers`,
          subtitle:`Futuristic Silver`,
          image:img038,
          URL:`/article/reebok-end-mercury-trainers-20200217`,
          brands:['Reebok','END.'],
          category:['footwear'],
          date: new Date("2020-02-17").toDateString()
        },
        {   
          id:SL2002007,
          title:`Craig Green x SSENSE capsule collection`,
          subtitle:`Embroidered orange silk satin panels`,
          image:img035,
          URL:`/article/craig-green-ssense-capsule-20200215`,
          brands:['Craig Green','SSENSE'],
          category:['clothing'],
          date: new Date("2020-02-15").toDateString()
        },
        {   
          id:SL2002003,
          title:`Barbour x KAPTAIN SUNSHINE waxed parrafin parkas`,
          subtitle:`Infused with Shinsuke Kojima’s aesthetic`,
          image:img031,
          URL:`/article/barbour-kaptain-sunshine-20200213`,
          brands:['Barbour','KAPTAIN SUNSHINE'],
          category:['clothing'],
          date: new Date("2020-02-13").toDateString()
        },
        {   
          id:SL2002008,
          title:`Mackintosh x Jil Sander+ SS20 collection`,
          subtitle:`Prioritising comfort and authenticity`,
          image:img036,
          URL:`/article/mackintosh-jil-sander-ss20-20200213`,
          brands:['Mackintosh','Jil Sander'],
          category:['clothing'],
          date: new Date("2020-02-13").toDateString()
        },
        {   
          id:SL2002002,
          title:`Barbour x Engineered Garments SS20 Capsule collection`,
          subtitle:`Spring/Summer 2020`,
          image:img030,
          URL:`/article/barbour-engineered-garments-ss20-20200204`,
          brands:['Barbour','Engineered Garments'],
          category:['clothing'],
          date: new Date("2020-02-04").toDateString()
        },
        {   
          id:SL2001007,
          title:`YMC SS20 Lookbook`,
          subtitle:`Waxed cotton hunter parka`,
          image:img048,
          URL:`/article/ymc-ss20-lookbook-20200130`,
          brands:['YMC','You Must Create'],
          category:['clothing'],
          date: new Date("2020-01-30").toDateString()
        },
        {   
          id:SL2001006,
          title:`Sunspel x BEAMS x 45R x N.HOOLYWOOD`,
          subtitle:`Celebrating a 60 year relationship with Japan`,
          image:img047,
          URL:`/article/sunspel-beams-45r-n-hoolywood-20200130`,
          brands:['Sunspel','BEAMS','45R','N.HOOLYWOOD'],
          category:['clothing'],
          date: new Date("2020-01-30").toDateString()
        },
        {   
          id:SL2001012,
          title:`Stone Island x Browns capsule`,
          subtitle:`Blue Camouflage Parka`,
          image:img053,
          URL:`/article/stone-island-browns-20200130`,
          brands:['Stone Island','Browns'],
          category:['clothing'],
          date: new Date("2020-01-30").toDateString()
        },
        {   
          id:SL2001004,
          title:`Maharishi x Nike: Air Max 720`,
          subtitle:`Nike By You`,
          image:img045,
          URL:`/article/maharishi-nike-trainer-20200128`,
          brands:['Maharishi','Nike'],
          category:['footwear'],
          date: new Date("2020-01-28").toDateString()
        },
        {   
          id:SL2001010,
          title:`END. x Converse: Chuck 70 Hi, Jack Purcell`,
          subtitle:`Inspired their London flagship blueprint plans`,
          image:img051,
          URL:`/article/end-converse-chuck-70-jack-purcell-20200127`,
          brands:['Converse','END','END.'],
          category:['footwear'],
          date: new Date("2020-01-27").toDateString()
        },
        {   
          id:SL2001001,
          title:`Alexander McQueen SS20 trainers`,
          subtitle:`3D-effect on uppers’ heel`,
          image:img042,
          URL:`/article/alexander-mcqueen-ss20-trainers-20200122`,
          brands:['Alexander McQueen'],
          category:['footwear'],
          date: new Date("2020-01-22").toDateString()
        },
        {   
          id:SL2001013,
          title:`Reebok x Kenzo Minami: Zig Kinetica R58`,
          subtitle:`Warping Spacetime`,
          image:img054,
          URL:`/article/reebok-kenzo-zig-kinetica-r58-20200116`,
          brands:['Reebok','Kenzo Minami'],
          category:['footwear'],
          date: new Date("2020-01-16").toDateString()
        },
        {   
          id:SL2001005,
          title:`Maharishi: Year of the Rat collection`,
          subtitle:`A creature well-respected in the East for its skill and resourcefulness, as one of nature’s greatest survivors`,
          image:img046,
          URL:`/article/maharishi-year-of-the-rat-20200115`,
          brands:['Maharishi'],
          category:['clothing'],
          date: new Date("2020-01-15").toDateString()
        },
        {   
          id:SL2001002,
          title:`Alexander McQueen FW20 Lookbook`,
          subtitle:`Inspired by Henry Moore`,
          image:img043,
          URL:`/article/alexander-mcqueen-fw20-lookbook-20200113`,
          brands:['Alexander McQueen'],
          category:['footwear'],
          date: new Date("2020-01-13").toDateString()
        },
        {   
          id:SL2001009,
          title:`Kenzo Minami x Reebok: Instapump Fury`,
          subtitle:`Reflectins Minami’s proclivity towards intricate patterns`,
          image:img050,
          URL:`/article/kenzo-minami-reebok-instapump-fury-20200109`,
          brands:['Kenzo Minami','Reebok'],
          category:['footwear'],
          date: new Date("2020-01-09").toDateString()
        },
        {   
          id:SL2001011,
          title:`MATCHESFASHION x AMBUSH: exclusive capsule`,
          subtitle:`Bold gradient colours`,
          image:img052,
          URL:`/article/matchesfashion-ambush-capsule-20200109`,
          brands:['MATCHESFASHION','AMBUSH'],
          category:['clothing'],
          date: new Date("2020-01-09").toDateString()
        },
        {   
          id:SL2001003,
          title:`Alexander McQueen Chelsea Boots`,
          subtitle:`Silver-toned studs`,
          image:img044,
          URL:`/article/alexander-mcqueen-chelsea-boots-20200105`,
          brands:['Alexander McQueen'],
          category:['footwear'],
          date: new Date("2020-01-05").toDateString()
        },
        {   
          id:SL2001008,
          title:`YMC x ASICS: Tarther Og`,
          subtitle:`Leather laces and Ikat prints`,
          image:img049,
          URL:`/article/ymc-you-must-create-asics-tarther-og-20200103`,
          brands:['YMC','You Must Create','ASICS'],
          category:['footwear'],
          date: new Date("2020-01-03").toDateString()
        }/*,
          {   
            id:SL1812001,
            title:'The Burberry x Vivienne Westwood capsule collection has now been revealed',
            subtitle:'Includes customised t-shirts to be auctioned',
            image:img002,
            URL:`/article/burberry-vivienne-westwood-capsule-collection-collaboration-20181206`,
            brands:['Vivienne Westwood','Burberry'],
            category:['clothing'],
            date: new Date("2018-12-06").toDateString()
          },
          {   
              id:SL1807001,
              title:'Riccardo Tisci announces new Burberry Collaboration with Vivienne Westwood',
              subtitle:'"The original British Punk"',
              image:img001,
              URL:`/article/riccardo-tisci-burberry-vivienne-westwood-collaboration-20180706`,
              brands:['Vivienne Westwood','Burberry','Riccardo Tisci'],
              category:['clothing'],
              date: new Date("2018-07-06").toDateString()
          }*/
      ]
  }


  }



/*The route path renders the articlegallery component, i.e; the homepage picture tiles that link to the
corresponding article. We then map through the array above, each index is an object with information 
corresponding to a different article. We use this information to ensure a url is created for each article
and that the url renders the appropriate component, i.e., the corresponding article   */
render(){
  
  
  return (
    <Router>
      <div className="App">
        <Nav/>
          <Switch>
            <Route exact path="/" render={()=> <ArticleGallery articles={this.state.articles}/>}/>
            <Route exact path="/clothing" render={()=> <Clothing articles={this.state.articles}/>}/>
            <Route exact path="/footwear" render={()=> <Footwear articles={this.state.articles}/>}/>
            <Route exact path="/accessories" render={()=> <Accessories articles={this.state.articles}/>}/>
            <Route path="/search" render={props => <SearchPage articles={this.state.articles} {...props} />}/>
            {this.state.articles.map((articlelink) => {
              return (<Route path={articlelink.URL} exact component={articlelink.id} />)
            })}

            
        </Switch>
      </div>
    </Router>
  );

}


}

export default App;

