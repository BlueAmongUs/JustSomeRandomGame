// import { invoke } from "@tauri-apps/api";

import { State } from "./js/states.js";

let settings = document.getElementById("settings");
let game = document.getElementById("game");
let menu = document.getElementById("menu");

let start_btn = document.getElementById("start-btn");
let settings_btn = document.getElementById("settings-btn");

let game_state = new State(["menu", "settings", "game"], "menu");
console.log(game_state.get);

async function onStart() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsgEl.textContent = await invoke("greet", "world!");
}

function onSettings() {
  menu.classList.add("disappear");
}

start_btn.onclick = onStart;