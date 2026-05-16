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
        <p>
          Online travel platform headquartered in Amsterdam. The GenAI Engineering team
          builds backend infrastructure for LLM-backed features in the consumer product.
        </p>
        <a className="visit" href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
          Visit site →
        </a>
      </div>
      <div className="popover" id="pop-ideko" role="dialog" aria-label="IDEKO">
        <span className="label">IDEKO</span>
        <p>
          Manufacturing research centre in Elgoibar, Spain. Specialises in industrial
          digitalisation and machine-tool research. Provided the CNC anomaly-detection
          use case for the MSc thesis.
        </p>
        <a className="visit" href="https://www.ideko.es/en" target="_blank" rel="noopener noreferrer">
          Visit site →
        </a>
      </div>
      <div className="popover" id="pop-vu" role="dialog" aria-label="UvA and VU Amsterdam">
        <span className="label">UvA &amp; VU Amsterdam</span>
        <p>
          Joint MSc Computer Science. UvA (University of Amsterdam) is consistently ranked
          among the top universities in continental Europe; VU Amsterdam contributes the
          distributed-systems and software-engineering coursework.
        </p>
        <a className="visit" href="https://www.uva.nl/en" target="_blank" rel="noopener noreferrer">
          Visit UvA →
        </a>
        <a className="visit" href="https://vu.nl/en" target="_blank" rel="noopener noreferrer">
          Visit VU →
        </a>
      </div>
      <div className="popover" id="pop-pnap" role="dialog" aria-label="PhoenixNAP">
        <span className="label">PhoenixNAP</span>
        <p>
          Global IaaS provider headquartered in Phoenix, Arizona, with engineering hubs
          in Malta. Operates a bare-metal cloud across 17 data-center locations, with a
          focus on dedicated infrastructure and security-first compute.
        </p>
        <a className="visit" href="https://phoenixnap.com" target="_blank" rel="noopener noreferrer">
          Visit site →
        </a>
      </div>
      <div className="popover" id="pop-ccbill" role="dialog" aria-label="CCBill">
        <span className="label">CCBill</span>
        <p>
          Online payment processor and PhoenixNAP sister brand. One of the longest-running
          card-not-present merchants on the web, processing recurring billing across
          subscription businesses since 1998.
        </p>
        <a className="visit" href="https://ccbill.com" target="_blank" rel="noopener noreferrer">
          Visit site →
        </a>
      </div>
      <div className="popover" id="pop-uom" role="dialog" aria-label="University of Malta">
        <span className="label">University of Malta</span>
        <p>
          Malta&apos;s leading research university, founded 1592, one of the oldest in
          continental Europe. The Department of Artificial Intelligence covers machine
          learning, computer vision, and knowledge representation.
        </p>
        <a className="visit" href="https://www.um.edu.mt" target="_blank" rel="noopener noreferrer">
          Visit site →
        </a>
      </div>
    </>
  );
}
