/*! For license information please see main.a70890cf0d287c93d286.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema_awwwards("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var o=s("./node_modules/ogl/src/core/Renderer.js"),i=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/About/index.js");Object(function(){var e=new Error("Cannot find module './Collections'");throw e.code="MODULE_NOT_FOUND",e}());var c=s("./app/components/Canvas/Home/index.js");class a{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.onChangeEnd(this.template)}createRenderer(){this.renderer=new o.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new i.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new h.Transform}createHome(){this.home=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}createCollections(){this.collections=new Object(function(){var e=new Error("Cannot find module './Collections'");throw e.code="MODULE_NOT_FOUND",e}())({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}onChangeStart(){this.about&&this.about.hide(),this.home&&this.home.hide()}onChangeEnd(e){"about"===e?this.createAbout():this.destroyAbout(),"collections"===e?this.createCollections():this.destroyCollections(),"home"===e?this.createHome():this.destroyHome()}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s};const o={sizes:this.sizes};this.about&&this.about.onResize(o),this.collections&&this.collections.onResize(o),this.home&&this.home.onResize(o)}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY;const t={x:this.x,y:this.y};this.about&&this.about.onTouchDown(t),this.collections&&this.collections.onTouchDown(t),this.home&&this.home.onTouchDown(t)}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const o={x:this.x,y:this.y};this.about&&this.about.onTouchMove(o),this.collections&&this.collections.onTouchMove(o),this.home&&this.home.onTouchMove(o)}onTouchUp(e){this.isDown=!1;const t=e.changedTouches?e.changedTouches[0].clientX:e.clientX,s=e.changedTouches?e.changedTouches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const o={x:this.x,y:this.y};this.about&&this.about.onTouchUp(o),this.about&&this.about.onTouchUp(o),this.home&&this.home.onTouchUp(o)}onWheel(e){this.home&&this.home.onWheel(e)}update(e){this.about&&this.about.update(e),this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"783fd450ea83d69ba9bf"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QlAsRUFBTU8sZUFBZSxHQUFHSCxRQUFVSixFQUFNSSxRQUV6RTVELEtBQUtDLEVBQUVHLElBQU1ILEVBQ2JELEtBQUtLLEVBQUVELElBQU1DLEVBRWIsTUFBTWlELEVBQVMsQ0FDWHJELEVBQUdELEtBQUtDLEVBQ1JJLEVBQUdMLEtBQUtLLEdBR1JMLEtBQUtpQyxPQUNMakMsS0FBS2lDLE1BQU02QixVQUFVUixHQUdyQnRELEtBQUtpQyxPQUNMakMsS0FBS2lDLE1BQU02QixVQUFVUixHQUdyQnRELEtBQUsyQixNQUNMM0IsS0FBSzJCLEtBQUttQyxVQUFVUixFQUU1QixDQUVBVSxRQUFTUixHQUNEeEQsS0FBSzJCLE1BQ0wzQixLQUFLMkIsS0FBS3FDLFFBQVFSLEVBRTFCLENBS0FTLE9BQVFDLEdBQ0FsRSxLQUFLaUMsT0FDTGpDLEtBQUtpQyxNQUFNZ0MsT0FBT0MsR0FHbEJsRSxLQUFLMkIsTUFDTDNCLEtBQUsyQixLQUFLc0MsU0FHZGpFLEtBQUtXLFNBQVN3RCxPQUFPLENBQ2pCL0MsT0FBUXBCLEtBQUtvQixPQUNiSSxNQUFPeEIsS0FBS3dCLE9BRXBCLGtCQy9RSjRDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEtYXd3d2FyZHMvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLWF3d3dhcmRzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmEsIFJlbmRlcmVyLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBBYm91dCBmcm9tICcuL0Fib3V0J1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJy4vQ29sbGVjdGlvbnMnXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgICBjb25zdHJ1Y3RvciAoeyB0ZW1wbGF0ZSB9KSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuXG4gICAgICAgIHRoaXMueCA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICAgICAgICBlbmQ6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueSA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICAgICAgICBlbmQ6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuICAgICAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpXG4gICAgICAgIHRoaXMuY3JlYXRlU2NlbmUoKVxuXG4gICAgICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgICAgIHRoaXMub25DaGFuZ2VFbmQodGhpcy50ZW1wbGF0ZSlcbiAgICB9XG5cbiAgICBjcmVhdGVSZW5kZXJlciAoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xuICAgICAgICAgICAgYWxwaGE6IHRydWUsXG4gICAgICAgICAgICBhbnRpYWxpYXM6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpXG4gICAgfVxuXG4gICAgY3JlYXRlQ2FtZXJhICgpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG4gICAgfVxuXG4gICAgY3JlYXRlU2NlbmUgKCkge1xuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG4gICAgfVxuICAgIFxuXG4gICAgLy8gSG9tZVxuXG4gICAgY3JlYXRlSG9tZSAoKSB7XG4gICAgICAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcbiAgICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRlc3Ryb3lIb21lICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhvbWUpIHJldHVyblxuXG4gICAgICAgIHRoaXMuaG9tZS5kZXN0cm95KClcbiAgICAgICAgdGhpcy5ob21lID0gbnVsbFxuICAgIH1cblxuXG4gICAgLy8gQWJvdXRcblxuICAgIGNyZWF0ZUFib3V0ICgpIHtcbiAgICAgICAgdGhpcy5hYm91dCA9IG5ldyBBYm91dCh7XG4gICAgICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkZXN0cm95QWJvdXQgKCkge1xuICAgICAgICBpZiAoIXRoaXMuYWJvdXQpIHJldHVyblxuXG4gICAgICAgIHRoaXMuYWJvdXQuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuYWJvdXQgPSBudWxsXG4gICAgfVxuXG4gICAgLy8gQ29sbGVjdGlvbnNcblxuICAgIGNyZWF0ZUNvbGxlY3Rpb25zICgpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9ucyA9IG5ldyBDb2xsZWN0aW9ucyh7XG4gICAgICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkZXN0cm95Q29sbGVjdGlvbnMgKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29sbGVjdGlvbnMpIHJldHVyblxuXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbnMuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbnMgPSBudWxsXG4gICAgfVxuXG5cbiAgICAvLyBFdmVudHNcblxuICAgIG9uQ2hhbmdlU3RhcnQgKCkge1xuICAgICAgICBpZiAodGhpcy5hYm91dCkge1xuICAgICAgICAgICAgdGhpcy5hYm91dC5oaWRlKClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgICAgICAgdGhpcy5ob21lLmhpZGUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGFuZ2VFbmQgKHRlbXBsYXRlKSB7XG4gICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gJ2Fib3V0Jykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVBYm91dCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lBYm91dCgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVtcGxhdGUgPT09ICdjb2xsZWN0aW9ucycpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29sbGVjdGlvbnMoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95Q29sbGVjdGlvbnMoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRlbXBsYXRlID09PSAnaG9tZScpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSG9tZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lIb21lKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUmVzaXplICgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cbiAgICAgICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xuICAgICAgICAgICAgYXNwZWN0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKVxuICAgICAgICBjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG4gICAgICAgIGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogdGhpcy5jYW1lcmEuYXNwZWN0XG5cbiAgICAgICAgdGhpcy5zaXplcyA9IHtcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYWJvdXQpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvdXQub25SZXNpemUodmFsdWVzKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5jb2xsZWN0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9ucy5vblJlc2l6ZSh2YWx1ZXMpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICAgICAgICB0aGlzLmhvbWUub25SZXNpemUodmFsdWVzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaERvd24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZVxuXG4gICAgICAgIHRoaXMueC5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgICAgIHRoaXMueS5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICAgICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgeTogdGhpcy55XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hYm91dCkge1xuICAgICAgICAgICAgdGhpcy5hYm91dC5vblRvdWNoRG93bih2YWx1ZXMpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmNvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hEb3duKHZhbHVlcylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaG9tZS5vblRvdWNoRG93bih2YWx1ZXMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZSAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgICAgIGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgICAgIHRoaXMueC5lbmQgPSB4XG4gICAgICAgIHRoaXMueS5lbmQgPSB5XG5cbiAgICAgICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgeTogdGhpcy55XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hYm91dCkge1xuICAgICAgICAgICAgdGhpcy5hYm91dC5vblRvdWNoTW92ZSh2YWx1ZXMpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmNvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hNb3ZlKHZhbHVlcylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaG9tZS5vblRvdWNoTW92ZSh2YWx1ZXMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoVXAgKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2VcblxuICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgICAgIHRoaXMueC5lbmQgPSB4XG4gICAgICAgIHRoaXMueS5lbmQgPSB5XG5cbiAgICAgICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgeTogdGhpcy55XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hYm91dCkge1xuICAgICAgICAgICAgdGhpcy5hYm91dC5vblRvdWNoVXAodmFsdWVzKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5hYm91dCkge1xuICAgICAgICAgICAgdGhpcy5hYm91dC5vblRvdWNoVXAodmFsdWVzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgICAgICAgdGhpcy5ob21lLm9uVG91Y2hVcCh2YWx1ZXMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbldoZWVsIChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICAgICAgICB0aGlzLmhvbWUub25XaGVlbChldmVudClcbiAgICAgICAgfSBcbiAgICB9XG5cblxuICAgIC8vIExvb3BcblxuICAgIHVwZGF0ZSAoc2Nyb2xsKSB7XG4gICAgICAgIGlmICh0aGlzLmFib3V0KSB7XG4gICAgICAgICAgICB0aGlzLmFib3V0LnVwZGF0ZShzY3JvbGwpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICAgICAgICB0aGlzLmhvbWUudXBkYXRlKCApXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG4gICAgICAgICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhLFxuICAgICAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmVcbiAgICAgICAgfSlcbiAgICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzgzZmQ0NTBlYTgzZDY5YmE5YmZcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsInRoaXMiLCJ4Iiwic3RhcnQiLCJkaXN0YW5jZSIsImVuZCIsInkiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwib25SZXNpemUiLCJvbkNoYW5nZUVuZCIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsIlRyYW5zZm9ybSIsImNyZWF0ZUhvbWUiLCJob21lIiwiSG9tZSIsInNpemVzIiwiZGVzdHJveUhvbWUiLCJkZXN0cm95IiwiY3JlYXRlQWJvdXQiLCJhYm91dCIsIkFib3V0IiwiZGVzdHJveUFib3V0IiwiY3JlYXRlQ29sbGVjdGlvbnMiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb25zIiwiZGVzdHJveUNvbGxlY3Rpb25zIiwib25DaGFuZ2VTdGFydCIsImhpZGUiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJmb3YiLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJ0YW4iLCJ3aWR0aCIsInZhbHVlcyIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJpc0Rvd24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsImNoYW5nZWRUb3VjaGVzIiwib25XaGVlbCIsInVwZGF0ZSIsInNjcm9sbCIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==