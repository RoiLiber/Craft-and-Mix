//==== CAROUSEL ===============================================
import logo from '../../assets/icon/logos/Crift & Mix_logo icon.svg';
import aboutUs from "../../assets/img/carousel/About us.jpeg";
import ourServices from "../../assets/img/carousel/Our Services.jpeg";
import ourMood from "../../assets/img/carousel/Mode.jpeg";
import onTheMenu from "../../assets/img/carousel/On the Menu.jpeg";

//==== MOOD PHOTOS ============================================
import porim1 from '../../assets/img/mood/porim p&p/photo1.jpeg';
import porim2 from '../../assets/img/mood/porim p&p/photo2.jpeg';
import milk1 from '../../assets/img/mood/milk/photo1.jpeg';
import milk2 from '../../assets/img/mood/milk/photo2.jpeg';
import kingDavid1 from '../../assets/img/mood/king-david/photo1.jpeg';
import kingDavid2 from '../../assets/img/mood/king-david/photo2.jpeg';
import google1 from '../../assets/img/mood/google/photo1.jpeg';
import google2 from '../../assets/img/mood/google/photo2.jpeg';
import iDontKnow1 from '../../assets/img/mood/at i dont know/photo1.jpeg';
import iDontKnow2 from '../../assets/img/mood/at i dont know/photo2.jpeg';
import iDontKnow3 from '../../assets/img/mood/at i dont know/photo3.jpeg';
import bachelorette1  from '../../assets/img/mood/bachelorette cocktail vila/photo1.jpeg';
import bachelorette2  from '../../assets/img/mood/bachelorette cocktail vila/photo2.jpeg';
import bachelorette3  from '../../assets/img/mood/bachelorette cocktail vila/photo3.jpeg';
import bachelorette4  from '../../assets/img/mood/bachelorette cocktail vila/photo4.jpeg';
import bachelorette5  from '../../assets/img/mood/bachelorette cocktail vila/photo5.jpeg';
import martini1 from '../../assets/img/mood/martini on the roof/photo1.jpeg';
import mezcal1 from '../../assets/img/mood/mezcal compassion/photo1.jpeg';
import mezcal2 from '../../assets/img/mood/mezcal compassion/photo2.jpeg';
import mezcal3 from '../../assets/img/mood/mezcal compassion/photo3.jpeg';
import mezcal4 from '../../assets/img/mood/mezcal compassion/photo4.jpeg';
import mezcal5 from '../../assets/img/mood/mezcal compassion/photo5.jpeg';
import greyGoose1 from '../../assets/img/mood/grey-goose/photo1.jpeg';
import greyGoose2 from '../../assets/img/mood/grey-goose/photo2.jpeg';
import greyGoose3 from '../../assets/img/mood/grey-goose/photo3.jpeg';
import greyGoose4 from '../../assets/img/mood/grey-goose/photo4.jpeg';
import greyGoose5 from '../../assets/img/mood/grey-goose/photo5.jpeg';
import greyGoose6 from '../../assets/img/mood/grey-goose/photo6.jpeg';
import greyGoose7 from '../../assets/img/mood/grey-goose/photo7.jpeg';
import greyGoose8 from '../../assets/img/mood/grey-goose/photo8.jpeg';
import greyGoose9 from '../../assets/img/mood/grey-goose/photo9.jpeg';
import makingGoodShit1 from '../../assets/img/mood/we love making good shit/photo1.jpeg';
import makingGoodShit2 from '../../assets/img/mood/we love making good shit/photo2.jpeg';
import noon1 from '../../assets/img/mood/on the roof top noon/photo1.jpeg';
import noon2 from '../../assets/img/mood/on the roof top noon/photo2.jpeg';
import night1 from '../../assets/img/mood/on the roof top night/photo1.jpeg';
import night2 from '../../assets/img/mood/on the roof top night/photo2.jpeg';
import night3 from '../../assets/img/mood/on the roof top night/photo3.jpeg';
import night4 from '../../assets/img/mood/on the roof top night/photo4.jpeg';
import night5 from '../../assets/img/mood/on the roof top night/photo5.jpeg';
import night6 from '../../assets/img/mood/on the roof top night/photo6.jpeg';
import mood1 from '../../assets/img/mood/mood/photo1.jpeg';
import mood2 from '../../assets/img/mood/mood/photo2.jpeg';
import mood3 from '../../assets/img/mood/mood/photo3.jpeg';
import mood4 from '../../assets/img/mood/mood/photo4.jpeg';
import mood5 from '../../assets/img/mood/mood/photo5.jpeg';
import nina1 from '../../assets/img/mood/anglo & nina/photo1.jpeg';
import nina2 from '../../assets/img/mood/anglo & nina/photo2.jpeg';
import nina3 from '../../assets/img/mood/anglo & nina/photo3.jpeg';
import nina4 from '../../assets/img/mood/anglo & nina/photo4.jpeg';
import nina5 from '../../assets/img/mood/anglo & nina/photo5.jpeg';
import nina6 from '../../assets/img/mood/anglo & nina/photo6.jpeg';
import orange1 from '../../assets/img/mood/orange/photo1.jpeg';

