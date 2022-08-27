import React, {useEffect} from 'react'
import "./Home.css"
import * as Three from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
// let OrbitControls = require('three/examples/jsm/controls/OrbitControls');
import moonImage from "../../Images/moon.jpg"; //for moon 
import venusImage from '../../Images/venus.jpg'; // venus planet
const Home = () => {


    useEffect(() => {

        const textureLoader = new Three.TextureLoader();
        const moonTexture = textureLoader.load(moonImage);
        const venusTexture = textureLoader.load(venusImage);
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
        
        const controls = new OrbitControls(camera, renderer.domElement);
        
        
        scene.add(moon);
        scene.add(pointLight);
        // scene.add(lightHelper);
        scene.add(pointLight2);
        scene.add(venus);
        venus.position.set(8, 5, 5);
        // mesh.rotation.y = 1;// this line to be recursive so that tha mesh will rotate ...not working (loop in here because )
        camera.position.set(4, 4, 8);
        //recursion 
        const animate = () => {
            requestAnimationFrame(animate);
            moon.rotation.y += 0.01;
            renderer.setSize(window.innerWidth,window.innerHeight);
            renderer.render(scene,camera);
        }
        animate();
    }, []);

  return (
    <div className="home">
        <canvas className="homeCanvas"></canvas>
    </div>
  );
};

export default Home;