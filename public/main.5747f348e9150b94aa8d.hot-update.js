/*! For license information please see main.5747f348e9150b94aa8d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema_awwwards("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var i=s("./node_modules/gsap/index.js"),n=s("./node_modules/lodash/each.js"),l=s.n(n),r=s("./node_modules/prefix/index.js"),o=s.n(r),a=s("./node_modules/normalize-wheel/index.js"),h=s.n(a);Object(function(){var e=new Error("Cannot find module 'animation/Title'");throw e.code="MODULE_NOT_FOUND",e}());class m{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,animationTitles:'[data-animation="title"]'},this.id=s,this.transformPrefix=o()("transform"),this.onMouseWheelEvent=this.onMouseWheel.bind(this)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},l()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}show(){return new Promise((e=>{this.animationIn=i.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((()=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationOut=i.default.timeline(),this.animationOut.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=h()(e);this.scroll.target+=t}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight)}update(){this.scroll.target=i.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"d43d7aa3495e515d936d"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41NzQ3ZjM0OGU5MTUwYjk0YWE4ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dWFBT2UsTUFBTUEsRUFDakJDLGFBQWEsUUFDVEMsRUFBTyxTQUNQQyxFQUFRLEdBQ1JDLElBRUFDLEtBQUtDLFNBQVdKLEVBQ2hCRyxLQUFLRSxpQkFBbUIsSUFDakJKLEVBQ0hLLGdCQUFpQiw0QkFHckJILEtBQUtELEdBQUtBLEVBRVZDLEtBQUtJLGdCQUFrQkMsSUFBTyxhQUU5QkwsS0FBS00sa0JBQW9CTixLQUFLTyxhQUFhQyxLQUFLUixLQUNwRCxDQUVBUyxTQUNJVCxLQUFLSCxRQUFVYSxTQUFTQyxjQUFjWCxLQUFLQyxVQUMzQ0QsS0FBS0YsU0FBVyxDQUFDLEVBRWpCRSxLQUFLWSxPQUFTLENBQ1ZDLFFBQVMsRUFDVEMsT0FBUSxFQUNSQyxLQUFNLEVBQ05DLE1BQU8sR0FHWEMsSUFBS2pCLEtBQUtFLGtCQUFrQixDQUFDZ0IsRUFBT0MsS0FDNUJELGFBQWlCRSxPQUFPQyxhQUFlSCxhQUFpQkUsT0FBT0UsVUFBWUMsTUFBTUMsUUFBUU4sR0FDekZsQixLQUFLRixTQUFTcUIsR0FBT0QsR0FFckJsQixLQUFLRixTQUFTcUIsR0FBT1QsU0FBU2UsaUJBQWlCUCxHQUVkLElBQTlCbEIsS0FBS0YsU0FBU3FCLEdBQUtPLE9BQ2xCMUIsS0FBS0YsU0FBU3FCLEdBQU8sS0FDZ0IsSUFBOUJuQixLQUFLRixTQUFTcUIsR0FBS08sU0FDMUIxQixLQUFLRixTQUFTcUIsR0FBT1QsU0FBU0MsY0FBY08sSUFFcEQsR0FFUixDQUVBUyxPQUNJLE9BQU8sSUFBSUMsU0FBUUMsSUFDZjdCLEtBQUs4QixZQUFjQyxFQUFBQSxRQUFLQyxXQUV4QmhDLEtBQUs4QixZQUFZRyxPQUFPakMsS0FBS0gsUUFBUyxDQUNsQ3FDLFVBQVcsR0FDWixDQUNDQSxVQUFXLElBR2ZsQyxLQUFLOEIsWUFBWUssTUFBSyxLQUNsQm5DLEtBQUtvQyxvQkFFTFAsR0FBUyxHQUNYLEdBRVYsQ0FFQVEsT0FDSSxPQUFPLElBQUlULFNBQVFDLElBQ2Y3QixLQUFLc0MsdUJBRUx0QyxLQUFLdUMsYUFBZVIsRUFBQUEsUUFBS0MsV0FFekJoQyxLQUFLdUMsYUFBYUMsR0FBR3hDLEtBQUtILFFBQVMsQ0FDL0JxQyxVQUFXLEVBQ1hPLFdBQVlaLEdBQ2QsR0FFVixDQUVBdEIsYUFBY21DLEdBQ1YsTUFBTSxPQUFFQyxHQUFXQyxJQUFlRixHQUVsQzFDLEtBQUtZLE9BQU9FLFFBQVU2QixDQUMxQixDQUVBRSxXQUNRN0MsS0FBS0YsU0FBU2dELFVBQ2Q5QyxLQUFLWSxPQUFPSSxNQUFRaEIsS0FBS0YsU0FBU2dELFFBQVFDLGFBQWUzQixPQUFPNEIsWUFFeEUsQ0FFQUMsU0FDSWpELEtBQUtZLE9BQU9FLE9BQVNpQixFQUFBQSxRQUFLbUIsTUFBTUMsTUFBTSxFQUFHbkQsS0FBS1ksT0FBT0ksTUFBT2hCLEtBQUtZLE9BQU9FLFFBRXhFZCxLQUFLWSxPQUFPQyxRQUFVa0IsRUFBQUEsUUFBS21CLE1BQU1FLFlBQVlwRCxLQUFLWSxPQUFPQyxRQUFTYixLQUFLWSxPQUFPRSxPQUFRLElBRWxGZCxLQUFLWSxPQUFPQyxRQUFVLE1BQ3RCYixLQUFLWSxPQUFPQyxRQUFVLEdBR3RCYixLQUFLRixTQUFTZ0QsVUFDZDlDLEtBQUtGLFNBQVNnRCxRQUFRTyxNQUFNckQsS0FBS0ksaUJBQW9CLGVBQWNKLEtBQUtZLE9BQU9DLGFBRXZGLENBRUF1QixvQkFDSWhCLE9BQU9rQyxpQkFBaUIsYUFBY3RELEtBQUtNLGtCQUMvQyxDQUVBZ0MsdUJBQ0lsQixPQUFPbUMsb0JBQW9CLGFBQWN2RCxLQUFLTSxrQkFDbEQsa0JDbkhKa0QsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS1hd3d3YXJkcy8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLWF3d3dhcmRzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xyXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcclxuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXHJcbmltcG9ydCBub3JtYWxpemVXaGVlbCBmcm9tICdub3JtYWxpemUtd2hlZWwnXHJcblxyXG5pbXBvcnQgVGl0bGUgZnJvbSAnYW5pbWF0aW9uL1RpdGxlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoeyBcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIGVsZW1lbnRzLFxyXG4gICAgICAgIGlkXHJcbiAgICAgfSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0ge1xyXG4gICAgICAgICAgICAuLi5lbGVtZW50cyxcclxuICAgICAgICAgICAgYW5pbWF0aW9uVGl0bGVzOiAnW2RhdGEtYW5pbWF0aW9uPVwidGl0bGVcIl0nXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm9uTW91c2VXaGVlbEV2ZW50ID0gdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSAoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB7fVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2Nyb2xsID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50OiAwLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IDAsXHJcbiAgICAgICAgICAgIGxhc3Q6IDAsXHJcbiAgICAgICAgICAgIGxpbWl0OiAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8IGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8IEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93ICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSW4uZnJvbVRvKHRoaXMuZWxlbWVudCwge1xyXG4gICAgICAgICAgICAgICAgYXV0b0FscGhhOiAwXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGF1dG9BbHBoYTogMSxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSW4uY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUgKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbk91dCA9IEdTQVAudGltZWxpbmUoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25PdXQudG8odGhpcy5lbGVtZW50LCB7XHJcbiAgICAgICAgICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlV2hlZWwgKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgeyBwaXhlbFkgfSA9IG5vcm1hbGl6ZVdoZWVsKGV2ZW50KVxyXG5cclxuICAgICAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZXHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNpemUgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgwLCB0aGlzLnNjcm9sbC5saW1pdCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxyXG5cclxuICAgICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIDAuMSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCAwLjAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWxFdmVudClcclxuICAgIH1cclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ0M2Q3YWEzNDk1ZTUxNWQ5MzZkXCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImFuaW1hdGlvblRpdGxlcyIsInRyYW5zZm9ybVByZWZpeCIsIlByZWZpeCIsIm9uTW91c2VXaGVlbEV2ZW50Iiwib25Nb3VzZVdoZWVsIiwiYmluZCIsImNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwibGltaXQiLCJlYWNoIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGlvbkluIiwiR1NBUCIsInRpbWVsaW5lIiwiZnJvbVRvIiwiYXV0b0FscGhhIiwiY2FsbCIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaGlkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiYW5pbWF0aW9uT3V0IiwidG8iLCJvbkNvbXBsZXRlIiwiZXZlbnQiLCJwaXhlbFkiLCJub3JtYWxpemVXaGVlbCIsIm9uUmVzaXplIiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwidXBkYXRlIiwidXRpbHMiLCJjbGFtcCIsImludGVycG9sYXRlIiwic3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==