//==== CLIENTS ================================================
import louisVuitton from '../../assets/icon/clients-site logos/louisVuitton.png';
import morris from '../../assets/icon/clients-site logos/morris.png';
import goose from '../../assets/icon/clients-site logos/greyGoose.png';
import milk from '../../assets/icon/clients-site logos/m&h.png';
import audi from '../../assets/icon/clients-site logos/audi-logo.png';
import alfa from '../../assets/icon/clients-site logos/alfa.png';
import mobileye from '../../assets/icon/clients-site logos/mobileye.svg.png';
import google from '../../assets/icon/clients-site logos/google.png';
//=============================================================

export const menuList = [
    { text: 'Our Services', elementName: 'ourServices' },
    { text: 'Mood', elementName: 'mood' },
    { text: 'Happy Clients', elementName: 'clients' },
    { text: 'Contact us', elementName: 'contactUs' },
];

export const topCarousel = [
    { text: 'Created by- Asaf Amir,|' +
            'CRAFT & MIX- is set to give you|' +
            'the best cocktail and bar|' +
            'experience you can get!', img: aboutUs, backgroundColor: 'gold' },
    { text: 'Our top priority is|' +
            'professional and kind service|' +
            'next to deep|' +
            'mixology creativity|' +
            'and fancy cocktails.', img: ourServices, backgroundColor: 'black' },
    { text: 'We give services to|' +
            'private clients,|' +
            'business companies,|' +
            'bars and restaurants.', img: ourMood, backgroundColor: 'gold' },
    { text: logo, img: onTheMenu, backgroundColor: 'black' }
];

export const moodPhotos = [
    { location: 'Triple Orange love', photos: [ orange1 ] },
    { location: 'We love Anglo&Nina and Jaffa more', photos: [ nina1, nina2, nina3,nina4, nina5, nina6 ] },
    { location: 'Rothschild Mood at night', photos: [ mood1, mood2, mood3, mood4, mood5 ] },
    { location: 'but Rothschild is Beautiful at night', photos: [ night1, night2, night3, night4, night5, night6 ] },
    { location: 'Rothschild is nice from the roof at noon', photos: [ noon1, noon2 ] },
    { location: 'We just make good shit like', photos: [ makingGoodShit1, makingGoodShit2 ] },
    { location: 'New Goose eve', photos: [ greyGoose1, greyGoose2, greyGoose3, greyGoose4, greyGoose5, greyGoose6, greyGoose7, greyGoose8, greyGoose9 ] },
    { location: 'Mezcal compassion', photos: [ mezcal1, mezcal2, mezcal3, mezcal4, mezcal5 ] },
    { location: 'Martini1 Tlv', photos: [ martini1 ] },
    { location: 'Bachelorette & Cocktails, We think you know her', photos: [ bachelorette1, bachelorette2, bachelorette3, bachelorette4, bachelorette5 ] },
    { location: 'I Dont Know', photos: [ iDontKnow1, iDontKnow2, iDontKnow3 ] },
    { location: 'A Cloud with a taste, Google', photos: [ google1, google2 ] },
    { location: 'King David family event', photos: [ kingDavid1, kingDavid2 ] },
    { location: 'Milk & Honey event', photos: [ milk1, milk2 ] },
    { location: 'Porim p&p', photos: [ porim1, porim2 ] },
];

export const clients = [
    { name: 'louisVuitton', logo: louisVuitton, delay: 100 },
    { name: 'morris', logo: morris, delay: 200 },
    { name: 'goose', logo: goose, delay: 300 },
    { name: 'milk', logo: milk, delay: 400 },
    { name: 'audi', logo: audi, delay: 500 },
    { name: 'alfa', logo: alfa, delay: 600 },
    { name: 'mobileye', logo: mobileye, delay: 700 },
    { name: 'google', logo: google, delay: 800 },
];
