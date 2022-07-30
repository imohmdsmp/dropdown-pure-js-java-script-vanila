function collapse(self) {
    let _div = document.querySelectorAll('.wrapper>div>div')
    let self_p = self.nextElementSibling
    let flag = self.getAttribute('data-flag')
    let selfIcon = self.children[1]

    
    for (i = 0; i < _div.length; i++) {
        document.querySelectorAll('.wrapper>div>p')[i].style.cssText = 'height:0;'
        _div[i].setAttribute('data-flag', 'off')
        _div[i].style.cssText='border-radius:8px'
        document.querySelectorAll('.wrapper>div>div i')[i].style.cssText= 'transform:rotate(0)'
    }

    
    if (flag == 'off') {
        selfIcon.children[0].style.cssText='transform:rotate(90deg)'
        self.style.cssText='border-radius:8px 8px 0 0'
        self_p.style.cssText ='height:auto;padding:20px'
        self.setAttribute('data-flag', 'on')
    } else {
        self_p.style.cssText = 'height:0;'
        self.setAttribute('data-flag', 'off')
    }

}