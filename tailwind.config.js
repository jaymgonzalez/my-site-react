const { lightBlue } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-img': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1280' height='350' preserveAspectRatio='none' viewBox='0 0 1280 350'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1025%26quot%3b)' fill='none'%3e%3cpath d='M640 430.17C710.24 432.65 784.09 418.47 833.15 368.15 881.77 318.28 892.99 244.53 888.81 175 884.9 109.96 856.04 51.07 811.26 3.74 764.98-45.15 707.01-81.6 640-88.06 565.81-95.23 484.18-86.22 432.09-32.91 380.34 20.03 377.59 101.19 382.89 175 387.75 242.69 411.86 307.16 460.04 354.96 508.01 402.56 572.44 427.79 640 430.17' fill='rgba(165%2c 243%2c 252%2c 1)'%3e%3c/path%3e%3cpath d='M640 340.11C685.45 341.72 733.24 332.54 764.98 299.98 796.44 267.71 803.7 219.99 801 175 798.47 132.91 779.79 94.81 750.81 64.19 720.87 32.55 683.36 8.97 640 4.79 592 0.14 539.17 5.97 505.47 40.47 471.99 74.72 470.2 127.24 473.64 175 476.78 218.8 492.38 260.51 523.55 291.45 554.6 322.25 596.29 338.57 640 340.11' fill='rgba(34%2c 197%2c 94%2c 1)'%3e%3c/path%3e%3cpath d='M640 250.05C660.66 250.78 682.38 246.61 696.81 231.81 711.11 217.14 714.41 195.45 713.18 175 712.03 155.87 703.54 138.55 690.37 124.63 676.76 110.25 659.71 99.53 640 97.63 618.18 95.52 594.17 98.17 578.85 113.85 563.63 129.42 562.82 153.29 564.38 175 565.81 194.91 572.9 213.87 587.07 227.93 601.18 241.93 620.13 249.35 640 250.05' fill='rgba(219%2c 39%2c 119%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1025'%3e%3crect width='1280' height='350' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e\")",
        'divider-img': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='500' height='200' preserveAspectRatio='none' viewBox='0 0 500 200'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1354%26quot%3b)' fill='none'%3e%3cpath d='M332.919%2c48.881C346.074%2c49.761%2c360.119%2c45.001%2c366.43%2c33.426C372.555%2c22.192%2c367.885%2c8.617%2c360.614%2c-1.912C354.386%2c-10.931%2c343.877%2c-14.904%2c332.919%2c-15.102C321.527%2c-15.308%2c309.272%2c-12.729%2c303.435%2c-2.944C297.489%2c7.023%2c300.627%2c19.32%2c306.366%2c29.408C312.183%2c39.633%2c321.181%2c48.096%2c332.919%2c48.881' fill='rgba(219%2c 39%2c 119%2c 0.7)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M150.32%2c133.796C166.894%2c133.89%2c182.273%2c125.399%2c190.843%2c111.212C199.722%2c96.514%2c200.81%2c78.47%2c192.968%2c63.193C184.373%2c46.45%2c169.131%2c32.855%2c150.32%2c32.273C130.612%2c31.663%2c111.744%2c42.811%2c102.838%2c60.402C94.616%2c76.641%2c100.696%2c95.475%2c110.583%2c110.758C119.497%2c124.536%2c133.91%2c133.703%2c150.32%2c133.796' fill='rgba(219%2c 39%2c 119%2c 0.7)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M217.778%2c167.278C233.115%2c167.332%2c247.479%2c160.74%2c256.194%2c148.12C266.428%2c133.3%2c274.467%2c114.005%2c265.254%2c98.53C256.158%2c83.252%2c235.511%2c82.293%2c217.778%2c83.592C202.667%2c84.699%2c188.7%2c91.657%2c180.995%2c104.704C173.154%2c117.982%2c172.016%2c134.557%2c179.83%2c147.85C187.548%2c160.98%2c202.547%2c167.224%2c217.778%2c167.278' fill='rgba(219%2c 39%2c 119%2c 0.7)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M135.728%2c139.381C141.675%2c139.52%2c148.051%2c137.765%2c150.914%2c132.55C153.704%2c127.469%2c151.267%2c121.502%2c148.268%2c116.542C145.403%2c111.805%2c141.263%2c107.531%2c135.728%2c107.441C130.065%2c107.349%2c125.281%2c111.21%2c122.464%2c116.124C119.663%2c121.009%2c118.935%2c126.976%2c121.725%2c131.867C124.538%2c136.799%2c130.052%2c139.248%2c135.728%2c139.381' fill='rgba(219%2c 39%2c 119%2c 0.7)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M53.299%2c158.81C58.734%2c158.842%2c64.236%2c156.597%2c66.803%2c151.806C69.261%2c147.219%2c67.491%2c141.822%2c64.779%2c137.381C62.206%2c133.168%2c58.231%2c129.885%2c53.299%2c129.694C48.031%2c129.49%2c42.892%2c131.914%2c40.171%2c136.43C37.365%2c141.087%2c37.319%2c146.957%2c40.07%2c151.647C42.79%2c156.283%2c47.924%2c158.778%2c53.299%2c158.81' fill='rgba(219%2c 39%2c 119%2c 0.7)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M411.335%2c214.723C427.646%2c213.653%2c440.034%2c202.047%2c448.53%2c188.082C457.476%2c173.376%2c464.326%2c155.866%2c456.453%2c140.559C448.041%2c124.203%2c429.703%2c114.8%2c411.335%2c115.762C394.362%2c116.651%2c382.472%2c130.321%2c373.723%2c144.892C364.612%2c160.066%2c356.214%2c178.004%2c364.607%2c193.586C373.296%2c209.718%2c393.051%2c215.922%2c411.335%2c214.723' fill='rgba(219%2c 39%2c 119%2c 0.7)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M73.017%2c49.001C85.66%2c48.471%2c95.371%2c39.239%2c101.774%2c28.324C108.273%2c17.245%2c112.042%2c4.01%2c106.083%2c-7.369C99.744%2c-19.475%2c86.671%2c-27.144%2c73.017%2c-26.593C60.155%2c-26.074%2c50.712%2c-16.019%2c44.269%2c-4.876C37.816%2c6.284%2c33.689%2c19.55%2c39.758%2c30.923C46.125%2c42.855%2c59.505%2c49.567%2c73.017%2c49.001' fill='rgba(219%2c 39%2c 119%2c 0.7)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M346.679%2c267.128C368.194%2c266.99%2c386.066%2c251.247%2c395.548%2c231.934C403.983%2c214.753%2c399.37%2c195.396%2c390.126%2c178.636C380.467%2c161.123%2c366.678%2c143.182%2c346.679%2c143.334C326.842%2c143.485%2c314.056%2c161.979%2c304.363%2c179.288C294.967%2c196.067%2c288.362%2c215.245%2c296.708%2c232.57C306.129%2c252.125%2c324.973%2c267.268%2c346.679%2c267.128' fill='rgba(219%2c 39%2c 119%2c 0.7)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M257.055%2c110.372C264.628%2c109.997%2c270.098%2c103.915%2c273.751%2c97.271C277.242%2c90.922%2c278.681%2c83.502%2c275.377%2c77.053C271.776%2c70.024%2c264.948%2c64.953%2c257.055%2c64.684C248.703%2c64.399%2c240.605%2c68.484%2c236.431%2c75.724C232.261%2c82.957%2c232.956%2c91.906%2c237.226%2c99.08C241.396%2c106.086%2c248.912%2c110.775%2c257.055%2c110.372' fill='rgba(219%2c 39%2c 119%2c 0.7)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1354'%3e%3crect width='500' height='200' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e\")",
      }),
      inset: {
        lefty: '49.8%'
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      colors: {
        teal: colors.teal,
        lightblue: colors.lightBlue,
        cyan: colors.cyan,
        orange: colors.orange,
        emerald: colors.emerald
      }
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
  plugins: [],
}
