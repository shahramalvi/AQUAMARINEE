<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@600;700&amp;family=Plus+Jakarta+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-container-lowest": "#0c0f0f",
                    "secondary": "#ffffff",
                    "on-tertiary": "#4d2600",
                    "tertiary-container": "#2b1300",
                    "surface-tint": "#b1c8e9",
                    "primary-container": "#001a33",
                    "surface-container-highest": "#333535",
                    "on-primary": "#1a324c",
                    "background": "#121414",
                    "secondary-container": "#00fbfb",
                    "on-secondary-fixed": "#002020",
                    "on-tertiary-fixed-variant": "#6e3900",
                    "on-secondary-fixed-variant": "#004f4f",
                    "surface-bright": "#37393a",
                    "on-tertiary-container": "#c56b00",
                    "on-tertiary-fixed": "#2f1500",
                    "secondary-fixed-dim": "#00dddd",
                    "on-primary-fixed": "#021c36",
                    "surface-container-low": "#1a1c1c",
                    "on-primary-fixed-variant": "#324863",
                    "surface": "#121414",
                    "outline": "#8e9198",
                    "inverse-primary": "#4a607c",
                    "error": "#ffb4ab",
                    "outline-variant": "#43474d",
                    "surface-variant": "#333535",
                    "surface-container-high": "#282a2b",
                    "primary-fixed": "#d2e4ff",
                    "secondary-fixed": "#00fbfb",
                    "surface-container": "#1e2020",
                    "error-container": "#93000a",
                    "on-primary-container": "#6d84a2",
                    "on-error": "#690005",
                    "tertiary": "#ffb77d",
                    "on-secondary-container": "#007070",
                    "surface-dim": "#121414",
                    "primary-fixed-dim": "#b1c8e9",
                    "tertiary-fixed-dim": "#ffb77d",
                    "on-background": "#e2e2e2",
                    "on-surface": "#e2e2e2",
                    "inverse-surface": "#e2e2e2",
                    "primary": "#b1c8e9",
                    "on-surface-variant": "#c4c6ce",
                    "inverse-on-surface": "#2f3131",
                    "on-error-container": "#ffdad6",
                    "on-secondary": "#003737",
                    "tertiary-fixed": "#ffdcc3"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "gutter": "24px",
                    "unit": "8px",
                    "container-max": "1440px",
                    "section-padding": "80px",
                    "glass-padding": "32px"
            },
            "fontFamily": {
                    "label-caps": ["Plus Jakarta Sans"],
                    "headline-lg": ["Noto Serif"],
                    "body-lg": ["Plus Jakarta Sans"],
                    "headline-md": ["Noto Serif"],
                    "display-xl": ["Noto Serif"],
                    "body-md": ["Plus Jakarta Sans"]
            },
            "fontSize": {
                    "label-caps": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "700"}],
                    "headline-lg": ["40px", {"lineHeight": "1.2", "fontWeight": "600"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "0.01em", "fontWeight": "400"}],
                    "headline-md": ["28px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "display-xl": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
<style>
        .glass-panel {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-left: 1px solid rgba(255, 255, 255, 0.1);
        }
        .rim-light {
            box-shadow: inset 1px 1px 0px 0px rgba(255, 255, 255, 0.1);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
<!-- Top Navigation -->
<nav class="fixed top-0 w-full z-50 bg-surface/30 backdrop-blur-2xl border-b border-white/5">
<div class="flex justify-between items-center px-gutter py-6 w-full max-w-container-max mx-auto">
<div class="font-headline-lg text-headline-lg text-secondary tracking-tighter">AQUAMARINE</div>
<div class="hidden md:flex gap-8">
<a class="text-on-surface-variant font-medium hover:text-secondary-container transition-all duration-500 font-label-caps text-label-caps" href="#">Destinations</a>
<a class="text-on-surface-variant font-medium hover:text-secondary-container transition-all duration-500 font-label-caps text-label-caps" href="#">Experiences</a>
<a class="text-secondary-container font-bold border-b-2 border-secondary-container pb-1 font-label-caps text-label-caps" href="#">Cabins</a>
<a class="text-on-surface-variant font-medium hover:text-secondary-container transition-all duration-500 font-label-caps text-label-caps" href="#">Wellness</a>
</div>
<div class="flex items-center gap-4">
<button class="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-label-caps text-label-caps hover:scale-95 transition-transform duration-200">Book Voyage</button>
<span class="material-symbols-outlined text-secondary cursor-pointer" data-icon="menu">menu</span>
</div>
</div>
</nav>
<main class="pt-24">
<!-- Hero Gallery Section -->
<section class="relative h-[921px] w-full overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10"></div>
<img alt="Royal Penthouse View" class="w-full h-full object-cover" data-alt="A sprawling luxury cruise ship penthouse suite with expansive floor-to-ceiling windows overlooking a serene deep blue ocean at sunset. The interior features minimalist white furnishings, polished dark wood accents, and soft warm ambient lighting. The atmosphere is sophisticated and tranquil, reflecting a nautical futurism aesthetic with oceanic deep blues and sun-kissed amber highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqex3weHOYiOwFOzAgmU5di5T0COZ52irfdgVe1HT2Jr2zLY4ugCI6uOTZ2c6NLRnl5xkiQ8IFuuW0msuBoUeg9ptLO8wXcXtM2weLJZjkRpCY1Ok80_1V1bBkE9AFJ05O38wNsMxRgjgZ_Q1ii_85xwVyep0TZmXA2e63hH01h9EUbNa0W6hBr3yAszDNssgiOW5a8QsW6yy_Q6GRWiBdV1t3t1mqUcRo0uEnswJv476UubTU4U61WujfCIcxED9pmRq-8QkW_jHd"/>
<div class="absolute bottom-section-padding left-gutter right-gutter z-20 max-w-container-max mx-auto">
<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
<div>
<span class="font-label-caps text-label-caps text-secondary-container mb-4 block">PREMIUM COLLECTION</span>
<h1 class="font-display-xl text-display-xl text-secondary mb-6">Royal Penthouse</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Experience the pinnacle of maritime luxury. Our Royal Penthouse offers 1,200 square feet of masterfully designed living space, featuring a private wrap-around terrace and unmatched panoramic views of the horizon.</p>
</div>
<div class="flex flex-col gap-4 items-end">
<div class="glass-panel p-6 rounded-xl rim-light w-full max-w-sm">
<div class="flex justify-between items-center mb-4">
<span class="font-label-caps text-label-caps text-on-surface-variant">STARTING FROM</span>
<span class="font-headline-md text-headline-md text-secondary">$12,500 <span class="text-body-md font-body-md text-on-surface-variant">/pp</span></span>
</div>
<button class="w-full bg-on-tertiary-container text-secondary py-4 rounded-lg font-label-caps text-label-caps hover:brightness-110 transition-all shadow-lg shadow-on-tertiary-container/20">Reserve Royal Penthouse</button>
</div>
</div>
</div>
</div>
</section>
<!-- Feature Bento Grid -->
<section class="py-section-padding bg-surface-container-lowest">
<div class="max-w-container-max mx-auto px-gutter">
<div class="grid grid-cols-1 md:grid-cols-12 gap-6">
<!-- Feature List -->
<div class="md:col-span-4 glass-panel p-glass-padding rounded-2xl flex flex-col justify-between">
<div>
<h3 class="font-headline-md text-headline-md text-secondary mb-8">Exclusive Amenities</h3>
<ul class="space-y-6">
<li class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary-container">
<span class="material-symbols-outlined" data-icon="concierge">concierge</span>
</div>
<div>
<p class="font-label-caps text-label-caps text-secondary">Private Butler</p>
<p class="text-body-md font-body-md text-on-surface-variant">24/7 personalized service</p>
</div>
</li>
<li class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary-container">
<span class="material-symbols-outlined" data-icon="window">window</span>
</div>
<div>
<p class="font-label-caps text-label-caps text-secondary">Floor-to-Ceiling Windows</p>
<p class="text-body-md font-body-md text-on-surface-variant">Uninterrupted ocean vistas</p>
</div>
</li>
<li class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary-container">
<span class="material-symbols-outlined" data-icon="restaurant">restaurant</span>
</div>
<div>
<p class="font-label-caps text-label-caps text-secondary">In-Suite Dining</p>
<p class="text-body-md font-body-md text-on-surface-variant">Gourmet chef-prepared meals</p>
</div>
</li>
</ul>
</div>
</div>
<!-- Deck Plan Interactive Map -->
<div class="md:col-span-8 glass-panel rounded-2xl overflow-hidden relative group">
<div class="absolute inset-0 bg-secondary-container/5 mix-blend-overlay"></div>
<div class="p-glass-padding relative z-10 h-full flex flex-col">
<div class="flex justify-between items-start mb-8">
<div>
<h3 class="font-headline-md text-headline-md text-secondary">Deck Plan</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Penthouse Level • Deck 14</p>
</div>
<span class="material-symbols-outlined text-secondary-container text-4xl" data-icon="map">map</span>
</div>
<div class="flex-grow flex items-center justify-center p-8">
<!-- Simplified Vector Style Deck Map -->
<div class="w-full max-w-2xl aspect-[2/1] border border-white/10 rounded-lg relative overflow-hidden bg-surface-container-high/50 p-4">
<div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
<div class="relative w-full h-full border-2 border-secondary-container/30 rounded-full flex items-center justify-around px-12">
<div class="w-1/4 h-3/4 border border-white/20 rounded-lg flex items-center justify-center font-label-caps text-[10px] text-on-surface-variant">SUITE 1401</div>
<div class="w-1/3 h-full border-2 border-secondary-container bg-secondary-container/10 rounded-lg flex items-center justify-center font-label-caps text-[10px] text-secondary-container shadow-[0_0_20px_rgba(0,251,251,0.2)]">ROYAL PENTHOUSE</div>
<div class="w-1/4 h-3/4 border border-white/20 rounded-lg flex items-center justify-center font-label-caps text-[10px] text-on-surface-variant">SUITE 1403</div>
</div>
</div>
</div>
<div class="flex gap-4 mt-auto">
<span class="px-3 py-1 bg-secondary-container/10 text-secondary-container rounded-full text-[10px] font-label-caps">VIEW FULL DECK</span>
<span class="px-3 py-1 bg-white/5 text-on-surface-variant rounded-full text-[10px] font-label-caps">SHIP OVERVIEW</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Suite Selection Gallery -->
<section class="py-section-padding bg-background relative overflow-hidden">
<!-- Fluid Wave Divider Top -->
<div class="absolute top-0 w-full overflow-hidden leading-[0] transform rotate-180">
<svg class="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.54C58.83,12.8,124.63,22.3,185.22,34.42,243.34,46.01,281.33,63.88,321.39,56.44Z" fill="#0c0f0f"></path>
</svg>
</div>
<div class="max-w-container-max mx-auto px-gutter">
<div class="text-center mb-16">
<h2 class="font-headline-lg text-headline-lg text-secondary mb-4">Choose Your Sanctuary</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Each stateroom is a masterpiece of maritime design, balancing intimate comfort with the vastness of the open sea.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Signature Suite -->
<div class="group relative aspect-[3/4] rounded-3xl overflow-hidden glass-panel rim-light flex flex-col justify-end p-8">
<img alt="Signature Suite" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="An elegant signature suite on a luxury cruise ship featuring a plush king-sized bed with navy silk linens, contemporary artwork on the walls, and a private glass-walled balcony. The room is flooded with soft daylight, highlighting the high-end textures and sophisticated maritime color palette of whites, deep blues, and subtle silver accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-jG9Y6p34EwKnxKiIFfQtRiUBD9QTp2C3r_Pb2rmjx0NW8U1aBxUjNHKHAV6TqdEcO0GxoJEGxYpygN7KrmcvDscQiERpa7PL4Nywcrxj8EL4bVP2psZy15SoGY9gLcOBaJCxfujLrZG-72b-FwxU-Mj8NgeHopJhRR4L4nIMUQndvNrjmvWp-HP0Mk8hAJ8hgNID2XBgUsRaOcJDfJMbQL6-M8FUlEUlforKYhskA5AVOe-PzYWUBqRXZTWe9_DO9EX-wM9LHRG7"/>
<div class="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
<div class="relative z-10">
<span class="font-label-caps text-[10px] text-secondary-container mb-2 block">MOST POPULAR</span>
<h3 class="font-headline-md text-headline-md text-secondary mb-2">Signature Suite</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6">Master bedroom, living area, and private balcony.</p>
<div class="flex justify-between items-center">
<span class="font-label-caps text-label-caps text-secondary">FROM $4,200</span>
<span class="material-symbols-outlined text-secondary-container group-hover:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
</div>
<!-- Veranda Stateroom -->
<div class="group relative aspect-[3/4] rounded-3xl overflow-hidden glass-panel rim-light flex flex-col justify-end p-8">
<img alt="Veranda Stateroom" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A bright and airy veranda stateroom on a cruise ship with a focus on a large private balcony featuring two comfortable chairs. The interior is modern and compact yet luxurious, with light wood finishes and aqua-colored decorative pillows. The setting sun casts a warm, golden glow across the room, emphasizing a high-end, clean luxury hotel feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgHQaCTW25e-ILCr0sNl2nerMrO9ac1KkejY33vzt0qRC18_WymSqncbyxzD8NnFgz51GXWx4hormYYn120Ldz8jF7sX9YVTyCm6DyypI1ZdMRHkYT5fKrKEADHtE5xfCjFIm6yCbXxgqhNS-u1KQQd3lLh9PhE4AvDjWvzTc_WIs08xO-pf0H5ubW5TgYPHyXs7Arpvo3rjs8ImOzzkjEefXQoPFqGmZqhrUTGfh7PyVGbs0SDELOuWgKumzON6ir64iCMkMbOMiu"/>
<div class="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
<div class="relative z-10">
<span class="font-label-caps text-[10px] text-secondary-container mb-2 block">ESSENTIAL LUXURY</span>
<h3 class="font-headline-md text-headline-md text-secondary mb-2">Veranda Stateroom</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6">Elegant space with a private ocean-view veranda.</p>
<div class="flex justify-between items-center">
<span class="font-label-caps text-label-caps text-secondary">FROM $2,800</span>
<span class="material-symbols-outlined text-secondary-container group-hover:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
</div>
<!-- Deluxe Suite (Extra) -->
<div class="group relative aspect-[3/4] rounded-3xl overflow-hidden glass-panel rim-light flex flex-col justify-end p-8">
<img alt="Deluxe Suite" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A deluxe maritime suite with a sophisticated nautical theme, featuring dark navy walls, brushed gold fixtures, and high-quality velvet upholstery. The lighting is cinematic and layered, with warm spotlights on architectural details. The scene feels like a futuristic first-class cabin, combining traditional luxury with cutting-edge design elements." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCx4vTZpISmEHAtG_Y-NfV7m5jTdbh7fxqFeznBmQheerRTlgYoqpx-NoEFuZBPLVMv_WGTJUqsZTob09UmwYJT5yqcNyE2YUp7kcH8kqr1cIej9icX7zsUpW-BKH2LNqlQmyVTQMvEkXTNA0Q7k6-S2Soomr2c0HsKMM3gd5DmLKE2vGXao3n-UKHBaM3G9x15KdjdxGTveps9AjXCw-uK7Nhdc1oAHczzMJinIyhErmPZ-aIPbn9wA1P_n-OxUxG-f7cF1n5erEW"/>
<div class="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
<div class="relative z-10">
<span class="font-label-caps text-[10px] text-secondary-container mb-2 block">SPACIOUS COMFORT</span>
<h3 class="font-headline-md text-headline-md text-secondary mb-2">Deluxe Ocean Suite</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6">Double-width balcony and separate vanity area.</p>
<div class="flex justify-between items-center">
<span class="font-label-caps text-label-caps text-secondary">FROM $6,100</span>
<span class="material-symbols-outlined text-secondary-container group-hover:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="relative w-full pt-section-padding pb-gutter bg-surface-container-lowest">
<div class="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div class="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<div class="font-headline-lg text-headline-lg text-secondary mb-6">AQUAMARINE</div>
<p class="font-body-md text-body-md text-on-surface-variant max-w-xs">Pioneering the future of luxury maritime exploration. Beyond the horizon lies a new standard of serenity.</p>
</div>
<div class="grid grid-cols-2 gap-8">
<div>
<h4 class="font-label-caps text-label-caps text-secondary mb-6">EXPLORE</h4>
<ul class="space-y-4">
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary-container transition-colors" href="#">Destinations</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary-container transition-colors" href="#">Our Fleet</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary-container transition-colors" href="#">Experiences</a></li>
</ul>
</div>
<div>
<h4 class="font-label-caps text-label-caps text-secondary mb-6">COMPANY</h4>
<ul class="space-y-4">
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary-container transition-colors" href="#">Sustainability</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary-container transition-colors" href="#">Careers</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary-container transition-colors" href="#">Press Kit</a></li>
</ul>
</div>
</div>
<div class="flex flex-col justify-between">
<div>
<h4 class="font-label-caps text-label-caps text-secondary mb-6">NEWSLETTER</h4>
<div class="flex gap-2">
<input class="bg-white/5 border-0 border-b border-white/30 focus:ring-0 focus:border-secondary-container text-secondary font-body-md w-full" placeholder="Email address" type="email"/>
<button class="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-lg"><span class="material-symbols-outlined" data-icon="send">send</span></button>
</div>
</div>
<div class="pt-8">
<p class="font-label-caps text-[10px] text-on-surface-variant leading-relaxed">© 2024 AQUAMARINE MARITIME VENTURES. BEYOND THE HORIZON.</p>
</div>
</div>
</div>
</footer>
</body></html>