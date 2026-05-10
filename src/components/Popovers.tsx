'use client';

import { useEffect } from 'react';

export default function Popovers() {
  useEffect(() => {
    const closeAll = (except?: Element | null) => {
      document.querySelectorAll('.popover.open').forEach((p) => {
        if (p !== except) p.classList.remove('open');
      });
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const trigger = target?.closest('[data-pop]') as HTMLElement | null;
      const inside = target?.closest('.popover');
      if (trigger) {
        e.preventDefault();
        const id = 'pop-' + trigger.getAttribute('data-pop');
        const pop = document.getElementById(id);
        if (!pop) return;
        const willOpen = !pop.classList.contains('open');
        closeAll(pop);
        if (willOpen) {
          const r = trigger.getBoundingClientRect();
          const width = pop.offsetWidth || 280;
          let left = window.scrollX + r.left;
          const maxLeft = window.scrollX + window.innerWidth - width - 16;
          if (left > maxLeft) left = maxLeft;
          if (left < window.scrollX + 12) left = window.scrollX + 12;
          pop.style.top = window.scrollY + r.bottom + 10 + 'px';
          pop.style.left = left + 'px';
          pop.classList.add('open');
        }
      } else if (!inside) {
        closeAll();
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll();
    };
    const onResize = () => closeAll();

    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onResize, { passive: true });
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onResize);
    };
  }, []);

  return (
    <>
      <div className="popover" id="pop-booking" role="dialog" aria-label="Booking.com">
        <span className="label">Booking.com</span>
        Online travel platform headquartered in Amsterdam. The GenAI Engineering team builds backend
        infrastructure for LLM-backed features in the consumer product.
      </div>
      <div className="popover" id="pop-ideko" role="dialog" aria-label="IDEKO">
        <span className="label">IDEKO</span>
        Manufacturing research centre in Elgoibar, Spain. Specialises in industrial digitalisation
        and machine-tool research. Provided the CNC anomaly-detection use case for the MSc thesis.
      </div>
      <div className="popover" id="pop-vu" role="dialog" aria-label="VU Amsterdam">
        <span className="label">VU Amsterdam</span>
        Vrije Universiteit Amsterdam. The MSc Computer Science is a joint programme with the
        University of Amsterdam (UvA).
      </div>
    </>
  );
}
