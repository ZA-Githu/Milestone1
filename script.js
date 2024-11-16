"use strict";
let ref_section = document.getElementById("ref");
let ref_btn = document.getElementById("ref_btn");
ref_btn?.addEventListener("click", () => {
    ref_section.classList.toggle("hide");
});
//       <--experience Section-->
let exp_section = document.getElementById("experience");
let exp_btn = document.getElementById("exp_btn");
exp_btn?.addEventListener("click", () => {
    exp_section.classList.toggle("hide");
});
//     <--Language Section-->
let language_section = document.getElementById("language");
let language_btn = document.getElementById("language_btn");
language_btn?.addEventListener("click", () => {
    language_section.classList.toggle("hide");
});
//      <--Skills Section-->
let skill_section = document.getElementById("skill");
let skill_btn = document.getElementById("skill_btn");
skill_btn?.addEventListener("click", () => {
    skill_section.classList.toggle("hide");
});
//      <--Education Section-->
let edu_section = document.getElementById("edu");
let edu_btn = document.getElementById("edu_btn");
edu_btn?.addEventListener("click", () => {
    edu_section.classList.toggle("hide");
});
//       <--Contact Section-->
let contact_section = document.getElementById("contact");
let contact_btn = document.getElementById("contact_btn");
contact_btn?.addEventListener("click", () => {
    contact_section.classList.toggle("hide");
});
let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
    window.print();
});
