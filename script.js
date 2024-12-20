const sounds = ['bruh', 'vine-boom', 'dry-fart', 'metal-pipe-clang', 'cymbal', 'goofy bonk', 'pluh', 'taco bell', 'yippee', 'Who-Invited-This-Kid', 'womp-womp',
    'spongebob-fog-horn', 'anime-wow', 'dun-dun-dun', 'elevator-song', 'sus', 'wet-fart', 'mr-krabs-walking', 'oouh-my-god',
    'punch', 'smosh-shut-up', 'y-r-u-gay', 'wrong', 'outro', 'beatbox', 'damn son', 'SODA', 'bonk', 'airhorn', 'sexy wub',
    'ba ba booey', 'fail', 'crickets', 'goofy ah', 'ohmagodwow', 'drama alert', 'this just in', 'alert', 'whip', 'whistle',
    'her arms were cut off', 'Root Beer No', 'Electric Zoo', 'and youre not really fine', 'danger alarm', 'sad violin', 'bacon bacon bacon',
    'dun dun', 'what da hell', 'Star Trek Red Alert']

sounds.forEach(singleSoundFromList => createButton(singleSoundFromList))

function createButton(soundName) {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = soundName

    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(soundName).play()
    })

    const buttonsDiv = document.getElementById('buttons')
    buttonsDiv.appendChild(btn)
}


function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    })
}