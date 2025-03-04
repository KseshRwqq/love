// Three.js + физика  
const stars = new THREE.Points(geometry, new THREE.PointsMaterial({size: 0.1}));  
scene.add(stars);  

document.addEventListener('scroll', () => {  
  if (window.scrollY > 5000) {  
    stars.geometry.vertices.forEach(vertex => {  
      vertex.multiplyScalar(Math.random() * 10); // Имитация взрыва  
    });  
  }  
});  