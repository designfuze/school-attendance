const video = document.getElementById("video")
const canvas = document.getElementById("canvas")

navigator.mediaDevices.getUserMedia({video:true})
.then(stream=>{
video.srcObject = stream
})

function capture(){

let ctx = canvas.getContext("2d")

canvas.width = video.videoWidth
canvas.height = video.videoHeight

ctx.drawImage(video,0,0)

}

function login(){

let email = document.getElementById("email").value
let pass = document.getElementById("password").value

firebase.auth().signInWithEmailAndPassword(email,pass)
.then(()=>{
alert("Login Success")
})

}

function markAttendance(){

navigator.geolocation.getCurrentPosition((pos)=>{

let lat = pos.coords.latitude
let lng = pos.coords.longitude

let image = canvas.toDataURL("image/png")

let date = new Date().toLocaleDateString()
let time = new Date().toLocaleTimeString()

db.collection("attendance").add({

name:"Teacher",
date:date,
time:time,
lat:lat,
lng:lng,
image:image

})

document.getElementById("status").innerText="Attendance Saved"

})

}
