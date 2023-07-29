/*! For license information please see main.123a40835cef98bda432.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema_awwwards("main",{"./app/components/Canvas/Home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var i=s("./node_modules/ogl/src/core/Transform.js"),h=s("./node_modules/ogl/src/extras/Plane.js"),r=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/map.js"),o=s.n(l),n=s("./app/components/Canvas/Home/Media.js");const a=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.scene=e,this.sizes=s,this.group=new i.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.mediaElements=document.querySelectorAll(".home__gallery__media__image"),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new h.Plane(this.gl)}createGallery(){this.medias=o()(this.mediaElements,((t,e)=>new n.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){o()(this.medias,(t=>t.show()))}hide(){o()(this.medias,(t=>t.hide()))}onResize(t){this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,o()(this.medias,(e=>e.onResize(t,this.scroll)))}onTouchDown({x:t,y:e}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){}onWheel({pixelX:t,pixelY:e}){this.x.target-=t,this.y.target-=e}update(){this.galleryBounds&&(this.x.current=r.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=r.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,o()(this.medias,((t,e)=>{const s=t.mesh.scale.x/2;if("left"===this.x.direction){t.mesh.position.x+s<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.02*-Math.PI,.02*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-s>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.02*-Math.PI,.02*Math.PI))}const i=t.mesh.scale.y/2;if("top"===this.y.direction){t.mesh.position.y+i<-this.sizes.height/2&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=r.default.utils.random(.02*-Math.PI,.02*Math.PI))}else if("bottom"===this.y.direction){t.mesh.position.y-i>this.sizes.height/2&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=r.default.utils.random(.02*-Math.PI,.02*Math.PI))}t.update(this.scroll)})))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"860be01c19462fea6b4b"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TVUsT0FBa0IsS0FBVkMsS0FBS0MsR0FBcUIsSUFBVkQsS0FBS0MsSUFFeEUsQ0FFQSxNQUFNQyxFQUFTckMsRUFBTTRCLEtBQUtDLE1BQU0zQyxFQUFJLEVBRXBDLEdBQXlCLFFBQXJCWixLQUFLWSxFQUFFd0MsVUFBcUIsQ0FDbEIxQixFQUFNNEIsS0FBS0UsU0FBUzVDLEVBQUltRCxHQUV6Qi9ELEtBQUtELE1BQU1rQyxPQUFTLElBQ3pCUCxFQUFNK0IsTUFBTTdDLEdBQUtaLEtBQUtnQyxhQUFhQyxPQUNuQ1AsRUFBTTRCLEtBQUtJLFNBQVNDLEVBQUlWLEVBQUFBLFFBQUtDLE1BQU1VLE9BQWtCLEtBQVZDLEtBQUtDLEdBQXFCLElBQVZELEtBQUtDLElBR3hFLE1BQU8sR0FBeUIsV0FBckI5RCxLQUFLWSxFQUFFd0MsVUFBd0IsQ0FDNUIxQixFQUFNNEIsS0FBS0UsU0FBUzVDLEVBQUltRCxFQUUxQi9ELEtBQUtELE1BQU1rQyxPQUFTLElBQ3hCUCxFQUFNK0IsTUFBTTdDLEdBQUtaLEtBQUtnQyxhQUFhQyxPQUNuQ1AsRUFBTTRCLEtBQUtJLFNBQVNDLEVBQUlWLEVBQUFBLFFBQUtDLE1BQU1VLE9BQWtCLEtBQVZDLEtBQUtDLEdBQXFCLElBQVZELEtBQUtDLElBR3hFLENBRUFwQyxFQUFNc0IsT0FBT2hELEtBQUtjLE9BQU8sSUFFakMsQ0FLQWtELFVBQ0loRSxLQUFLRixNQUFNbUUsWUFBWWpFLEtBQUtDLE1BQ2hDLGtCQzdMSmlFLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEtYXd3d2FyZHMvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEtYXd3d2FyZHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IgKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgICAgIHRoaXMuZ2wgPSBnbFxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICAgICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgICAgIFxuICAgICAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX19nYWxsZXJ5JylcbiAgICAgICAgdGhpcy5tZWRpYUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWVfX2dhbGxlcnlfX21lZGlhX19pbWFnZScpXG5cbiAgICAgICAgdGhpcy54ID0ge1xuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHRhcmdldDogMCxcbiAgICAgICAgICAgIGxlcnA6IDAuMVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy55ID0ge1xuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHRhcmdldDogMCxcbiAgICAgICAgICAgIGxlcnA6IDAuMVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGxDdXJyZW50ID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuICAgICAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuXG4gICAgICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cbiAgICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlR2VvbWV0cnkgKCkge1xuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG4gICAgfVxuXG4gICAgY3JlYXRlR2FsbGVyeSAoKSB7XG4gICAgICAgIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1lZGlhKHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gQW5pbWF0aW9uc1xuXG4gICAgc2hvdyAoKSB7XG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuICAgIH1cblxuICAgIGhpZGUgKCkge1xuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcblxuICAgIH1cblxuXG4gICAgLy8gRXZlbnRzIFxuXG4gICAgb25SZXNpemUgKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2FsbGVyeUJvdW5kcyA9IHRoaXMuZ2FsbGVyeUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ2FsbGVyeVNpemVzID0ge1xuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmdhbGxlcnlCb3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0ICogdGhpcy5zaXplcy5oZWlnaHQsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5nYWxsZXJ5Qm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGggKiB0aGlzLnNpemVzLndpZHRoXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbC54ID0gdGhpcy54LnRhcmdldCA9IDBcbiAgICAgICAgdGhpcy5zY3JvbGwueSA9IHRoaXMueS50YXJnZXQgPSAwXG5cbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuICAgIH1cblxuICAgIG9uVG91Y2hEb3duICh7IHgsIHkgfSkge1xuICAgICAgICB0aGlzLnNjcm9sbEN1cnJlbnQueCA9IHRoaXMuc2Nyb2xsLnhcbiAgICAgICAgdGhpcy5zY3JvbGxDdXJyZW50LnkgPSB0aGlzLnNjcm9sbC55XG4gICAgfVxuXG4gICAgb25Ub3VjaE1vdmUgKHsgeCwgeSB9KSB7XG4gICAgICAgIGNvbnN0IHhEaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuICAgICAgICBjb25zdCB5RGlzdGFuY2UgPSB5LnN0YXJ0IC0geS5lbmRcblxuICAgICAgICB0aGlzLngudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnggLSB4RGlzdGFuY2VcbiAgICAgICAgdGhpcy55LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC55IC0geURpc3RhbmNlXG4gICAgfVxuXG4gICAgb25Ub3VjaFVwICh7IHgsIHkgfSkge1xuXG4gICAgfVxuXG4gICAgb25XaGVlbCAoeyBwaXhlbFgsIHBpeGVsWSB9KSB7XG4gICAgICAgIHRoaXMueC50YXJnZXQgLT0gcGl4ZWxYXG4gICAgICAgIHRoaXMueS50YXJnZXQgLT0gcGl4ZWxZXG4gICAgfVxuXG4gICAgLy8gVXBkYXRlXG5cbiAgICB1cGRhdGUgKCkge1xuICAgICAgICBpZiAoIXRoaXMuZ2FsbGVyeUJvdW5kcykgcmV0dXJuXG5cbiAgICAgICAgdGhpcy54LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueC5jdXJyZW50LCB0aGlzLngudGFyZ2V0LCB0aGlzLngubGVycClcbiAgICAgICAgdGhpcy55LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueS5jdXJyZW50LCB0aGlzLnkudGFyZ2V0LCB0aGlzLnkubGVycClcblxuICAgICAgICBpZiAodGhpcy5zY3JvbGwueCA8IHRoaXMueC5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnguZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLnggPiB0aGlzLnguY3VycmVudCkge1xuICAgICAgICAgICAgdGhpcy54LmRpcmVjdGlvbiA9ICdsZWZ0J1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLnkgPCB0aGlzLnkuY3VycmVudCkge1xuICAgICAgICAgICAgdGhpcy55LmRpcmVjdGlvbiA9ICd0b3AnXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueSA+IHRoaXMueS5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnkuZGlyZWN0aW9uID0gJ2JvdHRvbSdcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsLnggPSB0aGlzLnguY3VycmVudFxuICAgICAgICB0aGlzLnNjcm9sbC55ID0gdGhpcy55LmN1cnJlbnRcblxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDJcblxuICAgICAgICAgICAgaWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuICAgICAgICAgICAgICAgIGlmICh4IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lZGlhLmV4dHJhLnggKz0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgbWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAyLCBNYXRoLlBJICogMC4wMilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cbiAgICAgICAgICAgICAgICBpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lZGlhLmV4dHJhLnggLT0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgbWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAyLCBNYXRoLlBJICogMC4wMilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWSA9IG1lZGlhLm1lc2guc2NhbGUueSAvIDJcblxuICAgICAgICAgICAgaWYgKHRoaXMueS5kaXJlY3Rpb24gPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IG1lZGlhLm1lc2gucG9zaXRpb24ueSArIHNjYWxlWVxuXG4gICAgICAgICAgICAgICAgaWYgKHkgPCAtdGhpcy5zaXplcy5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lZGlhLmV4dHJhLnkgKz0gdGhpcy5nYWxsZXJ5U2l6ZXMuaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMiwgTWF0aC5QSSAqIDAuMDIpXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMueS5kaXJlY3Rpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IG1lZGlhLm1lc2gucG9zaXRpb24ueSAtIHNjYWxlWVxuXG4gICAgICAgICAgICAgICAgaWYgKHkgPiB0aGlzLnNpemVzLmhlaWdodCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVkaWEuZXh0cmEueSAtPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgbWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAyLCBNYXRoLlBJICogMC4wMilcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIFxuICAgIC8vIERlc3Ryb3lcblxuICAgIGRlc3Ryb3kgKCkge1xuICAgICAgICB0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG4gICAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg2MGJlMDFjMTk0NjJmZWE2YjRiXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwiZ2FsbGVyeUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZWRpYUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIngiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInkiLCJzY3JvbGxDdXJyZW50Iiwic2Nyb2xsIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50Iiwic2hvdyIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsIm1lZGlhIiwiaGlkZSIsIm9uUmVzaXplIiwiZXZlbnQiLCJnYWxsZXJ5Qm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2FsbGVyeVNpemVzIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJvblRvdWNoRG93biIsIm9uVG91Y2hNb3ZlIiwieERpc3RhbmNlIiwic3RhcnQiLCJlbmQiLCJ5RGlzdGFuY2UiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxYIiwicGl4ZWxZIiwidXBkYXRlIiwiR1NBUCIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJkaXJlY3Rpb24iLCJzY2FsZVgiLCJtZXNoIiwic2NhbGUiLCJwb3NpdGlvbiIsImV4dHJhIiwicm90YXRpb24iLCJ6IiwicmFuZG9tIiwiTWF0aCIsIlBJIiwic2NhbGVZIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9