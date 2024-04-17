<script> 
import { onMount } from 'svelte';

    onMount(() => {
        if (typeof window !== 'undefined' && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
        }
    });

    function addAnimation() {
        const scrollers = document.querySelectorAll('.scroller');
        
        scrollers.forEach((scroller) => {
        if (scroller instanceof HTMLElement) {
            scroller.dataset.animated = "true";

            const scrollerInner = scroller.querySelector(".scroller__inner");
            
            if (scrollerInner instanceof HTMLElement) {
            const scrollerContent = Array.from(scrollerInner.children);
            
            scrollerContent.forEach((item) => {
                if (item instanceof HTMLElement) {
                const duplicatedItem = item.cloneNode(true);
                if (duplicatedItem instanceof HTMLElement) {
                        duplicatedItem.setAttribute("aria-hidden", "true");
                        scrollerInner.appendChild(duplicatedItem);
                    }
                }
            });
        }
    }
    });
}
</script>

<div class="scroller" data-speed="fast">
    <ul class="tag-list scroller__inner">
        <li class="recd-divs"><img src="/image/ssb-min.png" alt="spirka-ssb"></li>
        <li class="recd-divs"><img src="/image/rockwoll_2-min.png" alt="rockwoll"></li>
        <li class="recd-divs"><img src="/image/rockfon-min.png" alt="rockfon"></li>
        <li class="recd-divs"><img src="/image/wardwell-3.png" alt="wardwell"></li>
        <li class="recd-divs"><img src="/image/vk-international-4-min.png" alt="vk-international"></li>
        <li class="recd-divs"><img src="/image/epuro_3-min.png" alt="epuro"></li>
        <li class="recd-divs"><img src="/image/thales_3-min.png" alt="thales"></li>
        <li class="recd-divs"><img src="/image/kimball_min.png" alt="kimball"></li>
    </ul>
</div>
