(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,r){e.exports=r("zUnb")},zUnb:function(e,t,r){"use strict";r.r(t);var n=r("fXoL");var o=r("jhN1"),a=r("tyNb"),c=r("LRne"),i=r("JIr8"),s=r("lJxs"),b=r("tk/3"),u=r("dNgK"),l=r("sYmb");let m=(()=>{class e{constructor(e,t,r){this._snack=e,this._zone=t,this._translate=r}handleError(e){console.error(e),this._zone.run(()=>{this._snackBar=this._snack.open(this._translate.instant(e.message)||"Unknown error",this._translate.instant("close"),{data:e,panelClass:"error",duration:5e3})})}}return e.\u0275fac=function(t){return new(t||e)(n.Ub(u.a),n.Ub(n.z),n.Ub(l.e))},e.\u0275prov=n.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const f=["en","de"];let p=(()=>{class e{constructor(e,t){this._http=e,this._error=t}register$(e){return this._http.post("registration",{guestData:e}).pipe(Object(i.a)(e=>(this._error.handleError(e),Object(c.a)(e))),Object(s.a)(({verificationCode:e})=>e))}}return e.\u0275fac=function(t){return new(t||e)(n.Ub(b.b),n.Ub(m))},e.\u0275prov=n.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=r("/t3+"),h=r("XiUz"),g=r("jaxi"),P=r("ofXK");function v(e,t){if(1&e&&(n.Qb(0,"mat-button-toggle",7),n.tc(1),n.dc(2,"uppercase"),n.Pb()),2&e){const e=t.$implicit;n.hc("value",e),n.zb(1),n.uc(n.ec(2,2,e))}}let y=(()=>{class e{constructor(e){this._translate=e}get languages(){return f}get currentLanguage(){return this._translate.currentLang}ngOnInit(){}onLanguageChange(e){this._translate.use(e)}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(l.e))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-layout"]],decls:12,vars:5,consts:[[1,"mobile-center"],[1,"card"],["color","primary"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center","routerLink","/"],[1,"spacer"],[3,"value","change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(n.Qb(0,"div",0),n.Qb(1,"div",1),n.Qb(2,"mat-toolbar",2),n.Qb(3,"mat-toolbar-row"),n.Qb(4,"a",3),n.Qb(5,"h1"),n.tc(6),n.dc(7,"translate"),n.Pb(),n.Pb(),n.Mb(8,"span",4),n.Qb(9,"mat-button-toggle-group",5),n.Yb("change",(function(e){return t.onLanguageChange(e.value)})),n.sc(10,v,3,4,"mat-button-toggle",6),n.Pb(),n.Pb(),n.Pb(),n.Mb(11,"router-outlet"),n.Pb(),n.Pb()),2&e&&(n.zb(6),n.uc(n.ec(7,3,"Check-In / Out")),n.zb(3),n.hc("value",t.currentLanguage),n.zb(1),n.hc("ngForOf",t.languages))},directives:[d.a,d.c,a.d,h.a,h.c,h.b,g.b,P.j,a.f,g.a],pipes:[l.d,P.r],styles:["[_nghost-%COMP%]{flex-direction:column;flex:1;height:100%}[_nghost-%COMP%], main[_ngcontent-%COMP%]{display:flex}.mobile-center[_ngcontent-%COMP%], main[_ngcontent-%COMP%]{flex-direction:column}.mobile-center[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%}@media (min-width:600px){.mobile-center[_ngcontent-%COMP%]{height:100vh}}a[_ngcontent-%COMP%]{text-decoration:none}"],changeDetection:0}),e})();var Q=r("NFeN"),w=r("bTqV");let x=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Fb({type:e,selectors:[["app-error"]],decls:14,vars:0,consts:[["color","warn"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center","routerLink","/"],[1,"content"],["fxLayout","column","fxLayoutAlign","center center"],[3,"translate"],["color","warn",1,"symbol"],["mat-raised-button","","color","warn","routerLink","/"]],template:function(e,t){1&e&&(n.Qb(0,"mat-toolbar",0),n.Qb(1,"mat-toolbar-row"),n.Qb(2,"a",1),n.Qb(3,"h1"),n.tc(4,"Check In Out - Error"),n.Pb(),n.Pb(),n.Pb(),n.Pb(),n.Qb(5,"div",2),n.Qb(6,"div",3),n.Qb(7,"h3",4),n.tc(8,"Page Not Found"),n.Pb(),n.Qb(9,"mat-icon",5),n.tc(10,"cancel"),n.Pb(),n.Mb(11,"p"),n.Qb(12,"button",6),n.tc(13,"Ok"),n.Pb(),n.Pb(),n.Pb())},directives:[d.a,d.c,a.d,h.a,h.c,h.b,l.a,Q.a,w.a,a.c],styles:[""]}),e})();var O=r("3Pt+"),_=r("quSY"),C=r("XNiG"),I=r("2Vo4"),L=r("pLZG"),M=r("eIep"),q=r("vkgz"),N=r("kmnG"),z=r("d3UM"),k=r("qFsG"),$=r("bSwM"),j=r("FKr1"),F=r("H7zf");function E(e,t){if(1&e&&(n.Qb(0,"mat-option",24),n.tc(1),n.dc(2,"translate"),n.Pb()),2&e){const e=t.$implicit;n.hc("value",e),n.zb(1),n.vc("",n.ec(2,2,e)," ")}}function S(e,t){1&e&&(n.Qb(0,"mat-error",3),n.tc(1,"First name required"),n.Pb())}function U(e,t){1&e&&(n.Qb(0,"mat-error",3),n.tc(1,"Last name required"),n.Pb())}function D(e,t){1&e&&(n.Qb(0,"mat-error",3),n.tc(1,"Zip code required"),n.Pb())}function H(e,t){1&e&&(n.Qb(0,"mat-error",3),n.tc(1,"City is required"),n.Pb())}function G(e,t){1&e&&(n.Qb(0,"mat-error",3),n.tc(1,"Phone is required "),n.Pb())}function A(e,t){1&e&&(n.Qb(0,"mat-error",3),n.tc(1,"Email is required"),n.Pb())}function J(e,t){if(1&e){const e=n.Rb();n.Qb(0,"form",2),n.Yb("ngSubmit",(function(){return n.lc(e),n.cc(2).submit$$.next()})),n.Qb(1,"h2",3),n.tc(2,"Welcome!"),n.Pb(),n.Qb(3,"h3",3),n.tc(4,"In order to check you in the event, we need a valid mobile phone number."),n.Pb(),n.Qb(5,"mat-form-field",4),n.Qb(6,"mat-select",5),n.sc(7,E,3,4,"mat-option",6),n.Pb(),n.Pb(),n.Qb(8,"mat-form-field",7),n.Qb(9,"mat-label",3),n.tc(10,"First name"),n.Pb(),n.Mb(11,"input",8),n.sc(12,S,2,0,"mat-error",9),n.Pb(),n.Qb(13,"mat-form-field",7),n.Qb(14,"mat-label",3),n.tc(15,"Last name"),n.Pb(),n.Mb(16,"input",10),n.sc(17,U,2,0,"mat-error",9),n.Pb(),n.Qb(18,"mat-form-field",7),n.Qb(19,"mat-label",3),n.tc(20,"ZIP Code"),n.Pb(),n.Mb(21,"input",11),n.sc(22,D,2,0,"mat-error",9),n.Pb(),n.Qb(23,"mat-form-field",7),n.Qb(24,"mat-label",3),n.tc(25,"City"),n.Pb(),n.Mb(26,"input",12),n.sc(27,H,2,0,"mat-error",9),n.Pb(),n.Qb(28,"mat-form-field",13),n.Qb(29,"mat-label",3),n.tc(30,"Phone"),n.Pb(),n.Qb(31,"mat-icon",14),n.tc(32,"phone"),n.Pb(),n.Mb(33,"input",15),n.sc(34,G,2,0,"mat-error",9),n.Pb(),n.Qb(35,"mat-form-field",13),n.Qb(36,"mat-label",3),n.tc(37,"Email"),n.Pb(),n.Qb(38,"mat-icon",14),n.tc(39,"email"),n.Pb(),n.Mb(40,"input",16),n.sc(41,A,2,0,"mat-error",9),n.Pb(),n.Qb(42,"section"),n.Qb(43,"mat-checkbox",17),n.Qb(44,"span",3),n.tc(45,"I hereby confirm the accuracy and completeness of my information"),n.Pb(),n.Pb(),n.Qb(46,"mat-checkbox",18),n.Qb(47,"span",19),n.tc(48,"*"),n.Pb(),n.Qb(49,"span",3),n.tc(50,"I hereby confirm that my data can be saved securely"),n.Pb(),n.Pb(),n.Pb(),n.Qb(51,"div",20),n.Qb(52,"button",21),n.Qb(53,"span",3),n.tc(54,"Start registration"),n.Pb(),n.Pb(),n.Pb(),n.Qb(55,"div"),n.Qb(56,"p",22),n.Qb(57,"span",19),n.tc(58,"*"),n.Pb(),n.Qb(59,"span",3),n.tc(60,"What happens to my data?"),n.Pb(),n.Pb(),n.Mb(61,"p",23),n.dc(62,"translate"),n.Pb(),n.Pb()}if(2&e){const e=n.cc(2);n.hc("formGroup",e.form),n.zb(7),n.hc("ngForOf",e.salutations),n.zb(5),n.hc("ngIf",e.form.controls.firstName.hasError("required")),n.zb(5),n.hc("ngIf",e.form.controls.lastName.hasError("required")),n.zb(5),n.hc("ngIf",e.form.controls.postalCode.hasError("required")),n.zb(5),n.hc("ngIf",e.form.controls.city.hasError("required")),n.zb(7),n.hc("ngIf",e.form.controls.mobilePhoneNumber.hasError("required")),n.zb(7),n.hc("ngIf",e.form.controls.email.hasError("required")),n.zb(11),n.hc("disabled",e.form.invalid),n.zb(9),n.hc("innerHTML",n.ec(62,10,"WHAT_HAPPENS_DESCRIPTION"),n.mc)}}function R(e,t){if(1&e&&(n.Qb(0,"div"),n.Qb(1,"h2",3),n.tc(2,"Here is your registration code"),n.Pb(),n.Qb(3,"h3",3),n.tc(4,"Present this code at the entrance, they will scan it and you will receive an SMS then."),n.Pb(),n.Mb(5,"qr-code",25),n.Qb(6,"div",26),n.tc(7,"Present this code at the entrance, they will scan it and you will receive an SMS then. "),n.Pb(),n.Pb()),2&e){const e=n.cc().ngIf;n.zb(5),n.hc("value",e)}}function T(e,t){if(1&e&&(n.Qb(0,"main"),n.sc(1,J,63,12,"form",1),n.sc(2,R,8,1,"div",0),n.Pb()),2&e){const e=t.ngIf;n.zb(1),n.hc("ngIf","none"===e),n.zb(1),n.hc("ngIf","none"!==e)}}let Y=(()=>{class e{constructor(e){this._registration=e,this._subs=new _.a,this.submit$$=new C.a,this.registered$$=new I.a("none"),this.salutations=["Mr.","Mrs."]}ngOnInit(){this.form=new O.e({salutation:new O.c("Mr.",[O.o.required]),firstName:new O.c("",[O.o.required]),lastName:new O.c("",[O.o.required]),mobilePhoneNumber:new O.c("",[O.o.required]),postalCode:new O.c("",[O.o.required]),city:new O.c("",[O.o.required]),email:new O.c("",[O.o.required,O.o.email]),confirmAccuracy:new O.c(null,[O.o.required]),confirmSave:new O.c(null,[O.o.required])}),this._subs.add(this.submit$$.asObservable().pipe(Object(L.a)(()=>this.form.valid),Object(s.a)(()=>{const{salutation:e,firstName:t,lastName:r,mobilePhoneNumber:n,postalCode:o,city:a,email:c}=this.form.value;return{salutation:e,firstName:t,lastName:r,mobilePhoneNumber:n,postalCode:o,city:a,email:c}}),Object(M.a)(e=>this._registration.register$(e)),Object(L.a)(e=>!(e instanceof Error)),Object(q.a)(e=>this.registered$$.next(e))).subscribe()),this._subs.add(this.registered$$.asObservable().pipe(Object(q.a)(console.log.bind(console))).subscribe())}ngOnDestroy(){this._subs.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(p))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-register"]],decls:2,vars:3,consts:[[4,"ngIf"],["fxLayout","row wrap","fxLayoutGap","12px",3,"formGroup","ngSubmit",4,"ngIf"],["fxLayout","row wrap","fxLayoutGap","12px",3,"formGroup","ngSubmit"],[3,"translate"],["fxFlex","","floatLabel","never"],["formControlName","salutation"],[3,"value",4,"ngFor","ngForOf"],["fxFlex","calc(50% - 12px)"],["autofocus","","formControlName","firstName","matInput","","required","","type","text"],[3,"translate",4,"ngIf"],["formControlName","lastName","matInput","","required","","type","text"],["formControlName","postalCode","matInput","","required","","type","text"],["formControlName","city","matInput","","required","","type","text"],["fxFlex",""],["matPrefix",""],["formControlName","mobilePhoneNumber","matInput","","required","","type","text"],["formControlName","email","matInput","","required","","type","text"],["formControlName","confirmAccuracy"],["formControlName","confirmSave"],[1,"nb"],[1,"full-width","actions"],["type","submit","mat-raised-button","","color","primary",1,"full-width",3,"disabled"],[1,"what-happens"],[3,"innerHTML"],[3,"value"],["size","275","errorCorrectionLevel","M",3,"value"],[1,"note",3,"translate"]],template:function(e,t){1&e&&(n.sc(0,T,3,2,"main",0),n.dc(1,"async")),2&e&&n.hc("ngIf",n.ec(1,1,t.registered$$))},directives:[P.k,O.p,O.k,h.c,h.d,O.f,l.a,N.d,h.a,z.a,O.j,O.d,P.j,N.g,O.b,k.a,O.n,Q.a,N.h,$.a,w.a,j.f,N.c,F.a],pipes:[P.b,l.d],styles:["div.actions[_ngcontent-%COMP%]{margin-top:24px;margin-bottom:24px}main[_ngcontent-%COMP%]{background-color:#269ee1}.nb[_ngcontent-%COMP%]{color:red;padding-right:6px}"],changeDetection:0}),e})();var X=r("jtHE");function K(e,t){if(1&e&&(n.Qb(0,"main"),n.Qb(1,"h2",1),n.tc(2,"You are ready to get in!"),n.Pb(),n.Qb(3,"h3",1),n.tc(4,"Present this QR code at the entrance to check-in."),n.Pb(),n.Mb(5,"qr-code",2),n.Qb(6,"div",1),n.tc(7,"Have fun tonight!"),n.Pb(),n.Pb()),2&e){const e=t.ngIf;n.zb(5),n.hc("value",e)}}const V=[{path:"",component:y,children:[{path:"",component:Y},{path:"showCode",component:(()=>{class e{constructor(e,t){this._route=e,this._router=t,this._subs=new _.a,this._params$$=new X.a(1),this.params$=this._params$$.asObservable().pipe(Object(s.a)(e=>`?id=${e.get("id")}&pc=${e.get("pc")}`))}ngOnInit(){this._subs.add(this._route.queryParamMap.pipe(Object(L.a)(e=>e.has("id")&&e.has("pc")&&!!e.get("pc")&&!!e.get("id")),Object(q.a)(e=>this._params$$.next(e))).subscribe())}ngOnDestroy(){this._subs.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(a.a),n.Lb(a.b))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-code"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"translate"],["size","275","errorCorrectionLevel","M",3,"value"]],template:function(e,t){1&e&&(n.sc(0,K,8,1,"main",0),n.dc(1,"async")),2&e&&n.hc("ngIf",n.ec(1,1,t.params$))},directives:[P.k,l.a,F.a],pipes:[P.b],styles:["main[_ngcontent-%COMP%]{background-color:#ff0}"],changeDetection:0}),e})()},{path:"**",component:x}]}];let W=(()=>{class e{}return e.\u0275mod=n.Jb({type:e}),e.\u0275inj=n.Ib({factory:function(t){return new(t||e)},imports:[[a.e.forRoot(V)],a.e]}),e})(),Z=(()=>{class e{constructor(e,t){e.addLangs(f),e.setDefaultLang(f[0]),e.currentLang="en",e.getBrowserLang().match(/de/)&&(e.currentLang="de",e.use("de").subscribe())}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(l.e),n.Lb(p))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){1&e&&n.Mb(0,"router-outlet")},directives:[a.f],encapsulation:2,changeDetection:0}),e})();var B=r("R1ws"),ee=r("SX+u"),te=r("STbY"),re=r("YUcS");let ne=(()=>{class e{}return e.\u0275mod=n.Jb({type:e}),e.\u0275inj=n.Ib({factory:function(t){return new(t||e)},imports:[[P.c,d.b,te.a,Q.b,w.b,re.a,O.m,N.f,k.b,b.c,l.c],P.c,d.b,te.a,Q.b,w.b,re.a,O.m,N.f,k.b,b.c,l.c]}),e})();var oe=r("z6cu");let ae=(()=>{class e{constructor(){}intercept(e,t){if(!e.url.match("json")){const t=("https://idme.ch/checkinout/api//"+e.url).split("/").filter(e=>!!e).join("/").replace(/(https?:)\//,"$1//");e=e.clone({url:t})}return t.handle(e).pipe(Object(i.a)(e=>{const t=e.error.hasOwnProperty("detail")?e.error.detail:e.error.hasOwnProperty("message")?e.error.message:e.message;return Object(oe.a)(new Error(t))}))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Hb({token:e,factory:e.\u0275fac}),e})();var ce=r("mqiu");const ie=new n.q("local_storage");function se(e){return new ce.a(e,"/check-in-out-guest/assets/i18n/")}let be=(()=>{class e{}return e.\u0275mod=n.Jb({type:e,bootstrap:[Z]}),e.\u0275inj=n.Ib({factory:function(t){return new(t||e)},providers:[{provide:N.b,useValue:{floatLabel:"never",appearance:"outline"}},{provide:ie,useExisting:ee.a},{useClass:m,provide:n.m},{useClass:ae,provide:b.a,multi:!0}],imports:[[o.a,W,B.b,ne,u.b,l.c.forRoot({loader:{provide:l.b,useFactory:se,deps:[b.b]}}),z.b,$.b,F.b,g.c]]}),e})();Object(n.S)(),o.c().bootstrapModule(be).catch(e=>console.error(e))},zn8P:function(e,t){function r(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id="zn8P"}},[[0,0,5]]]);