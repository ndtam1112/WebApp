let item = document.querySelectorAll('.item');
 for (let i=0; i<item.length; i++) {
    item[i].onclick = () => {
        let j=0;
        while(j<item.length) {
            item[j++].className = 'item'
        }
        item[i].className = 'item active'
    }
    
 }
