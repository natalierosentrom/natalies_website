const sounds = ['bruh', 'vine-boom', 'dry-fart', 'metal-pipe-clang', 'pluh', 'yippee', 'Who-Invited-This-Kid', 'womp-womp',
'spongebob-fog-horn', 'anime-wow','dun-dun-dun', 'elevator-song', 'sus', 'wet-fart', 'mr-krabs-walking','oouh-my-god',
'punch', 'smosh-shut-up', 'y-r-u-gay', 'wrong', 'outro', ]

sounds.forEach(sound=> {
    const btn= document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', ()=>{
        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').
    appendChild(btn)

})

function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById
        (sound)
        song.pause ()
        song.currentTime = 0;
    } )
}