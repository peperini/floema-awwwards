/*! For license information please see main.8bc4075bfd105982881a.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema_awwwards("main",{"./app/components/Canvas/Home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var i=s("./node_modules/ogl/src/core/Transform.js"),r=s("./node_modules/ogl/src/extras/Plane.js"),h=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/map.js"),o=s.n(l),n=s("./app/components/Canvas/Home/Media.js");const a=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.scene=e,this.sizes=s,this.group=new i.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.mediaElements=document.querySelectorAll(".home__gallery__media__image"),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0},this.speed={current:0,target:0,lerp:.1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new r.Plane(this.gl,{heightSegments:20,widthSegments:20})}createGallery(){this.medias=o()(this.mediaElements,((t,e)=>new n.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){o()(this.medias,(t=>t.show()))}hide(){o()(this.medias,(t=>t.hide()))}onResize(t){this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,o()(this.medias,(e=>e.onResize(t,this.scroll)))}onTouchDown({x:t,y:e}){this.speed.target=1,this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){this.speed.target=0}onWheel({pixelX:t,pixelY:e}){this.x.target-=t,this.y.target-=e}update(){this.galleryBounds&&(this.speed.current=h.default.utils.interpolate(this.speed.current,this.speed.target,this.speed.lerp),this.x.current=h.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=h.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,o()(this.medias,((t,e)=>{const s=t.mesh.scale.x/2,i=.6*this.sizes.width;if("left"===this.x.direction){t.mesh.position.x+s<-i&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.02*-Math.PI,.02*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-s>i&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.02*-Math.PI,.02*Math.PI))}const r=t.mesh.scale.y/2,l=.6*this.sizes.height;if("top"===this.y.direction){t.mesh.position.y+r<-l&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.02*-Math.PI,.02*Math.PI))}else if("bottom"===this.y.direction){t.mesh.position.y-r>l&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.02*-Math.PI,.02*Math.PI))}t.update(this.scroll,this.speed.current)})))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"bc232a11e96f2e2fbdb9"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44YmM0MDc1YmZkMTA1OTgyODgxYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MFdBT0EsY0FDSUEsYUFBYSxHQUFFQyxFQUFFLE1BQUVDLEVBQUssTUFBRUMsSUFDdEJDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtGLE1BQVFBLEVBQ2JFLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFFakJGLEtBQUtHLGVBQWlCQyxTQUFTQyxjQUFjLGtCQUM3Q0wsS0FBS00sY0FBZ0JGLFNBQVNHLGlCQUFpQixnQ0FFL0NQLEtBQUtRLEVBQUksQ0FDTEMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sSUFHVlgsS0FBS1ksRUFBSSxDQUNMSCxRQUFTLEVBQ1RDLE9BQVEsRUFDUkMsS0FBTSxJQUdWWCxLQUFLYSxjQUFnQixDQUNqQkwsRUFBRyxFQUNISSxFQUFHLEdBR1BaLEtBQUtjLE9BQVMsQ0FDVk4sRUFBRyxFQUNISSxFQUFHLEdBR1BaLEtBQUtlLE1BQVEsQ0FDVE4sUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sSUFHVlgsS0FBS2dCLGlCQUNMaEIsS0FBS2lCLGdCQUVMakIsS0FBS0MsTUFBTWlCLFVBQVVsQixLQUFLRixPQUUxQkUsS0FBS21CLE1BQ1QsQ0FFQUgsaUJBQ0loQixLQUFLb0IsU0FBVyxJQUFJQyxFQUFBQSxNQUFNckIsS0FBS0gsR0FBSSxDQUMvQnlCLGVBQWdCLEdBQ2hCQyxjQUFlLElBRXZCLENBRUFOLGdCQUNJakIsS0FBS3dCLE9BQVNDLElBQUl6QixLQUFLTSxlQUFlLENBQUNvQixFQUFTQyxJQUNyQyxJQUFJQyxFQUFBQSxRQUFNLENBQ2JGLFVBQ0FOLFNBQVVwQixLQUFLb0IsU0FDZk8sUUFDQTlCLEdBQUlHLEtBQUtILEdBQ1RDLE1BQU9FLEtBQUtDLE1BQ1pGLE1BQU9DLEtBQUtELFNBSXhCLENBSUFvQixPQUNJTSxJQUFJekIsS0FBS3dCLFFBQVFLLEdBQVNBLEVBQU1WLFFBQ3BDLENBRUFXLE9BQ0lMLElBQUl6QixLQUFLd0IsUUFBUUssR0FBU0EsRUFBTUMsUUFFcEMsQ0FLQUMsU0FBVUMsR0FDTmhDLEtBQUtpQyxjQUFnQmpDLEtBQUtHLGVBQWUrQix3QkFFekNsQyxLQUFLRCxNQUFRaUMsRUFBTWpDLE1BRW5CQyxLQUFLbUMsYUFBZSxDQUNoQkMsT0FBUXBDLEtBQUtpQyxjQUFjRyxPQUFTQyxPQUFPQyxZQUFjdEMsS0FBS0QsTUFBTXFDLE9BQ3BFRyxNQUFPdkMsS0FBS2lDLGNBQWNNLE1BQVFGLE9BQU9HLFdBQWF4QyxLQUFLRCxNQUFNd0MsT0FHckV2QyxLQUFLYyxPQUFPTixFQUFJUixLQUFLUSxFQUFFRSxPQUFTLEVBQ2hDVixLQUFLYyxPQUFPRixFQUFJWixLQUFLWSxFQUFFRixPQUFTLEVBRWhDZSxJQUFJekIsS0FBS3dCLFFBQVFLLEdBQVNBLEVBQU1FLFNBQVNDLEVBQU9oQyxLQUFLYyxTQUN6RCxDQUVBMkIsYUFBYSxFQUFFakMsRUFBQyxFQUFFSSxJQUNkWixLQUFLZSxNQUFNTCxPQUFTLEVBRXBCVixLQUFLYSxjQUFjTCxFQUFJUixLQUFLYyxPQUFPTixFQUNuQ1IsS0FBS2EsY0FBY0QsRUFBSVosS0FBS2MsT0FBT0YsQ0FDdkMsQ0FFQThCLGFBQWEsRUFBRWxDLEVBQUMsRUFBRUksSUFDZCxNQUFNK0IsRUFBWW5DLEVBQUVvQyxNQUFRcEMsRUFBRXFDLElBQ3hCQyxFQUFZbEMsRUFBRWdDLE1BQVFoQyxFQUFFaUMsSUFFOUI3QyxLQUFLUSxFQUFFRSxPQUFTVixLQUFLYSxjQUFjTCxFQUFJbUMsRUFDdkMzQyxLQUFLWSxFQUFFRixPQUFTVixLQUFLYSxjQUFjRCxFQUFJa0MsQ0FDM0MsQ0FFQUMsV0FBVyxFQUFFdkMsRUFBQyxFQUFFSSxJQUNaWixLQUFLZSxNQUFNTCxPQUFTLENBQ3hCLENBRUFzQyxTQUFTLE9BQUVDLEVBQU0sT0FBRUMsSUFDZmxELEtBQUtRLEVBQUVFLFFBQVV1QyxFQUNqQmpELEtBQUtZLEVBQUVGLFFBQVV3QyxDQUNyQixDQUlBQyxTQUNTbkQsS0FBS2lDLGdCQUVWakMsS0FBS2UsTUFBTU4sUUFBVTJDLEVBQUFBLFFBQUtDLE1BQU1DLFlBQVl0RCxLQUFLZSxNQUFNTixRQUFTVCxLQUFLZSxNQUFNTCxPQUFRVixLQUFLZSxNQUFNSixNQUU5RlgsS0FBS1EsRUFBRUMsUUFBVTJDLEVBQUFBLFFBQUtDLE1BQU1DLFlBQVl0RCxLQUFLUSxFQUFFQyxRQUFTVCxLQUFLUSxFQUFFRSxPQUFRVixLQUFLUSxFQUFFRyxNQUM5RVgsS0FBS1ksRUFBRUgsUUFBVTJDLEVBQUFBLFFBQUtDLE1BQU1DLFlBQVl0RCxLQUFLWSxFQUFFSCxRQUFTVCxLQUFLWSxFQUFFRixPQUFRVixLQUFLWSxFQUFFRCxNQUUxRVgsS0FBS2MsT0FBT04sRUFBSVIsS0FBS1EsRUFBRUMsUUFDdkJULEtBQUtRLEVBQUUrQyxVQUFZLFFBQ1p2RCxLQUFLYyxPQUFPTixFQUFJUixLQUFLUSxFQUFFQyxVQUM5QlQsS0FBS1EsRUFBRStDLFVBQVksUUFHbkJ2RCxLQUFLYyxPQUFPRixFQUFJWixLQUFLWSxFQUFFSCxRQUN2QlQsS0FBS1ksRUFBRTJDLFVBQVksTUFDWnZELEtBQUtjLE9BQU9GLEVBQUlaLEtBQUtZLEVBQUVILFVBQzlCVCxLQUFLWSxFQUFFMkMsVUFBWSxVQUd2QnZELEtBQUtjLE9BQU9OLEVBQUlSLEtBQUtRLEVBQUVDLFFBQ3ZCVCxLQUFLYyxPQUFPRixFQUFJWixLQUFLWSxFQUFFSCxRQUV2QmdCLElBQUl6QixLQUFLd0IsUUFBUSxDQUFDSyxFQUFPRixLQUNyQixNQUFNNkIsRUFBUzNCLEVBQU00QixLQUFLQyxNQUFNbEQsRUFBSSxFQUM5Qm1ELEVBQTZCLEdBQW5CM0QsS0FBS0QsTUFBTXdDLE1BRTNCLEdBQXlCLFNBQXJCdkMsS0FBS1EsRUFBRStDLFVBQXNCLENBQ25CMUIsRUFBTTRCLEtBQUtHLFNBQVNwRCxFQUFJZ0QsR0FFekJHLElBQ0w5QixFQUFNZ0MsTUFBTXJELEdBQUtSLEtBQUttQyxhQUFhSSxNQUNuQ1YsRUFBTTRCLEtBQUtLLFNBQVNDLEVBQUlYLEVBQUFBLFFBQUtDLE1BQU1XLE9BQWtCLEtBQVZDLEtBQUtDLEdBQXFCLElBQVZELEtBQUtDLElBRXhFLE1BQU8sR0FBeUIsVUFBckJsRSxLQUFLUSxFQUFFK0MsVUFBdUIsQ0FDM0IxQixFQUFNNEIsS0FBS0csU0FBU3BELEVBQUlnRCxFQUUxQkcsSUFDSjlCLEVBQU1nQyxNQUFNckQsR0FBS1IsS0FBS21DLGFBQWFJLE1BQ25DVixFQUFNNEIsS0FBS0ssU0FBU0MsRUFBSVgsRUFBQUEsUUFBS0MsTUFBTVcsT0FBa0IsS0FBVkMsS0FBS0MsR0FBcUIsSUFBVkQsS0FBS0MsSUFFeEUsQ0FFQSxNQUFNQyxFQUFTdEMsRUFBTTRCLEtBQUtDLE1BQU05QyxFQUFJLEVBQzlCd0QsRUFBOEIsR0FBcEJwRSxLQUFLRCxNQUFNcUMsT0FFM0IsR0FBeUIsUUFBckJwQyxLQUFLWSxFQUFFMkMsVUFBcUIsQ0FDbEIxQixFQUFNNEIsS0FBS0csU0FBU2hELEVBQUl1RCxHQUV6QkMsSUFDTHZDLEVBQU1nQyxNQUFNakQsR0FBS1osS0FBS21DLGFBQWFDLE9BQ25DUCxFQUFNNEIsS0FBS0ssU0FBU0MsRUFBSVgsRUFBQUEsUUFBS0MsTUFBTVcsT0FBa0IsS0FBVkMsS0FBS0MsR0FBcUIsSUFBVkQsS0FBS0MsSUFHeEUsTUFBTyxHQUF5QixXQUFyQmxFLEtBQUtZLEVBQUUyQyxVQUF3QixDQUM1QjFCLEVBQU00QixLQUFLRyxTQUFTaEQsRUFBSXVELEVBRTFCQyxJQUNKdkMsRUFBTWdDLE1BQU1qRCxHQUFLWixLQUFLbUMsYUFBYUMsT0FDbkNQLEVBQU00QixLQUFLSyxTQUFTQyxFQUFJWCxFQUFBQSxRQUFLQyxNQUFNVyxPQUFrQixLQUFWQyxLQUFLQyxHQUFxQixJQUFWRCxLQUFLQyxJQUd4RSxDQUVBckMsRUFBTXNCLE9BQU9uRCxLQUFLYyxPQUFRZCxLQUFLZSxNQUFNTixRQUFRLElBRXJELENBS0E0RCxVQUNJckUsS0FBS0YsTUFBTXdFLFlBQVl0RSxLQUFLQyxNQUNoQyxrQkM1TUpzRSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLWF3d3dhcmRzLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLWF3d3dhcmRzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xyXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xyXG5cclxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xyXG5cclxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcclxuICAgICAgICB0aGlzLmdsID0gZ2xcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcclxuICAgICAgICB0aGlzLnNpemVzID0gc2l6ZXNcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXHJcblxyXG4gICAgICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeScpXHJcbiAgICAgICAgdGhpcy5tZWRpYUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWVfX2dhbGxlcnlfX21lZGlhX19pbWFnZScpXHJcblxyXG4gICAgICAgIHRoaXMueCA9IHtcclxuICAgICAgICAgICAgY3VycmVudDogMCxcclxuICAgICAgICAgICAgdGFyZ2V0OiAwLFxyXG4gICAgICAgICAgICBsZXJwOiAwLjFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMueSA9IHtcclxuICAgICAgICAgICAgY3VycmVudDogMCxcclxuICAgICAgICAgICAgdGFyZ2V0OiAwLFxyXG4gICAgICAgICAgICBsZXJwOiAwLjFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsQ3VycmVudCA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGwgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXHJcbiAgICAgICAgICAgIHRhcmdldDogMCxcclxuICAgICAgICAgICAgbGVycDogMC4xXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KClcclxuICAgICAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKVxyXG5cclxuICAgICAgICB0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxyXG5cclxuICAgICAgICB0aGlzLnNob3coKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjcmVhdGVHZW9tZXRyeSAoKSB7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsLCB7XHJcbiAgICAgICAgICAgIGhlaWdodFNlZ21lbnRzOiAyMCxcclxuICAgICAgICAgICAgd2lkdGhTZWdtZW50czogMjBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUdhbGxlcnkgKCkge1xyXG4gICAgICAgIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWVkaWEoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxyXG4gICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBnbDogdGhpcy5nbCxcclxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxyXG4gICAgICAgICAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBBbmltYXRpb25zXHJcblxyXG4gICAgc2hvdyAoKSB7XHJcbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSAoKSB7XHJcbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBFdmVudHMgXHJcblxyXG4gICAgb25SZXNpemUgKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5nYWxsZXJ5Qm91bmRzID0gdGhpcy5nYWxsZXJ5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgICAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbGxlcnlTaXplcyA9IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmdhbGxlcnlCb3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0ICogdGhpcy5zaXplcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmdhbGxlcnlCb3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCAqIHRoaXMuc2l6ZXMud2lkdGhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnggPSB0aGlzLngudGFyZ2V0ID0gMFxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkudGFyZ2V0ID0gMFxyXG5cclxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaERvd24gKHsgeCwgeSB9KSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZC50YXJnZXQgPSAxXHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsQ3VycmVudC54ID0gdGhpcy5zY3JvbGwueFxyXG4gICAgICAgIHRoaXMuc2Nyb2xsQ3VycmVudC55ID0gdGhpcy5zY3JvbGwueVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlICh7IHgsIHkgfSkge1xyXG4gICAgICAgIGNvbnN0IHhEaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxyXG4gICAgICAgIGNvbnN0IHlEaXN0YW5jZSA9IHkuc3RhcnQgLSB5LmVuZFxyXG5cclxuICAgICAgICB0aGlzLngudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnggLSB4RGlzdGFuY2VcclxuICAgICAgICB0aGlzLnkudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnkgLSB5RGlzdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoVXAgKHsgeCwgeSB9KSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZC50YXJnZXQgPSAwXHJcbiAgICB9XHJcblxyXG4gICAgb25XaGVlbCAoeyBwaXhlbFgsIHBpeGVsWSB9KSB7XHJcbiAgICAgICAgdGhpcy54LnRhcmdldCAtPSBwaXhlbFhcclxuICAgICAgICB0aGlzLnkudGFyZ2V0IC09IHBpeGVsWVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZVxyXG5cclxuICAgIHVwZGF0ZSAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbGxlcnlCb3VuZHMpIHJldHVyblxyXG5cclxuICAgICAgICB0aGlzLnNwZWVkLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc3BlZWQuY3VycmVudCwgdGhpcy5zcGVlZC50YXJnZXQsIHRoaXMuc3BlZWQubGVycClcclxuXHJcbiAgICAgICAgdGhpcy54LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueC5jdXJyZW50LCB0aGlzLngudGFyZ2V0LCB0aGlzLngubGVycClcclxuICAgICAgICB0aGlzLnkuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy55LmN1cnJlbnQsIHRoaXMueS50YXJnZXQsIHRoaXMueS5sZXJwKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zY3JvbGwueCA8IHRoaXMueC5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMueC5kaXJlY3Rpb24gPSAncmlnaHQnXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC54ID4gdGhpcy54LmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy54LmRpcmVjdGlvbiA9ICdsZWZ0J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLnkgPCB0aGlzLnkuY3VycmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnkuZGlyZWN0aW9uID0gJ3RvcCdcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLnkgPiB0aGlzLnkuY3VycmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnkuZGlyZWN0aW9uID0gJ2JvdHRvbSdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnggPSB0aGlzLnguY3VycmVudFxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkuY3VycmVudFxyXG5cclxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMlxyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRYID0gdGhpcy5zaXplcy53aWR0aCAqIDAuNlxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCArIHNjYWxlWFxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh4IDwgLW9mZnNldFgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZWRpYS5leHRyYS54ICs9IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAyLCBNYXRoLlBJICogMC4wMilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnguZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHggPiBvZmZzZXRYKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWEuZXh0cmEueCAtPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMiwgTWF0aC5QSSAqIDAuMDIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWSA9IG1lZGlhLm1lc2guc2NhbGUueSAvIDJcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogMC42XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy55LmRpcmVjdGlvbiA9PT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgKyBzY2FsZVlcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoeSA8IC1vZmZzZXRZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWEuZXh0cmEueSArPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICBtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDIsIE1hdGguUEkgKiAwLjAyKVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnkuZGlyZWN0aW9uID09PSAnYm90dG9tJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IG1lZGlhLm1lc2gucG9zaXRpb24ueSAtIHNjYWxlWVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh5ID4gb2Zmc2V0WSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lZGlhLmV4dHJhLnkgLT0gdGhpcy5nYWxsZXJ5U2l6ZXMuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAyLCBNYXRoLlBJICogMC4wMilcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbCwgdGhpcy5zcGVlZC5jdXJyZW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvLyBEZXN0cm95XHJcblxyXG4gICAgZGVzdHJveSAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxyXG4gICAgfVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmMyMzJhMTFlOTZmMmUyZmJkYjlcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lZGlhRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwieCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsZXJwIiwieSIsInNjcm9sbEN1cnJlbnQiLCJzY3JvbGwiLCJzcGVlZCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsInNob3ciLCJnZW9tZXRyeSIsIlBsYW5lIiwiaGVpZ2h0U2VnbWVudHMiLCJ3aWR0aFNlZ21lbnRzIiwibWVkaWFzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiTWVkaWEiLCJtZWRpYSIsImhpZGUiLCJvblJlc2l6ZSIsImV2ZW50IiwiZ2FsbGVyeUJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdhbGxlcnlTaXplcyIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsInhEaXN0YW5jZSIsInN0YXJ0IiwiZW5kIiwieURpc3RhbmNlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWCIsInBpeGVsWSIsInVwZGF0ZSIsIkdTQVAiLCJ1dGlscyIsImludGVycG9sYXRlIiwiZGlyZWN0aW9uIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwib2Zmc2V0WCIsInBvc2l0aW9uIiwiZXh0cmEiLCJyb3RhdGlvbiIsInoiLCJyYW5kb20iLCJNYXRoIiwiUEkiLCJzY2FsZVkiLCJvZmZzZXRZIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9