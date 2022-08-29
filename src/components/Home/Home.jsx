import React, {useEffect} from 'react'
import "./Home.css"
import * as Three from 'three';
import moonImage from "../../Images/moon.jpg"; //for moon 
import venusImage from '../../Images/venus.jpg'; // venus planet
import spaceImage from '../../Images/stars-2643089.jpg'; //space 
import {Typography} from '@mui/material';
import TimeLine from '../TimeLine/TimeLine';
import space from "../../Images/space-1661685679472-4919.jpg"
import {
    SiCplusplus,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs,
  } from "react-icons/si";
import YoutubeCard from '../YoutubeCard/YoutubeCard';

  // import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
// let OrbitControls = require('three/examples/jsm/controls/OrbitControls');


const Home = () => {


    useEffect(() => {

        const textureLoader = new Three.TextureLoader();
        const moonTexture = textureLoader.load(moonImage);
        const venusTexture = textureLoader.load(venusImage);
        const spaceTexture = textureLoader.load(spaceImage);
        
        const scene = new Three.Scene();
        const camera = new Three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        const canvas = document.querySelector(".homeCanvas");
        const renderer = new Three.WebGLRenderer({canvas : canvas}); //when property and value are same just pass name onle {canvas}

        //for moon 
        const moonGeometry = new Three.SphereGeometry(2, 64, 64)
        const moonMaterial = new Three.MeshStandardMaterial({map : moonTexture}) //now this respond to light // after texturing material becomes moon
        const moon = new Three.Mesh(moonGeometry, moonMaterial);

        //for venus
        const venusGeometry = new Three.SphereGeometry(3, 64, 64)
        const venusMaterial = new Three.MeshBasicMaterial({map : venusTexture}) //now this respond to light // after texturing material becomes moon
        const venus = new Three.Mesh(venusGeometry, venusMaterial);


        //providing light
        const pointLight = new Three.PointLight(0xffffff, 1);
        const pointLight2 = new Three.PointLight(0xffffff, 0.1);
        pointLight.position.set(8, 5, 5);
        pointLight2.position.set(-8, -5, -5);
        // const lightHelper = new Three.PointLightHelper(pointLight); //create a 3D figure to show where light is main focusing on it
        
        // const controls = new OrbitControls(camera, renderer.domElement);
        
        
        scene.add(moon);
        scene.add(pointLight);
        scene.add(pointLight2);
        scene.add(venus);
        scene.background = spaceTexture;
        // scene.add(lightHelper);


        venus.position.set(8, 5, 5);
        // mesh.rotation.y = 1;// this line to be recursive so that tha mesh will rotate ...not working (loop in here because )
        camera.position.set(4, 4, 8);
        
        // Rotation according to Mouse hover (clock or anti-clock ... in vertical or horzanatal)
        const constSpeed = 0.01;
        window.addEventListener("mousemove",(e)=>{
            if (e.clientX <= window.innerWidth /2){
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;
            }
            
            if (e.clientX > window.innerWidth/2){
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
            }

            if (e.clientY > window.innerHeight/2){
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;
            }
            
            if (e.clientY <= window.innerHeight/2){
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
            }
        });
        
        
        //recursion 
        const animate = () => {
            requestAnimationFrame(animate);
            moon.rotation.y += 0.001;
            venus.rotation.y += 0.001;
            renderer.setSize(window.innerWidth,window.innerHeight);
            renderer.render(scene,camera);
        }
        animate();
    }, []);

  return (
    <div className="home">
        <canvas className="homeCanvas"></canvas>

        <div className="homeContainer">
            <Typography variant="h3">TIMELINE</Typography>
            <TimeLine timelines={[1,2,3,4]} />
        </div>

        <div className="homeSkills">
            <Typography variant="h3">SKILLS</Typography>
            <div className="homeCubeSkills">
                <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                    <img src="https://media.istockphoto.com/photos/fantastic-corridor-under-neon-lights-3d-illustration-picture-id1181568875?k=20&amp;m=1181568875&amp;s=612x612&amp;w=0&amp;h=kT-nX9mF2G9S08MBwFZ3O7A-fZdLwFER7_H3HpWD5Qk=" alt="Face1" />
                </div>

                <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                    <img src="https://media.istockphoto.com/photos/fiber-optic-cable-style-abstract-design-3d-illustration-picture-id965450526?k=20&amp;m=965450526&amp;s=612x612&amp;w=0&amp;h=35ve9tUkRWxPPd09ZDhUny1l2_lJY-Ia4U-d4zmeXxw=" alt="Face2" />
                </div>

                <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                    <img src="https://media.istockphoto.com/photos/nebula-elements-of-this-image-furnished-by-nasa-picture-id472506038?k=20&m=472506038&s=612x612&w=0&h=W3Gop2opWwPs5MNo1I3bL38gbnrUHnRvGkKIoaMqewI=" alt="Face3" />
                </div>

                <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                    <img src="https://media.istockphoto.com/photos/planets-and-galaxies-science-fiction-wallpaper-picture-id984045694?k=20&amp;m=984045694&amp;s=612x612&amp;w=0&amp;h=Vw13XlV6KlxLYNa5GytjP0isuIQrbv8cDI9CDj6BlZ0=" alt="Face4" />
                </div>

                <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                    <img src="https://media.istockphoto.com/photos/nebula-elements-of-this-image-furnished-by-nasa-picture-id472506038?k=20&amp;m=472506038&amp;s=612x612&amp;w=0&amp;h=W3Gop2opWwPs5MNo1I3bL38gbnrUHnRvGkKIoaMqewI=" alt="Face5" />
                </div>

                <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                    <img src={space} alt="Face6" />
                </div>                
            </div>
            <div className="cubeShadow"></div>
            <div className="homeSkillBox">
                <SiCplusplus/>
                <SiReact/>
                <SiJavascript/>
                <SiMongodb/>
                <SiNodedotjs/>
                <SiExpress/>
                <SiCss3/>
                <SiHtml5/>
                <SiThreedotjs/>
            </div>
        </div>
        <div className = "homeYoutube">
            <Typography variant="h3">YOUTUBE VIDEOS</Typography>
            <div className="homeYoutubeWrapper">
                <YoutubeCard image="https://media.istockphoto.com/photos/nebula-elements-of-this-image-furnished-by-nasa-picture-id472506038?k=20&amp;m=472506038&amp;s=612x612&amp;w=0&amp;h=W3Gop2opWwPs5MNo1I3bL38gbnrUHnRvGkKIoaMqewI=" title="Sample Video"/>
                <YoutubeCard image="https://media.istockphoto.com/photos/nebula-elements-of-this-image-furnished-by-nasa-picture-id472506038?k=20&amp;m=472506038&amp;s=612x612&amp;w=0&amp;h=W3Gop2opWwPs5MNo1I3bL38gbnrUHnRvGkKIoaMqewI=" title="Sample Video"/>
                <YoutubeCard image="https://media.istockphoto.com/photos/nebula-elements-of-this-image-furnished-by-nasa-picture-id472506038?k=20&amp;m=472506038&amp;s=612x612&amp;w=0&amp;h=W3Gop2opWwPs5MNo1I3bL38gbnrUHnRvGkKIoaMqewI=" title="Sample Video"/>
                <YoutubeCard image="https://media.istockphoto.com/photos/nebula-elements-of-this-image-furnished-by-nasa-picture-id472506038?k=20&amp;m=472506038&amp;s=612x612&amp;w=0&amp;h=W3Gop2opWwPs5MNo1I3bL38gbnrUHnRvGkKIoaMqewI=" title="Sample Video"/>
            </div>
        </div>

    </div>
  );
};

export default Home;