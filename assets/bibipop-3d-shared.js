(function(scope){
 'use strict';
 function deform(x,y,z,amount=1,contact){
  const t=Math.max(0,Math.min(1,(y-.20)/2.45));
  const weight=Math.sin(Math.PI*t)**2;
  const phi=Math.atan2(x,z),axis=contact?.angle??.12;
  const centre=Math.max(.25,Math.min(2.62,contact?.height??1.43));
  const frontAngle=Math.atan2(Math.sin(phi-axis),Math.cos(phi-axis));
  const rearAngle=Math.atan2(Math.sin(phi-axis-Math.PI),Math.cos(phi-axis-Math.PI));
  const thumb=Math.exp(-.5*((frontAngle/.43)**2+((y-centre)/.30)**2));
  const fingers=Math.exp(-.5*((rearAngle/.70)**2+((y-centre-.02)/.49)**2));
  const patchRadius=Math.hypot(frontAngle/.43,(y-centre)/.30);
  const rim=.014*Math.exp(-(((patchRadius-1.55)/.55)**2));
  const pressure=(.27*thumb-.055*fingers)*weight*amount;
  const sideBulge=.012*weight*amount*Math.sin(phi-axis)**2;
  const tangent=x*Math.cos(axis)-z*Math.sin(axis);
  return [x+Math.cos(axis)*tangent*sideBulge+Math.sin(phi)*rim*weight*amount-Math.sin(axis)*pressure,
   y,
   z-Math.sin(axis)*tangent*sideBulge+Math.cos(phi)*rim*weight*amount-Math.cos(axis)*pressure];
 }
 function weldSeamNormals(normals,columns=97){
  const rows=normals.length/3/columns;if(!Number.isInteger(rows))return;
  for(let row=0;row<rows;row++){const a=row*3,b=((columns-1)*rows+row)*3;const x=normals[a]+normals[b],y=normals[a+1]+normals[b+1],z=normals[a+2]+normals[b+2],length=Math.hypot(x,y,z)||1;for(const i of [a,b]){normals[i]=x/length;normals[i+1]=y/length;normals[i+2]=z/length;}}
 }
 class Spring{
  constructor(){this.value=0;this.velocity=0;this.target=0;}
  step(dt,reduced=false){
   dt=Math.min(.05,Math.max(0,dt));
   if(reduced){this.value+=(this.target-this.value)*(1-Math.exp(-dt*22));this.velocity=0;}
   else{const steps=Math.max(1,Math.ceil(dt/.008)),h=dt/steps;for(let i=0;i<steps;i++){this.velocity+=(180*(this.target-this.value)-19*this.velocity)*h;this.value+=this.velocity*h;}}
   this.value=Math.max(-.065,Math.min(1.065,this.value));
   if(Math.abs(this.target-this.value)<.0002&&Math.abs(this.velocity)<.002){this.value=this.target;this.velocity=0;}
   return this.value;
  }
  get moving(){return Math.abs(this.target-this.value)>.0001||Math.abs(this.velocity)>.001;}
  reset(){this.value=this.velocity=this.target=0;}
 }
 const api={deform,Spring,weldSeamNormals};if(typeof module!=='undefined'&&module.exports)module.exports=api;else scope.BibipopSqueeze=api;
})(typeof globalThis!=='undefined'?globalThis:this);


window.fitBibipopModel=function(camera,root,direction,fill=.88){
 const box=new THREE.Box3().setFromObject(root),target=box.getCenter(new THREE.Vector3());
 const ray=direction.clone().normalize();camera.position.copy(target).add(ray);camera.lookAt(target);camera.updateMatrixWorld(true);
 const inverse=camera.quaternion.clone().invert(),vertical=Math.tan(THREE.MathUtils.degToRad(camera.fov/2)),horizontal=vertical*camera.aspect;
 let distance=0;
 for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z]){
  const corner=new THREE.Vector3(x,y,z).sub(target).applyQuaternion(inverse);
  distance=Math.max(distance,corner.z+Math.abs(corner.x)/(horizontal*fill),corner.z+Math.abs(corner.y)/(vertical*fill));
 }
 distance=Math.max(distance,camera.near*4);camera.position.copy(target).addScaledVector(ray,distance);camera.lookAt(target);
 return {target,distance};
};
