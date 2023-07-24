/*! For license information please see main.b6b37a5bcbac84cb9fca.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema_awwwards("main",{"./app/classes/Button.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var n=s("./node_modules/gsap/index.js"),o=s("./app/classes/Component.js");class h extends o.default{constructor({element:e}){super({element:e}),this.path=e.querySelector("path:last-child"),this.pathLength=this.path.getTotalLength(),this.timeline=n.default.timeline({paused:!0}),this.timeline.fromTo(this.path,{strokeDashoffset:this.pathLength,strokeDasharray:`${this.pathLength} ${this.pathLength}`},{strokeDashoffset:0,strokeDasharray:`${this.pathLength} ${this.pathLength}`})}onMouseEnter(){console.log("enter"),this.timeline.play()}onMouseLeave(){console.log("leave"),this.timeline.reverse()}addEventListeners(){this.onMouseEnterEvent=this.onMouseEnter.bind(this),this.onMouseLeaveEvent=this.onMouseLeave.bind(this),this.element.addEventListener("mouseenter",this.onMouseEnterEvent),this.element.addEventListener("mouseleave",this.onMouseLeaveEvent)}removeEventListeners(){this.element.removeEventListener("mouseenter",this.onMouseEnterEvent),this.element.removeEventListener("mouseleave",this.onMouseLeaveEvent)}}}},(function(e){e.h=()=>"50185f42021132bf8eee"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iNmIzN2E1YmNiYWM4NGNiOWZjYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7c01BR2UsTUFBTUEsVUFBZUMsRUFBQUEsUUFDaENDLGFBQWEsUUFBRUMsSUFDWEMsTUFBTSxDQUFFRCxZQUVSRSxLQUFLQyxLQUFPSCxFQUFRSSxjQUFjLG1CQUNsQ0YsS0FBS0csV0FBYUgsS0FBS0MsS0FBS0csaUJBRTVCSixLQUFLSyxTQUFXQyxFQUFBQSxRQUFLRCxTQUFTLENBQUVFLFFBQVEsSUFFeENQLEtBQUtLLFNBQVNHLE9BQU9SLEtBQUtDLEtBQU0sQ0FDNUJRLGlCQUFrQlQsS0FBS0csV0FDdkJPLGdCQUFrQixHQUFFVixLQUFLRyxjQUFjSCxLQUFLRyxjQUM3QyxDQUNDTSxpQkFBa0IsRUFDbEJDLGdCQUFrQixHQUFFVixLQUFLRyxjQUFjSCxLQUFLRyxjQUVwRCxDQUVBUSxlQUNJQyxRQUFRQyxJQUFJLFNBQ1piLEtBQUtLLFNBQVNTLE1BQ2xCLENBRUFDLGVBQ0lILFFBQVFDLElBQUksU0FDWmIsS0FBS0ssU0FBU1csU0FDbEIsQ0FFQUMsb0JBQ0lqQixLQUFLa0Isa0JBQW9CbEIsS0FBS1csYUFBYVEsS0FBS25CLE1BQ2hEQSxLQUFLb0Isa0JBQW9CcEIsS0FBS2UsYUFBYUksS0FBS25CLE1BRWhEQSxLQUFLRixRQUFRdUIsaUJBQWlCLGFBQWNyQixLQUFLa0IsbUJBQ2pEbEIsS0FBS0YsUUFBUXVCLGlCQUFpQixhQUFjckIsS0FBS29CLGtCQUNyRCxDQUVBRSx1QkFDSXRCLEtBQUtGLFFBQVF5QixvQkFBb0IsYUFBY3ZCLEtBQUtrQixtQkFDcERsQixLQUFLRixRQUFReUIsb0JBQW9CLGFBQWN2QixLQUFLb0Isa0JBQ3hELGtCQzFDSkksRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS1hd3d3YXJkcy8uL2FwcC9jbGFzc2VzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mbG9lbWEtYXd3d2FyZHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY2xhc3Nlcy9Db21wb25lbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHsgZWxlbWVudCB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBlbGVtZW50IH0pXHJcblxyXG4gICAgICAgIHRoaXMucGF0aCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcigncGF0aDpsYXN0LWNoaWxkJylcclxuICAgICAgICB0aGlzLnBhdGhMZW5ndGggPSB0aGlzLnBhdGguZ2V0VG90YWxMZW5ndGgoKVxyXG5cclxuICAgICAgICB0aGlzLnRpbWVsaW5lID0gR1NBUC50aW1lbGluZSh7IHBhdXNlZDogdHJ1ZSB9KVxyXG5cclxuICAgICAgICB0aGlzLnRpbWVsaW5lLmZyb21Ubyh0aGlzLnBhdGgsIHtcclxuICAgICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogdGhpcy5wYXRoTGVuZ3RoLFxyXG4gICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IGAke3RoaXMucGF0aExlbmd0aH0gJHt0aGlzLnBhdGhMZW5ndGh9YCBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogYCR7dGhpcy5wYXRoTGVuZ3RofSAke3RoaXMucGF0aExlbmd0aH1gIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZUVudGVyICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZW50ZXInKVxyXG4gICAgICAgIHRoaXMudGltZWxpbmUucGxheSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZUxlYXZlICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbGVhdmUnKVxyXG4gICAgICAgIHRoaXMudGltZWxpbmUucmV2ZXJzZSgpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIHRoaXMub25Nb3VzZUVudGVyRXZlbnQgPSB0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbk1vdXNlTGVhdmVFdmVudCA9IHRoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm9uTW91c2VFbnRlckV2ZW50KVxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbk1vdXNlTGVhdmVFdmVudClcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5vbk1vdXNlRW50ZXJFdmVudClcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZUxlYXZlRXZlbnQpXHJcbiAgICB9XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MDE4NWY0MjAyMTEzMmJmOGVlZVwiKSJdLCJuYW1lcyI6WyJCdXR0b24iLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJzdXBlciIsInRoaXMiLCJwYXRoIiwicXVlcnlTZWxlY3RvciIsInBhdGhMZW5ndGgiLCJnZXRUb3RhbExlbmd0aCIsInRpbWVsaW5lIiwiR1NBUCIsInBhdXNlZCIsImZyb21UbyIsInN0cm9rZURhc2hvZmZzZXQiLCJzdHJva2VEYXNoYXJyYXkiLCJvbk1vdXNlRW50ZXIiLCJjb25zb2xlIiwibG9nIiwicGxheSIsIm9uTW91c2VMZWF2ZSIsInJldmVyc2UiLCJhZGRFdmVudExpc3RlbmVycyIsIm9uTW91c2VFbnRlckV2ZW50IiwiYmluZCIsIm9uTW91c2VMZWF2ZUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==