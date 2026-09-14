import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import earthDayMap from '../assets/earth_atmos_2048.jpg';
import earthCloudsMap from '../assets/earth_clouds_1024.png';

/**
 * WorldConnectingGlobe
 * Photorealistic 3D Real Earth Globe using Three.js with NASA textures,
 * realistic clouds, subtle atmospheric glow, and global connecting arcs.
 * Sized to fit perfectly within the container without clipping.
 * Zero country or city text names. Pure visual global connectivity.
 */
export default function WorldConnectingGlobe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth || 400;
    let height = mount.clientHeight || 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    // Camera placed directly centered along Z-axis looking at origin
    camera.position.set(0, 0, 7.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    mount.appendChild(renderer.domElement);

    // Globe Group for rotation and interaction
    const globeGroup = new THREE.Group();
    globeGroup.rotation.x = 0.22;
    globeGroup.rotation.y = 1.35;
    scene.add(globeGroup);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(earthDayMap);
    earthTexture.colorSpace = THREE.SRGBColorSpace;

    const cloudsTexture = textureLoader.load(earthCloudsMap);

    // Radius calibrated so the full Earth and outer arcs fit comfortably within the frame
    const radius = 1.58;

    // 1. Earth Sphere Mesh
    const earthGeo = new THREE.SphereGeometry(radius, 64, 64);
    const earthMat = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.62,
      metalness: 0.08,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    globeGroup.add(earthMesh);

    // 2. Realistic Cloud Layer Mesh
    const cloudsGeo = new THREE.SphereGeometry(radius * 1.012, 64, 64);
    const cloudsMat = new THREE.MeshStandardMaterial({
      map: cloudsTexture,
      transparent: true,
      opacity: 0.38,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const cloudsMesh = new THREE.Mesh(cloudsGeo, cloudsMat);
    globeGroup.add(cloudsMesh);

    // 3. Subtle Atmospheric Rim Glow (Fresnel outer halo)
    const atmosphereGeo = new THREE.SphereGeometry(radius * 1.12, 48, 48);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.64 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.6);
          gl_FragColor = vec4(0.24, 0.58, 0.98, 1.0) * intensity * 0.7;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    globeGroup.add(atmosphereMesh);

    // Coordinate to 3D Vector converter (Equirectangular)
    const latLongToVec3 = (lat, lon, r, alt = 0) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      const totalR = r + alt;
      return new THREE.Vector3(
        -(totalR * Math.sin(phi) * Math.cos(theta)),
        totalR * Math.cos(phi),
        totalR * Math.sin(phi) * Math.sin(theta)
      );
    };

    // Major World Connection Hub Coordinates (Zero Country or City Names Shown)
    const hubs = [
      { lat: 6.9271, lon: 79.8612 },   // Colombo (South Asia)
      { lat: 51.5074, lon: -0.1278 },  // London (UK)
      { lat: 40.7128, lon: -74.006 },   // New York (US East)
      { lat: 37.7749, lon: -122.4194 },// San Francisco (US West)
      { lat: 1.3521, lon: 103.8198 },  // Singapore (APAC)
      { lat: 25.2048, lon: 55.2708 },  // Dubai (Middle East)
      { lat: -33.8688, lon: 151.2093 },// Sydney (Australia)
      { lat: 35.6762, lon: 139.6503 }, // Tokyo (Japan)
      { lat: 50.1109, lon: 8.6821 },   // Frankfurt (Europe)
      { lat: -26.2041, lon: 28.0473 }, // Johannesburg (Africa)
      { lat: -23.5505, lon: -46.6333 },// São Paulo (South America)
    ];

    // Surface Beacon Nodes (Glowing pulsing points on the globe surface)
    const beaconRings = [];
    const ringGeo = new THREE.RingGeometry(0.02, 0.046, 24);
    const dotGeo = new THREE.SphereGeometry(0.025, 16, 16);
    const beaconDotMat = new THREE.MeshBasicMaterial({ color: 0x38BDF8 });

    hubs.forEach((hub) => {
      const pos = latLongToVec3(hub.lat, hub.lon, radius, 0.01);
      const normal = pos.clone().normalize();

      // Core Dot
      const dot = new THREE.Mesh(dotGeo, beaconDotMat);
      dot.position.copy(pos);
      globeGroup.add(dot);

      // Pulsing outer ripple ring
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x60A5FA,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos);
      ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
      globeGroup.add(ring);

      beaconRings.push({ ring, pulseOffset: Math.random() * Math.PI * 2 });
    });

    // Connecting Great-Circle Arcs
    const connections = [
      [0, 1], // Colombo - London
      [0, 4], // Colombo - Singapore
      [0, 5], // Colombo - Dubai
      [0, 6], // Colombo - Sydney
      [0, 7], // Colombo - Tokyo
      [1, 2], // London - New York
      [2, 3], // New York - San Francisco
      [1, 8], // London - Frankfurt
      [4, 7], // Singapore - Tokyo
      [4, 6], // Singapore - Sydney
      [5, 9], // Dubai - Johannesburg
      [2, 10], // New York - São Paulo
      [3, 7], // San Francisco - Tokyo
    ];

    const animatedArcs = [];
    const photonGeo = new THREE.SphereGeometry(0.034, 16, 16);

    connections.forEach(([i1, i2], idx) => {
      const p1 = latLongToVec3(hubs[i1].lat, hubs[i1].lon, radius, 0.012);
      const p2 = latLongToVec3(hubs[i2].lat, hubs[i2].lon, radius, 0.012);

      // Midpoint lifted outward in 3D space
      const dist = p1.distanceTo(p2);
      const mid = p1.clone().add(p2).multiplyScalar(0.5);
      const archHeight = radius * (0.16 + Math.min(dist * 0.1, 0.28));
      mid.normalize().multiplyScalar(radius + archHeight);

      // Smooth 3D Bezier curve
      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const curvePoints = curve.getPoints(40);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);

      // Glowing curved connection path
      const arcMat = new THREE.LineBasicMaterial({
        color: idx % 2 === 0 ? 0x3B82F6 : 0x6366F1,
        transparent: true,
        opacity: 0.65,
      });
      const line = new THREE.Line(arcGeo, arcMat);
      globeGroup.add(line);

      // Traveling glowing photon / data packet
      const photonMat = new THREE.MeshBasicMaterial({
        color: 0x93C5FD,
        transparent: true,
        opacity: 0.95,
      });
      const photon = new THREE.Mesh(photonGeo, photonMat);
      globeGroup.add(photon);

      animatedArcs.push({
        curve,
        photon,
        progress: Math.random(),
        speed: 0.0035 + Math.random() * 0.003,
      });
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.55);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.6);
    sunLight.position.set(5, 3, 4);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x93c5fd, 0.75);
    rimLight.position.set(-5, -2, -3);
    scene.add(rimLight);

    // Mouse & Touch Drag Interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let velX = 0;
    let velY = 0;

    const onPointerDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      velX = 0;
      velY = 0;
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouseX;
      const dy = e.clientY - prevMouseY;
      velX = dx * 0.005;
      velY = dy * 0.005;
      globeGroup.rotation.y += velX;
      globeGroup.rotation.x = Math.max(-0.6, Math.min(0.6, globeGroup.rotation.x + velY));
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Animation Loop
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      // Continuous rotation with smooth damping
      if (!isDragging) {
        velX *= 0.95;
        velY *= 0.95;
        globeGroup.rotation.y += 0.0022 + velX;
        globeGroup.rotation.x = Math.max(-0.6, Math.min(0.6, globeGroup.rotation.x + velY));
      }

      // Clouds rotate slightly faster for dynamic realism
      cloudsMesh.rotation.y += 0.0007;

      // Animate travelling photons along connection arcs
      animatedArcs.forEach((arc) => {
        arc.progress = (arc.progress + arc.speed) % 1;
        const pos = arc.curve.getPoint(arc.progress);
        arc.photon.position.copy(pos);
        const scale = 1 + Math.sin(arc.progress * Math.PI) * 0.35;
        arc.photon.scale.set(scale, scale, scale);
      });

      // Animate surface pulsing beacon rings
      beaconRings.forEach((b) => {
        const p = (Math.sin(time * 3 + b.pulseOffset) + 1) * 0.5;
        const s = 1 + p * 1.5;
        b.ring.scale.set(s, s, s);
        b.ring.material.opacity = 0.8 * (1 - p * 0.7);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      dom.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="world-connecting-container"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 'min(430px, 88vw)',
        aspectRatio: '1 / 1',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab',
        userSelect: 'none',
        touchAction: 'pan-y',
      }}
    >
      {/* Soft Ambient Light Glow Behind Globe */}
      <div
        style={{
          position: 'absolute',
          width: '82%',
          height: '82%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.16) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 72%)',
          filter: 'blur(35px)',
          pointerEvents: 'none',
        }}
      />

      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      />
    </div>
  );
}
