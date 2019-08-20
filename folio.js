//=====================================================
//fungsi smoothScroll
var posY = 0;
var jarak = 5;

function smoothScroll(id){

  var target = document.getElementById(id).offsetTop; //jara antara atas dan div

  var scrollAnimate = setTimeout(function(){
    smoothScroll(id);
  }, 5) //fungsi, waktu

  posY = posY + jarak;

  //berhenti pada bagian tertentu
  if(posY >= target){
    clearTimeout(scrollAnimate);
    posY = 0;
  }else{
    window.scroll(0, posY) //x dan y
  }

  return false;

}


//=====================================================
//fungsi validasi formulir
function validasi(form){
  var lolos = true;

  for(i=0; i<3; i++){
    if(form[i].value.trim().length <= 0){

      switch (i) {
        case 0: errorText = 'Nama'; break;
        case 1: errorText = 'Email'; break;
        case 2: errorText = 'Pesan'; break;
        default:
      }

      //kalau belum ada error
      if(form[i].nextElementSibling.className != 'error'){
        form[i].style.borderColor = 'red';
        form[i].insertAdjacentHTML('afterend', "<div class='error'>"+ errorText +" tidak boleh kosong</div");
      }

      lolos =  false;
    }else{
      //sebelumnya sudah ada error, haus console.error();
      if(form[i].nextElementSibling.className == 'error'){
        form[i].style.borderColor = '#0074b9';
        form[i].nextElementSibling.remove();
      }
    }
  }//end for
return lolos;
}


//=====================================================
//fungsi ganti gambar di galeri

var target_gambar = document.getElementById('target_gambar');
var array_gambar = document.getElementById('karya_lain').children; //mengambil semua element children dari karya_lain
var no_sekarang = 0; //nomor yang aktif

function ganti_gambar(gambar){
  target_gambar.src = gambar.getAttribute('src');
  no_sekarang = gambar.className;
}

function ganti_sebelum(){

  if(no_sekarang < 0) no_sekrang = 0;
  no_sekarang = no_sekarang - 1;

  target_gambar.src = array_gambar[no_sekarang].getAttribute("src");
}

function ganti_berikut(){

  if(no_sekarang < 2) no_sekrang = 0;
  no_sekarang = no_sekarang + 1;

  target_gambar.src = array_gambar[no_sekarang].getAttribute("src");
}
