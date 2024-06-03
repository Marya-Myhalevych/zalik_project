    function changeImage(category) {
        var image = document.getElementById("displayImage");
        switch(category) {
            case 'nastilni_comp':
                image.src = 'nastilni_comp.png';
                break;
            case 'laptop':
                image.src = 'laptop.png';
                break;
            case 'all-in-one':
                image.src = 'all-in-one.png';
                image.alt = 'Все в одному';
                break;
            case 'chromebook':
                image.src = 'chromebook.png';
                break;
            case '2-in-1':
                image.src = '2-in-1.png';
                break;
            case 'minipc':
                image.src = 'minipc.png';
                break;
            default:
                image.src = 'desktop.png';
        }
    }
