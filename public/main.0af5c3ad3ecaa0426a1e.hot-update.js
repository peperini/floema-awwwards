/*! For license information please see main.0af5c3ad3ecaa0426a1e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema_awwwards("main",{"./app/components/Canvas/Collections/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./node_modules/ogl/src/core/Program.js"),h=s("./node_modules/ogl/src/core/Mesh.js"),a=s("./node_modules/gsap/index.js"),r=s("./app/shaders/collections-vertex.glsl"),o=s("./app/shaders/collections-fragment.glsl");const n=class{constructor({element:t,geometry:e,gl:s,index:i,scene:h,sizes:a}){this.element=t,this.geometry=e,this.gl=s,this.index=i,this.scene=h,this.sizes=a,this.extra={x:0,y:0},this.opacity={current:0,target:0,lerp:.1,multiplier:0},this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes})}createTexture(){const t=this.element.querySelector(".collections__gallery__media__image");this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:o.default,vertex:r.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{program:this.program,geometry:this.geometry}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX()}show(){a.default.fromTo(this.opacity,{multiplier:0},{multiplier:1})}hide(){a.default.to(this.opacity,{multiplier:0})}onResize(t,e){this.extra={x:0,y:0},this.createBounds(t),this.updateX(e&&e.x)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}update(t,e){this.updateX(t);this.mesh.rotation.z=-.02*Math.PI*Math.sin(this.index/1),this.mesh.position.y=.1*Math.sin(this.index/1),this.opacity.target=this.index===e?1:.42,this.opacity.current=a.default.utils.interpolate(this.opacity.current,this.opacity.target,this.opacity.lerp),this.program.uniforms.uAlpha.value=this.opacity.multiplier*this.opacity.current}}}},(function(t){t.h=()=>"011933d4395d36a9f131"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBS2xCRyxLQUFLSSxRQUFRRSxPQUFTTixLQUFLSCxRQUFVQSxFQUFRLEVBQUksSUFDakRHLEtBQUtJLFFBQVFDLFFBQVU4QixFQUFBQSxRQUFLbUIsTUFBTUMsWUFBWXZELEtBQUtJLFFBQVFDLFFBQVNMLEtBQUtJLFFBQVFFLE9BQVFOLEtBQUtJLFFBQVFHLE1BRXRHUCxLQUFLbUIsUUFBUUksU0FBU0MsT0FBT0MsTUFBUXpCLEtBQUtJLFFBQVFJLFdBQWFSLEtBQUtJLFFBQVFDLE9BQ2hGLGtCQ2xJSm1ELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEtYXd3d2FyZHMvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQ29sbGVjdGlvbnMvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLWF3d3dhcmRzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNoLCBQcm9ncmFtfSBmcm9tICdvZ2wnXHJcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXHJcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9jb2xsZWN0aW9ucy12ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvY29sbGVjdGlvbnMtZnJhZ21lbnQuZ2xzbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yICh7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxyXG4gICAgICAgIHRoaXMuZ2wgPSBnbFxyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleFxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxyXG4gICAgICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xyXG5cclxuICAgICAgICB0aGlzLmV4dHJhID0ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXHJcbiAgICAgICAgICAgIHRhcmdldDogMCxcclxuICAgICAgICAgICAgbGVycDogMC4xLFxyXG4gICAgICAgICAgICBtdWx0aXBsaWVyOiAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVNZXNoKClcclxuICAgICAgICB0aGlzLmNyZWF0ZUJvdW5kcyh7XHJcbiAgICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUZXh0dXJlICgpIHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhX19pbWFnZScpXHJcblxyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyldXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBjcmVhdGVQcm9ncmFtICgpIHtcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XHJcbiAgICAgICAgICAgIGZyYWdtZW50LFxyXG4gICAgICAgICAgICB2ZXJ0ZXgsXHJcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgICAgICAgICB1QWxwaGE6IHsgdmFsdWU6IDAgfSxcclxuICAgICAgICAgICAgICAgIHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1lc2ggKCkge1xyXG4gICAgICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcclxuICAgICAgICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxyXG4gICAgICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeVxyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBjcmVhdGVCb3VuZHMgKHsgc2l6ZXMgfSkge1xyXG4gICAgICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xyXG5cclxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVNjYWxlKClcclxuICAgICAgICB0aGlzLnVwZGF0ZVgoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFuaW1hdGlvbnNcclxuXHJcbiAgICBzaG93ICgpIHtcclxuICAgICAgICBHU0FQLmZyb21Ubyh0aGlzLm9wYWNpdHksIHtcclxuICAgICAgICAgICAgbXVsdGlwbGllcjogMFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbXVsdGlwbGllcjogMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSAoKSB7XHJcbiAgICAgICAgR1NBUC50byh0aGlzLm9wYWNpdHksIHtcclxuICAgICAgICAgICAgbXVsdGlwbGllcjogMFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvLyBFdmVudHNcclxuXHJcbiAgICBvblJlc2l6ZSAoc2l6ZXMsIHNjcm9sbCkge1xyXG4gICAgICAgIHRoaXMuZXh0cmEgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxyXG4gICAgICAgIHRoaXMudXBkYXRlWChzY3JvbGwgJiYgc2Nyb2xsLngpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIExvb3BcclxuXHJcbiAgICB1cGRhdGVTY2FsZSAoKSB7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxyXG5cclxuICAgICAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXHJcbiAgICAgICAgdGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlWCAoeCA9IDApIHtcclxuICAgICAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcclxuXHJcbiAgICAgICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPSAoLXRoaXMuc2l6ZXMud2lkdGggLyAyKSArICh0aGlzLm1lc2guc2NhbGUueCAvIDIpICsgKHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGgpICsgdGhpcy5leHRyYS54XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChzY3JvbGwsIGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVYKHNjcm9sbClcclxuXHJcbiAgICAgICAgY29uc3QgYW1wbGl0dWRlID0gMC4xXHJcbiAgICAgICAgY29uc3QgZnJlcXVlbmN5ID0gMVxyXG5cclxuICAgICAgICB0aGlzLm1lc2gucm90YXRpb24ueiA9IC0wLjAyICogTWF0aC5QSSAqIE1hdGguc2luKHRoaXMuaW5kZXggLyBmcmVxdWVuY3kpXHJcbiAgICAgICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPSBhbXBsaXR1ZGUgKiBNYXRoLnNpbih0aGlzLmluZGV4IC8gZnJlcXVlbmN5KVxyXG5cclxuICAgICAgICB0aGlzLm9wYWNpdHkudGFyZ2V0ID0gdGhpcy5pbmRleCA9PT0gaW5kZXggPyAxIDogMC40MlxyXG4gICAgICAgIHRoaXMub3BhY2l0eS5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLm9wYWNpdHkuY3VycmVudCwgdGhpcy5vcGFjaXR5LnRhcmdldCwgdGhpcy5vcGFjaXR5LmxlcnApXHJcblxyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEudmFsdWUgPSB0aGlzLm9wYWNpdHkubXVsdGlwbGllciAqIHRoaXMub3BhY2l0eS5jdXJyZW50XHJcbiAgICB9XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwMTE5MzNkNDM5NWQzNmE5ZjEzMVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImV4dHJhIiwieCIsInkiLCJvcGFjaXR5IiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJtdWx0aXBsaWVyIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiY3JlYXRlQm91bmRzIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwiZ2V0QXR0cmlidXRlIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJzaG93IiwiR1NBUCIsImZyb21UbyIsImhpZGUiLCJ0byIsIm9uUmVzaXplIiwic2Nyb2xsIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJzY2FsZSIsImxlZnQiLCJwb3NpdGlvbiIsInVwZGF0ZSIsInJvdGF0aW9uIiwieiIsIk1hdGgiLCJQSSIsInNpbiIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=