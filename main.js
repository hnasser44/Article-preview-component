const profile = document.getElementById('profile-component')
const share = document.getElementById('share-component')
const btn = document.getElementById('btn-share')
const share_icon = document.querySelector('.share__')
const caret = document.querySelector('.caret')
btn.addEventListener('click', () => {
    if(window.innerWidth < 700){
    profile.classList.add('hideProfile')
    share.classList.remove('hideShare')
    } 
})

btn.addEventListener('click', () => {
    if(window.innerWidth >= 700) {
        share_icon.remove()
        share.classList.remove('hideShare')
        share.classList.add('move-share')
        caret.classList.remove('hide-caret')
    }
})


