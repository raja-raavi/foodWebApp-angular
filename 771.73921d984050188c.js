"use strict";(self.webpackChunkfoodApplication=self.webpackChunkfoodApplication||[]).push([[771],{4771:(L,g,p)=>{p.r(g),p.d(g,{AuthenticationModule:()=>Y});var l=p(6895),u=p(7825),e=p(8256);let c=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-authentication"]],decls:2,vars:0,template:function(i,n){1&i&&(e.TgZ(0,"p"),e._uU(1,"authentication works!"),e.qZA())}})}return t})();var o=p(433),m=p(7228);function d(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," user name is required "),e.qZA())}function f(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," email is required "),e.qZA())}function h(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," invalid email format "),e.qZA())}function _(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," password is required "),e.qZA())}function Z(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," password requires minimum 8 characters "),e.qZA())}function C(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," password contains atleast 1 uppercase letter "),e.qZA())}function w(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," password contains atleast 1 number "),e.qZA())}const v=function(){return["/auth/signUp"]};function U(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," user name is required "),e.qZA())}function A(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," email is required "),e.qZA())}function F(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," invalid email format "),e.qZA())}function q(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," email already exists "),e.qZA())}function P(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," password is required "),e.qZA())}function b(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," password requires minimum 8 characters "),e.qZA())}function N(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," password contains atleast 1 uppercase letter "),e.qZA())}function x(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," password contains atleast 1 number "),e.qZA())}function y(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," confirm password is required "),e.qZA())}function I(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," confirm password must be 8 characters "),e.qZA())}function S(t,s){if(1&t&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.hij(" ",r.confirmPass," ")}}const M=function(){return["/auth/signIn"]},O=[{path:"",component:c},{path:"signIn",component:(()=>{class t{constructor(r,i,n){this.router=r,this.builder=i,this.regUsersService=n,this.signinForm=this.builder.group({userName:[null,[o.kI.required]],email:[null,[o.kI.required,this.testingEmail]],password:[null,[o.kI.required,this.testingUpperCase,this.testingNumber,o.kI.minLength(8)]]})}testingEmail(r){return/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(r.value)?null:{invalidEmail:!0}}testingUpperCase(r){return/[A-Z]/.test(r.value)?null:{noUpperCase:!0}}testingNumber(r){return/[1-10]/.test(r.value)?null:{noNumber:!0}}submit(r){this.regUsersService.getRegisteredUsers().subscribe(i=>r.value.userName.toLowerCase()==="Admin".toLowerCase()&&"admin@gmail.com"===r.value.email&&"Admin@123"===r.value.password?(localStorage.setItem("userName","Admin"),localStorage.setItem("email","admin@gmail.com"),localStorage.setItem("password","Admin@123"),localStorage.setItem("role","Admin"),alert("Admin Successfully Logged In \u{1f929}"),r.reset(),this.router.navigate(["/adminDashboard/admin-home-page"]),!1):i.find(a=>a.userName===r.value.userName.toLowerCase()&&a.email===r.value.email&&a.password===r.value.password)?(alert("You are SuccessFully LoggedIn \u{1f929}"),localStorage.setItem("userName",r.value.userName.charAt(0).toUpperCase()+r.value.userName.slice(1).toLowerCase()),localStorage.setItem("email",r.value.email),localStorage.setItem("password",r.value.password),localStorage.setItem("role","User"),r.reset(),this.router.navigate([""]),!0):(alert("Opps...User Not Found With This Data \u{1f612}"),!1),i=>{alert("Something Went Wrong...Try Again!!! or DataBase is Not Working")}),console.log(this.regUsersService.isAdminLoggedIn()),console.log(this.regUsersService.isUserLoggedIn())}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(u.F0),e.Y36(o.qu),e.Y36(m.q))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-signin"]],decls:30,vars:11,consts:[[1,"signin-popup"],[1,"signin-popup-container",3,"formGroup"],[1,"signin-popup-title"],["src","../../../assets/images/cross_icon.png","routerLink",""],[1,"signin-popup-inputs"],["type","text","placeholder","Your Name","formControlName","userName","required",""],[1,"errors-messages"],[4,"ngIf"],["type","email","placeholder","Your email","formControlName","email"],["type","password","placeholder","Your Password","formControlName","password"],[3,"disabled","click"],[1,"signin-popup-condition"],["type","checkbox"],[3,"routerLink"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"h3"),e._uU(4,"Signin Form"),e.qZA(),e._UZ(5,"img",3),e.qZA(),e.TgZ(6,"div",4),e._UZ(7,"input",5),e.TgZ(8,"div",6),e.YNc(9,d,2,0,"p",7),e.qZA(),e._UZ(10,"input",8),e.TgZ(11,"div",6),e.YNc(12,f,2,0,"p",7),e.YNc(13,h,2,0,"p",7),e.qZA(),e._UZ(14,"input",9),e.TgZ(15,"div",6),e.YNc(16,_,2,0,"p",7),e.YNc(17,Z,2,0,"p",7),e.YNc(18,C,2,0,"p",7),e.YNc(19,w,2,0,"p",7),e.qZA()(),e.TgZ(20,"button",10),e.NdJ("click",function(){return n.submit(n.signinForm)}),e._uU(21,"sign in"),e.qZA(),e.TgZ(22,"div",11),e._UZ(23,"input",12),e.TgZ(24,"p"),e._uU(25,"By continuing, I agree to the terms & privacy policy"),e.qZA()(),e.TgZ(26,"p"),e._uU(27,"Don't have an account?"),e.TgZ(28,"span",13),e._uU(29,"click here"),e.qZA()()()()),2&i&&(e.xp6(1),e.Q6J("formGroup",n.signinForm),e.xp6(8),e.Q6J("ngIf",n.signinForm.get("userName").touched&&(null==n.signinForm.get("userName").errors?null:n.signinForm.get("userName").errors.required)),e.xp6(3),e.Q6J("ngIf",n.signinForm.get("email").touched&&(null==n.signinForm.get("email").errors?null:n.signinForm.get("email").errors.required)),e.xp6(1),e.Q6J("ngIf",n.signinForm.get("email").touched&&(null==n.signinForm.get("email").errors?null:n.signinForm.get("email").errors.invalidEmail)),e.xp6(3),e.Q6J("ngIf",n.signinForm.get("password").touched&&(null==n.signinForm.get("password").errors?null:n.signinForm.get("password").errors.required)),e.xp6(1),e.Q6J("ngIf",n.signinForm.get("password").touched&&(null==n.signinForm.get("password").errors?null:n.signinForm.get("password").errors.minlength)),e.xp6(1),e.Q6J("ngIf",n.signinForm.get("password").touched&&(null==n.signinForm.get("password").errors?null:n.signinForm.get("password").errors.noUpperCase)),e.xp6(1),e.Q6J("ngIf",n.signinForm.get("password").touched&&(null==n.signinForm.get("password").errors?null:n.signinForm.get("password").errors.noNumber)),e.xp6(1),e.Q6J("disabled",n.signinForm.invalid),e.xp6(8),e.Q6J("routerLink",e.DdM(10,v)))},dependencies:[l.O5,u.rH,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.sg,o.u],styles:[".signin-popup[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:1}.signin-popup-container[_ngcontent-%COMP%]{width:max(23vw,330px);background-color:#fff;display:flex;flex-direction:column;gap:25px;padding:25px 30px;border-radius:8px;font-size:14px;color:gray;box-shadow:0 4px 15px #0000001a;animation:fadeIn .5s ease}.signin-popup-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;color:tomato}.signin-popup-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:16px;cursor:pointer}.signin-popup-inputs[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.signin-popup-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline:none;border:1px solid #c9c9c9;padding:10px;border-radius:4px}.signin-popup-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;padding:10px;border-radius:4px;color:#fff;background-color:tomato;font-size:15px;cursor:pointer}.signin-popup-condition[_ngcontent-%COMP%]{display:flex;align-items:start;gap:8px}.signin-popup-condition[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-top:5px}.signin-popup[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:tomato;font-weight:500;cursor:pointer}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:2px solid red}input.ng-valid.ng-touched[_ngcontent-%COMP%]{border:2px solid green}.errors-messages[_ngcontent-%COMP%]{color:red;margin-bottom:-20px}"]})}return t})()},{path:"signUp",component:(()=>{class t{constructor(r,i,n){this.formBuilder=r,this.regUsersService=i,this.router=n,this.confirmPass="",this.regEmails=[],this.signupForm=this.formBuilder.group({userName:[null,o.kI.required],email:[null,[o.kI.required,this.testingEmail],this.testDuplicateEmail.bind(this)],password:[null,[o.kI.required,this.testingUpperCase,this.testingNumber,o.kI.minLength(8)]],confirmPassword:[null,[o.kI.required,o.kI.minLength(8)]]})}ngOnInit(){this.regUsersService.getRegisteredUsers().subscribe(r=>{for(let i of r)this.regEmails.push(i.email);console.log(this.regEmails)})}testingEmail(r){return/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(r.value)?null:{invalidEmail:!0}}testDuplicateEmail(r){return new Promise((i,n)=>{setTimeout(()=>{const Q=this.regEmails.includes(r.value);i(Q?{duplicateEmail:!0}:null)},2e3)})}testingUpperCase(r){return/[A-Z]/.test(r.value)?null:{noUpperCase:!0}}testingNumber(r){return/[1-10]/.test(r.value)?null:{noNumber:!0}}confirmPassword(){return this.signupForm.controls.password.value===this.signupForm.controls.confirmPassword.value?(this.confirmPass="",!0):(this.confirmPass="Confirm password does not matched",!1)}submitClicked(r){const i={userName:r.value.userName.toLowerCase(),email:r.value.email,password:r.value.password,confirmPassword:r.value.confirmPassword};this.regUsersService.registeredUsers(i).subscribe(n=>{this.res=n,r.reset(),alert("You have Registered Successfully \u{1f60a}"),this.router.navigate(["/auth/signIn"])})}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(o.qu),e.Y36(m.q),e.Y36(u.F0))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-signup"]],decls:36,vars:15,consts:[[1,"signin-popup"],[1,"signin-popup-container",3,"formGroup"],[1,"signin-popup-title"],["src","../../../assets/images/cross_icon.png","routerLink",""],[1,"signin-popup-inputs"],["type","text","placeholder","Your Name","formControlName","userName","required",""],[1,"errors-messages"],[4,"ngIf"],["type","email","placeholder","Enter a unique email (not already registered)","formControlName","email"],["type","password","placeholder","Your Password","formControlName","password"],["type","password","placeholder","Conifrm password","formControlName","confirmPassword"],[3,"disabled","click"],[1,"signin-popup-condition"],["type","checkbox"],[3,"routerLink"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"h3"),e._uU(4,"Signup Form"),e.qZA(),e._UZ(5,"img",3),e.qZA(),e.TgZ(6,"div",4),e._UZ(7,"input",5),e.TgZ(8,"div",6),e.YNc(9,U,2,0,"p",7),e.qZA(),e._UZ(10,"input",8),e.TgZ(11,"div",6),e.YNc(12,A,2,0,"p",7),e.YNc(13,F,2,0,"p",7),e.YNc(14,q,2,0,"p",7),e.qZA(),e._UZ(15,"input",9),e.TgZ(16,"div",6),e.YNc(17,P,2,0,"p",7),e.YNc(18,b,2,0,"p",7),e.YNc(19,N,2,0,"p",7),e.YNc(20,x,2,0,"p",7),e.qZA(),e._UZ(21,"input",10),e.TgZ(22,"div",6),e.YNc(23,y,2,0,"p",7),e.YNc(24,I,2,0,"p",7),e.YNc(25,S,2,1,"p",7),e.qZA()(),e.TgZ(26,"button",11),e.NdJ("click",function(){return n.submitClicked(n.signupForm)}),e._uU(27," sign up "),e.qZA(),e.TgZ(28,"div",12),e._UZ(29,"input",13),e.TgZ(30,"p"),e._uU(31,"By continuing, I agree to the terms & privacy policy"),e.qZA()(),e.TgZ(32,"p"),e._uU(33," Already have an account?"),e.TgZ(34,"span",14),e._uU(35,"click here"),e.qZA()()()()),2&i&&(e.xp6(1),e.Q6J("formGroup",n.signupForm),e.xp6(8),e.Q6J("ngIf",n.signupForm.get("userName").touched&&(null==n.signupForm.get("userName").errors?null:n.signupForm.get("userName").errors.required)),e.xp6(3),e.Q6J("ngIf",n.signupForm.get("email").touched&&(null==n.signupForm.get("email").errors?null:n.signupForm.get("email").errors.required)),e.xp6(1),e.Q6J("ngIf",n.signupForm.get("email").touched&&(null==n.signupForm.get("email").errors?null:n.signupForm.get("email").errors.invalidEmail)),e.xp6(1),e.Q6J("ngIf",n.signupForm.get("email").touched&&(null==n.signupForm.get("email").errors?null:n.signupForm.get("email").errors.duplicateEmail)),e.xp6(3),e.Q6J("ngIf",n.signupForm.get("password").touched&&(null==n.signupForm.get("password").errors?null:n.signupForm.get("password").errors.required)),e.xp6(1),e.Q6J("ngIf",n.signupForm.get("password").touched&&(null==n.signupForm.get("password").errors?null:n.signupForm.get("password").errors.minlength)),e.xp6(1),e.Q6J("ngIf",n.signupForm.get("password").touched&&(null==n.signupForm.get("password").errors?null:n.signupForm.get("password").errors.noUpperCase)),e.xp6(1),e.Q6J("ngIf",n.signupForm.get("password").touched&&(null==n.signupForm.get("password").errors?null:n.signupForm.get("password").errors.noNumber)),e.xp6(3),e.Q6J("ngIf",n.signupForm.get("confirmPassword").touched&&(null==n.signupForm.get("confirmPassword").errors?null:n.signupForm.get("confirmPassword").errors.required)),e.xp6(1),e.Q6J("ngIf",n.signupForm.get("confirmPassword").touched&&(null==n.signupForm.get("confirmPassword").errors?null:n.signupForm.get("confirmPassword").errors.minlength)),e.xp6(1),e.Q6J("ngIf",n.signupForm.get("confirmPassword").touched&&!n.confirmPassword()),e.xp6(1),e.Q6J("disabled",n.signupForm.invalid),e.xp6(8),e.Q6J("routerLink",e.DdM(14,M)))},dependencies:[l.O5,u.rH,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.sg,o.u],styles:[".signin-popup[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:1}.signin-popup-container[_ngcontent-%COMP%]{width:max(23vw,330px);background-color:#fff;display:flex;flex-direction:column;gap:25px;padding:25px 30px;border-radius:8px;font-size:14px;color:gray;box-shadow:0 4px 15px #0000001a;animation:fadeIn .5s ease}.signin-popup-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;color:tomato}.signin-popup-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:16px;cursor:pointer}.signin-popup-inputs[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.signin-popup-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline:none;border:1px solid #c9c9c9;padding:10px;border-radius:4px}.signin-popup-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;padding:10px;border-radius:4px;color:#fff;background-color:tomato;font-size:15px;cursor:pointer}.signin-popup-condition[_ngcontent-%COMP%]{display:flex;align-items:start;gap:8px}.signin-popup-condition[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-top:5px}.signin-popup[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:tomato;font-weight:500;cursor:pointer}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:2px solid red}input.ng-valid.ng-touched[_ngcontent-%COMP%]{border:2px solid green}.errors-messages[_ngcontent-%COMP%]{color:red;margin-bottom:-20px}"]})}return t})()}];let J=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#n=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(O),u.Bz]})}return t})();var k=p(529);let Y=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#n=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[l.ez,J,o.UX,k.JF]})}return t})()}}]);