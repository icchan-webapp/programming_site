// この度は、本コードを見ていただきありがとうございます。
// ゆっくりと見ていってください！ 

const $doc = document;

// セレクトボックスのコード
// （プログラミング言語の種類は？）
(()=>{
    const $display = $doc.getElementsByClassName('display_selectedItem')[0]
        ,$title = $doc.getElementsByClassName('title')
        ,$selectBox = $doc.getElementsByClassName('select_box')[0]
        ,$selectItems = $selectBox.getElementsByTagName('li');
        
    let $selectItem = $selectBox.getElementsByClassName('selected')[0];

    // 初期化
    const init = () => {
        $display.textContent = $selectItem.textContent;
        $selectBox.style.display = "none";
    };
    init();

    // セレクトボックスを表示させる
    const open = () => {
        $display.addEventListener('click', () => {
            $selectBox.style.display = "block";
        })
    };
    open(); 
    
    // 選択肢から希望のものを選んだら、それが表示され、セレクトボックスが消える
    window.addEventListener("DOMContentLoaded", () => {

        for (let i = 0; i < $selectItems.length; i++) {

            $selectItems[i].addEventListener('click', () => {
                $selectItem.classList.remove('selected');
                $title[i].classList.add('selected');
                $selectItem = $doc.getElementsByClassName('selected')[0];
                $selectBox.style.display = "none";
                $display.textContent = $selectItem.textContent;
            })
            
        }

    }, false);

    // choiceの範囲以外をクリックしたら、セレクトボックスが消える
    $doc.addEventListener('click', (e) => {
        if(!e.target.closest('.choice')) {
          $selectBox.style.display = "none";
        } 
    })

    // 「プログラミング言語の種類は？」のセレクトボックスが表示された時、
    // 「集めたい人数は？」のセレクトボックスが消える
    $display.addEventListener('click', () => {
        $doc.getElementsByClassName('select_box')[1].style.display = "none";
    }) 

})();

// 集めたい人数は？
(()=>{
    const $display = $doc.getElementsByClassName('display_selectedItem')[1]
        ,$selectBox = $doc.getElementsByClassName('select_box')[1]
        ,$selectItems = $selectBox.getElementsByTagName('li');

    let $selectItem = $doc.getElementsByClassName('selected')[1];

    // 初期化
    const init = () => {
        $display.textContent = $selectItem.textContent;
        $selectBox.style.display = "none";
    };
    init();

    // セレクトボックスを表示させる
    const open = () => {
        $display.addEventListener('click', () => {
            $selectBox.style.display = "block";
        })
    };
    open();
    
    // 選択肢から希望のものを選んだら、それが表示され、セレクトボックスが消える
    window.addEventListener("DOMContentLoaded", () => {

        for (let i = 0; i < $selectItems.length; i++) {

            $selectItems[i].addEventListener('click', () => {
                $selectItem.classList.remove('selected');
                $selectItems[i].classList.add('selected');
                $selectItem = $doc.getElementsByClassName('selected')[1];
                $selectBox.style.display = "none";
                $display.textContent = $selectItem.textContent;
            })
            
        }
        
    }, false);

    // choiceの範囲以外をクリックしたら、セレクトボックスが消える
    $doc.addEventListener('click', (e) => {
        if(!e.target.closest('.choice')) {
          $selectBox.style.display = "none";
        } 
    })
})();


// 注意事項のコード
(() => {
    const $alert = $doc.getElementById('alert')
        ,$link = $doc.getElementById('alert_btn')
        ,$close_botton = $doc.getElementById('close_botton')
        ,$target = $doc.getElementById("fadeLayer");

    // 初期化
    const init = () => {
        $alert.style.display = "none";
    };
    init();

    // フェードレイヤーを表示させる
    const fade = () => {
        $target.style.visibility = "visible";
    }

    // イベントを無効にする
    const noScroll = (e) => {
        e.preventDefault();
    }

    // 注意事項を表示し、スクロールをできなくさせる
    const open = () => {
        $link.addEventListener('click', () => {
            $alert.style.display = "block";
            fade();
            $doc.addEventListener('touchmove', noScroll, { passive: false });
            $doc.addEventListener('mousewheel', noScroll, { passive: false });
        })
    }
    open();

    // 注意事項を非表示にし、スクロールをできるようにする
    const close = () => {
        $close_botton.addEventListener('click', () => {
            $alert.style.display = "none";
            $target.style.visibility = "hidden";
            $doc.removeEventListener('touchmove', noScroll, { passive: false });
            $doc.removeEventListener('mousewheel', noScroll, { passive: false });
        })
    }
    close();
})();