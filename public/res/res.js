document.body.insertAdjacentHTML(
    'beforeend',
    `
    <style>
    @import url('https://fonts.googleapis.com/css?family=Inter:500&display=swap');
    .res *,
    .res *::after,
    .res *::before {
        box-sizing: border-box;
    }
    .res p {
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        font-family: 'Inter', sans-serif !important;
    }
    .res {
        right: 24px;
        color: white;
        bottom: -50px;
        display: flex;
        z-index: 999999;
        position: fixed;
        min-height: 48px;
        padding: 12px 24px;
        text-align: center;
        align-items: center;
        justify-content: center;
        background-color: #f44336;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        animation: fadein 1s 1s forwards;
    }
    .res:hover {
        cursor: pointer;
    }
    @keyframes fadein {
        from {
            bottom: -50px;
            opacity: 0;
        }
        to {
            bottom: 0;
            opacity: 1;
        }
    }
    @keyframes fadeout {
        from {
            bottom: 0;
            opacity: 1;
        }
        to {
            bottom: -50px;
            opacity: 0;
        }
    }
    @media only screen and (max-width: 768px) {
        .res {
            width: 100%;
            left: 0;
            right: 0;
            border-radius: 0;
        }
        .res p {
            font-size: 12px;
        }
    }
    
    </style>
    <div class="res">
        <p>This site is archived and no longer maintained.</p>
    </div>
    `
  )
  document.querySelector('.res').addEventListener('click', () => {
    document.querySelector('.res').style.animation = 'fadeout 1s'
    setTimeout(() => {
      document.querySelector('.res').remove()
    }, 1000)
  })
  document.querySelectorAll('main a[href*="http"], main a[href*="mailto"]').forEach((el) => {
    el.href = '#'
    el.target = ''
  })
  