const day = function(){
   let weekDay = ['minggu','senin','selasa','rabu','kamis','jumat','sabtu'];
   let hari = new Date();
   let day = weekDay[hari.getDay()]
   let tanggal = hari.getDate()
   document.getElementById('hari2').innerHTML = `hari ini adalah hari ${day}`
   document.getElementById('tanggal').innerHTML = ` tanggal ${tanggal}`
}

day()

window.setInterval("waktu()", 1000);
const waktu = function(){
  let waktu = new Date();
    document.getElementById('jam').innerHTML = `jam : ${waktu.getHours()} `
    document.getElementById('menit').innerHTML = ` menit : ${waktu.getMinutes()} `
    document.getElementById('detik').innerHTML = ` detik : ${waktu.getSeconds()} `
}

waktu()