import React, {useEffect} from 'react'
import "./Home.css"
import * as Three from 'three';
const Home = () => {


    useEffect(() => {

        const scene = new Three.Scene();
        const camera = new Three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        const canvas = document.querySelector(".homeCanvas");
        const renderer = new Three.WebGLRenderer({canvas : canvas}); //when property and value are same just pass name onle {canvas}


        const geometry = new Three.BoxGeometry(1, 1, 1)//cube basically(len, brd, depth) for cuboid change parameter
        const material = new Three.MeshBasicMaterial({color : 0x00ff00})
        const mesh = new Three.Mesh(geometry, material);
        scene.add(mesh);

        // mesh.rotation.y = 1;// this line to be recursive so that tha mesh will rotate ...not working (loop in here because )
        // camera.position.z = 5;

        renderer.setSize(window.innerWidth,window.innerHeight);
        renderer.render(scene,camera);


    }, [])
  return (
    <div className="home">
        <canvas className="homeCanvas"></canvas>
    </div>
  );
};

export default Home;