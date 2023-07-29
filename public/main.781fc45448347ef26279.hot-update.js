/*! For license information please see main.781fc45448347ef26279.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema_awwwards("main",{"./app/components/Canvas/About/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),o=s("./node_modules/gsap/index.js"),r=s("./app/shaders/plane-vertex.glsl"),n=s("./app/shaders/plane-fragment.glsl");const d=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.index=i,this.scene=h,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new i.Texture(this.gl);const e=this.element.querySelector("img");this.image=new Image,this.image.crossOrigin="anonymous",this.image.src=e.getAttribute("data-src"),this.image.onload=()=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:n.default,vertex:r.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{program:this.program,geometry:this.geometry}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){o.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){o.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,t){this.extra=0,this.createBounds(e),this.updateX(t),this.updateY(0)}updateRotation(){this.mesh.rotation.z=o.default.utils.mapRange(-this.sizes.width/2,this.sizes.width/2,.1*Math.PI,.1*-Math.PI,this.mesh.position.x)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height,this.mesh.position.y+=40*Math.cos(this.mesh.position.x/this.sizes.width*Math.PI*.1)-40}update(e){this.bounds&&(this.updateScale(),this.updateRotation(),this.updateX(e),this.updateY(0))}}}},(function(e){e.h=()=>"78341ee37a600e99423b"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBSSxFQUFNTCxLQUFLSyxFQUFJTCxLQUFLRCxNQUFNOEMsTUFBUzdDLEtBQUtJLEtBQ2xILENBRUE0QixRQUFTMUIsRUFBSSxHQUNUTixLQUFLTSxHQUFLTixLQUFLNEIsT0FBTzJCLElBQU1qRCxHQUFLNEMsT0FBT0MsWUFFeENuRCxLQUFLd0IsS0FBS3dCLFNBQVMxQyxFQUFLTixLQUFLRCxNQUFNa0QsT0FBUyxFQUFNakQsS0FBS3dCLEtBQUs2QixNQUFNL0MsRUFBSSxFQUFNTixLQUFLTSxFQUFJTixLQUFLRCxNQUFNa0QsT0FFaEdqRCxLQUFLd0IsS0FBS3dCLFNBQVMxQyxHQUEyRSxHQUF0RXdDLEtBQUtVLElBQUt4RCxLQUFLd0IsS0FBS3dCLFNBQVMzQyxFQUFJTCxLQUFLRCxNQUFNOEMsTUFBU0MsS0FBS0MsR0FBSyxJQUFZLEVBQ3ZHLENBRUFVLE9BQVFsQixHQUNDdkMsS0FBSzRCLFNBRVY1QixLQUFLOEIsY0FDTDlCLEtBQUt3QyxpQkFDTHhDLEtBQUsrQixRQUFRUSxHQUNidkMsS0FBS2dDLFFBQVEsR0FDakIsa0JDbElKMEIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS1hd3d3YXJkcy8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9BYm91dC9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEtYXd3d2FyZHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc2gsIFByb2dyYW0sIFRleHR1cmUgfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJ1xuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yICh7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQsXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeSxcbiAgICAgICAgdGhpcy5nbCA9IGdsLFxuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuXG4gICAgICAgIHRoaXMuY3JlYXRlVGV4dHVyZSgpXG4gICAgICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG4gICAgICAgIHRoaXMuY3JlYXRlTWVzaCgpXG5cbiAgICAgICAgdGhpcy5leHRyYSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVUZXh0dXJlICgpIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblxuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgICAgICB0aGlzLmltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcbiAgICAgICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSlcbiAgICB9XG5cbiAgICBcbiAgICBjcmVhdGVQcm9ncmFtICgpIHtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgICAgICB2ZXJ0ZXgsXG4gICAgICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgICAgIHVBbHBoYTogeyB2YWx1ZTogMCB9LFxuICAgICAgICAgICAgICAgIHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3JlYXRlTWVzaCAoKSB7XG4gICAgICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgICAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbSxcbiAgICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5XG4gICAgICAgIH0pXG4gICAgXG4gICAgICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgICB9XG4gICAgXG5cbiAgICBjcmVhdGVCb3VuZHMgKHsgc2l6ZXMgfSkge1xuICAgICAgICB0aGlzLnNpemVzID0gc2l6ZXNcblxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICAgIHRoaXMudXBkYXRlU2NhbGUoKVxuICAgICAgICB0aGlzLnVwZGF0ZVgoKVxuICAgICAgICB0aGlzLnVwZGF0ZVkoKSBcbiAgICB9XG5cbiAgICAvLyBBbmltYXRpb25zXG5cbiAgICBzaG93ICgpIHtcbiAgICAgICAgR1NBUC5mcm9tVG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoaWRlICgpIHtcbiAgICAgICAgR1NBUC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLCB7XG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9KVxuICAgIH1cbiAgICBcblxuICAgIC8vIEV2ZW50c1xuXG4gICAgb25SZXNpemUgKHNpemVzLCBzY3JvbGwpIHtcbiAgICAgICAgdGhpcy5leHRyYSA9IDAgIFxuXG4gICAgICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuICAgICAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuICAgICAgICB0aGlzLnVwZGF0ZVkoMClcbiAgICB9XG5cblxuICAgIC8vIExvb3BcblxuICAgIHVwZGF0ZVJvdGF0aW9uKCkge1xuICAgICAgICB0aGlzLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMubWFwUmFuZ2UoLXRoaXMuc2l6ZXMud2lkdGggLyAyLCB0aGlzLnNpemVzLndpZHRoIC8gMiwgTWF0aC5QSSAqIDAuMSwgLU1hdGguUEkgKiAwLjEsIHRoaXMubWVzaC5wb3NpdGlvbi54KVxuICAgIH0gICBcblxuICAgIHVwZGF0ZVNjYWxlICgpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgICAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG4gICAgICAgIHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuICAgIH1cblxuICAgIHVwZGF0ZVggKHggPSAwKSB7XG4gICAgICAgIHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID0gKC10aGlzLnNpemVzLndpZHRoIC8gMikgKyAodGhpcy5tZXNoLnNjYWxlLnggLyAyKSArICh0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoKSArIHRoaXMuZXh0cmFcbiAgICB9XG5cbiAgICB1cGRhdGVZICh5ID0gMCkge1xuICAgICAgICB0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuICAgICAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9ICh0aGlzLnNpemVzLmhlaWdodCAvIDIpIC0gKHRoaXMubWVzaC5zY2FsZS55IC8gMikgLSAodGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQpXG5cbiAgICAgICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgKz0gTWF0aC5jb3MoKHRoaXMubWVzaC5wb3NpdGlvbi54IC8gdGhpcy5zaXplcy53aWR0aCkgKiBNYXRoLlBJICogMC4xKSAqIDQwIC0gNDBcbiAgICB9XG5cbiAgICB1cGRhdGUgKHNjcm9sbCkge1xuICAgICAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cbiAgICAgICAgXG4gICAgICAgIHRoaXMudXBkYXRlU2NhbGUoKVxuICAgICAgICB0aGlzLnVwZGF0ZVJvdGF0aW9uKClcbiAgICAgICAgdGhpcy51cGRhdGVYKHNjcm9sbClcbiAgICAgICAgdGhpcy51cGRhdGVZKDApXG4gICAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc4MzQxZWUzN2E2MDBlOTk0MjNiXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiZXh0cmEiLCJ4IiwieSIsInRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsInNob3ciLCJHU0FQIiwiZnJvbVRvIiwiaGlkZSIsInRvIiwib25SZXNpemUiLCJzY3JvbGwiLCJ1cGRhdGVSb3RhdGlvbiIsInJvdGF0aW9uIiwieiIsInV0aWxzIiwibWFwUmFuZ2UiLCJ3aWR0aCIsIk1hdGgiLCJQSSIsInBvc2l0aW9uIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJsZWZ0IiwidG9wIiwiY29zIiwidXBkYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9